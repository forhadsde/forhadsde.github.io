# MD Forhadul Islam

**Software Engineer**

- Email: forhad.sde.uk@gmail.com
- LinkedIn: https://www.linkedin.com/in/forhadsde
- Website: https://forhadsde.github.io/
- GitHub: https://github.com/forhadsde
- Address: London, United Kingdom
- Mobile: +447438461258

## About

I'm a Software Engineer with an MSc (Distinction) in Software Engineering from the University of Westminster, and I've published research on AI-driven real-time navigation systems. My background is actually in Electronics & Communication Engineering, so alongside software I'm comfortable with power electronics, circuitry, microcontrollers, and IoT, which shapes how I think about systems end to end, not just the software layer. Over time I've moved deeper into machine learning, full-stack development, and building systems that scale, working on things like recommendation engines, graph-based routing algorithms, and cutting VRAM requirements by 42.9% for a production diffusion-based virtual try-on pipeline. I've also built automation tools and led multidisciplinary teams. What I care about long-term is research at the intersection of AI, intelligent decision-making, and human-centred applications, work that has a real footprint, whether that's societal or industrial.

## Research Interests

- Machine learning and AI applied to real time, high stakes decision systems, including energy management, autonomous systems, and intelligent recommendation, where accuracy, speed, and reliability directly affect outcomes.
- AI based forecasting and optimisation methods for renewable energy management, smart grid resilience, and battery storage, supporting improved efficiency and the transition to low carbon systems.
- Trustworthy, verifiable AI assisted software development, with an emphasis on explainability, testability, and reproducibility as AI becomes increasingly embedded in the software development process.
- Distributed, sensor driven intelligent systems, combining machine learning with embedded and IoT architectures to support adaptive, real time decision making.
- Computer vision and deep learning for perception in autonomous and safety critical systems, building on published research in AI based navigation.

## Academic Credentials

- MSc in Software Engineering, University of Westminster, United Kingdom (Distinction), 2024
- BSc in Electronics and Communication Engineering, National University Bangladesh (1st Class: CGPA 3.48/4.00), 2019

## Research Publication

