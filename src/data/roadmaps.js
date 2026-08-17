function stage(title, subtitle, nodes) {
  return { title, subtitle, nodes };
}

function node(title, topics) {
  return { title, topics };
}

export const courseRoadmaps = {
  "java-fullstack": {
    intro: "Follow this path to go from Java basics to a job-ready Spring Boot + React developer.",
    outcome: "Full Stack Java Developer",
    stages: [
      stage("Foundations", "Set up your developer base", [
        node("Computer & tools", ["Git & GitHub", "Command line", "IDE setup", "How the web works"]),
        node("Programming logic", ["Variables & types", "Loops & conditions", "Functions", "Problem solving"]),
      ]),
      stage("Core Java", "Master the language used in the backend", [
        node("Java syntax", ["Classes & objects", "Methods", "Packages", "Access modifiers"]),
        node("OOP", ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"]),
        node("Java essentials", ["Exceptions", "Collections", "Streams", "Multithreading intro"]),
      ]),
      stage("Backend", "Build APIs that power real products", [
        node("SQL & data", ["Relational design", "MySQL queries", "Joins & indexes", "JDBC"]),
        node("Spring Boot", ["REST controllers", "Services & DI", "Validation", "Error handling"]),
        node("Persistence", ["JPA / Hibernate", "Entity mapping", "Relationships", "Spring Data"]),
      ]),
      stage("Frontend", "Ship a modern UI for your APIs", [
        node("Web basics", ["HTML", "CSS", "JavaScript ES6+"]),
        node("React", ["Components", "Hooks", "Routing", "API integration"]),
      ]),
      stage("Career ready", "Prove the skill with a product", [
        node("Capstone", ["Full-stack project", "Auth & security basics", "Deployment", "Interview prep"]),
      ]),
    ],
  },

  "python-fullstack": {
    intro: "A step-by-step path from Python fundamentals to Django/Flask products with a frontend.",
    outcome: "Python Full Stack Developer",
    stages: [
      stage("Foundations", "Get comfortable writing Python", [
        node("Python core", ["Syntax & types", "Functions", "Modules", "Virtual environments"]),
        node("OOP & files", ["Classes", "Exceptions", "File handling", "Packages"]),
      ]),
      stage("Web backend", "Turn Python into web APIs", [
        node("Django", ["MTV architecture", "Models & ORM", "Views & templates", "Admin"]),
        node("APIs", ["Django REST Framework", "Serializers", "Auth", "Flask intro"]),
      ]),
      stage("Data layer", "Store and query application data", [
        node("Databases", ["PostgreSQL", "Migrations", "Relationships", "Query optimization basics"]),
      ]),
      stage("Frontend", "Connect a UI to your backend", [
        node("UI skills", ["HTML / CSS / JS", "React basics", "Fetch APIs", "Forms & validation"]),
      ]),
      stage("Career ready", "Ship and present your work", [
        node("Delivery", ["Deployment", "Capstone project", "Git workflow", "Interview questions"]),
      ]),
    ],
  },

  "mern-stack": {
    intro: "Learn MongoDB, Express, React and Node.js in the order used to build production MERN apps.",
    outcome: "MERN Stack Developer",
    stages: [
      stage("JavaScript base", "Everything in MERN starts here", [
        node("Modern JS", ["ES6+", "Async / await", "Modules", "JSON & Fetch"]),
      ]),
      stage("Frontend", "Build interactive React apps", [
        node("React", ["JSX & components", "Hooks", "Routing", "Forms"]),
        node("State", ["Context", "Redux intro", "API state", "UI patterns"]),
      ]),
      stage("Backend", "Create Node APIs", [
        node("Node & Express", ["Server setup", "REST routes", "Middleware", "Auth JWT"]),
        node("MongoDB", ["Documents", "Mongoose models", "CRUD", "Indexes"]),
      ]),
      stage("Full stack", "Connect the pieces", [
        node("Integration", ["React + Express", "Protected routes", "File uploads", "Error handling"]),
      ]),
      stage("Career ready", "Launch a complete product", [
        node("Capstone", ["MERN project", "Deployment", "Testing basics", "Interview prep"]),
      ]),
    ],
  },

  "react-js": {
    intro: "A focused React path from JSX to a portfolio-ready frontend application.",
    outcome: "React Developer",
    stages: [
      stage("Prerequisites", "What you need before React", [
        node("Web basics", ["HTML", "CSS", "JavaScript ES6+", "DOM & events"]),
      ]),
      stage("React core", "Think in components", [
        node("Fundamentals", ["JSX", "Props", "State", "Events"]),
        node("Hooks", ["useState", "useEffect", "useRef", "Custom hooks"]),
      ]),
      stage("App architecture", "Build real screens", [
        node("Routing & forms", ["React Router", "Controlled forms", "Validation", "Lists & keys"]),
        node("Data", ["Fetch / Axios", "Loading states", "Error UI", "Context"]),
      ]),
      stage("Career ready", "Show your skill", [
        node("Portfolio", ["State management intro", "Reusable UI", "Capstone app", "Interview questions"]),
      ]),
    ],
  },

  "core-java": {
    intro: "A structured Java language path before you move into Spring or full stack work.",
    outcome: "Java Programmer",
    stages: [
      stage("Start here", "Write your first programs", [
        node("Syntax", ["JVM vs JDK", "Variables", "Operators", "Control flow"]),
      ]),
      stage("Object oriented Java", "The core of professional Java", [
        node("OOP", ["Classes", "Constructors", "Inheritance", "Interfaces"]),
      ]),
      stage("Working with data", "Handle real program flow", [
        node("Essentials", ["Arrays", "Collections", "Exceptions", "I/O"]),
        node("Database intro", ["JDBC overview", "SQL basics", "CRUD from Java"]),
      ]),
      stage("Next step", "Where Core Java leads", [
        node("After this course", ["Spring Boot path", "DSA practice", "Mini projects"]),
      ]),
    ],
  },

  python: {
    intro: "Learn Python from first program to small automation projects used in IT roles.",
    outcome: "Python Developer (Beginner)",
    stages: [
      stage("Basics", "Speak the language", [
        node("Core Python", ["Data types", "Operators", "Loops", "Functions"]),
      ]),
      stage("Structure", "Write reusable code", [
        node("Modules & OOP", ["Packages", "Classes", "Exceptions", "File handling"]),
      ]),
      stage("Practice", "Apply it immediately", [
        node("Projects", ["Scripts", "CSV / files", "Mini automation", "Debugging"]),
      ]),
    ],
  },

  javascript: {
    intro: "A browser-first JavaScript path that prepares you for React and Node later.",
    outcome: "JavaScript Developer",
    stages: [
      stage("Language basics", "Make the browser do work", [
        node("JS fundamentals", ["Variables", "Functions", "Objects & arrays", "Scope"]),
      ]),
      stage("The web", "Talk to HTML and APIs", [
        node("DOM", ["Selectors", "Events", "Forms", "Dynamic UI"]),
        node("Modern JS", ["ES6+", "Promises", "async / await", "Fetch"]),
      ]),
      stage("Project", "One interactive app", [
        node("Build", ["UI project", "API data", "Error handling", "Code hygiene"]),
      ]),
    ],
  },

  cpp: {
    intro: "A practical C++ path covering syntax, memory, OOP and STL for problem solving.",
    outcome: "C++ Programmer",
    stages: [
      stage("Language core", "Write correct C++", [
        node("Syntax", ["Types", "Pointers intro", "Functions", "Memory basics"]),
      ]),
      stage("OOP & STL", "Use C++ the professional way", [
        node("OOP", ["Classes", "Constructors", "Inheritance", "Templates intro"]),
        node("STL", ["Vectors", "Maps", "Algorithms", "Problem solving"]),
      ]),
      stage("Practice", "Turn knowledge into speed", [
        node("Projects", ["Console apps", "DSA drills", "Debugging"]),
      ]),
    ],
  },

  "manual-testing": {
    intro: "Learn how quality teams think: test design, defects, Agile and documentation.",
    outcome: "Manual QA Tester",
    stages: [
      stage("QA mindset", "Understand what testing is for", [
        node("Fundamentals", ["STLC", "Test levels", "Types of testing", "Quality vs testing"]),
      ]),
      stage("Design tests", "Find bugs on purpose", [
        node("Techniques", ["Equivalence partitioning", "Boundary values", "Exploratory testing", "Use cases"]),
      ]),
      stage("Process", "Work like a QA team", [
        node("Defects & Agile", ["Bug life cycle", "Severity vs priority", "Scrum testing", "Test reports"]),
      ]),
      stage("Hands-on", "Leave with artefacts", [
        node("Documentation", ["Test cases", "Test scenarios", "Traceability", "Demo project"]),
      ]),
    ],
  },

  "selenium-automation": {
    intro: "Move from manual checks to automated browser tests with Selenium and a real framework.",
    outcome: "Automation Test Engineer",
    stages: [
      stage("Prerequisites", "What you need first", [
        node("Base skills", ["Java or language basics", "HTML locators", "Manual testing concepts"]),
      ]),
      stage("Selenium core", "Drive the browser", [
        node("WebDriver", ["Setup", "Locators", "Waits", "Actions & alerts"]),
      ]),
      stage("Framework", "Make tests maintainable", [
        node("TestNG & POM", ["Assertions", "Page Object Model", "Data driven tests", "Reports"]),
      ]),
      stage("Delivery", "Fit into a team pipeline", [
        node("CI intro", ["Git", "Running suites", "Jenkins overview", "Interview prep"]),
      ]),
    ],
  },

  "api-testing": {
    intro: "Learn to test backends the way product teams do — REST, Postman, then light automation.",
    outcome: "API Tester",
    stages: [
      stage("Web APIs", "Know what you are testing", [
        node("HTTP & REST", ["Methods", "Status codes", "Headers", "JSON"]),
      ]),
      stage("Postman", "Test by hand, then collections", [
        node("Collections", ["Requests", "Environments", "Assertions", "Pre-request scripts"]),
      ]),
      stage("Automation intro", "Repeat tests reliably", [
        node("Next layer", ["Newman / collection runs", "Auth flows", "Negative tests", "Reporting"]),
      ]),
    ],
  },

  "machine-learning": {
    intro: "A practical ML path: data first, then models, evaluation and a capstone.",
    outcome: "Machine Learning Associate",
    stages: [
      stage("Foundations", "Speak data fluently", [
        node("Python for ML", ["NumPy", "Pandas", "Visualization", "Jupyter workflow"]),
      ]),
      stage("Classic ML", "Train models that solve tabular problems", [
        node("Supervised learning", ["Regression", "Classification", "Train/test split", "Feature work"]),
        node("Evaluation", ["Accuracy & F1", "Overfitting", "Cross-validation", "Model selection"]),
      ]),
      stage("Project", "Show a complete workflow", [
        node("Capstone", ["Problem framing", "Clean data", "Train & compare", "Present results"]),
      ]),
    ],
  },

  "data-analytics": {
    intro: "From raw tables to dashboards — the analyst path used in business teams.",
    outcome: "Data Analyst",
    stages: [
      stage("Analytics base", "Ask better questions of data", [
        node("Fundamentals", ["Metrics", "KPI thinking", "Excel analysis", "Data cleaning"]),
      ]),
      stage("Query & code", "Get the data yourself", [
        node("SQL", ["SELECT", "Joins", "Aggregations", "Window functions intro"]),
        node("Python", ["Pandas EDA", "Charts", "Simple stats"]),
      ]),
      stage("Storytelling", "Make people act on the insight", [
        node("Dashboards", ["Power BI / reporting", "Visual best practices", "Stakeholder story", "Project"]),
      ]),
    ],
  },

  "artificial-intelligence": {
    intro: "An applied AI path covering foundations, neural nets, vision, NLP and a project.",
    outcome: "AI Associate",
    stages: [
      stage("AI foundations", "Know the landscape", [
        node("Concepts", ["AI vs ML vs DL", "Data & compute", "Ethics basics", "Python setup"]),
      ]),
      stage("Deep learning intro", "How models learn representations", [
        node("Neural nets", ["Perceptron idea", "Layers", "Training loop", "Frameworks intro"]),
      ]),
      stage("Applications", "See AI in products", [
        node("Vision & language", ["Computer vision intro", "NLP fundamentals", "Pretrained models"]),
      ]),
      stage("Build", "One applied project", [
        node("Capstone", ["Choose a use case", "Fine-tune or train", "Demo", "Limitations write-up"]),
      ]),
    ],
  },

  aws: {
    intro: "Learn AWS the way cloud teams start: concepts, core services, security, then architecture labs.",
    outcome: "AWS Cloud Practitioner / Junior Solutions",
    stages: [
      stage("Cloud basics", "Think in regions and services", [
        node("Concepts", ["IaaS / PaaS / SaaS", "Global infrastructure", "Pricing mental model", "Shared responsibility"]),
      ]),
      stage("Core AWS", "The services you will actually use", [
        node("Compute & storage", ["EC2", "S3", "EBS", "Lambda overview"]),
        node("Network & identity", ["VPC basics", "IAM users & roles", "Security groups"]),
      ]),
      stage("Architecture", "Put services together", [
        node("Labs", ["3-tier idea", "High availability intro", "Monitoring overview", "Cost awareness"]),
      ]),
    ],
  },

  azure: {
    intro: "A Microsoft Azure path from fundamentals to deployable cloud scenarios.",
    outcome: "Azure Cloud Associate",
    stages: [
      stage("Azure foundations", "Navigate the platform", [
        node("Core", ["Subscriptions", "Resource groups", "Regions", "Portal & CLI intro"]),
      ]),
      stage("Services", "Build on Azure building blocks", [
        node("Compute & data", ["VMs", "App Services", "Storage accounts", "Databases intro"]),
        node("Identity & network", ["Entra ID basics", "VNets", "NSGs"]),
      ]),
      stage("Deploy", "Practice real scenarios", [
        node("Labs", ["Web app deploy", "Monitoring", "Cost controls"]),
      ]),
    ],
  },

  "google-cloud": {
    intro: "A GCP path covering foundations, compute, storage, networking and data services.",
    outcome: "GCP Associate (Foundations)",
    stages: [
      stage("GCP foundations", "How Google Cloud is organised", [
        node("Core", ["Projects", "IAM", "Regions / zones", "Billing awareness"]),
      ]),
      stage("Building blocks", "Run workloads", [
        node("Compute & storage", ["Compute Engine", "Cloud Storage", "Cloud SQL intro"]),
        node("Network & data", ["VPC basics", "Load balancing intro", "BigQuery intro"]),
      ]),
      stage("Practice", "A small architecture", [
        node("Labs", ["Deploy a service", "Permissions", "Cost & monitoring"]),
      ]),
    ],
  },

  docker: {
    intro: "Learn containers from images to multi-service apps with Docker Compose.",
    outcome: "Docker Practitioner",
    stages: [
      stage("Why containers", "VMs vs containers", [
        node("Concepts", ["Images", "Containers", "Registries", "Isolation"]),
      ]),
      stage("Build & run", "Daily Docker skills", [
        node("Dockerfiles", ["FROM & layers", "COPY", "Ports", "Volumes"]),
        node("Networking", ["Bridge networks", "Env vars", "Logs & debug"]),
      ]),
      stage("Multi-service", "Run a stack", [
        node("Compose", ["Services", "Depends on", "Named volumes", "Sample app"]),
      ]),
    ],
  },

  kubernetes: {
    intro: "After Docker, learn how Kubernetes runs, scales and updates containers in a cluster.",
    outcome: "Kubernetes Associate",
    stages: [
      stage("Cluster mental model", "Know the moving parts", [
        node("Architecture", ["Control plane", "Nodes", "etcd idea", "kubectl"]),
      ]),
      stage("Workloads", "Run applications", [
        node("Core objects", ["Pods", "Deployments", "Services", "Labels"]),
        node("Config", ["ConfigMaps", "Secrets", "Probes", "Resource requests"]),
      ]),
      stage("Operate", "Change without downtime", [
        node("Day-2", ["Rolling updates", "Scaling", "Troubleshooting", "Mini project"]),
      ]),
    ],
  },

  sql: {
    intro: "A SQL path from SELECT to joins, aggregations and index-aware queries.",
    outcome: "SQL Developer / Analyst",
    stages: [
      stage("Relational thinking", "Tables, keys, integrity", [
        node("Model", ["Tables", "Primary / foreign keys", "Normalization intro"]),
      ]),
      stage("Query skill", "Answer questions with SQL", [
        node("SELECT mastery", ["Filters", "Joins", "GROUP BY", "Subqueries"]),
      ]),
      stage("Performance basics", "Write queries that scale", [
        node("Tuning intro", ["Indexes", "EXPLAIN idea", "Common pitfalls"]),
      ]),
    ],
  },

  nosql: {
    intro: "Learn when to use MongoDB, then model documents and query with aggregations.",
    outcome: "MongoDB Developer",
    stages: [
      stage("Choose the store", "SQL vs NoSQL", [
        node("Concepts", ["Documents", "Collections", "Use cases", "Trade-offs"]),
      ]),
      stage("MongoDB core", "CRUD and design", [
        node("Data work", ["Insert / find / update", "Indexes", "Schema patterns", "Relationships"]),
      ]),
      stage("Aggregation", "Analyse inside MongoDB", [
        node("Pipeline", ["$match", "$group", "$lookup", "Project stage"]),
      ]),
    ],
  },

  cybersecurity: {
    intro: "A defensive-first cybersecurity path: principles, threats, networks, OWASP and labs.",
    outcome: "Junior Security Analyst",
    stages: [
      stage("Security mindset", "Protect first", [
        node("Principles", ["CIA triad", "Risk", "Threat vs vulnerability", "Ethics"]),
      ]),
      stage("Landscape", "Know the attack surface", [
        node("Domains", ["Network basics", "Web security", "Identity", "Linux intro"]),
      ]),
      stage("Web & apps", "The OWASP view", [
        node("OWASP Top 10", ["Injection", "Broken access", "Misconfig", "Logging"]),
      ]),
      stage("Labs", "Practice safely", [
        node("Simulations", ["Guided labs", "Incident basics", "Reporting findings"]),
      ]),
    ],
  },

  iot: {
    intro: "Connect hardware, protocols and cloud dashboards into a working IoT project.",
    outcome: "IoT Developer (Foundations)",
    stages: [
      stage("Architecture", "Sense, connect, act", [
        node("Layers", ["Devices", "Gateway", "Cloud", "Dashboards"]),
      ]),
      stage("Hardware", "Read the physical world", [
        node("Build", ["Microcontrollers", "Sensors", "Actuators", "Arduino basics"]),
      ]),
      stage("Connect", "Move data off the device", [
        node("Protocols", ["MQTT", "Wi-Fi / serial", "Cloud ingest", "Alerts"]),
      ]),
      stage("Project", "One connected product", [
        node("Capstone", ["Sensor + MQTT + dashboard", "Demo", "Limitations"]),
      ]),
    ],
  },

  "soft-skills": {
    intro: "A career-readiness path: communicate clearly, look hireable, then interview with confidence.",
    outcome: "Placement-ready professional",
    stages: [
      stage("Communicate", "Be understood at work", [
        node("Workplace English", ["Meetings", "Emails", "Status updates", "Listening"]),
      ]),
      stage("Personal brand", "Look ready on paper", [
        node("Profile", ["Resume", "LinkedIn", "Project stories", "GitHub hygiene"]),
      ]),
      stage("Interviews", "Perform under questions", [
        node("Practice", ["HR round", "Technical story", "Mock interviews", "Follow-ups"]),
      ]),
    ],
  },

  "aws-certification-prep": {
    intro: "A focused exam path: blueprint, domain study, practice tests, then a revision sprint.",
    outcome: "AWS certification exam ready",
    stages: [
      stage("Blueprint", "Study what the exam actually tests", [
        node("Plan", ["Domains", "Weightage", "Question style", "Study calendar"]),
      ]),
      stage("Domain deep-dives", "Cover each exam area", [
        node("Cloud concepts", ["Value of cloud", "Models", "Economics"]),
        node("Security & tech", ["IAM ideas", "Core services", "Architecture principles"]),
      ]),
      stage("Practice", "Turn knowledge into exam speed", [
        node("Quizzes", ["Practice sets", "Weak-area review", "Timed mocks", "Final revision"]),
      ]),
    ],
  },
};

export function getCourseRoadmap(slug) {
  return courseRoadmaps[slug] || null;
}
