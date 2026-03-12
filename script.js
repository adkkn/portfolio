// ─── Smooth Scroll ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 80, behavior: "smooth" });
        }
    });
});

// ─── Fade-In Observer ─────────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

function observeFadeIn(el) {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
}

// ─── Nav: Active Link + Scroll State ──────────────────────
const navLinks = document.querySelectorAll('nav ul li a');
const mainNav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    // Scrolled state for frosted glass
    if (window.scrollY > 40) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('nav-active');
        }
    });

    // Scroll-to-top visibility
    const btn = document.getElementById('scroll-top');
    if (btn) {
        const show = window.scrollY > 400;
        btn.style.opacity = show ? '1' : '0';
        btn.style.pointerEvents = show ? 'auto' : 'none';
    }
});

// ─── Scroll-to-Top Button ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('scroll-top');
    if (btn) {
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    // Fade in static about section
    document.querySelectorAll('#about .fade-in').forEach(observeFadeIn);
});

// ─── Hero Taglines ─────────────────────────────────────────
const taglines = [
    "AI That Understands.",
    "Software That Performs.",
    "Solutions That Matter."
];

const heroTaglines = document.getElementById("hero-taglines");
taglines.forEach((text, index) => {
    const el = document.createElement("span");
    el.classList.add("hero-tagline");
    el.textContent = text;
    el.style.animationDelay = `${0.3 + index * 0.5}s`;
    heroTaglines.appendChild(el);
});

// ─── Data ─────────────────────────────────────────────────

const courses = {
    "computer-science": [
        "Intro to Engineering & Computing", "Programming I", "Programming II", "Data Structures and Algorithms",
        "GUI Design and Programming", "Database Systems", "Design-Analysis of Algorithms",
        "Mobile Application Development", "Operating Systems", "Programming Languages",
        "Ethics and Information Technology", "Digital Systems", "Intro to Computer Systems",
        "Computer Networks I", "Software Engineering", "Professional Training in CMP (Internship)",
        "Project in Computer Science I", "Project in Computer Science II"
    ],
    "ai": [
        "Artificial Intelligence", "Machine Learning & Data Mining",
        "Neural Networks & Deep Learning", "Computer Vision"
    ],
    "math": [
        "Calculus I", "Calculus II", "Discrete Mathematics", "Linear Algebra",
        "Differential Equations", "Numerical Analysis I", "Methods of Applied Math",
        "Foundations of Statistics for Data Science"
    ],
    "others": [
        "Principles of Microeconomics", "Religion and Society", "Innovation & Entrepreneurship Mindset",
        "Introduction to Media Literacy", "Class Piano I", "Intro to Arabic Heritage I",
        "Advanced Academic Writing", "Academic Writing I", "Academic Writing II",
        "Professional Communication for Engineers", "General Physics I",
        "General Chemistry I", "General Chemistry II"
    ]
};

