# 🥗 Health & Diet Planner Web Application

## 📌 Project Overview

A robust *Java-based web application* designed to help users, particularly students, manage their physical health and nutritional well-being. This project demonstrates industry-level development practices by utilizing a *Maven-based architecture* and *Apache Tomcat* for professional deployment. It captures individual user metrics to generate tailored dietary and lifestyle recommendations.

### 🎯 Key Highlights

* *Personalized Planning* - Tailored diet and health plans based on age, weight, and lifestyle.
* *Industry-Standard Build* - Built with Apache Maven for superior scalability and maintainability.
* *Layered Architecture* - Separation of concerns between Frontend, Backend, and Build layers.
* *Professional Deployment* - Ready for production environments using WAR file archives and Tomcat server.

---

## 📁 Project Structure

health-diet-planner/
│
├── src/
│   ├── main/
│   │   ├── java/              # Java Servlets & Business Logic
│   │   ├── resources/         # Configuration files
│   │   └── webapp/            # Frontend Assets
│   │       ├── css/           # Stylesheets
│   │       ├── js/            # Client-side validation & logic
│   │       ├── images/        # UI Assets
│   │       └── index.html     # Main Landing Page
│
├── target/                    # Generated WAR files (post-build)
├── pom.xml                    # Project Object Model (Maven Config)
└── README.md                  # Project documentation

---

## 🛠️ Technology Stack

### Core Technologies
* *Frontend* - HTML5, CSS3, JavaScript
* *Backend* - Java (Servlet-ready architecture)
* *Build Tool* - Apache Maven
* *Web Server* - Apache Tomcat

### DevOps & Workflow
* *Project Management* - Maven (Dependency Handling & Build Automation)
* *Version Control* - Git & GitHub
* *Package Format* - WAR (Web Application Archive)

---
## 🎯 Project Screenshot
<img width="1643" height="819" alt="Screenshot 2026-01-03 133054" src="https://github.com/user-attachments/assets/86e52fff-8dd5-4572-b8df-7b487616fd44" />
<img width="1280" height="672" alt="Screenshot 2026-01-03 133101" src="https://github.com/user-attachments/assets/e5aa3742-e72e-4d87-875d-22279da58c47" />
<img width="1321" height="791" alt="Screenshot 2026-01-03 133109" src="https://github.com/user-attachments/assets/eb0debf8-f6a7-4dc4-8ec0-6209adf80c5d" />
<img width="1277" height="668" alt="Screenshot 2026-01-03 133117" src="https://github.com/user-attachments/assets/5a1e5610-b689-4218-9560-3033b99530ea" />
<img width="1292" height="687" alt="Screenshot 2026-01-03 133127" src="https://github.com/user-attachments/assets/36f9ebfc-1ed2-439e-9ef5-9587804621ae" />
<img width="1199" height="666" alt="Screenshot 2026-01-03 133135" src="https://github.com/user-attachments/assets/b0c09025-910d-402b-881a-9984b77a14a7" />
<img width="1226" height="489" alt="Screenshot 2026-01-03 133144" src="https://github.com/user-attachments/assets/2e51f53b-2860-4f37-8144-7ea76d95f622" />
<img width="1071" height="327" alt="Screenshot 2026-01-03 133150" src="https://github.com/user-attachments/assets/9dcf7456-a42b-47cc-bb03-67478ad92e06" />









## 🎯 Project Objectives

* *Promote Healthy Lifestyle* - Guide users toward consistent healthy habits.
* *Custom Diet Plans* - Generate data-driven nutrition plans based on user goals.
* *Improve Fitness* - Provide actionable suggestions to enhance physical performance.
* *Professional Standards* - Implement professional deployment workflows using industry-standard tools.

---

## 🚀 Features

### 🔐 User Input Collection
* Captures Age, Weight, and Height.
* Analyzes Lifestyle habits and Dietary preferences.
* Sets specific personal health goals.

### 📝 Intelligent Processing
* JavaScript-based input validation.
* Calculation of key health metrics and parameters.
* Dynamic generation of personalized health plans.

### 📊 Professional Build System
* Automated dependency management via pom.xml.
* Streamlined compilation and packaging process.
* Easy deployment to any Servlet-compliant web server.

---

## ⚙️ Build and Run Process

01. Execute Maven Build
Run the command 'mvn clean package' in the project root to compile and package the application.

02. WAR File Generation
Maven will generate a .war (Web Application Archive) file in the /target directory.

03. Deploy to Tomcat
Move the generated WAR file to the Tomcat 'webapps' folder.

04. Launch Application
Start the Tomcat server. The application will be accessible via:
http://localhost:8080/health-diet-planner

---

## 🌿 Branching Strategy

The project follows a Feature-Branch Workflow to ensure code stability:

| Branch | Purpose |
| :--- | :--- |
| main | Production-ready, stable code |
| feature/ui-design | UI/UX enhancements and CSS updates |
| feature/maven-setup | Maven configuration and pom.xml updates |
| bugfix/validation | Fixing input logic and JavaScript errors |

---

## 🚧 Challenges & Solutions

* *Dependency Conflicts* - Used Apache Maven to automatically manage and resolve library versions.
* *User Inconsistency* - Implemented JavaScript validation to ensure data accuracy before processing.
* *Academic Stress* - Focused on Simple/Actionable suggestions tailored for busy student schedules.

---

## ✅ Learning Outcomes

* ✅ *Maven Proficiency* - Mastered project structure management and build automation.
* ✅ *Full-Stack Integration* - Connected frontend logic with backend deployment workflows.
* ✅ *System Architecture* - Learned to design layered applications for better maintainability.
* ✅ *Real-world Problem Solving* - Addressed specific health challenges through tech.

---

## 🔮 Future Scope

* Integration with wearable fitness devices.
* Database implementation for user data persistence.
* Advanced AI-based personalization algorithms.
* Development of dedicated Mobile Applications (iOS/Android).

---

## 👨‍💻 Author

*Satyamraj112211*
