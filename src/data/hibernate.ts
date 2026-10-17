import type { Topic } from '../types';

export const hibernateTopic: Topic = {
  id: 'hibernate',
  number: '07',
  title: 'Hibernate & JPA',
  description: 'ORM, entity mapping, relationships, and JPA queries.',
  icon: 'Layers',
  subtopics: [
    {
      id: 'hibernate-basics',
      title: 'Hibernate & JPA Fundamentals',
      description: 'ORM concepts, entity mapping, and JPA basics.',
      concepts: [
        {
          id: 'hb-orm', title: 'What is ORM and Hibernate?', description: 'Object-Relational Mapping and Hibernate framework.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'ORM maps Java objects to database tables. Hibernate is the most popular JPA implementation.',
          interviewAnswer: 'ORM (Object-Relational Mapping) maps Java objects to database tables automatically. JPA (Java Persistence API) is a specification that defines how ORM should work. Hibernate is the most popular implementation of JPA. Instead of writing SQL, you work with Java objects and Hibernate generates the SQL.',
          explanation: 'JPA is the interface, Hibernate is the implementation. Spring Data JPA simplifies JPA further with repository abstractions.',
          codeExample: '@Entity\n@Table(name = "products")\npublic class Product {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private String name;\n\n    private double price;\n\n    @ManyToOne\n    @JoinColumn(name = "category_id")\n    private Category category;\n}',
          questions: [
            { id: 'hb-q1', question: 'What is the difference between JPA and Hibernate?', answer: 'JPA is a specification (interface) that defines ORM standards in Java. Hibernate is an implementation of JPA — it provides the actual code that does the ORM work. JPA defines annotations like @Entity, @Table, @Id. Hibernate implements these and adds extra features like caching and HQL.', difficulty: 'Essential' },
            { id: 'hb-q2', question: 'What is the difference between lazy and eager loading?', answer: 'Lazy Loading: Related data is loaded only when accessed (on-demand). Default for @OneToMany and @ManyToMany.\nEager Loading: Related data is loaded immediately with the main entity. Default for @ManyToOne and @OneToOne.\nLazy loading improves performance by avoiding unnecessary queries but can cause LazyInitializationException if accessed outside a session.', difficulty: 'Essential' },
            { id: 'hb-q3', question: 'What is the N+1 problem?', answer: 'The N+1 problem occurs when loading a list of N entities triggers N additional queries to load related entities (one query for the list + N queries for relationships). Solution: Use JOIN FETCH in JPQL, @EntityGraph, or batch fetching to load related data in fewer queries.', difficulty: 'Common' },
            { id: 'hb-q4', question: 'What are cascade types in JPA?', answer: 'Cascade types propagate operations from parent to child entities:\nCascadeType.PERSIST: Save child when parent is saved.\nCascadeType.MERGE: Update child when parent is updated.\nCascadeType.REMOVE: Delete child when parent is deleted.\nCascadeType.ALL: All operations cascade.\nUse carefully — CascadeType.REMOVE can accidentally delete data.', difficulty: 'Common' },
          ]
        }
      ]
    }
  ]
};