const skills = {
    languages: [
        { name: "Java", img: "https://cdn-icons-png.flaticon.com/128/226/226777.png" },
        { name: "Python", img: "https://cdn-icons-png.flaticon.com/128/1822/1822899.png" },
        { name: "C/C++", img: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
        { name: "SQL", img: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png" },
        { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/128/919/919828.png" },
        { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png" },
        { name: "HTML", img: "https://cdn-icons-png.flaticon.com/128/174/174854.png" },
        { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png" },
        { name: "R", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png" },
        { name: "MATLAB", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/330px-Matlab_Logo.png" },
        { name: "Kotlin", img: "https://cdn.freebiesupply.com/logos/thumbs/2x/kotlin-1-logo.png" }
    ],
    frameworks: [
        { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", img: "https://cdn-icons-png.flaticon.com/128/919/919851.png" },
        { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", img: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-svg-download-png-3030179.png" },
        { name: "Express.js", img: "https://www.manektech.com//storage/technology/image/1646733600.webp" },
        { name: "Expo", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
        { name: "Flask", img: "https://play-lh.googleusercontent.com/ekpyJiZppMBBxCR5hva9Zz1pr3MYlFP-vWTYR3eIU7HOMAmg3jCJengHJ1GFgFMyyYc" },
        { name: "Django", img: "https://www.svgrepo.com/show/353657/django-icon.svg" },
        { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png" }
    ],
    devtools: [
        { name: "Git", img: "https://cdn-icons-png.flaticon.com/128/733/733553.png" },
        { name: "VS Code", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/3840px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "Visual Studio", img: "https://cdn-icons-png.flaticon.com/128/906/906324.png" },
        { name: "Android Studio", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png" },
        { name: "Eclipse", img: "https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png" },
        { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/128/919/919836.png" },
        { name: "Supabase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "Firebase", img: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png" }
    ],
    libraries: [
        "pytorch", "tensorflow", "transformers", "tokenizers", "scikit-learn",
        "xgboost", "opencv-python", "pandas", "numpy", "scipy",
        "matplotlib", "seaborn", "Flask", "fastapi", "selenium",
        "requests", "openai", "google-generativeai", "python-can"
    ]
};

const experiences = {
    "current": [
        {
            title: "AI Engineer",
            company: "Bahwan International Group, Dubai",
            date: "Dec. 2025 – Present",
            details: [
                "Built a comprehensive marketing CRM that consolidates leads from multiple sources, featuring AI lead scoring and predictive analytics to optimize lead management.",
                "Developed a WhatsApp chatbot that qualifies leads 24/7, eliminating lead loss outside business hours.",
                "Engineered a Python OCR microservice API for automated document processing across departments."
            ],
            img: "https://bigh.co/assets/images/logo.png"
        }
    ],
    "internships": [
        {
            title: "AI & Automation Software Engineer",
            company: "Transmed Overseas Inc, Dubai",
            date: "Feb. 2025 – Nov. 2025",
            details: [
                "Developed a wide range of intelligent internal software solutions with AI integrations that significantly reduced manual effort and enhanced operational efficiency.",
                "Delivered high-value automations across large FMCG data flows, highlighted by a powerful invoice booking pipeline that improved processing speed by 83%."
            ],
            img: "https://static.wixstatic.com/media/b82a58_62883bcc5ea14dd6a9f7f696884c4f53~mv2.png/v1/fill/w_568,h_190,al_c,lg_1,q_85,enc_auto/b82a58_62883bcc5ea14dd6a9f7f696884c4f53~mv2.png"
        },
        {
            title: "AI, Automation & Data Analytics Intern",
            company: "Transmed Overseas Inc, Dubai",
            date: "June 2024 – Aug. 2024",
            details: [
                "Developed ML models to significantly improve sales forecasting accuracy beyond current manual forecasts.",
                "Automated data entry and validation processes using VBA and macros, enhancing operational efficiency.",
                "Created an AI-powered web app to streamline IT service queries, incorporating various OpenAI models and Python Flask backend API integration with the Manage Engine IT Ticketing System."
            ],
            img: "https://static.wixstatic.com/media/b82a58_62883bcc5ea14dd6a9f7f696884c4f53~mv2.png/v1/fill/w_568,h_190,al_c,lg_1,q_85,enc_auto/b82a58_62883bcc5ea14dd6a9f7f696884c4f53~mv2.png"
        },
        {
            title: "AI Intern",
            company: "Smallcap.AI",
            date: "May 2024 – June 2024",
            details: [
                "Learnt how to develop Generative AI NFTs on Ethereum, integrate account abstraction wallets, and IPFS.",
                "Leveraged OpenAI API services for advanced AI applications."
            ],
            img: "https://www.smallcap.ai/smallcaplogo.png"
        },
        {
            title: "SEO & AI Blogging Intern",
            company: "Inspirit.AI",
            date: "Nov. 2023 – Jan. 2024",
            details: [
                "Developed SEO skills under Stanford graduates; authored AI blog posts analysing SEO performance.",
                "Collaborated with industry leaders to refine SEO strategies for enhanced content marketing."
            ],
            img: "https://hacktj.org/2021/static/media/inspiritai.ca0c8cca.png"
        }
    ],
    "aus": [
        {
            title: "Founder & President – The Artificial Intelligence Club",
            company: "American University of Sharjah",
            date: "Oct. 2023 – May 2025",
            details: [
                "Hosted numerous workshops explaining AI concepts and providing hands-on experience for AUS students.",
                "Developed a fully functional AI-powered game about AI Concepts for Club Fair 2024."
            ],
            img: "https://se-images.campuslabs.com/clink/images/811c4f83-90da-4707-b86e-b0180a5377ae92702064-5fc3-4030-9366-529a638bb0ad.png?preset=med-sq"
        },
        {
            title: "IT Student Worker – College of Engineering",
            company: "American University of Sharjah",
            date: "Sep. 2023 – May 2024",
            details: [
                "Maintained IT infrastructure; resolved 120+ technical issues improving campus technology reliability.",
                "Partnered with IT teams to deploy solutions enhancing AUS's digital environment and network operations."
            ],
            img: "https://auscse.com/main/images/banner_og.png"
        },
        {
            title: "Technical Core Team Member – Google Developers Group",
            company: "American University of Sharjah",
            date: "Oct. 2024 – Present",
            details: [
                "Collaborating with AUS students to organise Google-backed AI workshops and hackathons.",
                "Hosted events to provide AUS students with hands-on experience in Google technologies."
            ],
            img: "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_2YZFc5k.png"
        }
    ]
};

const certifications = [
    { name: "AWS Certified AI Practitioner", provider: "Amazon Web Services", img: "https://img.icons8.com/m_outlined/600/FFFFFF/amazon-web-services.png" },
    { name: "Deep Learning Specialization", provider: "DeepLearning.AI", img: "https://aihubtest-bucket.s3.eu-north-1.amazonaws.com/public/storage/images/6066/https---cdn.evbuc.com-images-125559383-317212851579-1-original.20210208-232017.png" },
    { name: "Machine Learning Specialization", provider: "Stanford / DeepLearning.AI", img: "https://logos-world.net/wp-content/uploads/2021/10/Stanford-Symbol.png" },
    { name: "Microsoft Azure AI Engineer Associate", provider: "Microsoft", img: "https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png" },
    { name: "Microsoft Azure AI Fundamentals", provider: "Microsoft", img: "https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png" },
    { name: "7 Data Science Courses", provider: "DataCamp", img: "https://images.contentstack.io/v3/assets/blt06ed128d2c76b316/bltc2ce983e7b87c1ab/66794a17a2e62608564255b8/blt387bde0da0654c08.png" },
    { name: "Gen AI, Prompt Engineering, MLOps, Kubernetes, AWS, GCP", provider: "Manifold AI Learning", img: "https://tagmango.com/staticassets/-manifold_logo-0c136ff49b812056a24022776afc8a15.png" },
    { name: "Google Data Analytics Professional Certificate", provider: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" },
    { name: "Exploratory Data Analysis for Machine Learning", provider: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Inspirit AI Ambassadors Program", provider: "Inspirit AI", img: "https://hacktj.org/2021/static/media/inspiritai.ca0c8cca.png" },
    { name: "Inspirit AI Scholars Program", provider: "Inspirit AI", img: "https://hacktj.org/2021/static/media/inspiritai.ca0c8cca.png" }
];

const projects = {
    "ai-projects": [
        {
            name: "OriginAI: Binary Multilingual MGT Detector",
            description: "Fine-tuned the mGTE model with the LoRA adapter to accurately classify AI-generated text in any language using transfer learning."
        },
        {
            name: "Security Scripts as Stories",
            description: "Leveraged three LLMs (GPT, Gemini, Llama) to generate CAN bus attacks on a Raspberry PI acting as an ECU and conduct intrusion detection. Developed a car dashboard UI to simultaneously show the real-time conversion of CAN bus messages to the car's speedometer and RPM meter."
        },
        {
            name: "Deepfake Detection",
            description: "Used a Binary Neural Network to accurately classify AI-generated images for this Computer Vision Project. F1-Score: 0.91"
        },
        {
            name: "Garbage Classification",
            description: "Classified household waste using several ML algorithms, an ML ensemble model, and a Deep Learning (Computer Vision) model. Extracted image features using VGG16 for ML models. F1-Score: 0.93"
        }
    ],
    "ai-models": [
        {
            name: "Medical Imaging AI Model",
            description: "Interprets medical images like X-rays using deep learning, enhancing diagnostic precision and speed for conditions such as tumours and fractures, improving patient outcomes."
        },
        {
            name: "Emotion Detection AI Model",
            description: "Gauges emotions by analysing expressions, eye movements, and gestures, finding applications in customer sentiment analysis and human-computer interaction."
        },
        {
            name: "Fake News Detection AI Model",
            description: "Employing NLP, this model assesses linguistic patterns and sources to identify misinformation, aiding in the fight against the spread of fake news and promoting media literacy."
        },
        {
            name: "Driver Distraction AI Model",
            description: "Utilising Facial Recognition features, this model determined whether the driver was paying attention to the road or not."
        }
    ],
    "web-dev": [
        {
            name: "DARK Games Store",
            description: "Developed a Web Application for an online Games Store with complete Database functionality. Used HTML + CSS + JavaScript for creating the webpages and integrated the MySQL back-end using Node.js."
        },
        {
            name: "24/7 Laundromat",
            description: "Developed a React Web Application for an online Laundromat service with complete Database functionality. Integrated a MySQL back-end using Node.js."
        },
        {
            name: "CalendaFlow",
            description: "Built a simple Calendar Web Application. Used Git for Version Control and deployed through GitHub Pages."
        }
    ],
    "app-dev": [
        {
            name: "SpareHour",
            description: "Developed a fully-functional Java Mobile Application on Android Studio with a Firebase database which provides a list of common meeting times for teams."
        },
        {
            name: "Game of Life",
            description: "Designed a fully-functional Game of Life simulation using Java and the Swing library. Implemented menus, resizable grids, and user-friendly buttons and sliders."
        },
        {
            name: "Hangman Game",
            description: "Developed a user-friendly Hangman game using Python with complete MySQL integration. Includes features like a leaderboard, scoring, and user interaction."
        }
    ]
};

const awards = [
    {
        title: "1st Place Winner",
        event: "Blockathon: AI for Decentralized Autonomy 2025",
        date: "May 2025",
        details: "Independently developed a production-grade Next.js travel planning AI web app with SUI blockchain features."
    },
    {
        title: "6th Place Winner",
        event: "DragonOil AI Hackathon II — GOTECH 2025",
        date: "Apr. 2025",
        details: "Leveraged multiple AI algorithms to accurately estimate Surface network production flow behaviour."
    },
    {
        title: "3rd Place Winner + Best Solution Champion",
        event: "RTA × Alibaba Cloud Generative AI Hackathon",
        date: "Oct. 2024",
        details: "Created an interface leveraging AI algorithms (XGBoost & DBScan) to predict Dubai Taxi Rank locations and estimate hourly taxi demand."
    },
    {
        title: "Active Students' Scholarship",
        event: "AUS (Office of Student Affairs)",
        date: "Jan. 2024",
        details: "Recognition for extensive participation in extra-curriculars and commitment in the CSE Department."
    }
];

// ─── Load Functions ────────────────────────────────────────

function loadSkills(category) {
    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    if (category === "libraries") {
        container.className = "flex flex-wrap gap-3";
        skills[category].forEach((library, index) => {
            const el = document.createElement("div");
            el.classList.add("lib-pill", "fade-in");
            el.style.transitionDelay = `${index * 0.04}s`;
            el.textContent = library;
            container.appendChild(el);
            fadeObserver.observe(el);
        });
    } else {
        container.className = "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4";
        skills[category].forEach((skill, index) => {
            const el = document.createElement("div");
            el.classList.add("skill-card", "fade-in");
            el.style.transitionDelay = `${index * 0.05}s`;
            el.innerHTML = `
                <img src="${skill.img}" alt="${skill.name}" class="skill-icon">
                <p style="font-size:0.8rem;color:#cbd5e1;font-weight:500;">${skill.name}</p>
            `;
            container.appendChild(el);
            fadeObserver.observe(el);
        });
    }
}

function loadCourses(category) {
    const container = document.getElementById("courses-container");
    container.innerHTML = "";
    courses[category].forEach((course, index) => {
        const el = document.createElement("div");
        el.classList.add("course-card", "fade-in");
        el.style.transitionDelay = `${index * 0.04}s`;
        el.textContent = course;
        container.appendChild(el);
        fadeObserver.observe(el);
    });
}

function loadExperience(category) {
    const container = document.getElementById("experience-container");
    container.innerHTML = "";
    const items = experiences[category];

    // Single item → full width; multiple → 2-col grid
    container.className = items.length === 1
        ? "grid grid-cols-1 gap-5"
        : "grid grid-cols-1 lg:grid-cols-2 gap-5";

    items.forEach((exp, index) => {
        const el = document.createElement("div");
        el.classList.add("exp-card", "fade-in");
        el.style.transitionDelay = `${index * 0.1}s`;

        if (category === "current") {
            el.classList.add("exp-card--current");
            el.innerHTML = `
                <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap;">
                    <div style="display:flex;align-items:center;gap:1.1rem;">
                        <img src="${exp.img}" alt="${exp.company}" class="exp-logo" style="width:4rem;height:4rem;">
                        <div>
                            <h3 style="color:#fff;font-weight:800;font-size:1.125rem;line-height:1.3;margin-bottom:0.25rem;">${exp.title}</h3>
                            <p style="color:#22d3ee;font-size:0.875rem;font-weight:500;">${exp.company}</p>
                            <p style="color:#475569;font-size:0.75rem;font-family:monospace;margin-top:0.2rem;">${exp.date}</p>
                        </div>
                    </div>
                    <span class="current-badge"><span class="current-dot"></span>Active</span>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.75rem;">
                    ${exp.details.map(d => `
                        <div class="current-detail-card">
                            <span style="color:#22d3ee;font-size:0.8rem;flex-shrink:0;margin-top:0.15rem;">◆</span>
                            <p style="color:#cbd5e1;font-size:0.8125rem;line-height:1.65;">${d}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            el.innerHTML = `
                <div style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:1rem;">
                    <img src="${exp.img}" alt="${exp.company}" class="exp-logo">
                    <div style="flex:1;min-width:0;">
                        <h3 style="color:#fff;font-weight:700;font-size:0.9375rem;line-height:1.4;">${exp.title}</h3>
                        <p style="color:#22d3ee;font-size:0.8125rem;margin-top:0.2rem;">${exp.company}</p>
                        <p style="color:#64748b;font-size:0.75rem;font-family:monospace;margin-top:0.2rem;">${exp.date}</p>
                    </div>
                </div>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:0.625rem;">
                    ${exp.details.map(d => `
                        <li style="color:#cbd5e1;font-size:0.8125rem;line-height:1.6;padding-left:0.875rem;border-left:2px solid rgba(34,211,238,0.35);">${d}</li>
                    `).join('')}
                </ul>
            `;
        }

        container.appendChild(el);
        fadeObserver.observe(el);
    });
}

function loadCertifications() {
    const container = document.getElementById("certifications-container");
    container.innerHTML = "";
    certifications.forEach((cert, index) => {
        const el = document.createElement("div");
        el.classList.add("cert-card", "fade-in");
        el.style.transitionDelay = `${index * 0.06}s`;
        el.innerHTML = `
            <img src="${cert.img}" alt="${cert.provider}" class="cert-logo">
            <div>
                <p style="color:#f1f5f9;font-size:0.8rem;font-weight:600;line-height:1.4;">${cert.name}</p>
                <p style="color:#64748b;font-size:0.75rem;margin-top:0.25rem;">${cert.provider}</p>
            </div>
        `;
        container.appendChild(el);
        fadeObserver.observe(el);
    });
}

function loadProjects(category) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";
    projects[category].forEach((project, index) => {
        const el = document.createElement("div");
        el.classList.add("project-card", "fade-in");
        el.style.transitionDelay = `${index * 0.1}s`;
        el.innerHTML = `
            <h3 style="color:#fff;font-weight:700;font-size:0.9375rem;margin-bottom:0.625rem;">${project.name}</h3>
            <p style="color:#cbd5e1;font-size:0.8125rem;line-height:1.7;">${project.description}</p>
        `;
        container.appendChild(el);
        fadeObserver.observe(el);
    });
}

function loadAwards() {
    const container = document.getElementById("awards-container");
    container.innerHTML = "";
    awards.forEach((award, index) => {
        const el = document.createElement("div");
        el.classList.add("award-card", "fade-in");
        el.style.transitionDelay = `${index * 0.1}s`;
        el.innerHTML = `
            <h3 style="color:#fbbf24;font-weight:800;font-size:1rem;margin-bottom:0.25rem;">${award.title}</h3>
            <p style="color:#e2e8f0;font-size:0.875rem;font-weight:500;">${award.event}</p>
            <p style="color:#64748b;font-size:0.75rem;font-family:monospace;margin-top:0.2rem;margin-bottom:0.75rem;">${award.date}</p>
            <p style="color:#cbd5e1;font-size:0.8125rem;line-height:1.6;">${award.details}</p>
        `;
        container.appendChild(el);
        fadeObserver.observe(el);
    });
}

// ─── Filter Button Handlers ────────────────────────────────

document.querySelectorAll(".section-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".section-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadSkills(this.getAttribute("data-category"));
    });
});

document.querySelectorAll(".course-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".course-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadCourses(this.getAttribute("data-category"));
    });
});

document.querySelectorAll(".experience-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".experience-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadExperience(this.getAttribute("data-category"));
    });
});

document.querySelectorAll(".project-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".project-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadProjects(this.getAttribute("data-category"));
    });
});

// ─── Initial Load ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    loadSkills("languages");
    loadCourses("computer-science");
    loadExperience("current");
    loadCertifications();
    loadProjects("ai-projects");
    loadAwards();
});

