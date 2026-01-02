// Health Keywords for filtering
const HEALTH_KEYWORDS = [
    'health', 'diet', 'food', 'nutrition', 'exercise', 'workout', 'pain',
    'symptom', 'doctor', 'medicine', 'weight', 'loss', 'muscle', 'fitness',
    'sleep', 'stress', 'mental', 'heart', 'pressure', 'sugar', 'protein',
    'vitamin', 'hydrate', 'water', 'calorie', 'fat', 'carb', 'gym', 'run',
    'walk', 'yoga', 'wellness', 'body', 'bmi', 'sick', 'ill', 'fever',
    'headache', 'stomach', 'ache', 'injury', 'help', 'advice'
];

// Predefined responses for simulation
const RESPONSES = {
    greeting: "Hello! I am your AI Health Assistant. Ask me anything about diet, fitness, or wellness.",
    default: "That's a great health question! As an AI assistant, I recommend consulting with a professional for specific advice, but generally speaking, maintaining a balanced diet and regular exercise is key.",
    irrelevant: "I apologize, but I can only answer questions related to health, fitness, and nutrition. Please ask something about your wellness journey!",
    diet: "For a healthy diet, focus on whole foods: vegetables, fruits, lean proteins, and whole grains. Drink plenty of water and limit processed sugars.",
    exercise: "Consistency is key! Aim for at least 30 minutes of moderate activity most days of the week. Mix cardio with strength training for best results.",
    weight: "Healthy weight loss is about 0.5-1 kg per week. Focus on a calorie deficit combined with nutritious foods and staying active."
};

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.classList.contains('hidden')) {
        chatWindow.classList.remove('hidden');
        chatWindow.classList.add('flex');
        // Focus input
        setTimeout(() => document.getElementById('chat-input').focus(), 100);
    } else {
        chatWindow.classList.add('hidden');
        chatWindow.classList.remove('flex');
    }
}

function isHealthRelated(text) {
    const lowerText = text.toLowerCase();
    return HEALTH_KEYWORDS.some(keyword => lowerText.includes(keyword));
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();

    if (!isHealthRelated(lowerMsg) && lowerMsg.length > 3 && !['hi', 'hello', 'hey'].some(g => lowerMsg.includes(g))) {
        return RESPONSES.irrelevant;
    }

    if (['hi', 'hello', 'hey'].some(g => lowerMsg.includes(g))) {
        return RESPONSES.greeting;
    }

    if (lowerMsg.includes('diet') || lowerMsg.includes('food') || lowerMsg.includes('eat')) {
        return RESPONSES.diet;
    }

    if (lowerMsg.includes('exercise') || lowerMsg.includes('workout') || lowerMsg.includes('gym')) {
        return RESPONSES.exercise;
    }

    if (lowerMsg.includes('weight') || lowerMsg.includes('fat') || lowerMsg.includes('lose')) {
        return RESPONSES.weight;
    }

    return RESPONSES.default;
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `max-w-[80%] p-3 rounded-lg mb-2 text-sm ${sender === 'user'
            ? 'bg-blue-600 text-white self-end ml-auto'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start'
        }`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message) {
        addMessage(message, 'user');
        input.value = '';

        // Simulate thinking delay
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.className = 'text-xs text-gray-500 ml-2 mb-2';
        typingIndicator.textContent = 'AI is typing...';
        document.getElementById('chat-messages').appendChild(typingIndicator);

        setTimeout(() => {
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();

            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
}

// Event Listeners
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
