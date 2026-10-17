// ========================================================
// SQL INTERVIEW PREPARATION DATA
// 8 Categories | 43 Real-World Questions & SQL Queries
// ========================================================

export interface SqlQuestion {
  id: string;
  category: 
    | 'SQL Basics'
    | 'Keys & Constraints'
    | 'SQL Joins'
    | 'Subqueries'
    | 'GROUP BY & Aggregates'
    | 'Common Interview Queries'
    | 'Normalization & Design'
    | 'Indexes & Performance';
  number: number;
  title: string;
  isQuery: boolean;
  question: string;
  answer?: string;
  sampleTable?: string;
  query?: string;
  expectedOutput?: string;
  explanation?: string;
}

export interface SqlCategory {
  name: string;
  questionCount: number;
  description: string;
  questions: SqlQuestion[];
}

export const sqlPrepCategories: SqlCategory[] = [
  // ----------------------------------------------------
  // 1. SQL BASICS (5 Questions)
  // ----------------------------------------------------
  {
    name: 'SQL Basics',
    questionCount: 5,
    description: 'Core SQL language commands, database vs management system, and filtering syntax.',
    questions: [
      {
        id: 'sql-1',
        category: 'SQL Basics',
        number: 1,
        title: 'What is SQL?',
        isQuery: false,
        question: 'What is SQL and what is it used for?',
        answer: 'SQL (Structured Query Language) is the standard programming language used to store, manipulate, retrieve, and manage data in relational database management systems (RDBMS) like MySQL, Oracle, and PostgreSQL.'
      },
      {
        id: 'sql-2',
        category: 'SQL Basics',
        number: 2,
        title: 'Difference between SQL and MySQL',
        isQuery: false,
        question: 'What is the difference between SQL and MySQL?',
        answer: '• SQL is a query language used to manage and query relational databases.\n• MySQL is a Relational Database Management System (RDBMS) software product developed by Oracle that uses SQL to execute database operations.'
      },
      {
        id: 'sql-3',
        category: 'SQL Basics',
        number: 3,
        title: 'What are DDL, DML, DQL, DCL, and TCL?',
        isQuery: false,
        question: 'Explain the main categories of SQL commands: DDL, DML, DQL, DCL, and TCL.',
        answer: '• DDL (Data Definition): CREATE, ALTER, DROP, TRUNCATE (defines database structure).\n• DML (Data Manipulation): INSERT, UPDATE, DELETE (modifies data rows).\n• DQL (Data Query): SELECT (retrieves data).\n• DCL (Data Control): GRANT, REVOKE (controls user permissions).\n• TCL (Transaction Control): COMMIT, ROLLBACK, SAVEPOINT (manages transactions).'
      },
      {
        id: 'sql-4',
        category: 'SQL Basics',
        number: 4,
        title: 'Difference between DELETE, TRUNCATE, and DROP',
        isQuery: false,
        question: 'What is the difference between DELETE, TRUNCATE, and DROP?',
        answer: '• DELETE: DML command. Deletes specific rows based on WHERE clause. Can be rolled back. Fires triggers.\n• TRUNCATE: DDL command. Removes all rows quickly by deallocating pages. Table structure remains. Faster than DELETE. Cannot be rolled back in MySQL.\n• DROP: DDL command. Completely removes table structure, indexes, and data from the database.'
      },
      {
        id: 'sql-5',
        category: 'SQL Basics',
        number: 5,
        title: 'Difference between WHERE and ORDER BY',
        isQuery: false,
        question: 'What is the difference between WHERE and ORDER BY clauses?',
        answer: '• WHERE: Filters rows before any grouping or sorting occurs based on a Boolean condition (e.g., WHERE salary > 50000).\n• ORDER BY: Sorts the final output rows in ascending (ASC, default) or descending (DESC) order (e.g., ORDER BY salary DESC).'
      }
    ]
  },

  // ----------------------------------------------------
  // 2. KEYS AND CONSTRAINTS (5 Questions)
  // ----------------------------------------------------
  {
    name: 'Keys & Constraints',
    questionCount: 5,
    description: 'Primary, Foreign, Unique, and Composite keys that enforce relational integrity.',
    questions: [
      {
        id: 'sql-6',
        category: 'Keys & Constraints',
        number: 6,
        title: 'What is a Primary Key?',
        isQuery: false,
        question: 'What is a Primary Key in SQL?',
        answer: 'A Primary Key is a column or combination of columns that uniquely identifies each row in a table. It strictly enforces uniqueness and cannot contain NULL values. A table can have only one primary key.'
      },
      {
        id: 'sql-7',
        category: 'Keys & Constraints',
        number: 7,
        title: 'What is a Foreign Key?',
        isQuery: false,
        question: 'What is a Foreign Key and why is it important?',
        answer: 'A Foreign Key is a field in one table that points to the Primary Key of another table. It establishes a parent-child relationship between tables and enforces referential integrity to prevent orphan records.'
      },
      {
        id: 'sql-8',
        category: 'Keys & Constraints',
        number: 8,
        title: 'Difference between Primary Key and Unique Key',
        isQuery: false,
        question: 'What is the difference between a Primary Key and a Unique Key?',
        answer: '• Primary Key: Only ONE per table. Cannot accept NULL values. Automatically creates a clustered index by default.\n• Unique Key: Multiple unique keys allowed per table. Can accept one (or more in some RDBMS) NULL value. Creates a non-clustered index.'
      },
      {
        id: 'sql-9',
        category: 'Keys & Constraints',
        number: 9,
        title: 'What is a Composite Key?',
        isQuery: false,
        question: 'What is a Composite Key?',
        answer: 'A Composite Key is a primary key that consists of two or more columns combined together to uniquely identify a record in a table. For example, in an OrderDetails table, (order_id, product_id) together form a composite primary key.'
      },
      {
        id: 'sql-10',
        category: 'Keys & Constraints',
        number: 10,
        title: 'What are SQL Constraints?',
        isQuery: false,
        question: 'What are SQL Constraints? Name the standard constraints.',
        answer: 'Constraints are rules applied to table columns to maintain data accuracy and integrity. Standard constraints:\n1. NOT NULL: Prevents null values.\n2. UNIQUE: Ensures all values in column are distinct.\n3. PRIMARY KEY: NOT NULL + UNIQUE.\n4. FOREIGN KEY: Enforces referential integrity.\n5. CHECK: Validates condition (e.g., CHECK (age >= 18)).\n6. DEFAULT: Provides default value when none is supplied.'
      }
    ]
  },

  // ----------------------------------------------------
  // 3. SQL JOINS (6 Questions)
  // ----------------------------------------------------
  {
    name: 'SQL Joins',
    questionCount: 6,
    description: 'Combining records from multiple tables: INNER, LEFT, RIGHT, FULL, and SELF JOIN.',
    questions: [
      {
        id: 'sql-11',
        category: 'SQL Joins',
        number: 11,
        title: 'What is a JOIN?',
        isQuery: false,
        question: 'What is a JOIN clause in SQL?',
        answer: 'A JOIN clause is used to combine rows from two or more tables based on a related column between them (typically Primary Key and Foreign Key).'
      },
      {
        id: 'sql-12',
        category: 'SQL Joins',
        number: 12,
        title: 'Difference between INNER JOIN and LEFT JOIN',
        isQuery: false,
        question: 'What is the difference between an INNER JOIN and a LEFT JOIN?',
        answer: '• INNER JOIN: Returns only rows where there is a match in both tables.\n• LEFT JOIN (or LEFT OUTER JOIN): Returns all rows from the left table, along with matching rows from the right table. If no match exists, NULL values appear for right table columns.'
      },
      {
        id: 'sql-13',
        category: 'SQL Joins',
        number: 13,
        title: 'Explain RIGHT JOIN and FULL OUTER JOIN',
        isQuery: false,
        question: 'Explain RIGHT JOIN and FULL OUTER JOIN.',
        answer: '• RIGHT JOIN: Returns all rows from right table and matched rows from left table (fills NULL for unmatched left rows).\n• FULL OUTER JOIN: Returns all rows when there is a match in either left or right table. In MySQL, FULL OUTER JOIN is simulated by combining LEFT JOIN and RIGHT JOIN using UNION.'
      },
      {
        id: 'sql-14',
        category: 'SQL Joins',
        number: 14,
        title: 'What is a SELF JOIN?',
        isQuery: false,
        question: 'What is a SELF JOIN in SQL?',
        answer: 'A SELF JOIN is a regular join in which a table is joined with itself using table aliases. It is commonly used to query hierarchical data, such as finding an employee and their manager from the same Employee table (e.g., e1.manager_id = e2.emp_id).'
      },
      {
        id: 'sql-15',
        category: 'SQL Joins',
        number: 15,
        title: 'Query: Display Employees and Department Names',
        isQuery: true,
        question: 'Write an SQL query to display employee name, job title, and department name using an INNER JOIN.',
        sampleTable: 'Employees(emp_id, emp_name, dept_id) | Departments(dept_id, dept_name)',
        query: `SELECT e.emp_name, d.dept_name
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id;`,
        expectedOutput: `emp_name  | dept_name
----------+------------
Alice     | IT
Bob       | HR
Charlie   | IT`,
        explanation: 'Performs an INNER JOIN matching dept_id between Employees and Departments table.'
      },
      {
        id: 'sql-16',
        category: 'SQL Joins',
        number: 16,
        title: 'Query: Find Employees Without a Matching Department',
        isQuery: true,
        question: 'Write an SQL query to retrieve employees who are not assigned to any department.',
        sampleTable: 'Employees(emp_id, emp_name, dept_id) | Departments(dept_id, dept_name)',
        query: `SELECT e.emp_name
FROM Employees e
LEFT JOIN Departments d ON e.dept_id = d.dept_id
WHERE d.dept_id IS NULL;`,
        expectedOutput: `emp_name
----------
David`,
        explanation: 'LEFT JOIN keeps all employees; checking WHERE d.dept_id IS NULL filters those with no matching department.'
      }
    ]
  },

  // ----------------------------------------------------
  // 4. SUBQUERIES (5 Questions)
  // ----------------------------------------------------
  {
    name: 'Subqueries',
    questionCount: 5,
    description: 'Nested queries, correlated subqueries, IN vs EXISTS, and salary comparisons.',
    questions: [
      {
        id: 'sql-17',
        category: 'Subqueries',
        number: 17,
        title: 'What is a Subquery?',
        isQuery: false,
        question: 'What is a Subquery in SQL?',
        answer: 'A Subquery (or inner query / nested query) is a SELECT query embedded inside another SQL statement (SELECT, INSERT, UPDATE, or DELETE). The inner query executes first and passes its result to the outer query.'
      },
      {
        id: 'sql-18',
        category: 'Subqueries',
        number: 18,
        title: 'What is a Correlated Subquery?',
        isQuery: false,
        question: 'What is a Correlated Subquery and how is it different from a regular subquery?',
        answer: '• Regular Subquery: Executes once independently of the outer query, and its result is used by the outer query.\n• Correlated Subquery: References columns from the outer query. It executes repeatedly, once for every single row processed by the outer query.'
      },
      {
        id: 'sql-19',
        category: 'Subqueries',
        number: 19,
        title: 'Difference between IN and EXISTS',
        isQuery: false,
        question: 'What is the difference between IN and EXISTS operator in SQL?',
        answer: '• IN: Compares a value against a list or subquery result set. Scans all returned rows. Slower with large subquery sets containing NULLs.\n• EXISTS: Evaluates whether a subquery returns ANY rows (Boolean true/false). Stops scanning as soon as the first matching row is found (short-circuiting), making it faster for large datasets.'
      },
      {
        id: 'sql-20',
        category: 'Subqueries',
        number: 20,
        title: 'Query: Employees Earning More than Average Salary',
        isQuery: true,
        question: 'Write an SQL query to find employees whose salary is greater than the average company salary.',
        sampleTable: 'Employees(emp_id, emp_name, salary)',
        query: `SELECT emp_name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);`,
        expectedOutput: `emp_name | salary
---------+-------
Bob      | 85000
Charlie  | 70000`,
        explanation: 'Subquery calculates AVG(salary) once; outer query filters employees earning more than that average.'
      },
      {
        id: 'sql-21',
        category: 'Subqueries',
        number: 21,
        title: 'Query: Find Second-Highest Distinct Salary (Subquery)',
        isQuery: true,
        question: 'Write an SQL query to find the second-highest distinct salary using a subquery.',
        sampleTable: 'Employees(emp_id, salary)',
        query: `SELECT MAX(salary) AS SecondHighestSalary
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);`,
        expectedOutput: `SecondHighestSalary
--------------------
85000`,
        explanation: 'Subquery finds the overall maximum salary. The outer query finds the maximum salary strictly less than that.'
      }
    ]
  },

  // ----------------------------------------------------
  // 5. GROUP BY AND AGGREGATE FUNCTIONS (6 Questions)
  // ----------------------------------------------------
  {
    name: 'GROUP BY & Aggregates',
    questionCount: 6,
    description: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY grouping, and HAVING filter clauses.',
    questions: [
      {
        id: 'sql-22',
        category: 'GROUP BY & Aggregates',
        number: 22,
        title: 'What are Aggregate Functions?',
        isQuery: false,
        question: 'What are aggregate functions in SQL?',
        answer: 'Aggregate functions perform a calculation on a set of values and return a single summary value. Standard aggregate functions include COUNT(), SUM(), AVG(), MIN(), and MAX(). They ignore NULL values (except COUNT(*)).'
      },
      {
        id: 'sql-23',
        category: 'GROUP BY & Aggregates',
        number: 23,
        title: 'What is GROUP BY?',
        isQuery: false,
        question: 'What is the purpose of the GROUP BY clause?',
        answer: 'The GROUP BY clause groups rows that have the same values in specified columns into summary rows (e.g., finding the total salary per department).'
      },
      {
        id: 'sql-24',
        category: 'GROUP BY & Aggregates',
        number: 24,
        title: 'What is HAVING?',
        isQuery: false,
        question: 'What is the HAVING clause in SQL?',
        answer: 'The HAVING clause filters groups created by the GROUP BY clause based on aggregate conditions. It was introduced because the WHERE keyword cannot be used with aggregate functions.'
      },
      {
        id: 'sql-25',
        category: 'GROUP BY & Aggregates',
        number: 25,
        title: 'Difference between WHERE and HAVING',
        isQuery: false,
        question: 'What is the difference between WHERE and HAVING clauses in SQL?',
        answer: '• WHERE: Filters individual rows BEFORE grouping. Cannot be used with aggregate functions.\n• HAVING: Filters grouped records AFTER GROUP BY. Can be used with aggregate functions (e.g. HAVING COUNT(*) > 5).'
      },
      {
        id: 'sql-26',
        category: 'GROUP BY & Aggregates',
        number: 26,
        title: 'Query: Count Employees in Each Department',
        isQuery: true,
        question: 'Write an SQL query to count total employees in each department.',
        sampleTable: 'Employees(emp_id, emp_name, dept_id)',
        query: `SELECT dept_id, COUNT(*) AS TotalEmployees
FROM Employees
GROUP BY dept_id;`,
        expectedOutput: `dept_id | TotalEmployees
--------+---------------
10      | 4
20      | 8
30      | 3`,
        explanation: 'Groups employees by dept_id and counts total members per group using COUNT(*).'
      },
      {
        id: 'sql-27',
        category: 'GROUP BY & Aggregates',
        number: 27,
        title: 'Query: Find Departments With More Than 5 Employees',
        isQuery: true,
        question: 'Write an SQL query to list departments having more than 5 employees.',
        sampleTable: 'Employees(emp_id, emp_name, dept_id)',
        query: `SELECT dept_id, COUNT(*) AS EmpCount
FROM Employees
GROUP BY dept_id
HAVING COUNT(*) > 5;`,
        expectedOutput: `dept_id | EmpCount
--------+---------
20      | 8`,
        explanation: 'Groups by department and uses HAVING COUNT(*) > 5 to filter only departments with more than 5 employees.'
      }
    ]
  },

  // ----------------------------------------------------
  // 6. COMMON SQL INTERVIEW QUERIES (6 Questions)
  // ----------------------------------------------------
  {
    name: 'Common Interview Queries',
    questionCount: 6,
    description: 'Nth highest salary, duplicate detection, window functions (DENSE_RANK), and department leaders.',
    questions: [
      {
        id: 'sql-28',
        category: 'Common Interview Queries',
        number: 28,
        title: 'Query: Find the Highest Salary in the Company',
        isQuery: true,
        question: 'Write an SQL query to find the maximum salary among all employees.',
        sampleTable: 'Employees(emp_id, salary)',
        query: `SELECT MAX(salary) AS MaxSalary
FROM Employees;`,
        expectedOutput: `MaxSalary
---------
95000`,
        explanation: 'Uses MAX() aggregate function across the salary column.'
      },
      {
        id: 'sql-29',
        category: 'Common Interview Queries',
        number: 29,
        title: 'Query: Find Second-Highest Distinct Salary (LIMIT/OFFSET)',
        isQuery: true,
        question: 'Write an SQL query using LIMIT and OFFSET to find the second-highest distinct salary.',
        sampleTable: 'Employees(emp_id, salary)',
        query: `SELECT DISTINCT salary
FROM Employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;`,
        expectedOutput: `salary
------
85000`,
        explanation: 'Sorts unique salaries descending; OFFSET 1 skips the highest; LIMIT 1 fetches the 2nd highest.'
      },
      {
        id: 'sql-30',
        category: 'Common Interview Queries',
        number: 30,
        title: 'Query: Find Nth-Highest Salary Using DENSE_RANK',
        isQuery: true,
        question: 'Write an SQL query to find the Nth highest salary using the DENSE_RANK() window function (e.g., N = 3).',
        sampleTable: 'Employees(emp_id, salary)',
        query: `SELECT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as ranking
    FROM Employees
) RankedSalaries
WHERE ranking = 3;`,
        expectedOutput: `salary
------
75000`,
        explanation: 'DENSE_RANK() ranks distinct salaries descending without skipping rank numbers on duplicates. ranking = 3 returns 3rd highest.'
      },
      {
        id: 'sql-31',
        category: 'Common Interview Queries',
        number: 31,
        title: 'Query: Find Duplicate Records in a Table',
        isQuery: true,
        question: 'Write an SQL query to identify duplicate email addresses in a Users table.',
        sampleTable: 'Users(user_id, email)',
        query: `SELECT email, COUNT(*) AS DuplicateCount
FROM Users
GROUP BY email
HAVING COUNT(*) > 1;`,
        expectedOutput: `email            | DuplicateCount
-----------------+---------------
john@example.com | 2`,
        explanation: 'Groups by email and filters groups where frequency is strictly greater than 1.'
      },
      {
        id: 'sql-32',
        category: 'Common Interview Queries',
        number: 32,
        title: 'Query: Find Highest Salary in Each Department',
        isQuery: true,
        question: 'Write an SQL query to find the maximum salary in each department along with department ID.',
        sampleTable: 'Employees(emp_id, dept_id, salary)',
        query: `SELECT dept_id, MAX(salary) AS MaxSalary
FROM Employees
GROUP BY dept_id;`,
        expectedOutput: `dept_id | MaxSalary
--------+----------
10      | 95000
20      | 82000
30      | 60000`,
        explanation: 'Groups rows by dept_id and returns the highest salary in that specific group.'
      },
      {
        id: 'sql-33',
        category: 'Common Interview Queries',
        number: 33,
        title: 'Query: Employees Earning More than Their Department Average',
        isQuery: true,
        question: 'Write an SQL query to find employees whose salary exceeds their department average salary (Correlated Subquery).',
        sampleTable: 'Employees(emp_id, emp_name, dept_id, salary)',
        query: `SELECT e.emp_name, e.dept_id, e.salary
FROM Employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM Employees e2
    WHERE e2.dept_id = e.dept_id
);`,
        expectedOutput: `emp_name | dept_id | salary
---------+---------+-------
Alice    | 10      | 90000
David    | 20      | 78000`,
        explanation: 'Correlated subquery computes the average salary specifically for the outer row\'s department ID.'
      }
    ]
  },

  // ----------------------------------------------------
  // 7. NORMALIZATION AND DATABASE DESIGN (5 Questions)
  // ----------------------------------------------------
  {
    name: 'Normalization & Design',
    questionCount: 5,
    description: '1NF, 2NF, 3NF normal forms, redundancy elimination, and relational modeling.',
    questions: [
      {
        id: 'sql-34',
        category: 'Normalization & Design',
        number: 34,
        title: 'What is Normalization?',
        isQuery: false,
        question: 'What is Normalization in database design?',
        answer: 'Normalization is the systematic process of organizing tables and columns to reduce data redundancy and eliminate insert, update, and delete anomalies while maintaining data integrity.'
      },
      {
        id: 'sql-35',
        category: 'Normalization & Design',
        number: 35,
        title: 'Explain 1NF, 2NF, and 3NF',
        isQuery: false,
        question: 'Explain First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF).',
        answer: '• 1NF: Each column must contain atomic (indivisible) values, and each record must be unique (primary key).\n• 2NF: Table must be in 1NF and have NO partial dependency (all non-key columns must depend on the whole primary key).\n• 3NF: Table must be in 2NF and have NO transitive dependency (non-key columns must not depend on other non-key columns).'
      },
      {
        id: 'sql-36',
        category: 'Normalization & Design',
        number: 36,
        title: 'What is Denormalization?',
        isQuery: false,
        question: 'What is Denormalization and when is it used?',
        answer: 'Denormalization is the intentional introduction of redundancy into a normalized database by combining tables. It reduces expensive multi-table JOIN operations, significantly improving read performance in reporting systems and data warehouses.'
      },
      {
        id: 'sql-37',
        category: 'Normalization & Design',
        number: 37,
        title: 'What is Data Redundancy?',
        isQuery: false,
        question: 'What is Data Redundancy and what problems does it cause?',
        answer: 'Data redundancy occurs when the exact same data is stored unnecessarily in multiple places. It wastes disk space and causes data anomalies:\n1. Insertion anomaly\n2. Deletion anomaly\n3. Update anomaly (inconsistent data across rows).'
      },
      {
        id: 'sql-38',
        category: 'Normalization & Design',
        number: 38,
        title: 'What is a Relationship between Tables?',
        isQuery: false,
        question: 'What are the types of relationships between tables in SQL?',
        answer: '1. One-to-One (1:1): One row in Table A links to at most one row in Table B (e.g., User and Passport).\n2. One-to-Many (1:N): One row in Table A links to multiple rows in Table B (e.g., Department and Employees).\n3. Many-to-Many (M:N): Multiple rows in Table A link to multiple rows in Table B, implemented using a junction/bridge table (e.g., Students and Courses).'
      }
    ]
  },

  // ----------------------------------------------------
  // 8. INDEXES AND PERFORMANCE (5 Questions)
  // ----------------------------------------------------
  {
    name: 'Indexes & Performance',
    questionCount: 5,
    description: 'B-Tree indexes, clustered vs non-clustered, composite indexes, and query optimization.',
    questions: [
      {
        id: 'sql-39',
        category: 'Indexes & Performance',
        number: 39,
        title: 'What is an Index?',
        isQuery: false,
        question: 'What is an Index in SQL and how does it work?',
        answer: 'An index is a database data structure (typically a B-Tree) that improves the speed of data retrieval operations on a table. It works like an index in a book, allowing the database engine to find rows without scanning the entire table.'
      },
      {
        id: 'sql-40',
        category: 'Indexes & Performance',
        number: 40,
        title: 'Why do we use Indexes?',
        isQuery: false,
        question: 'Why do we use Indexes in relational databases?',
        answer: 'We use indexes to dramatically reduce disk I/O and query execution time for SELECT statements with WHERE, JOIN, and ORDER BY clauses, turning full table scans (O(n)) into fast index lookups (O(log n)).'
      },
      {
        id: 'sql-41',
        category: 'Indexes & Performance',
        number: 41,
        title: 'Advantages and Disadvantages of Indexes',
        isQuery: false,
        question: 'What are the advantages and disadvantages of using indexes?',
        answer: '• Advantages: Much faster SELECT queries, faster sorting and grouping operations, enforces uniqueness.\n• Disadvantages: Consumes extra storage space and slows down INSERT, UPDATE, and DELETE operations because the index tree must be updated on every modification.'
      },
      {
        id: 'sql-42',
        category: 'Indexes & Performance',
        number: 42,
        title: 'What is a Composite Index?',
        isQuery: false,
        question: 'What is a Composite Index and what is the leftmost prefix rule?',
        answer: 'A Composite Index is an index created on two or more columns of a table (e.g., CREATE INDEX idx_name_dept ON Employees(last_name, dept_id)). It uses the leftmost prefix rule: queries filtering by last_name, or last_name AND dept_id can use the index, but queries filtering only by dept_id cannot.'
      },
      {
        id: 'sql-43',
        category: 'Indexes & Performance',
        number: 43,
        title: 'How can you Optimize a Slow SQL Query?',
        isQuery: false,
        question: 'How can you identify and optimize a slow SQL query in production?',
        answer: '1. Use EXPLAIN (or EXPLAIN ANALYZE) to inspect the query execution plan.\n2. Avoid SELECT *; select only required columns.\n3. Create indexes on columns used in WHERE, JOIN, and ORDER BY clauses.\n4. Avoid wildcards at the beginning of LIKE queries (e.g. LIKE "%abc" prevents index use).\n5. Use EXISTS instead of IN for subqueries.\n6. Ensure correct JOIN conditions to prevent Cartesian products.'
      }
    ]
  }
];