// ═══════════════════════════════════════════════════════════
//  V2 — INSANE ANIMATIONS & INTERACTIVE BACKGROUND
// ═══════════════════════════════════════════════════════════

// ─── Neural Network Canvas ─────────────────────────────────
(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let W, H;
    const mouse = { x: -9999, y: -9999 };
    const pts = [];
    const MAX_D = 135;
    const MOUSE_D = 160;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    const N = Math.min(95, Math.max(45, Math.floor((window.innerWidth * window.innerHeight) / 16000)));

    function Dot() {
        this.x  = Math.random() * (W || 1200);
        this.y  = Math.random() * (H || 900);
        this.vx = (Math.random() - 0.5) * 0.38;
        this.vy = (Math.random() - 0.5) * 0.38;
        this.r  = Math.random() * 1.5 + 0.4;
        this.a  = Math.random() * 0.45 + 0.15;
        this.hue = Math.random() > 0.6 ? 280 : 187; // purple or cyan
    }

    Dot.prototype.tick = function () {
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_D && d > 0) {
            const f = (MOUSE_D - d) / MOUSE_D;
            this.vx += (dx / d) * f * 0.45;
            this.vy += (dy / d) * f * 0.45;
        }
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 1.8) { this.vx = (this.vx / spd) * 1.8; this.vy = (this.vy / spd) * 1.8; }
        this.vx *= 0.991; this.vy *= 0.991;
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
    };

    Dot.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue},88%,70%,${this.a})`;
        ctx.fill();
    };

    function drawEdges() {
        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
                const d2 = dx * dx + dy * dy;
                if (d2 < MAX_D * MAX_D) {
                    const op = (1 - Math.sqrt(d2) / MAX_D) * 0.22;
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = `rgba(34,211,238,${op})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
            // Beam to mouse
            const dx = pts[i].x - mouse.x, dy = pts[i].y - mouse.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < MOUSE_D * 1.5) {
                const op = (1 - d / (MOUSE_D * 1.5)) * 0.7;
                ctx.beginPath();
                ctx.moveTo(pts[i].x, pts[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(34,211,238,${op})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    function frame() {
        ctx.clearRect(0, 0, W, H);
        drawEdges();
        pts.forEach(p => { p.tick(); p.draw(); });
        requestAnimationFrame(frame);
    }

    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', () => {
        resize();
        pts.forEach(p => { if (p.x > W) p.x = W * Math.random(); if (p.y > H) p.y = H * Math.random(); });
    });

    window.addEventListener('DOMContentLoaded', () => {
        resize();
        for (let i = 0; i < N; i++) pts.push(new Dot());
        frame();
    });
})();

