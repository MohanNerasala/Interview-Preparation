import type { Topic } from '../types';

export const hrTopic: Topic = {
  id: 'hr',
  number: '13',
  title: 'HR Interview Questions',
  description: 'Behavioral questions, why should we hire you, strengths, weaknesses, and situational answers.',
  icon: 'Users',
  subtopics: [
    {
      id: 'hr-questions',
      title: 'HR & Behavioral Round',
      description: 'The most frequent HR interview questions with structured, winning model answers.',
      concepts: [
        {
          id: 'hr-common',
          title: 'HR Round Essentials & Behavioral Questions',
          description: 'Master core HR questions like "Why should we hire you?", strengths/weaknesses, and STAR behavioral answers.',
          difficulty: 'Essential',
          studyTime: '20 minutes',
          definition: 'The HR round evaluates your communication skills, enthusiasm, cultural fit, adaptability, and career alignment.',
          interviewAnswer: 'In HR rounds, interviewers look for authenticity, confidence, and culture fit. Always structure your answers clearly. For behavioral questions, use the STAR method (Situation, Task, Action, Result). Highlight your passion for software development and hands-on project work.',
          explanation: 'Interviewers ask questions like "Why should we hire you?" not just to check your skills, but to see how well you understand the company needs and your own value proposition.',
          questions: [
            {
              id: 'hr-q1',
              question: 'Why should we hire you?',
              answer: 'You should hire me because I bring three key values to your team:\n\n1) Solid Technical Foundation: I have strong fundamentals in Java, Object-Oriented Programming, Spring Boot, SQL, and modern Frontend technologies.\n\n2) Hands-on Practical Experience: Rather than just learning theory, I built end-to-end applications like Menvy (an e-commerce platform with REST APIs, database integration, and an AI outfit preview feature). I know how code moves from development to deployment.\n\n3) Quick Learner & Adaptable: As a fresher, I bring strong energy, curiosity, and a willingness to learn any tool or technology required. I am eager to contribute productively to your team from day one.',
              difficulty: 'Essential',
            },
            {
              id: 'hr-q2',
              question: 'Tell me about yourself.',
              answer: 'Good morning/afternoon, sir/madam. My name is Mohan, and I completed my B.Tech in Computer Science and Engineering in 2026.\n\nI specialize in Java Full Stack development with hands-on expertise in Core Java, Spring Boot, REST APIs, PostgreSQL, HTML/CSS/JavaScript, and React.\n\nDuring my studies, I focused on building real-world software. My key project is Menvy, a full-stack e-commerce application featuring secure authentication, cart workflows, and an AI Outfit Preview feature.\n\nI am passionate about building scalable web solutions and solving problems. I am eager to begin my professional journey in an organization where I can learn, contribute, and grow as a software engineer.',
              difficulty: 'Essential',
            },
            {
              id: 'hr-q3',
              question: 'What is your biggest strength and biggest weakness?',
              answer: 'Strength: My biggest strength is adaptability and fast learning. When I started my project, I had to learn Spring Boot and PostgreSQL on my own. Within weeks, I designed the architecture and delivered working APIs.\n\nWeakness: I sometimes tend to over-analyze code to make it 100% perfect. I have learned to manage this by setting clear milestones and balancing clean code with timely delivery.',
              difficulty: 'Essential',
            },
            {
              id: 'hr-q4',
              question: 'Where do you see yourself in 3 to 5 years?',
              answer: 'In 3 to 5 years, I see myself as a seasoned Full Stack Engineer who can take ownership of complex architectural modules and mentor junior developers. I want to deepen my knowledge of distributed systems, cloud services, and clean system design while consistently delivering business value to the company.',
              difficulty: 'Common',
            },
            {
              id: 'hr-q5',
              question: 'Why do you want to join our company?',
              answer: 'I have been following your company\'s work and admire your emphasis on innovation, high engineering standards, and supportive learning culture. The technologies you work with closely match my interests in Java and full-stack architecture. I believe this is the ideal environment where I can be challenged, contribute meaningfully, and build a long-term career.',
              difficulty: 'Essential',
            },
            {
              id: 'hr-q6',
              question: 'How do you handle pressure, tight deadlines, or stressful situations?',
              answer: 'When facing pressure, I rely on prioritization and clear communication:\n1) I break the large deliverables into smaller actionable tasks.\n2) I rank them by impact and urgency.\n3) If blockers arise, I proactively communicate with team members or seniors rather than waiting until the deadline.\nDuring my final project submission, this structured approach helped me deliver all core features on time without burning out.',
              difficulty: 'Common',
            },
            {
              id: 'hr-q7',
              question: 'Tell me about a challenge you faced during your project and how you solved it. (STAR Method)',
              answer: 'Situation: In my Menvy e-commerce project, the product catalog query was taking too long when filtering by category and size.\nTask: I needed to reduce database response time to under 100ms.\nAction: I analyzed the SQL execution plan, added composite indexes on frequently searched columns (category_id, price), and optimized the JPA queries to avoid N+1 issues.\nResult: The query latency dropped by over 60%, and product pages loaded almost instantly.',
              difficulty: 'Common',
            },
            {
              id: 'hr-q8',
              question: 'Are you open to relocation or working in different shifts?',
              answer: 'Yes, absolutely. As a fresher at the start of my career, I am completely flexible regarding location and work hours. My primary priority is to work with great mentors, gain hands-on industry experience, and contribute to the company\'s success.',
              difficulty: 'Essential',
            },
            {
              id: 'hr-q9',
              question: 'Do you have any questions for us?',
              answer: 'Yes, thank you for asking! I would love to know:\n1) What would a typical first 90 days look like for someone joining this role?\n2) What technology stack or tools will the team be focusing on in the coming quarters?\n3) What qualities distinguish the freshers who excel the most in your engineering team?',
              difficulty: 'Essential',
            },
          ],
        },
      ],
    },
  ],
};
