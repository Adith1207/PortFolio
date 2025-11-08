// app/data/projectsData.ts
export const projectsData = [
  {
    title: "Smart Announcement System using STM32 & ESP8266",
    description:
      "The Smart Announcement System is an IoT-based embedded project designed to modernize traditional public announcement setups. Unlike existing systems that rely on manual triggering or physical switches, this project integrates an ESP8266-hosted web dashboard that allows remote announcements and maintains a digital log of all messages broadcasted. The concept was inspired by observing inefficiencies in our college’s conventional announcement system — prompting the creation of a smarter, automated, and connected alternative.",
    tech: ["Embedded C", "STM32", "MQTT", "IoT"],
    github: "https://github.com/Adith1207/Smart-Announcement-System",
    image: "/project_images/sas.png",
    category: "Embedded",
  },
  {
    title: "Portfolio Website",
    description:
      "“A visually immersive Next.js portfolio that blends cutting-edge Framer Motion animations, cosmic-inspired gradients, and modern UI/UX aesthetics to craft a distinctive personal brand experience. Designed with performance, interactivity, and emotion in mind, it showcases a seamless fusion of creative frontend engineering and artistic expression — highlighting projects, skills, and achievements through dynamic visuals, fluid transitions, and a futuristic design language that reflects individuality and innovation.”",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/Adith1207/PortFolio",
    image: "/project_images/portfolio.png",
    category: "Web",
  },
  {
    title: "AIRcursor – Gesture-Controlled Virtual Cursor",
    description:
      "AIRcursor is an AI-driven system inspired by Iron Man’s interactive holographic tech. It tracks hand gestures and finger movements in real time using a webcam and translates them into desktop actions — from controlling the cursor to executing custom commands. Built to bridge human motion and digital interaction, it delivers a seamless, futuristic user experience that feels almost cinematic.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "AI"],
    github: "https://github.com/Adith1207/AirCursor",
    image: "/project_images/aircursor.png",
    category: "AI",
  },

  {
    title: "docuMentor – Local AI Document QA & Code Commenting System",
    description:
      "docuMentor is a dual-purpose AI assistant that merges the power of LocalRQA and CodeScribe. It enables users to locally upload and query documents with Retrieval-Augmented Generation (RAG), while also providing automatic Python code commenting through LLM-based analysis. Designed for privacy and performance, docuMentor helps developers understand, document, and interact with data and code — all without cloud dependencies.",
    tech: [
      "Python",
      "LangChain",
      "LLaMA",
      "ColBERTv2",
      "Transformers",
      "Retrieval-Augmented Generation",
      "Streamlit"
    ],
    github: "https://github.com/Adith1207/docuMentor",
    image: "/project_images/documentor.png",
    category: "AI",
  },

  {
    title: "GenOjas – Empathetic GenAI Mental Wellness Platform",
    description:
      "GenOjas is a GenAI-powered mental wellness platform built with empathy, wisdom, and cultural resonance. Developed for the Google Cloud Gen AI Exchange Hackathon, it provides youth with a private and personalized caretaker ecosystem that blends ancient Indian well-being philosophies with modern AI. Through its MatrikaCore engine and seven OjasBoost modules, GenOjas helps users track their emotional health, practice mindfulness, and nurture resilience in a stigma-free, compassionate space.",
    tech: [
      "Python",
      "Google Cloud GenAI",
      "Vertex AI",
      "Streamlit",
      "Natural Language Processing (NLP)",
      "AI Ethics",
      "Emotion Detection",
      "LLM Integration"
    ],
    github: "https://github.com/Adith1207/GenOjas",
    image: "/project_images/genojas.png",
    category: "AI",
  },

  {
    title: "BDD – Boolean Logic Function Synthesizer ",
    description:
      "BDD (Binary Decision Diagram) is a logic synthesis tool designed to efficiently represent and simplify Boolean functions derived from truth tables. It generates optimized Sum of Products (SOP) and Product of Sums (POS) expressions, offering a human-readable Boolean algebra output. This project bridges digital logic design and computational optimization, making Boolean function analysis faster, accurate, and more visual.",
    tech: ["Python", "Boolean Algebra", "Digital Logic Design", "Algorithms", "Data Structures"],
    github: "https://github.com/Adith1207/BDD",
    image: "/project_images/bdd.png",
    category: "Algorithms",
  },

  {
    title: "Gokulashtami 2025 – Navarasa ",
    description:
      "Gokulashtami 2025 – Navarasa is a web experience designed as a digital companion to the campus decoration theme celebrating the nine classical emotions of Indian art. Each emotion—Śṛṅgāra, Hāsya, Karuṇa, Raudra, Vīra, Bhayānaka, Bībhatsya, Adbhuta, and Śānta—is brought to life through interactive multimedia, multi-language audio explainers, synchronized captions, and immersive soundscapes. The app merges culture and technology, offering users an artistic journey through emotion and expression.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Audio API",
      "QR Code Scanner"
    ],
    github: "https://github.com/Adith1207/gokulashtami25",
    image: "/project_images/navarasa.png",
    category: "Web",
  },

  {
    title: "SenseVid – Video Transmission Evaluation for Wireless Sensor Networks",
    description:
      "SenseVid is a modernized tool for evaluating video transmission performance in Wireless Sensor Networks (WSNs). Updated for OpenCV 4.x, it provides an open-source alternative to EvalVid, optimized for modern Linux environments. This refactored version replaces deprecated OpenCV calls, supports CMake 3.x and GCC 13+, and ensures smooth, reliable performance for network-based video quality research and experimentation.",
    tech: [
      "C++",
      "OpenCV 4.x",
      "CMake",
      "GCC",
      "Linux",
      "Wireless Sensor Networks (WSN)",
      "Video Processing"
    ],
    github: "https://github.com/Adith1207/SenseVid",
    image: "/project_images/sensevid.png",
    category: "Algorithms",
  },

  {
  title: "Terminal Chat Assistant (C) — CLI Smart Assistant",
    description:
      "A lightweight Terminal Chat Assistant built in C for Linux that maps plain-English requests to shell commands. Designed as a course project to simplify terminal workflows, it parses natural language (via tgpt), suggests and runs appropriate commands, and provides audio feedback using espeak-ng and ffplay. The assistant helps with file management, system utilities, automation, and quick web lookups — making the terminal approachable for beginners and power users alike.",
    tech: [
      "C",
      "Linux",
      "Shell Scripting",
      "tgpt (NLP parsing)",
      "espeak-ng",
      "ffplay / ffmpeg",
      "amixer"
    ],
    github: "https://github.com/Adith1207/Linux_terminal_assistant",
    image: "/project_images/terminal_assistant.png",
    category: "Algorithms",
  },

  {
  title: "CIBIL Score Card – User Data Collection App",
    description:
      "A Flutter-based mobile application developed during my internship to collect and validate user data for creditworthiness (CIBIL) scoring. The app features a clean, scrollable interface with structured sections for personal and credit details, ensuring accurate and organized data entry. It was designed to integrate seamlessly with ML-driven credit analysis systems and supports future API and authentication modules for real-time score computation.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase (Planned)",
      "UI/UX Design",
      "Form Validation",
      "Mobile Development"
    ],
    github: "https://github.com/Adith1207/Social_Score_Card",
    image: "/project_images/cibil_app.png",
    category: "Web",
  },

  {
    title: "Plant Disease Classification – Deep Learning Web App",
    description:
      "An AI-powered web application that identifies plant leaf diseases using a fine-tuned DenseNet121 model built with PyTorch. The app enables users to upload leaf images and receive instant predictions along with detailed disease insights, preventive measures, and fertilizer recommendations. With a Flask backend and a clean HTML/CSS interface, it delivers accurate, real-time diagnostics that bridge agriculture and machine learning.",
    tech: [
      "PyTorch",
      "Flask",
      "Torchvision",
      "Pillow",
      "NumPy",
      "HTML",
      "CSS",
      "Deep Learning",
      "Image Classification"
    ],
    github: "https://github.com/Adith1207/Plant_Disease_App",
    image: "/project_images/plant_disease.png",
    category: "AI",
  },

  {
    title: "HamNoSys Generator – Sign Language Notation App",
    description:
      "HamNoSys Generator is a Flutter-based mobile app built to generate and visualize HamNoSys (Hamburg Notation System) symbols for sign languages. Designed to bridge global sign language variations, it allows users to construct precise, language-independent representations of signs and export them as segML code. The app promotes accessibility, linguistics research, and education by enabling real-time HamNoSys previews, avatar-based demonstrations, and offline usage — all through an intuitive, cross-platform interface.",
    tech: [
      "Flutter",
      "Dart",
      "segML",
      "Mobile Development",
      "UI/UX Design",
      "Accessibility Tech",
      "Cross-Platform"
    ],
    github: "https://github.com/Adith1207/Hamnosis_Generator",
    image: "/project_images/hamnosys.png",
    category: "Web",
  },



];
