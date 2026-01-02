# Maven Web Application (HTML / CSS / JavaScript)

This project is a **Maven-based Java Web Application** that wraps a frontend project built using **HTML, CSS, and JavaScript**.  
Apache Maven is used for **build automation, dependency management, and deployment**, while the frontend files are served via a **Java web container (Apache Tomcat)**.

---

## 📌 Project Overview

- **Frontend:** HTML, CSS, JavaScript  
- **Build Tool:** Apache Maven  
- **Backend Type:** Java Web App (Servlet-based)  
- **Packaging:** WAR  
- **Server:** Apache Tomcat  

This structure allows you to deploy your frontend project as a **standard Java web application**.

---

## 📂 Project Structure



📌 Project Overview
Frontend: HTML, CSS, JavaScript
Build Tool: Apache Maven
Backend Type: Java Web App (Servlet-based)
Packaging: WAR
Server: Apache Tomcat
This structure allows you to deploy your frontend project as a standard Java web application.

📂 Project Structure
myproject/
│── pom.xml
│── src/
│   └── main/
│       ├── java/               # Java source files (optional)
│       ├── resources/          # Application resources
│       └── webapp/             # Frontend files
│           ├── index.html
│           ├── css/
│           │   └── style.css
│           ├── js/
│           │   └── script.js
│           └── WEB-INF/
│               └── web.xml
└── target/
    └── myproject.war
⚙️ Requirements
Make sure the following are installed:

Java JDK 17+
Apache Maven 3.9+
Apache Tomcat 9 or 10
Verify installations:

java -version
mvn -version
🚀 How to Run the Project
1️⃣ Build the Project
mvn clean package
This will generate a WAR file inside the target/ directory.

2️⃣ Run Using Tomcat (Maven Plugin)
mvn tomcat9:run
Open browser:

http://localhost:8080/myproject/
3️⃣ Run Using External Tomcat
Copy target/myproject.war

Paste it into:

TOMCAT_HOME/webapps/
Start Tomcat

Open browser:

http://localhost:8080/myproject/
📦 Maven Dependencies Used
Jakarta Servlet API – For Java web support
Tomcat Maven Plugin – For running Tomcat via Maven
All dependencies are managed inside pom.xml.

✅ Why Maven is Used
Dependency management
Standard project structure
Easy build & deployment
WAR file generation
Industry-standard Java workflow
❗ Important Notes
Maven does not replace HTML/CSS/JS
Frontend files are served from src/main/webapp
Java backend is optional but recommended for future features
🔮 Future Enhancements
Add Java Servlets / Spring Boot backend
Integrate Database (MySQL / MongoDB)
Add Authentication & APIs
Convert to Spring Boot JAR-based deployment
👤 Author
Md Sahil College Student | Full Stack Developer

📜 License
This project is for learning and educational purposes.
