import type { Topic } from '../types';

export const projectExplanationTopic: Topic = {
  id: 'project-explanation',
  number: '02',
  title: 'Project Explanation',
  description: 'Explain Menvy, its architecture, features, and technologies.',
  icon: 'FolderKanban',
  subtopics: [
    {
      id: 'menvy-overview',
      title: 'Project Overview',
      description: 'Menvy project name, overview, problem statement, and objective.',
      concepts: [
        {
          id: 'pe-project-name',
          title: 'Menvy Project — Best Interview Answer (60–90 Seconds)',
          description: 'A structured 60–90 second pitch explaining Menvy architecture, tech stack, and key features.',
          difficulty: 'Essential',
          studyTime: '5 minutes',
          definition: "Menvy is an AI-powered Men's Fashion E-Commerce platform built with React.js, TypeScript, Spring Boot, and Supabase PostgreSQL.",
          interviewAnswer: "Sir, my project name is Menvy – AI-Powered Men's Fashion E-Commerce Platform.\n\nThe main objective of this project is to provide users with a better, more interactive online shopping experience for men's fashion.\n\nI developed the frontend using React.js and TypeScript, the backend using Java and Spring Boot, and used Supabase PostgreSQL for database management.\n\nKey features include product browsing, search, product details, shopping cart functionality, user authentication, and Google OAuth2 login.\n\nThe standout feature is AI Outfit Preview, which helps users visualize complete outfit combinations and make confident fashion choices.\n\nIn this project, the frontend communicates with the backend through REST APIs, and Spring Boot handles business logic, security, and database operations.\n\nThis project gave me valuable practical experience in full-stack development, REST API integration, authentication, and database connectivity.\n\nThank you, sir.",
          explanation: 'Deliver this answer with confidence in 60 to 90 seconds. It covers the project objective, tech stack, key features, standout AI capability, architectural flow, and your learnings.',
          realWorldExample: "Think of Menvy as a modern men's fashion e-commerce platform with a smart AI outfit preview feature.",
          questions: [
            {
              id: 'pe-q1',
              question: 'Tell me about your project.',
              answer: "Sir, my project name is Menvy – AI-Powered Men's Fashion E-Commerce Platform.\n\nThe main objective of this project is to provide users with a better, more interactive online shopping experience for men's fashion.\n\nI developed the frontend using React.js and TypeScript, the backend using Java and Spring Boot, and used Supabase PostgreSQL for database management.\n\nKey features include product browsing, search, product details, shopping cart functionality, user authentication, and Google OAuth2 login.\n\nThe standout feature is AI Outfit Preview, which helps users visualize complete outfit combinations and make confident fashion choices.\n\nIn this project, the frontend communicates with the backend through REST APIs, and Spring Boot handles business logic, security, and database operations.\n\nThis project gave me valuable practical experience in full-stack development, REST API integration, authentication, and database connectivity.\n\nThank you, sir.",
              difficulty: 'Essential'
            },
            { id: 'pe-q2', question: 'Why did you choose this project?', answer: 'I chose this project because e-commerce involves all core full-stack concepts — authentication, CRUD operations, database design, REST API integration, and responsive UI. It gave me hands-on experience with real-world development challenges.', difficulty: 'Essential' },
            { id: 'pe-q3', question: 'What problem does it solve?', answer: 'It solves the problem of online clothing shopping uncertainty. Users often struggle to visualize how different clothing items look together. The AI Outfit Preview feature helps users see shirt and pant combinations before purchasing, reducing returns and improving the shopping experience.', difficulty: 'Common' }
          ]
        },
        {
          id: 'pe-tech-used',
          title: 'Technologies Used',
          description: 'Frontend, backend, database, and tools used in Menvy.',
          difficulty: 'Essential',
          studyTime: '5 minutes',
          definition: 'Menvy uses a modern tech stack: React.js with TypeScript for the frontend, Spring Boot with Java for the backend, PostgreSQL for the database, and REST APIs for communication.',
          interviewAnswer: 'For the frontend, I used React.js with TypeScript for type-safe, component-based UI development. For the backend, I used Spring Boot with Java to build RESTful APIs. PostgreSQL serves as the relational database. I used Spring Data JPA for database operations, Spring Security for authentication, and Git for version control.',
          explanation: 'Each technology was chosen for a specific reason:\n- React.js: Component-based architecture, virtual DOM for performance\n- TypeScript: Type safety, better developer experience\n- Spring Boot: Rapid backend development, built-in features\n- PostgreSQL: Robust relational database, great for e-commerce data\n- REST APIs: Standard communication between frontend and backend',
          questions: [
            { id: 'pe-q4', question: 'Which technologies did you use?', answer: 'Frontend: React.js, TypeScript, CSS. Backend: Spring Boot, Java. Database: PostgreSQL. ORM: Spring Data JPA / Hibernate. Security: Spring Security. Version Control: Git & GitHub.', difficulty: 'Essential' },
            { id: 'pe-q5', question: 'Why did you use React.js?', answer: 'I chose React because of its component-based architecture, which makes the UI modular and reusable. The virtual DOM improves performance, and the large ecosystem provides libraries for routing, state management, and more.', difficulty: 'Common' },
            { id: 'pe-q6', question: 'Why did you use Spring Boot?', answer: 'Spring Boot simplifies backend development with auto-configuration, embedded servers, and production-ready features. It integrates well with Spring Data JPA for database operations and Spring Security for authentication.', difficulty: 'Common' }
          ]
        }
      ]
    },
    {
      id: 'menvy-features',
      title: 'Main Features',
      description: 'Core features, AI Outfit Preview, and authentication flow.',
      concepts: [
        {
          id: 'pe-main-features',
          title: 'Core Features',
          description: 'User authentication, product management, shopping cart, and checkout.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: 'Menvy includes user registration and login, product browsing with categories, a persistent shopping cart, and a checkout process.',
          interviewAnswer: 'Menvy has several core features: User Authentication with registration and login using Spring Security, Product Management where admins can add and manage products, a Shopping Cart that persists across sessions, Product Categories for organized browsing, and Responsive Design that works on both desktop and mobile.',
          explanation: 'Each feature represents a real-world requirement in e-commerce applications. The authentication system ensures secure access, the product catalog supports browsing, and the cart system allows users to build their orders before checkout.',
          questions: [
            { id: 'pe-q7', question: 'What are the main features of your project?', answer: 'The main features include: 1) User Registration & Login with Spring Security, 2) Product Catalog with categories, 3) Shopping Cart with add/remove/update functionality, 4) AI Outfit Preview for visualizing clothing combinations, 5) Responsive design for all devices, 6) Database integration with PostgreSQL.', difficulty: 'Essential' },
            { id: 'pe-q8', question: 'What happens when a user adds a product to the cart?', answer: 'When a user clicks "Add to Cart", the frontend sends a POST request to the Spring Boot REST API. The controller receives the request, the service layer processes the business logic (checking stock, calculating totals), and the repository layer saves the cart item to the PostgreSQL database. The updated cart is returned to the frontend and displayed.', difficulty: 'Common' }
          ]
        },
        {
          id: 'pe-ai-outfit',
          title: 'AI Outfit Preview',
          description: 'The unique feature that combines shirts and pants for outfit visualization.',
          difficulty: 'Common',
          studyTime: '5 minutes',
          definition: 'The AI Outfit Preview is a feature that allows users to select a shirt and a pant from the catalog and see them combined as a complete outfit before making a purchase.',
          interviewAnswer: 'The AI Outfit Preview feature allows users to pick a shirt and a pant from the product catalog and visualize them as a complete outfit. This helps users make better purchase decisions by seeing how items look together before buying. It provides a smooth, interactive experience across desktop and mobile.',
          explanation: 'This feature differentiates Menvy from typical e-commerce projects. It demonstrates creative problem-solving and the ability to implement interactive, user-focused features.',
          questions: [
            { id: 'pe-q9', question: 'How does the AI Outfit Preview work?', answer: 'Users select a shirt and a pant from the catalog. The application combines their images and displays them as a complete outfit preview. Users can mix and match different items to find combinations they like before adding them to the cart.', difficulty: 'Common' },
            { id: 'pe-q10', question: 'What makes your project unique?', answer: 'The AI Outfit Preview feature makes Menvy unique. Unlike typical e-commerce projects that only show individual products, Menvy lets users visualize how different clothing items look together, solving a real user problem in online fashion shopping.', difficulty: 'Common' }
          ]
        }
      ]
    },
    {
      id: 'menvy-architecture',
      title: 'Architecture & Workflow',
      description: 'Project architecture, frontend-backend communication, and database design.',
      concepts: [
        {
          id: 'pe-architecture',
          title: 'Project Architecture',
          description: 'How the frontend, backend, and database connect and communicate.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: 'Menvy follows a three-tier architecture: React.js frontend, Spring Boot backend, and PostgreSQL database, communicating via REST APIs.',
          interviewAnswer: 'Menvy follows a three-tier architecture. The React.js frontend handles the user interface and sends HTTP requests to the Spring Boot backend via REST APIs. The backend follows the Controller-Service-Repository pattern: Controllers handle requests, Services contain business logic, and Repositories interact with the PostgreSQL database using Spring Data JPA.',
          explanation: 'Architecture diagram:\n\nReact + TypeScript (Frontend)\n  ↓ HTTP Requests (REST API)\nSpring Boot Controller\n  ↓\nService Layer (Business Logic)\n  ↓\nRepository / JPA (Data Access)\n  ↓\nPostgreSQL (Database)\n\nThis separation of concerns makes the code maintainable, testable, and scalable.',
          codeExample: '// Controller Example\n@RestController\n@RequestMapping("/api/products")\npublic class ProductController {\n\n    @Autowired\n    private ProductService productService;\n\n    @GetMapping\n    public List<Product> getAllProducts() {\n        return productService.getAllProducts();\n    }\n\n    @PostMapping\n    public Product createProduct(@RequestBody Product product) {\n        return productService.saveProduct(product);\n    }\n}',
          questions: [
            { id: 'pe-q11', question: 'Explain the architecture of your project.', answer: 'Menvy uses a three-tier architecture: 1) Frontend (React + TypeScript) for the UI, 2) Backend (Spring Boot) for REST APIs and business logic using Controller-Service-Repository pattern, 3) Database (PostgreSQL) for data storage accessed through Spring Data JPA/Hibernate.', difficulty: 'Essential' },
            { id: 'pe-q12', question: 'How does the frontend communicate with the backend?', answer: 'The React frontend communicates with the Spring Boot backend using REST APIs over HTTP. It uses the Fetch API or Axios to send GET, POST, PUT, and DELETE requests to specific API endpoints. The backend processes these requests and returns JSON responses.', difficulty: 'Essential' },
            { id: 'pe-q13', question: 'How does the database connection work?', answer: 'Spring Boot connects to PostgreSQL through Spring Data JPA. The connection details (URL, username, password) are configured in application.properties. JPA/Hibernate handles the ORM mapping between Java entities and database tables. Repository interfaces provide CRUD operations without writing SQL.', difficulty: 'Common' },
            { id: 'pe-q14', question: 'How does authentication work in your project?', answer: 'Authentication is handled by Spring Security. When a user registers, their password is encrypted using BCrypt. During login, Spring Security verifies the credentials. A session or token is created for authenticated users, allowing them to access protected endpoints.', difficulty: 'Common' }
          ]
        },
        {
          id: 'pe-challenges',
          title: 'Challenges & Learnings',
          description: 'Challenges faced during development and what was learned.',
          difficulty: 'Common',
          studyTime: '5 minutes',
          definition: 'Every project involves challenges. Being able to articulate what went wrong and how you solved it shows problem-solving ability.',
          interviewAnswer: 'The main challenges I faced were: integrating Spring Security with the React frontend for authentication, handling CORS issues between the frontend and backend running on different ports, designing the database schema for products, users, and cart items, and making the UI responsive across devices. I solved these by reading documentation, debugging systematically, and testing each component independently.',
          explanation: 'Interviewers ask about challenges to evaluate your problem-solving process, not just the final result. Always describe: 1) What the challenge was, 2) Why it was difficult, 3) How you solved it, 4) What you learned.',
          questions: [
            { id: 'pe-q15', question: 'What challenges did you face?', answer: 'Key challenges included: 1) CORS configuration between React (port 5173) and Spring Boot (port 8080), 2) Setting up Spring Security with proper authentication flow, 3) Designing database relationships between users, products, and cart items, 4) Making the AI Outfit Preview feature responsive across devices.', difficulty: 'Common' },
            { id: 'pe-q16', question: 'What did you learn from this project?', answer: 'I learned full-stack development end-to-end: building responsive UIs with React, creating REST APIs with Spring Boot, managing databases with JPA, implementing security, and deploying applications. I also improved my debugging skills and learned to break complex features into smaller, manageable tasks.', difficulty: 'Common' },
            { id: 'pe-q17', question: 'What would you improve in your project?', answer: 'I would add: 1) JWT-based authentication for stateless sessions, 2) Payment gateway integration, 3) Product search and filtering, 4) Order tracking, 5) Admin dashboard for analytics, 6) Automated testing with JUnit and React Testing Library.', difficulty: 'Common' }
          ]
        }
      ]
    }
  ]
};
