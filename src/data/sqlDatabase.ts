import type { Topic } from '../types';

export const sqlDatabaseTopic: Topic = {
  id: 'sql-database',
  number: '04',
  title: 'SQL & Database',
  description: 'Queries, joins, subqueries, and database concepts.',
  icon: 'Database',
  subtopics: [
    {
      id: 'sql-fundamentals',
      title: 'SQL Fundamentals',
      description: 'Basic SQL concepts, commands, and syntax.',
      concepts: [
        {
          id: 'sql-what-is-sql',
          title: 'What is SQL?',
          description: 'Introduction to SQL and relational databases.',
          difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.',
          interviewAnswer: 'SQL is a standard language used to create, read, update, and delete data in relational databases. It is used with database systems like PostgreSQL, MySQL, Oracle, and SQL Server.',
          explanation: 'SQL is divided into: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK).',
          questions: [
            { id: 'sql-q1', question: 'What are the types of SQL commands?', answer: 'DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE — defines structure.\nDML (Data Manipulation Language): INSERT, UPDATE, DELETE — manipulates data.\nDQL (Data Query Language): SELECT — retrieves data.\nDCL (Data Control Language): GRANT, REVOKE — manages permissions.\nTCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT — manages transactions.', difficulty: 'Essential' },
            { id: 'sql-q2', question: 'What is the difference between DELETE, TRUNCATE, and DROP?', answer: 'DELETE: Removes specific rows, can use WHERE, can be rolled back, slow (logs each row).\nTRUNCATE: Removes all rows, cannot use WHERE, cannot be rolled back (DDL), fast.\nDROP: Removes the entire table structure and data permanently.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'sql-keys-constraints',
          title: 'Keys and Constraints',
          description: 'Primary key, foreign key, unique, not null, and check constraints.',
          difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'Keys uniquely identify rows. Constraints enforce rules on data.',
          interviewAnswer: 'A Primary Key uniquely identifies each row and cannot be null. A Foreign Key creates a relationship between two tables by referencing the primary key of another table. Other constraints include UNIQUE (no duplicates), NOT NULL (mandatory value), CHECK (validates condition), and DEFAULT (sets a default value).',
          explanation: 'Keys and constraints ensure data integrity and define relationships between tables.',
          codeExample: 'CREATE TABLE employees (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    age INT CHECK (age >= 18),\n    department_id INT REFERENCES departments(id),\n    salary DECIMAL DEFAULT 30000.00\n);',
          questions: [
            { id: 'sql-q3', question: 'What is the difference between Primary Key and Foreign Key?', answer: 'Primary Key: Uniquely identifies each row in a table, cannot be null, only one per table.\nForeign Key: References the primary key of another table, can be null, can have multiple in a table. Foreign keys create relationships between tables.', difficulty: 'Essential' },
            { id: 'sql-q4', question: 'What is the difference between UNIQUE and PRIMARY KEY?', answer: 'Both prevent duplicate values. However: Primary Key does not allow NULL and there can be only one per table. UNIQUE allows one NULL value (in most databases) and there can be multiple UNIQUE constraints per table.', difficulty: 'Common' },
          ]
        }
      ]
    },
    {
      id: 'sql-joins',
      title: 'Joins',
      description: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, and CROSS JOIN.',
      concepts: [
        {
          id: 'sql-joins-all',
          title: 'SQL Joins',
          description: 'Combining data from multiple tables using joins.',
          difficulty: 'Essential', studyTime: '10 minutes',
          definition: 'SQL Joins combine rows from two or more tables based on a related column between them.',
          interviewAnswer: 'INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right (NULL for no match). RIGHT JOIN returns all rows from the right table. FULL JOIN returns all rows from both tables. CROSS JOIN returns the Cartesian product.',
          explanation: 'Joins are fundamental for querying related data across tables. The join condition is typically a foreign key relationship.',
          codeExample: '-- INNER JOIN: Only matching records\nSELECT e.name, d.department_name\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id;\n\n-- LEFT JOIN: All employees, even without departments\nSELECT e.name, d.department_name\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id;\n\n-- RIGHT JOIN: All departments, even without employees\nSELECT e.name, d.department_name\nFROM employees e\nRIGHT JOIN departments d ON e.department_id = d.id;',
          questions: [
            { id: 'sql-q5', question: 'What is the difference between INNER JOIN and LEFT JOIN?', answer: 'INNER JOIN returns only rows that have matching values in both tables. If an employee has no department, that row is excluded.\nLEFT JOIN returns all rows from the left table, even if there is no match in the right table. Unmatched right-side columns show NULL.', difficulty: 'Essential' },
            { id: 'sql-q6', question: 'What is a CROSS JOIN?', answer: 'A CROSS JOIN returns the Cartesian product of two tables — every row from table A is combined with every row from table B. If A has 3 rows and B has 4 rows, the result has 12 rows. It has no ON condition.', difficulty: 'Common' },
            { id: 'sql-q7', question: 'What is a self-join?', answer: 'A self-join is when a table is joined with itself. It is used to find relationships within the same table, such as finding employees and their managers when both are in the employees table.\nExample: SELECT e.name, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', difficulty: 'Common' },
          ]
        }
      ]
    },
    {
      id: 'sql-subqueries',
      title: 'Subqueries',
      description: 'Nested queries, correlated subqueries, and EXISTS.',
      concepts: [
        {
          id: 'sql-subquery-basics',
          title: 'Subqueries',
          description: 'Using queries within queries for complex data retrieval.',
          difficulty: 'Common', studyTime: '8 minutes',
          definition: 'A subquery is a query nested inside another query. It can return a single value, a list, or a table.',
          interviewAnswer: 'A subquery is a query within another query. It can be used in SELECT, FROM, or WHERE clauses. A correlated subquery references the outer query and executes once for each row. A non-correlated subquery is independent of the outer query.',
          explanation: 'Subqueries are powerful for complex data retrieval. Common uses: finding the max/min values, comparing with aggregates, checking existence.',
          codeExample: '-- Find employees with salary above average\nSELECT name, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Second highest salary\nSELECT MAX(salary) AS second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n\n-- Using IN\nSELECT name FROM employees\nWHERE department_id IN (\n    SELECT id FROM departments WHERE location = \'New York\'\n);',
          questions: [
            { id: 'sql-q8', question: 'How do you find the second highest salary?', answer: 'Method 1 — Subquery:\nSELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);\n\nMethod 2 — LIMIT/OFFSET:\nSELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;\n\nMethod 3 — DENSE_RANK:\nSELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rank FROM employees) t WHERE rank = 2;', difficulty: 'Essential' },
            { id: 'sql-q9', question: 'What is the difference between correlated and non-correlated subquery?', answer: 'Non-correlated: Executes once independently, result is used by the outer query.\nCorrelated: References the outer query, executes once for each row of the outer query. Slower but more flexible.\nExample of correlated: SELECT * FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);', difficulty: 'Common' },
          ]
        }
      ]
    },
    {
      id: 'database-concepts',
      title: 'Database Concepts',
      description: 'Normalization, indexes, transactions, and ACID properties.',
      concepts: [
        {
          id: 'sql-normalization',
          title: 'Normalization & Database Design',
          description: 'Organizing data to reduce redundancy.',
          difficulty: 'Common', studyTime: '8 minutes',
          definition: 'Normalization is the process of organizing a database to reduce data redundancy and improve data integrity.',
          interviewAnswer: 'Normalization organizes data into tables to minimize redundancy. 1NF: No repeating groups, atomic values. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies. Most applications aim for 3NF.',
          explanation: 'Normal forms build on each other. Each level removes a specific type of redundancy.',
          questions: [
            { id: 'sql-q13', question: 'What is normalization?', answer: 'Normalization organizes database tables to reduce redundancy and dependency.\n1NF: Atomic values, no repeating groups.\n2NF: 1NF + all non-key columns fully depend on the primary key.\n3NF: 2NF + no transitive dependencies (non-key columns don\'t depend on other non-key columns).\nMost databases are designed in 3NF for a balance of normalization and performance.', difficulty: 'Common' },
            { id: 'sql-q14', question: 'What are indexes and why are they important?', answer: 'An index is a data structure that speeds up data retrieval on a table. It works like a book index — instead of scanning every row, the database uses the index to find data quickly. Indexes improve SELECT performance but slow down INSERT/UPDATE/DELETE because the index must also be updated.', difficulty: 'Common' },
            { id: 'sql-q15', question: 'What are ACID properties?', answer: 'ACID ensures reliable database transactions:\nAtomicity: All operations succeed or all fail (no partial updates).\nConsistency: Database moves from one valid state to another.\nIsolation: Concurrent transactions don\'t interfere with each other.\nDurability: Committed data is permanently saved, even after a crash.', difficulty: 'Essential' },
          ]
        }
      ]
    }
  ]
};