// ─── Smooth Cursor Glow ────────────────────────────────────
(function () {
    const g = document.createElement('div');
    g.id = 'cursor-glow';
    document.body.appendChild(g);
    let tx = -1000, ty = -1000, cx = -1000, cy = -1000;
    document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    document.addEventListener('mouseleave', () => { tx = -1000; ty = -1000; });
    (function lerp() {
        cx += (tx - cx) * 0.07;
        cy += (ty - cy) * 0.07;
        g.style.left = cx + 'px';
        g.style.top  = cy + 'px';
        requestAnimationFrame(lerp);
    })();
})();

// ─── Scroll Progress Bar ───────────────────────────────────
(function () {
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
})();

// ─── Hero Name: Per-Letter Drop Animation ─────────────────
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const nameEl = document.querySelector('.hero-name');
        if (!nameEl) return;

        const word = 'Adithya';
        nameEl.innerHTML = '';

        // Remove inherited background-clip so per-letter colors work
        nameEl.style.background = 'none';
        nameEl.style.webkitBackgroundClip = 'unset';
        nameEl.style.backgroundClip = 'unset';
        nameEl.style.webkitTextFillColor = 'initial';

        // Interpolate white → #e0f8ff → #22d3ee across letters
        const total = word.length + 1;
        const getColor = i => {
            const t = i / (total - 1);
            let r, g, b;
            if (t < 0.5) {
                const u = t * 2;
                r = Math.round(255 - 31 * u);
                g = Math.round(255 - 7 * u);
                b = 255;
            } else {
                const u = (t - 0.5) * 2;
                r = Math.round(224 - 190 * u);
                g = Math.round(248 - 37 * u);
                b = Math.round(255 - 17 * u);
            }
            return `rgb(${r},${g},${b})`;
        };

        word.split('').forEach((ch, i) => {
            const s = document.createElement('span');
            s.classList.add('hero-letter');
            s.textContent = ch;
            s.style.color = getColor(i);
            const gAlpha = 0.25 + (i / total) * 0.5;
            s.style.textShadow = `0 0 35px rgba(34,211,238,${gAlpha.toFixed(2)})`;
            s.style.animationDelay = `${0.1 + i * 0.075}s`;
            nameEl.appendChild(s);
        });

        // Cyan dot
        const dot = document.createElement('span');
        dot.classList.add('hero-letter');
        dot.textContent = '.';
        dot.style.color = '#22d3ee';
        dot.style.textShadow = '0 0 40px rgba(34,211,238,0.9)';
        dot.style.animationDelay = `${0.1 + word.length * 0.075 + 0.04}s`;
        nameEl.appendChild(dot);

        // Adjust tagline reveal timing to happen after letters settle
        const lettersEnd = 0.1 + word.length * 0.075 + 0.75; // ~1.5s
        document.querySelectorAll('.hero-tagline').forEach((el, i) => {
            el.style.animationDelay = `${lettersEnd + 0.2 + i * 0.4}s`;
        });
    });
})();

// ─── Hero Subtitle Typewriter ──────────────────────────────
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const el = document.getElementById('hero-subtitle');
        if (!el) return;

        const full = el.textContent.trim();
        el.textContent = '';

        const START = 1.65; // seconds after page load
        let i = 0;

        setTimeout(() => {
            el.classList.add('typing');
            const type = () => {
                if (i < full.length) {
                    el.textContent += full[i++];
                    setTimeout(type, 58);
                } else {
                    setTimeout(() => el.classList.replace('typing', 'done'), 1200);
                }
            };
            type();
        }, START * 1000);
    });
})();

// ─── Hero Pills & CTAs Staggered Entrance ─────────────────
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const pills = document.querySelectorAll('.stat-pill');
        const ctasEl = document.getElementById('hero-ctas');
        const ctaBtn = document.querySelector('.cta-primary');

        // Pills bounce in one by one
        pills.forEach((pill, i) => {
            setTimeout(() => pill.classList.add('show'), (2.55 + i * 0.18) * 1000);
        });

        // CTAs fade up
        if (ctasEl) {
            setTimeout(() => {
                ctasEl.classList.add('show');
                if (ctaBtn) ctaBtn.classList.add('glowing');
            }, 3.15 * 1000);
        }
    });
})();

