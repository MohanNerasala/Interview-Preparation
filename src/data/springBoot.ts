import type { Topic } from '../types';

export const springBootTopic: Topic = {
  id: 'spring-boot',
  number: '06',
  title: 'Spring Boot',
  description: 'Spring fundamentals, REST APIs, DI, Security, and database integration.',
  icon: 'Leaf',
  subtopics: [
    {
      id: 'spring-fundamentals',
      title: 'Spring Fundamentals',
      description: 'Core Spring concepts and IoC container.',
      concepts: [
        {
          id: 'sb-what-is-spring', title: 'What is Spring Framework?', description: 'Introduction to Spring and its core modules.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Spring is a comprehensive Java framework for building enterprise applications. It provides IoC, DI, AOP, and many other features.',
          interviewAnswer: 'Spring is a lightweight, open-source Java framework for building enterprise applications. Its core features are Inversion of Control (IoC) and Dependency Injection (DI), which manage object creation and dependencies. Spring provides modules for web (Spring MVC), data (Spring Data), security (Spring Security), and more.',
          explanation: 'Spring simplifies Java development by managing object lifecycles and dependencies. Spring Boot is built on top of Spring and provides auto-configuration and embedded servers.',
          questions: [
            { id: 'sb-q1', question: 'What is the difference between Spring and Spring Boot?', answer: 'Spring: A comprehensive framework requiring manual configuration (XML or Java config), external server setup, and dependency management.\nSpring Boot: Built on top of Spring, provides auto-configuration, embedded servers (Tomcat), starter dependencies, and production-ready features. Spring Boot makes it easy to create stand-alone Spring applications with minimal configuration.', difficulty: 'Essential' },
            { id: 'sb-q2', question: 'What is Inversion of Control (IoC)?', answer: 'IoC is a principle where the control of object creation and dependency management is transferred from the application code to the Spring container. Instead of the developer creating objects manually (new keyword), the Spring IoC container creates and manages them. This promotes loose coupling.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'sb-di', title: 'Dependency Injection', description: 'How Spring manages object dependencies.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'Dependency Injection (DI) is a design pattern where an object\'s dependencies are provided (injected) by an external source rather than created internally.',
          interviewAnswer: 'Dependency Injection means instead of a class creating its own dependencies, they are injected by the Spring container. Three types: 1) Constructor Injection (recommended) — dependencies provided through constructor, 2) Setter Injection — through setter methods, 3) Field Injection — using @Autowired on fields (not recommended for production).',
          explanation: 'DI promotes loose coupling, testability, and maintainability. Constructor injection is preferred because it makes dependencies explicit and supports immutability.',
          codeExample: '// Constructor Injection (Recommended)\n@Service\npublic class ProductService {\n    private final ProductRepository repository;\n\n    @Autowired  // Optional in Spring Boot with single constructor\n    public ProductService(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    public List<Product> getAll() {\n        return repository.findAll();\n    }\n}\n\n// Spring automatically injects ProductRepository',
          questions: [
            { id: 'sb-q3', question: 'What is Dependency Injection?', answer: 'DI is a design pattern where dependencies are provided to a class externally rather than the class creating them. Spring\'s IoC container handles injection. Types:\n1) Constructor Injection: Via constructor (recommended, immutable)\n2) Setter Injection: Via setter methods\n3) Field Injection: Via @Autowired on fields (not recommended)\nBenefits: Loose coupling, testability, maintainability.', difficulty: 'Essential' },
            { id: 'sb-q4', question: 'What are Spring Beans?', answer: 'A Spring Bean is an object managed by the Spring IoC container. Beans are created, configured, and destroyed by the container. They are defined using annotations (@Component, @Service, @Repository, @Controller) or @Bean methods in @Configuration classes. Default scope is Singleton (one instance per container).', difficulty: 'Essential' },
          ]
        }
      ]
    },
    {
      id: 'sb-rest-apis',
      title: 'REST APIs',
      description: 'Building RESTful web services with Spring Boot.',
      concepts: [
        {
          id: 'sb-rest-basics', title: 'REST API Fundamentals', description: 'HTTP methods, endpoints, and RESTful design.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'REST (Representational State Transfer) is an architectural style for building web services that use HTTP methods to perform CRUD operations.',
          interviewAnswer: 'REST APIs use HTTP methods to perform operations on resources: GET (read), POST (create), PUT (update entire resource), PATCH (partial update), DELETE (remove). Resources are identified by URLs. Responses include HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error).',
          explanation: 'RESTful API design principles: Use nouns for URLs (/api/products), HTTP methods for actions, proper status codes, JSON for data exchange, and stateless communication.',
          codeExample: '@RestController\n@RequestMapping("/api/products")\npublic class ProductController {\n\n    @Autowired\n    private ProductService productService;\n\n    @GetMapping\n    public List<Product> getAll() {\n        return productService.findAll();\n    }\n\n    @GetMapping("/{id}")\n    public Product getById(@PathVariable Long id) {\n        return productService.findById(id);\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Product create(@RequestBody Product product) {\n        return productService.save(product);\n    }\n\n    @DeleteMapping("/{id}")\n    public void delete(@PathVariable Long id) {\n        productService.delete(id);\n    }\n}',
          questions: [
            { id: 'sb-q5', question: 'What is a REST API?', answer: 'REST (Representational State Transfer) is an architectural style for web services. REST APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources identified by URLs. They use JSON for data exchange, are stateless (each request is independent), and follow standard HTTP conventions.', difficulty: 'Essential' },
            { id: 'sb-q6', question: 'What is the difference between @Controller and @RestController?', answer: '@Controller: Returns view names (HTML pages), used in MVC applications. Requires @ResponseBody on methods that return data.\n@RestController: Combines @Controller + @ResponseBody. All methods return data (JSON/XML) directly instead of view names. Used for building REST APIs.', difficulty: 'Essential' },
            { id: 'sb-q7', question: 'What are common HTTP status codes?', answer: '200 OK: Request successful.\n201 Created: Resource created successfully.\n204 No Content: Successful but no body.\n400 Bad Request: Invalid client request.\n401 Unauthorized: Authentication required.\n403 Forbidden: Authenticated but not authorized.\n404 Not Found: Resource doesn\'t exist.\n500 Internal Server Error: Server-side error.', difficulty: 'Common' },
          ]
        }
      ]
    },
    {
      id: 'sb-layers',
      title: 'Controller-Service-Repository',
      description: 'Three-layer architecture pattern in Spring Boot.',
      concepts: [
        {
          id: 'sb-three-layer', title: 'Three-Layer Architecture', description: 'How Spring Boot organizes code into layers.', difficulty: 'Essential', studyTime: '10 minutes',
          definition: 'Spring Boot follows a three-layer architecture: Controller (handles HTTP requests), Service (contains business logic), Repository (interacts with database).',
          interviewAnswer: 'Spring Boot applications follow three layers: 1) Controller Layer (@RestController) — handles incoming HTTP requests and returns responses, 2) Service Layer (@Service) — contains business logic and orchestrates operations, 3) Repository Layer (@Repository) — interacts with the database using Spring Data JPA. This separation of concerns makes the code maintainable, testable, and scalable.',
          explanation: 'Request flow:\nClient → HTTP Request → Controller → Service → Repository → Database\nDatabase → Repository → Service → Controller → HTTP Response → Client',
          codeExample: '// Entity\n@Entity\npublic class Product {\n    @Id @GeneratedValue\n    private Long id;\n    private String name;\n    private double price;\n}\n\n// Repository\n@Repository\npublic interface ProductRepository extends JpaRepository<Product, Long> {\n    List<Product> findByNameContaining(String name);\n}\n\n// Service\n@Service\npublic class ProductService {\n    @Autowired\n    private ProductRepository repo;\n\n    public List<Product> findAll() { return repo.findAll(); }\n    public Product save(Product p) { return repo.save(p); }\n}\n\n// Controller\n@RestController\n@RequestMapping("/api/products")\npublic class ProductController {\n    @Autowired\n    private ProductService service;\n\n    @GetMapping\n    public List<Product> getAll() { return service.findAll(); }\n}',
          questions: [
            { id: 'sb-q8', question: 'Explain the three-layer architecture.', answer: 'Controller Layer: Handles HTTP requests/responses, input validation. Uses @RestController.\nService Layer: Contains business logic, transaction management. Uses @Service.\nRepository Layer: Database operations, CRUD. Uses @Repository and extends JpaRepository.\nBenefits: Separation of concerns, testability, maintainability, scalability.', difficulty: 'Essential' },
            { id: 'sb-q9', question: 'What is the difference between @Component, @Service, @Repository, and @Controller?', answer: 'All are specializations of @Component (Spring manages them as beans):\n@Component: Generic Spring bean.\n@Controller/@RestController: Handles HTTP requests (web layer).\n@Service: Business logic (service layer).\n@Repository: Database operations (data layer), adds exception translation.\nUsing specific annotations improves code clarity and enables layer-specific features.', difficulty: 'Essential' },
          ]
        }
      ]
    },
    {
      id: 'sb-security',
      title: 'Security',
      description: 'Spring Security, authentication, JWT, and CORS.',
      concepts: [
        {
          id: 'sb-spring-security', title: 'Spring Security Basics', description: 'Authentication, authorization, and security configuration.', difficulty: 'Common', studyTime: '10 minutes',
          definition: 'Spring Security is a framework that provides authentication (who are you?), authorization (what can you do?), and protection against common attacks.',
          interviewAnswer: 'Spring Security handles authentication (verifying identity) and authorization (checking permissions). It uses filters to intercept requests. Key features: form-based login, HTTP Basic auth, JWT tokens, role-based access control, CSRF protection, CORS configuration, and password encoding (BCrypt).',
          explanation: 'Spring Security works through a chain of filters that process every HTTP request before it reaches the controller.',
          questions: [
            { id: 'sb-q10', question: 'What is Spring Security?', answer: 'Spring Security is a framework for securing Spring applications. It provides:\n1) Authentication: Verifying user identity (login).\n2) Authorization: Checking user permissions (roles).\n3) Protection: Against CSRF, XSS, session fixation.\n4) Password encoding using BCrypt.\n5) Support for JWT, OAuth2, form login, and HTTP Basic auth.', difficulty: 'Essential' },
            { id: 'sb-q11', question: 'What is JWT?', answer: 'JWT (JSON Web Token) is a compact, self-contained token for secure information exchange. Structure: Header.Payload.Signature. The server generates a JWT after login, the client stores it and sends it with every request in the Authorization header. The server validates the token without storing session state (stateless authentication).', difficulty: 'Common' },
            { id: 'sb-q12', question: 'What is CORS?', answer: 'CORS (Cross-Origin Resource Sharing) is a security mechanism that controls which domains can access your API. Browsers block requests from different origins by default. In Spring Boot, configure CORS using @CrossOrigin on controllers or a global CorsConfiguration to allow your frontend (e.g., localhost:5173) to access the backend (e.g., localhost:8080).', difficulty: 'Common' },
          ]
        }
      ]
    },
    {
      id: 'sb-exception-handling',
      title: 'Exception Handling',
      description: 'Global exception handling in Spring Boot.',
      concepts: [
        {
          id: 'sb-global-exception', title: 'Global Exception Handling', description: '@ControllerAdvice and @ExceptionHandler for clean error responses.', difficulty: 'Common', studyTime: '5 minutes',
          definition: 'Spring Boot provides @ControllerAdvice and @ExceptionHandler to handle exceptions globally and return consistent error responses.',
          interviewAnswer: 'Instead of handling exceptions in every controller, use @ControllerAdvice to create a global exception handler. Use @ExceptionHandler methods to catch specific exceptions and return appropriate HTTP status codes and error messages as JSON responses.',
          explanation: 'This centralizes error handling, keeps controllers clean, and ensures consistent error responses across the API.',
          codeExample: '@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    @ResponseStatus(HttpStatus.NOT_FOUND)\n    public Map<String, String> handleNotFound(ResourceNotFoundException ex) {\n        return Map.of("error", ex.getMessage());\n    }\n\n    @ExceptionHandler(Exception.class)\n    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)\n    public Map<String, String> handleGeneral(Exception ex) {\n        return Map.of("error", "Something went wrong");\n    }\n}',
          questions: [
            { id: 'sb-q13', question: 'How do you handle exceptions in Spring Boot?', answer: 'Use @ControllerAdvice (or @RestControllerAdvice) to create a global exception handler class. Inside it, use @ExceptionHandler to handle specific exceptions and return appropriate HTTP status codes and error messages. This centralizes error handling and keeps controllers clean.', difficulty: 'Common' },
          ]
        }
      ]
    }
  ]
};
