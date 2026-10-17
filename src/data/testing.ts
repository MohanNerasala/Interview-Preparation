import type { Topic } from '../types';

export const testingTopic: Topic = {
  id: 'testing', number: '11', title: 'Software Testing', description: 'Testing types, JUnit, and test-driven development.', icon: 'TestTube',
  subtopics: [{
    id: 'testing-basics', title: 'Testing Fundamentals', description: 'Types of testing and JUnit basics.',
    concepts: [{
      id: 'test-types', title: 'Types of Software Testing', description: 'Unit, integration, and system testing.', difficulty: 'Essential', studyTime: '8 minutes',
      definition: 'Software testing verifies that code works correctly. Types include unit testing, integration testing, and end-to-end testing.',
      interviewAnswer: 'Unit Testing: Tests individual methods/classes in isolation (JUnit, Mockito). Integration Testing: Tests how components work together. System/E2E Testing: Tests the entire application flow. Other types: Regression (after changes), Performance, Security testing.',
      explanation: 'Test pyramid: Many unit tests (fast, cheap), fewer integration tests, fewest E2E tests (slow, expensive).',
      codeExample: '// JUnit 5 Unit Test\n@Test\nvoid testAdd() {\n    Calculator calc = new Calculator();\n    assertEquals(5, calc.add(2, 3));\n}\n\n// Mockito — Mocking dependencies\n@Mock\nprivate ProductRepository repository;\n\n@InjectMocks\nprivate ProductService service;\n\n@Test\nvoid testFindAll() {\n    when(repository.findAll()).thenReturn(List.of(new Product()));\n    List<Product> result = service.findAll();\n    assertEquals(1, result.size());\n}',
      questions: [
        { id: 'test-q1', question: 'What is unit testing?', answer: 'Unit testing tests individual methods or classes in isolation. In Java, JUnit is the standard framework. Tests should be independent, fast, and repeatable. Use Mockito to mock dependencies. Each test method should test one specific behavior and use assertions (assertEquals, assertTrue, assertThrows).', difficulty: 'Essential' },
        { id: 'test-q2', question: 'What is the difference between unit and integration testing?', answer: 'Unit Testing: Tests a single class/method in isolation, mocks dependencies, fast execution, many tests.\nIntegration Testing: Tests multiple components working together, uses real dependencies (database, APIs), slower execution, fewer tests.\nBoth are essential for a well-tested application.', difficulty: 'Essential' },
      ]
    }]
  }]
};