Hasan, M., Islam, F. and Sultana, T. (2024). *Real-Time Fire Navigation System Using Computer Vision and AI.* International Journal of Scientific and Research Publications, 14(6), p.182. [Read paper](https://www.ijsrp.org/research-paper-0624/ijsrp-p15016.pdf)

## Projects

### AI Virtual Try-On for Fashion E-Commerce (Cygnowear Ltd)
- Built a diffusion-based (SDXL/IDM-VTON) virtual try-on pipeline for a denim e-commerce platform, reducing peak inference VRAM by 42.9% (16.28 GB → 9.30 GB) through custom, from-scratch INT8 and INT4 weight quantisation (no third-party quantisation library).
- Benchmarked five configurations end-to-end (VRAM, latency, colour accuracy) and identified that INT8/INT4 preserve output colour while attention slicing and xFormers+upcast both cause colour drift, tracing the root cause to float16 operation-order non-associativity and a CUDA-kernel boundary issue with upcast_attention.
- Halved the minimum production GPU tier (24 GB → 12 GB) and cloud cost (~$1.00/hr A10G → ~$0.50/hr T4) by shipping INT8 as the default configuration, validated across 13 catalogue products.
- Designed the production architecture (FastAPI + Celery/Redis job queue + Docker, GPU worker with concurrency=1) and a batch-testing engine that cut redundant model reloads from 52 to 4 across product/config combinations.

### AI Based Ecommerce Platform
- Built a full-stack platform using ASP.NET Core, Entity Framework & Identity, PostgreSQL, React + TypeScript + Vite, and Flask/Python for ML services.
- Trained and evaluated Random Forest, KNN, SVM, and K-Means on transactional data; selected Random Forest based on accuracy, precision, recall, F1-score, and confusion matrices.
- Developed a Flask-based recommendation API integrated with frontend/backend for real-time product suggestions.
- Applied MVC architecture, UML diagrams, ER models, and OOP principles (abstraction, encapsulation, modularity) for scalable, modular design.
- Conducted unit, integration, and black-box testing of ML endpoints and ensured performance, security, and GDPR compliance for HTTPS and authentication tokens.

## Professional Experience

### AI Engineer — Cygnowear Ltd, London, UK
*November 2025 – Present*
- Built a virtual try-on feature using diffusion models (SDXL/IDM-VTON), cutting GPU memory use nearly in half via custom INT8/INT4 quantisation built from scratch.
- Benchmarked five configurations for speed, memory, and quality, traced a colour-accuracy bug to a low-level GPU floating-point issue, and shipped the setup that kept quality high at a fraction of the memory cost.
- Halved cloud hosting costs by cutting production GPU requirements, validated across the full product catalogue.
- Designed the production backend (API, job queue, containerised GPU workers) and built a testing tool that cut redundant model reloads by over 90%.
- Fine-tuned and evaluated the model against real catalogue images to improve output quality on the business's actual products.
- Partnered with product and design to define how the feature should look and behave, translating requirements into model behaviour.
- Monitored the model in production and retrained or adjusted it as new products and edge cases emerged.

### Software Engineer — Cygnoverse Ltd, London, UK
*July 2025 – November 2025*
- Led a team of 8 software engineers in developing scalable software solutions, contributing to architecture design, algorithm development, and system optimisation.
- Conducted data-driven experimentation and feasibility analysis to guide product decisions, applying machine learning and systems engineering principles.
- Collaborated cross-functionally in a research-style environment, documenting findings and presenting technical insights to stakeholders.

## Technical Skills

**Research & Tools:** Zotero, Mendeley, STATA, LaTeX, MATLAB, SOLIDWORKS, VS Code, NI Multisim, Proteus

**Core ML/DL:** Machine Learning, Deep Learning, Supervised & Unsupervised Learning, Regression, Classification, Random Forest, KNN, SVM, Decision Trees, K-Means Clustering, Convolutional Neural Networks (CNN)

**Frameworks & Libraries:** TensorFlow, Keras, Scikit-learn, Pandas, NumPy, OpenCV

**Generative AI & Agentic Systems:** LLMs, Retrieval-Augmented Generation (RAG), Prompt Engineering, Agentic AI, Multimodal Foundation Models, Vision-Language-Action Models, LangChain, Hugging Face Transformers, Vector Databases, Embeddings

**Trustworthy & Explainable AI:** Explainable AI (XAI), Uncertainty Estimation, Model Evaluation (Accuracy, Precision, Recall, F1-Score, Confusion Matrix, ROC-AUC, Jaccard Index, Log Loss), AI Safety & Verification

**Distributed & Applied AI:** Federated Learning, Graph Neural Networks (GNN), Physics-Informed Machine Learning, Digital Twins, Reinforcement Learning

**Programming & Frameworks:** C#, C, C++, Python, JavaScript, TypeScript, Flutter, SwiftUI, Flask, ASP.NET Core, Entity Framework Core, Identity Framework, React, Axios, RESTful APIs, Swagger, Postman, NUnit, xUnit

**Databases:** MS SQL, PostgreSQL, SQLite

**DevOps & Software Design:** GitHub, Azure, AWS, Docker, Kubernetes, CI/CD, MVC, MVVM, Agile

**Hardware & Embedded Systems:** Raspberry Pi, Arduino, Microcontrollers, Circuit Design, IoT, Network Configuration

## Standardized Test Scores

- GRE: Quant 156 + Verbal 150 + AWA 3.5 — Total: 309.5
- IELTS: CEFR C1 (Proficient), Band Score 7.5 (Expired 2024)

## Leadership & Volunteering

**Chairperson, IEEE ISTT Student Branch** (IEEE Membership 4442091) — *Jan 2019 – Nov 2020*
- Increased membership by 135% (17 to 40 members) and grew branch funds to 26,000 BDT through strategic initiatives.
- Managed budgets and logistics for 23 events, ensuring smooth execution and impactful programming.
- Built and maintained relationships with 15 sponsors and stakeholders, boosting financial support by ~40%.

## Professional Certifications

- IBM Certified AI Engineering Professional, IBM (Coursera) — May 2020
- Building Deep Learning Models with TensorFlow, IBM (Coursera) — May 2020
- Deep Learning Essentials with Keras, IBM (Coursera) — May 2020
- Deep Neural Networks with PyTorch, IBM (Coursera) — May 2020
- Scalable Machine Learning on Big Data using Apache Spark, IBM (Coursera) — May 2020
- Machine Learning with Python, IBM (Coursera) — May 2020
- MikroTik Certified Network Associate (MTCNA), MikroTik — Nov 2020
- National Certified Web Developer (NTVQF) Level-2, Bangladesh Technical Education Board (BTEB) — Dec 2019
- BITM Certified Web Application Developer, BASIS Institute of Technology & Management (BITM) — Dec 2019
- BITM Certified Flutter Android & iOS Application Developer, BITM — Jan 2020
- CADD CORE Certified SOLIDWORKS Professional, CADD CORE — Jul 2020
- Robotic Process Automation (RPA) using UI Path, Edward M. Kennedy Center (EMK) MakerLab — May 2020
