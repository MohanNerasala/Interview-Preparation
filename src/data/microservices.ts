import type { Topic } from '../types';

export const microservicesTopic: Topic = {
  id: 'microservices', number: '12', title: 'Microservices Basics', description: 'Microservices architecture, API Gateway, and service discovery.', icon: 'Network',
  subtopics: [{
    id: 'ms-basics', title: 'Microservices Fundamentals', description: 'Architecture patterns and key concepts.',
    concepts: [{
      id: 'ms-overview', title: 'Microservices Architecture', description: 'What are microservices and how they differ from monoliths.', difficulty: 'Common', studyTime: '10 minutes',
      definition: 'Microservices is an architectural style where an application is composed of small, independent services that communicate via APIs.',
      interviewAnswer: 'Microservices architecture breaks an application into small, independent services. Each service has its own database, can be deployed independently, and communicates via REST APIs or messaging. Benefits: independent deployment, technology flexibility, scalability. Challenges: complexity, data consistency, network latency.',
      explanation: 'Monolith: One large application. Microservices: Multiple small services. Each microservice handles one business capability.',
      questions: [
        { id: 'ms-q1', question: 'What are microservices?', answer: 'Microservices is an architecture where the application is divided into small, independent services. Each service: 1) Handles one business function. 2) Has its own database. 3) Can be deployed independently. 4) Communicates via APIs. Benefits: scalability, independent deployment, technology diversity. Example: User Service, Product Service, Order Service.', difficulty: 'Essential' },
        { id: 'ms-q2', question: 'What is the difference between monolithic and microservices architecture?', answer: 'Monolithic: Single deployable unit, shared database, tightly coupled, simple to start, hard to scale.\nMicroservices: Multiple services, each with own database, loosely coupled, complex to manage, easy to scale independently.\nStart with monolith for small projects, consider microservices for large, complex applications.', difficulty: 'Essential' },
        { id: 'ms-q3', question: 'What is an API Gateway?', answer: 'An API Gateway is a single entry point for all client requests in a microservices architecture. It routes requests to appropriate services, handles cross-cutting concerns like authentication, rate limiting, logging, and load balancing. Examples: Spring Cloud Gateway, Netflix Zuul, Kong.', difficulty: 'Common' },
      ]
    }]
  }]
};
