document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed nav
                behavior: "smooth"
            });
        }
    });
});

const taglines = [
    "AI That Understands.",
    "Software That Performs.",
    "Solutions That Matter."
];

const heroContent = document.querySelector(".hero-content");

taglines.forEach((text, index) => {
    const taglineElement = document.createElement("h2");
    taglineElement.classList.add("hero-tagline");
    taglineElement.textContent = text;
    taglineElement.style.animationDelay = `${index * 0.5}s`; // Delays each animation slightly
    heroContent.appendChild(taglineElement);
});

const courses = {
    "computer-science": [
        "Intro to Engineering & Computing", "Programming I", "Programming II",  "Data Structures and Algorithms", "GUI Design and Programming", "Database Systems",
        "Design-Analysis of Algorithms","Mobile Application Development", "Operating Systems", "Programming Languages", "Ethics and Information Technology",
        "Digital Systems", "Intro to Computer Systems", "Computer Networks I", "Software Engineering",
        "Professional Training in CMP (Internship)", "Project in Computer Science I", "Project in Computer Science II"
    ],
    "ai": [
        "Artificial Intelligence", "Machine Learning & Data Mining", "Neural Networks & Deep Learning", "Computer Vision"
    ],
    "math": [
        "Calculus I", "Calculus II", "Discrete Mathematics", "Linear Algebra",
        "Differential Equations", "Numerical Analysis I", "Methods of Applied Math",
        "Foundations of Statistics for Data Science"
    ],
    "others": [
        "Principles of Microeconomics", "Religion and Society", "Innovation & Entrepreneurship Mindset",
        "Introduction to Media Literacy", "Class Piano I", "Intro to Arabic Heritage I", "Advanced Academic Writing",
        "Academic Writing I", "Academic Writing II", "Professional Communication for Engineers",
        "General Physics I", "General Chemistry I", "General Chemistry II"
    ]
};

