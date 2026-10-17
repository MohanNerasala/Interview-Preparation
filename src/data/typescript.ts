import type { Topic } from '../types';

export const typescriptTopic: Topic = {
  id: 'typescript',
  number: '09',
  title: 'TypeScript',
  description: 'Types, interfaces, generics, and typed React development.',
  icon: 'FileType',
  subtopics: [
    {
      id: 'ts-fundamentals',
      title: 'TypeScript Fundamentals',
      description: 'Types, interfaces, generics, and TypeScript with React.',
      concepts: [
        {
          id: 'ts-basics', title: 'TypeScript Basics', description: 'Types, type inference, and type annotations.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, adding static type checking.',
          interviewAnswer: 'TypeScript adds static typing to JavaScript. It catches errors at compile time, improves code quality, and enhances IDE support. Key features: type annotations, interfaces, generics, union/intersection types, enums, and type inference. TypeScript compiles to JavaScript and runs anywhere JavaScript runs.',
          explanation: 'TypeScript makes JavaScript more predictable and maintainable, especially in large codebases.',
          codeExample: '// Basic types\nlet name: string = "Mohan";\nlet age: number = 22;\nlet isStudent: boolean = true;\nlet skills: string[] = ["Java", "React"];\n\n// Interface\ninterface User {\n    id: number;\n    name: string;\n    email: string;\n    age?: number;  // Optional\n}\n\n// Function with types\nfunction greet(user: User): string {\n    return `Hello, ${user.name}!`;\n}\n\n// Union type\ntype Status = "active" | "inactive" | "pending";',
          questions: [
            { id: 'ts-q1', question: 'What is TypeScript and why use it?', answer: 'TypeScript is a typed superset of JavaScript by Microsoft. Benefits: 1) Static type checking catches errors at compile time. 2) Better IDE support (autocomplete, refactoring). 3) Self-documenting code through types. 4) Easier maintenance of large codebases. 5) Works with existing JavaScript code.', difficulty: 'Essential' },
            { id: 'ts-q2', question: 'What is the difference between interface and type alias?', answer: 'Both define object shapes. Interfaces can be extended with "extends" and are open (can be merged). Type aliases use "type" keyword, support unions and intersections, and are closed (cannot be merged). Use interface for object shapes and public APIs, type for unions, intersections, and complex types.', difficulty: 'Common' },
            { id: 'ts-q3', question: 'What is the difference between any and unknown?', answer: 'any: Disables type checking entirely. Any operation is allowed. Avoid in production code.\nunknown: Type-safe counterpart of any. You must narrow the type before using it (with typeof, instanceof, or type guards). Prefer unknown over any when the type is truly unknown.', difficulty: 'Common' },
            { id: 'ts-q4', question: 'What are generics?', answer: 'Generics allow creating reusable components that work with multiple types while maintaining type safety. They use type parameters (T, U, etc.).\nExample: function identity<T>(value: T): T { return value; }\nidentity<string>("hello") — T is string.\nGenerics are used extensively in React (useState<string>) and API calls.', difficulty: 'Common' },
          ]
        }
      ]
    }
  ]
};
