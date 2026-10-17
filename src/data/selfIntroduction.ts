import type { Topic } from '../types';

export const selfIntroductionTopic: Topic = {
  id: 'self-introduction',
  number: '01',
  title: 'Self-Introduction',
  description: 'Prepare a confident 60–90 second introduction for your interview.',
  icon: 'User',
  subtopics: [
    {
      id: 'self-intro-main',
      title: 'Self Introduction',
      description: 'Your 60–90 second introduction and common personal questions.',
      concepts: [
        {
          id: 'self-intro-speech',
          title: 'Self Introduction — 60–90 Seconds',
          description: 'A structured, confident introduction to deliver at the start of any interview.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: 'A self-introduction is a brief, structured speech that covers your name, education, skills, projects, and career goals. It is the first impression you make on the interviewer.',
          interviewAnswer: 'Good morning, sir/madam.\n\nMy name is Mohan, and I completed my Bachelor\'s degree in Computer Science and Engineering in 2026 from Audisankara College of Engineering and Technology.\n\nI have a strong interest in full-stack web development. My technical skills include Java, HTML, CSS, JavaScript, and SQL. I enjoy learning new technologies and building real-world applications.\n\nTo gain practical experience, I have developed multiple full-stack projects from development to deployment. One of my major projects is Menvy, a full-stack e-commerce application. It includes features such as user authentication, product management, shopping cart, and database integration. One of its key highlights is an AI-powered Outfit Preview feature that allows users to combine shirts and pants to visualize complete outfit combinations before purchasing, with a smooth and responsive experience across both desktop and mobile devices.\n\nCurrently, I am strengthening my Java and Data Structures & Algorithms skills to improve my coding and problem-solving abilities.\n\nI am a quick learner, adaptable to new technologies, and passionate about building software that solves real-world problems. As a fresher, I am excited to start my career where I can contribute, learn from experienced professionals, and continue growing as a software developer.\n\nThank you.',
          explanation: 'A good self-introduction should be between 60–90 seconds. It should flow naturally, covering who you are, what you studied, what skills you have, what you built, and what your goals are. Avoid reading it—practice it until it sounds conversational.',
          realWorldExample: 'Think of it like an elevator pitch. If you had 90 seconds with a hiring manager, this is exactly what you would say.',
          commonMistakes: [
            'Speaking too fast or too slowly',
            'Forgetting to mention your project',
            'Being too vague about skills',
            'Not having a clear ending',
            'Memorizing word-by-word instead of understanding the flow'
          ],
          followUpQuestions: [
            'Can you tell me more about your project?',
            'Why did you choose full-stack development?',
            'What is your strongest technical skill?'
          ],
          questions: [
            {
              id: 'si-q1',
              question: 'Tell me about yourself.',
              answer: 'Use the 60–90 second introduction above. Start with your name, education, skills, projects, and career goals. Keep it structured and confident.',
              difficulty: 'Essential'
            },
            {
              id: 'si-q2',
              question: 'What are your technical skills?',
              answer: 'My technical skills include Java, HTML, CSS, JavaScript, SQL, React.js, TypeScript, and Spring Boot. I also have experience with PostgreSQL, Git, and REST APIs through my project work.',
              difficulty: 'Essential'
            },
            {
              id: 'si-q3',
              question: 'What is your biggest strength?',
              answer: 'My biggest strength is my ability to learn quickly and apply new technologies practically. For example, while building my project Menvy, I learned React.js, Spring Boot, and PostgreSQL and integrated them into a full-stack application with features like authentication and an AI-powered Outfit Preview.',
              difficulty: 'Common'
            },
            {
              id: 'si-q4',
              question: 'Why should we hire you?',
              answer: 'You should hire me because I am a dedicated fresher with hands-on project experience in full-stack development. I have built real applications, I understand both frontend and backend technologies, and I am eager to learn and contribute to your team from day one.',
              difficulty: 'Common'
            },
            {
              id: 'si-q5',
              question: 'What are your career goals?',
              answer: 'In the short term, I want to join a team where I can work on real-world projects, learn best practices, and grow as a Java Full Stack Developer. In the long term, I aim to become a senior developer who can design scalable systems and mentor junior developers.',
              difficulty: 'Common'
            },
            {
              id: 'si-q6',
              question: 'What are you currently learning?',
              answer: 'I am currently strengthening my Java and Data Structures & Algorithms skills. I practice coding problems regularly to improve my problem-solving abilities. I am also deepening my understanding of Spring Boot and system design concepts.',
              difficulty: 'Common'
            }
          ]
        }
      ]
    }
  ]
};