// Updated Skill Data with Image URLs for other categories
const skills = {
    languages: [
        { name: "Java", img: "https://cdn-icons-png.flaticon.com/128/226/226777.png" },
        { name: "Python", img: "https://cdn-icons-png.flaticon.com/128/1822/1822899.png" },
        { name: "C/C++", img: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
        { name: "SQL", img: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png" },
        { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/128/919/919828.png" },
        { name: "HTML", img: "https://cdn-icons-png.flaticon.com/128/174/174854.png" },
        { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png" },
        { name: "R", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png" },
        { name: "MATLAB", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/670px-Matlab_Logo.png" },
        { name: "Kotlin", img: "https://cdn.freebiesupply.com/logos/thumbs/2x/kotlin-1-logo.png" }
    ],
    frameworks: [
        { name: "React", img: "https://cdn-icons-png.flaticon.com/128/919/919851.png" },
        { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" },
        { name: "Express.js", img: "https://www.manektech.com//storage/technology/image/1646733600.webp" },
        { name: "Flask", img: "https://play-lh.googleusercontent.com/ekpyJiZppMBBxCR5hva9Zz1pr3MYlFP-vWTYR3eIU7HOMAmg3jCJengHJ1GFgFMyyYc" },
        { name: "Django", img: "https://www.svgrepo.com/show/353657/django-icon.svg" }
    ],
    devtools: [
        { name: "Git", img: "https://cdn-icons-png.flaticon.com/128/733/733553.png" },
        { name: "VS Code", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "Visual Studio", img: "https://cdn-icons-png.flaticon.com/128/906/906324.png" },
        { name: "Android Studio", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png" },
        { name: "Eclipse", img: "https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png" },
        { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/128/919/919836.png" },
        { name: "Firebase", img: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png" }
    ],
    libraries: [
        "tensorflow",
        "torch",
        "transformers",
        "scikit-learn",
        "xgboost",
        "opencv-python",
        "pandas",
        "numpy",
        "scipy",
        "matplotlib",
        "seaborn",
        "Flask",
        "fastapi",
        "selenium",
        "requests",
        "openai",
        "google-generativeai",
        "python-can"
    ]
};

function loadSkills(category) {
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = ""; // Clear previous skills

    if (category === "libraries") {
        skillsContainer.classList.add("libraries-container"); // Add a class for smaller height
        skills[category].forEach(library => {
            const skillCard = document.createElement("div");
            skillCard.classList.add("skill-card");
            skillCard.innerHTML = `<p>${library}</p>`;
            skillsContainer.appendChild(skillCard);
        });
    } else {
        skillsContainer.classList.remove("libraries-container"); // Remove class when switching back
        skills[category].forEach(skill => {
            const skillCard = document.createElement("div");
            skillCard.classList.add("skill-card");
            skillCard.innerHTML = `
                <img src="${skill.img}" alt="${skill.name}">
                <p>${skill.name}</p>
            `;
            skillsContainer.appendChild(skillCard);
        });
    }
}

// Function to Handle Section Menu Click
document.querySelectorAll(".section-btn").forEach(button => {
    button.addEventListener("click", function () {
        // Remove 'active' class from all buttons
        document.querySelectorAll(".section-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        // Load the selected category
        loadSkills(this.getAttribute("data-category"));
    });
});

// Load Default Category on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadSkills("languages"); // Default category
});


// Function to Load Courses
function loadCourses(category) {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = ""; // Clear previous courses

    courses[category].forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `<p>${course}</p>`;
        coursesContainer.appendChild(courseCard);
    });
}

// Function to Handle Course Section Menu Click
document.querySelectorAll(".course-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".course-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadCourses(this.getAttribute("data-category"));
    });
});

// Load Default Category on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadCourses("computer-science"); // Default category
});

const experiences = {
    "internships": [
        {
            title: "Data Analytics, Automation & AI Intern",
            company: "Transmed Overseas Inc, Dubai",
            date: "June 2024 – Aug. 2024",
            details: [
                "Developed ML models to significantly improve sales forecasting accuracy beyond current manual forecasts.",
                "Automated data entry and validation processes using VBA and macros, enhancing operational efficiency.",
                "Created an AI-powered web app to streamline IT service queries, integrating OpenAI models and a Flask API with Manage Engine IT Ticketing System."
            ],
            img: "https://static.wixstatic.com/media/b82a58_62883bcc5ea14dd6a9f7f696884c4f53~mv2.png/v1/fill/w_568,h_190,al_c,lg_1,q_85,enc_auto/b82a58_62883bcc5ea14dd6a9f7f696884c4f53~mv2.png" // ADD THIS
        },
        {
            title: "AI Intern",
            company: "Smallcap.AI",
            date: "May 2024 – June 2024",
            details: [
                "Developed generative AI NFTs on Ethereum, integrating account abstraction wallets and IPFS.",
                "Leveraged OpenAI API services for advanced AI applications."
            ],
            img: "https://www.smallcap.ai/smallcaplogo.png" // ADD THIS
        },
        {
            title: "SEO & AI Blogging Intern",
            company: "Inspirit.AI",
            date: "Nov. 2023 – Jan. 2024",
            details: [
                "Learned Search Engine Optimization under Stanford graduates, enhancing content marketing skills.",
                "Authored weekly blog posts on AI to analyze SEO impact.",
                "Engaged with leaders to refine SEO strategies, preparing for future career opportunities."
            ],
            img: "https://hacktj.org/2021/static/media/inspiritai.ca0c8cca.png" // ADD THIS
        }
    ],
    "aus": [
        {
            title: "Founder - The Artificial Intelligence Club",
            company: "American University of Sharjah",
            date: "Oct. 2023 – Jan. 2025",
            details: [
                "Hosted numerous workshops explaining AI concepts and providing hands-on experience for AUS students.",
                "Developed a fully functional AI-powered game about AI Concepts for Club Fair 2024."
            ],
            img: "https://se-images.campuslabs.com/clink/images/811c4f83-90da-4707-b86e-b0180a5377ae92702064-5fc3-4030-9366-529a638bb0ad.png?preset=med-sq" // ADD THIS
        },
        {
            title: "IT Student Worker – College of Engineering",
            company: "American University of Sharjah",
            date: "Sep. 2023 – May 2024",
            details: [
                "Managed and maintained the university’s IT infrastructure, ensuring efficient operation of computers, servers, and network equipment.",
                "Collaborated with IT professionals to deploy solutions, significantly improving the digital environment at AUS.",
                "Resolved technical issues for faculty, staff, and students, improving campus-wide technology access."
            ],
            img: "https://auscse.com/main/images/banner_og.png" // ADD THIS
        },
        {
            title: "Technical Core Team Member - Google Developers Group",
            company: "American University of Sharjah",
            date: "Oct. 2024 – Present",
            details: [
                "Collaborating with AUS students to organize Google-backed AI workshops and hackathons.",
                "Hosted events to provide AUS students with hands-on experience in Google technologies."
            ],
            img: "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_2YZFc5k.png" // ADD THIS
        }
    ]
};

// Function to Load Experience
function loadExperience(category) {
    const experienceContainer = document.getElementById("experience-container");
    experienceContainer.innerHTML = ""; // Clear previous content

    experiences[category].forEach(exp => {
        const expCard = document.createElement("div");
        expCard.classList.add("experience-card");
    
        let detailsList = exp.details.join("<br><br>"); // Adds line breaks between each detail
    
        expCard.innerHTML = `
        <img src="${exp.img}" alt="${exp.company}" class="experience-img">
        <h3>${exp.title}</h3>
        <h4>${exp.company} | ${exp.date}</h4>
        <p>${detailsList}</p>
    `;
    
        experienceContainer.appendChild(expCard);
    });
    
}

// Handle Click Events on Experience Section
document.querySelectorAll(".experience-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".experience-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadExperience(this.getAttribute("data-category"));
    });
});

// Load Default Category on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadExperience("internships"); // Default category
});

const certifications = [
    { name: "Deep Learning Specialization", provider: "DeepLearning.AI", img: "https://aihubtest-bucket.s3.eu-north-1.amazonaws.com/public/storage/images/6066/https---cdn.evbuc.com-images-125559383-317212851579-1-original.20210208-232017.png" },
    { name: "Machine Learning Specialization", provider: "Stanford / DeepLearning.AI", img: "https://logos-world.net/wp-content/uploads/2021/10/Stanford-Symbol.png" },
    { name: "Microsoft Azure AI Engineer Associate", provider: "Microsoft", img: "https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png" },
    { name: "Microsoft Azure AI Fundamentals", provider: "Microsoft", img: "https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png" },
    { name: "Google Data Analytics Professional Certificate", provider: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" },
    { name: "Exploratory Data Analysis for Machine Learning", provider: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Inspirit AI Ambassadors Program", provider: "Inspirit AI", img: "https://hacktj.org/2021/static/media/inspiritai.ca0c8cca.png" },
    { name: "Inspirit AI Scholars Program", provider: "Inspirit AI", img: "https://hacktj.org/2021/static/media/inspiritai.ca0c8cca.png" }
];

// Function to Load Certifications
function loadCertifications() {
    const certContainer = document.getElementById("certifications-container");
    certContainer.innerHTML = ""; // Clear previous data

    certifications.forEach(cert => {
        const certCard = document.createElement("div");
        certCard.classList.add("cert-card");

        certCard.innerHTML = `
            <img src="${cert.img}" alt="${cert.provider}">
            <p>${cert.name}</p>
            <p style="font-size: 14px; font-weight: normal;">${cert.provider}</p>
        `;

        certContainer.appendChild(certCard);
    });
}

// Load Certifications on Page Load
document.addEventListener("DOMContentLoaded", loadCertifications);

const projects = {
    "ai-projects": [
        {
            name: "OriginAI: Binary Multilingual MGT Detector",
            description: "Fine-tuning XLM-RoBERTa with the LoRA adapter to classify AI-generated text in Bulgarian, Indonesian, and Russian."
        },
        {
            name: "Security Scripts as Stories",
            description: "Leveraged LLMs (GPT, Gemini, Llama) to generate CAN bus attacks on a Raspberry Pi acting as an ECU, with real-time dashboard visualization."
        },
        {
            name: "Deepfake Detection",
            description: "Developed a Binary Neural Network to classify AI-generated images for a Computer Vision project. F1-Score: 0.91."
        },
        {
            name: "Garbage Classification",
            description: "Classified household waste using an ML ensemble model and Deep Learning, extracting features using VGG16. F1-Score: 0.93."
        }
    ],
    "ai-models": [
        {
            name: "Medical Imaging AI Model",
            description: "Interprets medical images like X-rays using deep learning, enhancing diagnostic precision for tumors and fractures."
        },
        {
            name: "Emotion Detection AI Model",
            description: "Analyzes facial expressions, eye movements, and gestures to gauge emotions for customer sentiment analysis."
        },
        {
            name: "Fake News Detection AI Model",
            description: "Uses NLP to assess linguistic patterns and sources to detect misinformation and improve media literacy."
        },
        {
            name: "Driver Distraction AI Model",
            description: "Utilizes Facial Recognition to determine whether a driver is paying attention to the road."
        }
    ],
    "web-dev": [
        {
            name: "DARK Games Store",
            description: "Developed a full-stack online game store using MySQL, Node.js, HTML, CSS, and JavaScript."
        },
        {
            name: "24/7 Laundromat",
            description: "Built a React-based web app for an online laundry service with complete database functionality."
        },
        {
            name: "CalendaFlow",
            description: "Developed a simple Calendar web application using GitHub Pages for version control."
        }
    ],
    "app-dev": [
        {
            name: "SpareHour",
            description: "Developed a fully functional Java Mobile Application on Android Studio with a Firebase database, providing a list of common meeting times for teams."
        },
        {
            name: "Game of Life",
            description: "Designed a fully functional Game of Life simulation using Java and the Swing library. Implemented menus, resizable grids, and user-friendly buttons and sliders to simulate future generations."
        },
        {
            name: "Hangman Game",
            description: "Developed a user-friendly Hangman game using Python with complete MySQL integration. Features include a leaderboard, scoring, and user interaction."
        }
    ]

};

// Function to Load Projects Based on Category
function loadProjects(category) {
    const projectContainer = document.getElementById("projects-container");
    projectContainer.innerHTML = ""; // Clear previous projects

    projects[category].forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;

        projectContainer.appendChild(projectCard);
    });
}

// Handle Click Events for Project Menu
document.querySelectorAll(".project-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".project-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadProjects(this.getAttribute("data-category"));
    });
});

// Load Default Category on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadProjects("ai-projects"); // Default category
});

const awards = [
    {
        title: "3rd Place Winner - Best Solution Champion",
        event: "RTA X Alibaba Cloud Generative AI Hackathon",
        date: "Oct. 2024",
        details: "Created an interface that leveraged AI algorithms like XGBoost & DBScan to predict new Taxi Rank Locations within Dubai and developed an hour-based prediction system to estimate the number of taxis to be sent to each existing taxi rank and assess demand based on the region of Dubai at the chosen time."
    },
    {
        title: "Active Students’ Scholarship",
        event: "AUS (Office of Student Affairs)",
        date: "Jan. 2024 – May 2024",
        details: "Recognition for extensive participation in extra-curriculars and commitment in the CSE Department."
    }
];

// Function to Load Awards
function loadAwards() {
    const awardsContainer = document.getElementById("awards-container");
    awardsContainer.innerHTML = ""; // Clear previous content

    awards.forEach(award => {
        const awardCard = document.createElement("div");
        awardCard.classList.add("award-card");

        awardCard.innerHTML = `
            <h3>${award.title}</h3>
            <h4>${award.event} | ${award.date}</h4>
            <p>${award.details}</p>
        `;

        awardsContainer.appendChild(awardCard);
    });
}

// Load Awards on Page Load
document.addEventListener("DOMContentLoaded", loadAwards);

// Your Gemini API Key
const geminiApiKey = "AIzaSyCokG5u0H9uADiOfUpSfrMlET4bawr8GIk";

// Toggle Chatbot Modal
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot-modal");
    chatbot.style.right = chatbot.style.right === "10px" ? "-400px" : "10px";
}

// Close chatbot when clicking outside the modal
document.addEventListener("click", function(event) {
    const chatbot = document.getElementById("chatbot-modal");
    const chatbotBtn = document.querySelector(".fixed-ai-btn");

    if (!chatbot.contains(event.target) && event.target !== chatbotBtn) {
        chatbot.style.right = "-400px"; // Hide the modal
    }
});

// Listen for "Enter" key in input field to send message
document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent line break
        sendMessage();
    }
});

async function sendMessage() {
    const userInput = document.getElementById("chat-input").value.trim();
    if (!userInput) return;

    displayMessage(userInput, "user-message");
    document.getElementById("chat-input").value = ""; // Clear Input

    // Extract resume text using PDF.js
    const resumeContent = await loadResumeText();

    const personalDetails = "Adithya is a Computer Science student at AUS with a strong background in AI, Machine Learning, Web Dev, and Cybersecurity. He has worked on AI-based fraud detection, NLP models, and web automation. He is currently looking for opportunities in AI research and software engineering. Born and brought up in dubai, indian, birthday: june 14th, 2003.";

    const prompt = `You are an AI assistant that will talk to recruitment teams. Respond normally if the query is not related to me. Your job is to make sure that I get hired, but don't be annoying or repetitive. Be precise and to the point, do not use special characters or bold text. Don't mention "According to his resume", or "it appears that..". Answer in 150 words maximum. Here is Adithya's resume: ${resumeContent}\n\nAdditional Info: ${personalDetails}\n\nUser Question: ${userInput}`;

    // Call Gemini API
    const response = await callGemini(prompt);
    displayMessage(response, "bot-message");
}

function displayMessage(text, className) {
    const messageContainer = document.getElementById("chatbot-messages");
    const message = document.createElement("div");
    message.classList.add("chatbot-message", className);
    messageContainer.appendChild(message);

    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            message.innerHTML += text[index]; // Append each character
            index++;

            // ✅ Auto-scroll **while** typing
            messageContainer.scrollTop = messageContainer.scrollHeight;

            setTimeout(typeCharacter, 5); // Adjust typing speed (lower = faster)
        } else {
            // ✅ Ensure final scroll adjustment
            setTimeout(() => {
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }, 50);
        }
    }

    typeCharacter(); // Start typing animation
}

async function loadResumeText() {
    const pdfUrl = "Adithya_CV.pdf"; // Change this if your resume is stored elsewhere

    try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        let extractedText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const text = textContent.items.map(item => item.str).join(" ");
            extractedText += text + "\n\n"; // Adds spacing between pages
        }

        return extractedText;
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
        return "Resume text extraction failed.";
    }
}

// Call Gemini API
async function callGemini(prompt) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 400 // Adjust based on response length needed
                }
            })
        });

        const data = await response.json();
        let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Error retrieving response from Gemini.";

        responseText = responseText.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
        return responseText;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Failed to contact the Gemini API.";
    }
}

