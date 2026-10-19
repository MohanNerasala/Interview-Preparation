import type { Topic } from '../types';

export const coreJavaTopic: Topic = {
  id: 'core-java',
  number: '03',
  title: 'Core Java',
  description: 'Complete Core Java interview preparation syllabus based on verified interview definitions: Fundamentals, OOP Pillars, Strings, Exception Handling, Memory, and Lambdas.',
  icon: 'Coffee',
  subtopics: [
    {
      id: 'java-fundamentals',
      title: 'Java Fundamentals & Platform Architecture',
      description: 'Platform independence, JDK/JRE/JVM, data types, type casting, operators, variables, methods, and JVM memory.',
      concepts: [
        {
          id: 'cj-platform-independence',
          title: 'Platform Independence, JDK, JRE, JVM & Bytecode',
          description: 'Comprehensive interview definitions, examples, and rules for Platform Independence, JDK, JRE, JVM & Bytecode.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS PLATFORM INDEPENDENCE?
Java is called platform-independent because Java source code is compiled into bytecode. This bytecode can run on any operating system that has a compatible Java Virtual Machine (JVM). This is commonly described as "Write Once, Run Anywhere."

HOW DOES JAVA ACHIEVE PLATFORM INDEPENDENCE?
The Java compiler (javac) converts source code (.java) into bytecode (.class). A JVM designed for the target operating system executes that bytecode. The bytecode is portable; the JVM implementation is platform-specific. (Java source -> javac -> bytecode -> JVM -> machine instructions).

JVM, JRE, AND JDK:
JVM (Java Virtual Machine) executes Java bytecode. JRE (Java Runtime Environment) provides the JVM and runtime libraries needed to run Java applications. JDK (Java Development Kit) includes development tools such as the compiler and runtime components needed to develop and run Java programs. Rule: JDK \u2283 JRE \u2283 JVM.

WHAT IS BYTECODE?
Bytecode is the intermediate instruction format produced by the Java compiler. It is not native machine code for one particular operating system; the JVM interprets it or compiles it to native instructions at runtime.`,
          interviewAnswer: 'The Java compiler (javac) converts source code (.java) into bytecode (.class). A JVM designed for the target operating system executes that bytecode. The bytecode is portable; the JVM implementation is platform-specific. (Java source .java -> javac compiler -> bytecode .class -> JVM -> machine instructions).',
          explanation: `1. Platform Independence Execution Flow:
Java source (.java) -> javac compiler -> bytecode (.class) -> JVM -> machine instructions.

2. JVM, JRE, and JDK Breakdown:
- JVM (Java Virtual Machine): Executes Java bytecode. It is platform-specific.
- JRE (Java Runtime Environment): Provides the JVM and runtime libraries needed to run Java applications.
- JDK (Java Development Kit): Includes development tools such as the compiler (javac), debugger, and the runtime components needed to develop and run Java programs.
Rule: JDK ⊃ JRE ⊃ JVM.

3. Bytecode:
Bytecode is the intermediate instruction format produced by the Java compiler. It is not native machine code for one particular operating system; the JVM interprets it or compiles it to native instructions at runtime using the JIT (Just-In-Time) compiler.`,
          realWorldExample: 'Bytecode is like musical sheet notes: the sheet music is identical worldwide, but each local orchestra (JVM on Windows, Mac, or Linux) plays it using their local instruments (native machine code).',
          codeSnippet: {
            code: `public class PlatformIndependenceDemo {
    public static void main(String[] args) {
        String os = System.getProperty("os.name");
        String version = System.getProperty("java.version");
        System.out.println("Host Operating System: " + os);
        System.out.println("Java Virtual Machine Version: " + version);
        System.out.println("Bytecode runs anywhere JVM is installed!");
    }
}`,
            input: "JVM System Properties (host OS and Java runtime)",
            output: `Host Operating System: Windows 11
Java Virtual Machine Version: 21.0.2
Bytecode runs anywhere JVM is installed!`
          },
          codeExample: `public class PlatformIndependenceDemo {
    public static void main(String[] args) {
        System.out.println("Write Once, Run Anywhere via JVM Bytecode!");
    }
}`,
          questions: [
            {
              id: 'pi-q1',
              question: 'What is platform independence and how does Java achieve it?',
              answer: 'Java is platform-independent because source code (.java) is compiled into platform-neutral bytecode (.class) rather than machine-specific code. This bytecode can run on any operating system that has a compatible JVM installed. The bytecode is portable across all operating systems; only the JVM implementation is platform-specific.',
              difficulty: 'Essential'
            },
            {
              id: 'pi-q2',
              question: 'What is the difference between JDK, JRE, and JVM?',
              answer: 'JVM (Java Virtual Machine) executes Java bytecode.\nJRE (Java Runtime Environment) provides the JVM and standard runtime libraries needed to run Java applications.\nJDK (Java Development Kit) includes development tools (such as javac compiler and debugger) plus the JRE needed to develop and run Java programs.\nIn short: JDK ⊃ JRE ⊃ JVM.',
              difficulty: 'Essential'
            },
            {
              id: 'pi-q3',
              question: 'What is bytecode in Java?',
              answer: 'Bytecode is the intermediate, non-machine-specific instruction format produced by javac. It is not native machine code for any particular operating system; the JVM interprets it or compiles it to native instructions at runtime.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-data-types',
          title: 'Data Types & Character Encoding (ASCII vs Unicode)',
          description: 'Comprehensive interview definitions, examples, and rules for Data Types & Character Encoding (ASCII vs Unicode).',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS A DATA TYPE?
A data type specifies what kind of value a variable can store and which operations can be performed on that value.

PRIMITIVE DATA TYPES
Java has eight primitive data types: byte, short, int, long, float, double, char, and boolean. The first six store numeric values, char stores a UTF-16 code unit, and boolean stores true or false.

REFERENCE TYPES
Reference types include classes, arrays, interfaces, enums, and types such as String. A reference variable holds a reference to an object, or null; it does not directly store the complete object.

ASCII VS UNICODE
ASCII is a character-encoding standard with 128 basic characters, including English letters, digits, and control characters (e.g. ASCII 'A' has value 65). Unicode is a universal character standard intended to represent characters from writing systems around the world.`,
          interviewAnswer: 'Java has eight primitive data types: byte, short, int, long, float, double, char, and boolean. The first six store numeric values, char stores a UTF-16 code unit, and boolean stores true or false. Reference types include classes, arrays, interfaces, enums, and types such as String; a reference variable holds a reference to an object, or null, and does not directly store the complete object.',
          explanation: `1. Primitive Data Types:
- byte: 1 byte (8 bits), range -128 to 127
- short: 2 bytes (16 bits), range -32,768 to 32,767
- int: 4 bytes (32 bits), range -2^31 to 2^31-1
- long: 8 bytes (64 bits), range -2^63 to 2^63-1
- float: 4 bytes (32-bit IEEE 754 floating point)
- double: 8 bytes (64-bit IEEE 754 floating point)
- char: 2 bytes (16 bits, UTF-16 code unit, range '\\u0000' to '\\uffff')
- boolean: 1 bit logical value (true or false)

2. Reference Types:
Reference types include classes, arrays, interfaces, enums, and String. A reference variable holds a reference (memory pointer) to an object on the heap, or null; it does not directly store the complete object.

3. ASCII vs Unicode:
ASCII is a character-encoding standard with 128 basic characters, including English letters, digits, and control characters (e.g. ASCII 'A' has value 65). Unicode is a universal character standard intended to represent characters from writing systems around the world. Java char uses 2 bytes to support Unicode.`,
          realWorldExample: 'A primitive type is like holding cash in your pocket (direct value). A reference type is like holding an ATM card (a reference that points to the actual account stored in the bank).',
          codeSnippet: {
            code: `public class DataTypesDemo {
    public static void main(String[] args) {
        int primitiveAge = 24;
        char asciiChar = 'A'; // ASCII 65
        String referenceName = "Chakri"; // Reference type on heap

        System.out.println("Primitive int: " + primitiveAge);
        System.out.println("Char: " + asciiChar + " | Numeric Value: " + (int)asciiChar);
        System.out.println("Reference String: " + referenceName);
    }
}`,
            input: "None",
            output: `Primitive int: 24
Char: A | Numeric Value: 65
Reference String: Chakri`
          },
          codeExample: `public class DataTypesDemo {
    public static void main(String[] args) {
        int a = 10;
        char c = 'A';
        System.out.println(a + " " + (int)c);
    }
}`,
          questions: [
            {
              id: 'dt-q1',
              question: 'What is a Data Type?',
              answer: 'A data type tells the computer what kind of data a variable can store, such as numbers, characters, decimal values, or true/false values.',
              difficulty: 'Essential'
            },
            {
              id: 'dt-q2',
              question: 'What are the types of Data Types in Java?',
              answer: 'Java data types are classified into two categories: primitive data types and reference data types.',
              difficulty: 'Essential'
            },
            {
              id: 'dt-q3',
              question: 'What are Primitive Data Types?',
              answer: 'Primitive data types are predefined data types in Java that store simple values. Java has eight primitive data types: byte, short, int, long, float, double, char, and boolean.',
              difficulty: 'Essential'
            },
            {
              id: 'dt-q4',
              question: 'What are Reference Data Types?',
              answer: 'Reference data types refer to objects rather than directly storing the complete object. Examples include classes, arrays, interfaces, and String.',
              difficulty: 'Essential'
            },
            {
              id: 'dt-q5',
              question: 'What is the difference between Primitive and Reference Data Types?',
              answer: 'Primitive types store simple values, whereas reference types hold references to objects or null.',
              difficulty: 'Essential'
            },
            {
              id: 'dt-q6',
              question: 'What is ASCII?',
              answer: 'ASCII is a character-encoding standard that represents 128 basic characters, including English letters, digits, and control characters.',
              difficulty: 'Common'
            },
            {
              id: 'dt-q7',
              question: 'What is Unicode?',
              answer: 'Unicode is a universal character standard designed to represent characters from writing systems around the world.',
              difficulty: 'Common'
            },
            {
              id: 'dt-q8',
              question: 'What is the difference between ASCII and Unicode?',
              answer: 'ASCII represents 128 basic characters, whereas Unicode supports characters from many languages and writing systems.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-type-casting',
          title: 'Type Casting (Widening vs Narrowing)',
          description: 'Comprehensive interview definitions, examples, and rules for Type Casting (Widening vs Narrowing).',
          difficulty: 'Essential',
          studyTime: '6 minutes',
          definition: `WHAT IS TYPE CASTING?
Type casting is converting a value from one data type to another.

WIDENING (IMPLICIT) CASTING
Widening converts a value to a compatible type with a wider range, such as int to long or int to double. It is automatic and safe, though some numeric conversions (such as long to float) can still lose precision.

NARROWING (EXPLICIT) CASTING
Narrowing converts a value to a type with a smaller range or precision. It generally requires an explicit cast (e.g. double x = 10.8; int y = (int) x;) and may lose information or truncate fractional values.`,
          interviewAnswer: 'Widening converts a value to a compatible type with a wider range, such as int to long or double. It is usually automatic, though some numeric conversions (such as long to float) can still lose precision. Narrowing converts a value to a type with a smaller range or precision; it generally requires an explicit cast and may lose information.',
          explanation: `1. Widening (Implicit / Automatic) Casting:
- byte -> short -> char -> int -> long -> float -> double
- Handled automatically by the compiler because the destination type has a larger range.
- int a = 10; double b = a; // Automatically widened to 10.0

2. Narrowing (Explicit / Manual) Casting:
- double -> float -> long -> int -> char -> short -> byte
- Requires an explicit cast operator (type) in parentheses.
- Excess high-order bits and fractional decimals are truncated.
- double x = 10.8; int y = (int) x; // y becomes 10 (decimal truncated)`,
          realWorldExample: 'Widening is pouring water from a small tea cup into a 2-liter bucket (safe, no water spills). Narrowing is pouring water from a full 2-liter bucket into a small tea cup (excess water overflows and is permanently lost).',
          codeSnippet: {
            code: `public class TypeCastingDemo {
    public static void main(String[] args) {
        // Widening: int -> double (Implicit)
        int score = 85;
        double widened = score;
        System.out.println("Widened double: " + widened);

        // Narrowing: double -> int (Explicit)
        double price = 99.75;
        int narrowed = (int) price; // Truncates decimal
        System.out.println("Narrowed int: " + narrowed);
    }
}`,
            input: "score = 85, price = 99.75",
            output: `Widened double: 85.0
Narrowed int: 99`
          },
          codeExample: `public class TypeCastingDemo {
    public static void main(String[] args) {
        double x = 10.8;
        int y = (int) x;
        System.out.println("y = " + y);
    }
}`,
          questions: [
            {
              id: 'tc-q1',
              question: 'What is Type Casting?',
              answer: 'Type casting is the process of converting a value from one data type to another.',
              difficulty: 'Essential'
            },
            {
              id: 'tc-q2',
              question: 'What is Widening Casting?',
              answer: 'Widening casting means converting a smaller data type into a larger data type. It happens automatically in Java.\n\nExample: int → long\nint a = 10;\nlong b = a;',
              codeExample: `int a = 10;\nlong b = a; // Automatically widened from int to long`,
              difficulty: 'Essential'
            },
            {
              id: 'tc-q3',
              question: 'What is Narrowing Casting?',
              answer: 'Narrowing casting means converting a larger data type into a smaller data type. It requires explicit casting and may lose data.\n\nExample: double → int\ndouble a = 10.5;\nint b = (int) a;\n\nOutput: 10',
              codeExample: `double a = 10.5;\nint b = (int) a; // Explicit cast (truncates decimal)\nSystem.out.println(b); // Output: 10`,
              difficulty: 'Essential'
            },
            {
              id: 'tc-q4',
              question: 'What is the Difference Between Widening and Narrowing Casting?',
              answer: 'Widening converts a smaller-range type into a larger-range type automatically, whereas narrowing converts a larger-range type into a smaller-range type using explicit casting and may lose data.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-operators',
          title: 'Operators & Pre/Post Increment Evaluation',
          description: 'Comprehensive interview definitions, examples, and rules for Operators & Pre/Post Increment Evaluation.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS AN OPERATOR?
An operator is a symbol that performs an operation on one or more values or variables. The values it acts on are called operands.

TYPES OF OPERATORS
Arithmetic (+, -, *, /, %), Relational (<, >, <=, >=, ==, !=), Logical (&&, ||, !), Assignment (=, +=, -=, *=, /=), Unary (++, --, +, -, !, ~), Conditional/ternary (condition ? value1 : value2), Bitwise (&, |, ^, ~), and Shift (<<, >>, >>>).

PRE/POST INCREMENT AND DECREMENT
Pre-increment (++x) increases x first and then produces the new value. Post-increment (x++) produces the current value first and then increases x. Pre-decrement (--x) decreases first; post-decrement (x--) uses the current value first and decreases afterward.`,
          interviewAnswer: 'Java supports Arithmetic (+, -, *, /, %), Relational (<, >, <=, >=, ==, !=), Logical (&&, ||, !), Assignment (=, +=, -=), Unary (++, --, +, -, !, ~), Conditional/ternary (? :), Bitwise (&, |, ^, ~), and Shift (<<, >>, >>>) operators. Pre-increment (++x) increases x first and produces the new value; post-increment (x++) produces the current value first and increases x afterward.',
          explanation: `1. Types of Operators:
- Arithmetic: +, -, *, /, %
- Relational: <, >, <=, >=, ==, !=
- Logical: && (short-circuit AND), || (short-circuit OR), !
- Assignment: =, +=, -=, *=, /=, %=
- Unary: ++, --, +, -, !, ~
- Conditional/ternary: condition ? value1 : value2
- Bitwise: &, |, ^, ~
- Shift: << (left shift), >> (signed right shift), >>> (unsigned right shift)

2. Pre/Post Increment and Decrement:
- Pre-increment (++x): increases x first and then produces the new value.
- Post-increment (x++): produces the current value first and then increases x.
- Pre-decrement (--x): decreases first, then produces the new value.
- Post-decrement (x--): uses the current value first and decreases afterward.`,
          realWorldExample: 'Pre-increment is like a prepaid toll booth: you pay the fee first before driving through. Post-increment is like a restaurant bill: you consume the meal first, and the total charges increment after.',
          codeSnippet: {
            code: `public class OperatorDemo {
    public static void main(String[] args) {
        int a = 5;
        int b = 5;

        System.out.println("Pre-increment ++a: " + (++a)); // Increments to 6, then prints 6
        System.out.println("Post-increment b++: " + (b++)); // Prints 5, then increments to 6
        System.out.println("Final value of b: " + b);
    }
}`,
            input: "a = 5, b = 5",
            output: `Pre-increment ++a: 6
Post-increment b++: 5
Final value of b: 6`
          },
          codeExample: `public class OperatorDemo {
    public static void main(String[] args) {
        int a = 5; System.out.println(++a);
        int b = 5; System.out.println(b++);
    }
}`,
          questions: [
            {
              id: 'op-q1',
              question: 'What is an Operator?',
              answer: 'An operator is a symbol that performs an operation on values or variables.',
              difficulty: 'Essential'
            },
            {
              id: 'op-q2',
              question: 'What are the Types of Operators in Java?',
              answer: 'Java supports the following types of operators:\n\n• Arithmetic Operators: Perform mathematical operations like addition, subtraction, multiplication, division, and modulus.\n• Relational Operators: Compare two values and return true or false.\n• Logical Operators: Combine or reverse conditions.\n• Assignment Operators: Assign values to variables.\n• Unary Operators: Operate on a single operand, such as increment and decrement.\n• Conditional (Ternary) Operator: Checks a condition and selects one of two values.\n• Bitwise Operators: Perform operations on individual bits.\n• Shift Operators: Shift the bits of a value to the left or right.',
              difficulty: 'Essential'
            },
            {
              id: 'op-q3',
              question: 'What is Pre-Increment?',
              answer: 'Pre-increment (++x) increases the value by one first and then uses the updated value.',
              codeExample: `int x = 5;\nint y = ++x; // x becomes 6 first, then y receives 6\nSystem.out.println("x: " + x + ", y: " + y); // x: 6, y: 6`,
              difficulty: 'Essential'
            },
            {
              id: 'op-q4',
              question: 'What is Post-Increment?',
              answer: 'Post-increment (x++) uses the current value first and then increases it by one.',
              codeExample: `int x = 5;\nint y = x++; // y receives 5 first, then x becomes 6\nSystem.out.println("x: " + x + ", y: " + y); // x: 6, y: 5`,
              difficulty: 'Essential'
            },
            {
              id: 'op-q5',
              question: 'What is Pre-Decrement?',
              answer: 'Pre-decrement (--x) decreases the value by one first and then uses the updated value.',
              codeExample: `int x = 5;\nint y = --x; // x becomes 4 first, then y receives 4\nSystem.out.println("x: " + x + ", y: " + y); // x: 4, y: 4`,
              difficulty: 'Essential'
            },
            {
              id: 'op-q6',
              question: 'What is Post-Decrement?',
              answer: 'Post-decrement (x--) uses the current value first and then decreases it by one.',
              codeExample: `int x = 5;\nint y = x--; // y receives 5 first, then x becomes 4\nSystem.out.println("x: " + x + ", y: " + y); // x: 4, y: 5`,
              difficulty: 'Essential'
            },
            {
              id: 'op-q7',
              question: 'What is the Difference Between Pre-Increment and Post-Increment?',
              answer: 'Pre-increment increases the value before using it, whereas post-increment uses the current value before increasing it.',
              codeExample: `int a = 5, b = 5;\nSystem.out.println(++a); // Output: 6 (increments first, then prints)\nSystem.out.println(b++); // Output: 5 (prints current value, then increments to 6)`,
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-variables',
          title: 'Variables (Local, Instance, Static & Scoping Rules)',
          description: 'Comprehensive interview definitions, examples, and rules for Variables (Local, Instance, Static & Scoping Rules).',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS A VARIABLE?
A variable is a named storage location used by a program to hold a value. The value of a variable may change while the program runs.

LOCAL VARIABLE
A local variable is declared inside a method, constructor, or block. Its scope is limited to that method or block. Java does not automatically assign a default value to local variables; they must be assigned before use.

INSTANCE VARIABLE
An instance variable is declared in a class but outside methods, constructors, and blocks, without static. Each object has its own copy on the heap. Instance fields receive default values when an object is created.

STATIC VARIABLE
A static variable is declared with static. It belongs to the class and is shared by all instances of that class. It receives a default value if no explicit value is assigned.

LOCAL VS INSTANCE VARIABLE
A local variable belongs to a method or block, is usable only within its scope, and has no automatic default value. An instance variable belongs to an object, is declared at class level, and receives a default value.`,
          interviewAnswer: 'A local variable is declared inside a method, constructor, or block, has scope limited to that block, and Java does NOT automatically assign default values (it must be assigned before use). An instance variable is declared in a class without static; each object has its own copy receiving default values. A static variable is declared with static, belongs to the class, is shared by all instances, and receives default values.',
          explanation: `1. Local Variable:
Declared inside a method, constructor, or block. Scope is limited to that method or block. Java does not automatically assign a default value to local variables; they must be explicitly assigned before use.

2. Instance Variable:
Declared in a class but outside methods, constructors, and blocks, without static. Each object has its own copy stored on the heap. Instance fields receive default values (0, null, false) when an object is created.

3. Static Variable:
Declared with static. It belongs to the class and is shared identically by all instances of that class in Metaspace. It receives a default value if no explicit value is assigned.

4. Local vs Instance Variable:
A local variable belongs to a method or block, is usable only within its scope, and has no automatic default value. An instance variable belongs to an object, is declared at class level, and receives a default value.`,
          realWorldExample: "In an office: An employee's employeeId and deskNumber are instance variables (unique to each employee). The companyName and buildingAddress are static variables (shared by all employees). A paper memo written during a 10-minute meeting is a local variable (exists only during the meeting).",
          codeSnippet: {
            code: `public class VariableDemo {
    // Static variable (shared class state)
    static String company = "TechCorp";

    // Instance variable (unique per object)
    String employeeName;

    public VariableDemo(String name) {
        this.employeeName = name;
    }

    public void work() {
        // Local variable (no default value; must be initialized)
        int hoursWorked = 8;
        System.out.println(employeeName + " at " + company + " worked " + hoursWorked + " hours.");
    }

    public static void main(String[] args) {
        VariableDemo emp1 = new VariableDemo("Alice");
        emp1.work();
    }
}`,
            input: "employeeName = 'Alice', hoursWorked = 8",
            output: `Alice at TechCorp worked 8 hours.`
          },
          codeExample: `public class VariableDemo {
    static int sharedCount = 0;
    int instanceId;
}`,
          questions: [
            {
              id: 'var-q1',
              question: 'What is a Variable?',
              answer: 'A variable is a named storage location used to store data, and its value can change during program execution.',
              difficulty: 'Essential'
            },
            {
              id: 'var-q2',
              question: 'What is a Local Variable?',
              answer: 'A local variable is declared inside a method, constructor, or block. It can be accessed only within that scope and must be initialized before use.',
              codeExample: `public void display() {\n    int count = 10; // Local variable: must be initialized\n    System.out.println(count);\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'var-q3',
              question: 'What is an Instance Variable?',
              answer: 'An instance variable is declared inside a class but outside methods, constructors, and blocks, without the static keyword. Each object has its own copy, and it receives a default value if not explicitly initialized.',
              codeExample: `public class Student {\n    String name; // Instance variable (defaults to null)\n    int age;     // Instance variable (defaults to 0)\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'var-q4',
              question: 'What is a Static Variable?',
              answer: 'A static variable is declared using the static keyword. It belongs to the class and is shared among all objects of that class.',
              codeExample: `public class Student {\n    static String college = "ABC University"; // Shared across all Student objects\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'var-q5',
              question: 'What is the Difference Between Local, Instance, and Static Variables?',
              answer: '• Local Variable: Declared inside a method, constructor, or block. It must be initialized before use.\n• Instance Variable: Declared at the class level without static. Each object has its own copy.\n• Static Variable: Declared at the class level using static. It is shared among all objects of the class.',
              codeExample: `public class Demo {\n    static int staticVar = 100; // Static: shared across class\n    int instanceVar = 10;       // Instance: unique to each object\n\n    void calculate() {\n        int localVar = 5;       // Local: inside method\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'var-q6',
              question: 'What is the Real-World Example of Variables?',
              answer: "In a company, an employee's ID is an instance variable because each employee has a different ID. The company name is a static variable because all employees share it. A temporary variable used inside a method is a local variable.",
              example: "Company Office Scenario: Employee ID (Instance), Company Name (Static), 10-Minute Meeting Notepad Notes (Local).",
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-methods-pass-by-value',
          title: 'Methods, Method Overloading & Pass-by-Value',
          description: 'Comprehensive interview definitions, examples, and rules for Methods, Method Overloading & Pass-by-Value.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS A METHOD?
A method is a named block of code that performs a specific task. It can accept parameters and may return a value.

FOUR COMMON METHOD FORMS:
1) No parameters, no return value.
2) Parameters, no return value.
3) No parameters, returns a value.
4) Parameters and returns a value.

METHOD OVERLOADING:
Method overloading means defining multiple methods with the same name in the same class but different parameter lists (number, types, or order). Return type alone cannot distinguish overloaded methods.`,
          interviewAnswer: 'A method is a reusable block of code that performs a specific task. Method overloading means defining multiple methods with the same name in the same class but different parameter lists (number, types, or order of parameters); return type alone cannot distinguish overloaded methods. Parameter passing rules (pass-by-value vs pass-by-reference) are detailed in the questions below.',
          explanation: `1. Four Common Method Forms:
- 1) No parameters, no return value: void run() {}
- 2) Parameters, no return value: void log(String msg) {}
- 3) No parameters, returns a value: int getCount() { return 10; }
- 4) Parameters and returns a value: int add(int a, int b) { return a + b; }

2. Method Overloading:
Method overloading means defining multiple methods with the same name in the same class but different parameter lists (number, types, or order of parameters). Return type alone CANNOT distinguish overloaded methods.`,
          realWorldExample: 'If you give someone a copy of your apartment key, they can enter and repaint the kitchen wall (mutating object state). But giving them a key does not allow them to change the deed of your real estate property (cannot replace caller reference variable).',
          codeSnippet: {
            code: `public class PassByValueDemo {
    static void changePrimitive(int x) {
        x = 50; // Modifies local copy only (Pass by Value)
    }

    static void mutateObject(StringBuilder sb) {
        sb.append(" World"); // Modifies object content through copied reference
    }

    static void reassignObject(StringBuilder sb) {
        sb = new StringBuilder("New Object"); // Reassigns local copy only
    }

    public static void main(String[] args) {
        // 1. Primitive: value is copied
        int num = 10;
        changePrimitive(num);
        System.out.println("num after method: " + num); // Still 10

        // 2. Object: reference address is copied by value
        StringBuilder text = new StringBuilder("Hello");
        mutateObject(text);
        System.out.println("text after mutate: " + text); // Hello World

        reassignObject(text);
        System.out.println("text after reassign: " + text); // Still Hello World!
    }
}`,
            input: "num = 10, text = 'Hello'",
            output: `num after method: 10
text after mutate: Hello World
text after reassign: Hello World`
          },
          codeExample: `public class OverloadDemo {
    void show(int x) {}
    void show(String x) {}
}

// Java is pass-by-value:
void change(int x) { x = 20; }`,
          questions: [
            {
              id: 'pbv-q1',
              question: 'Is Java pass-by-value or pass-by-reference?',
              answer: `Java is strictly 100% pass-by-value.

1. Pass by Value:
Definition: Pass by value means a copy of the variable's value is passed to a method. Changes made to the copied value do not affect the original variable.
In Java: For primitive variables, their literal value is copied. For object references, a copy of the memory reference address is passed; therefore, a method can modify the object's internal fields, but cannot reassign the caller's original reference variable.

2. Pass by Reference:
Definition: Pass by reference means a direct reference or alias to the original variable is passed to the method. Any modifications or reassignments made inside the method directly affect the original variable. Java does NOT support pass-by-reference.

3. Pass by Name:
Definition: Pass by name is a parameter-passing technique in which an argument is evaluated whenever the parameter is used, as if the argument expression were substituted into the method.`,
              difficulty: 'Essential'
            },
            {
              id: 'pbv-q2',
              question: 'What is method overloading and can it be achieved by changing return type alone?',
              answer: 'Method overloading means defining multiple methods with the same name in the same class but different parameter lists (number, types, or order). Return type alone cannot distinguish overloaded methods because the compiler cannot determine which method to invoke when called without assigning the return value.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-jvm-memory-gc',
          title: 'JVM Memory Areas & Garbage Collection',
          description: 'Comprehensive interview definitions, examples, and rules for JVM Memory Areas & Garbage Collection.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `HIGH-LEVEL JVM MEMORY AREAS
Each thread has its own JVM stack for method frames and local variables. The heap stores objects and arrays. The JVM also maintains class metadata and runtime data in Metaspace.

WHAT IS GARBAGE COLLECTION?
Garbage collection is the JVM's automatic process of reclaiming heap memory used by objects that are no longer reachable. Developers cannot guarantee exactly when it runs; System.gc() is only a request.

WHAT HAPPENS WHEN A METHOD FINISHES?
When a method completes, its stack frame is removed from that thread's stack. An object on the heap is not removed merely because a method finishes; it can be reclaimed when it becomes unreachable and the garbage collector later processes it.`,
          interviewAnswer: 'In Java, stack memory is thread-private and holds method frames and local variables, which are cleared immediately when a method returns. Heap memory stores all objects and arrays. When a method completes, an object on the heap is not removed immediately; it becomes eligible for Garbage Collection once it is no longer reachable. Developers cannot guarantee when GC runs; System.gc() is only a request.',
          explanation: `1. High-Level JVM Memory Areas:
- JVM Stack: Each thread has its own stack for method frames, local variables, and execution state.
- Heap: Shared across all threads. Stores all objects and arrays created with "new".
- Metaspace: Stores class definitions, static fields, method bytecodes, and runtime constant pool.

2. What Happens When a Method Finishes?
When a method completes, its stack frame is removed from that thread's stack. An object on the heap is not removed merely because a method finishes; it can be reclaimed when it becomes unreachable and the garbage collector later processes it.

3. Garbage Collection:
Garbage collection is the JVM's automatic process of reclaiming heap memory used by objects that are no longer reachable from any active GC root. System.gc() is merely a request to the JVM, never a guarantee of immediate execution.`,
          realWorldExample: 'Stack is like disposable sticky notes used during a telephone call and discarded when the call ends. Heap is like books stored in a public library: books remain on the shelf until the library inventory staff (Garbage Collector) clears away unread, abandoned books.',
          codeSnippet: {
            code: `public class MemoryGCDemo {
    public static void main(String[] args) {
        // String object created on Heap; reference on Stack
        String temp = new String("Temporary Heap Object");
        System.out.println("Created: " + temp);

        // Disconnecting reference -> Object becomes eligible for GC
        temp = null;

        // Requesting JVM Garbage Collector
        System.gc();
        System.out.println("System.gc() requested. Memory will be reclaimed asynchronously.");
    }
}`,
            input: "None",
            output: `Created: Temporary Heap Object
System.gc() requested. Memory will be reclaimed asynchronously.`
          },
          codeExample: `public class GCDemo {
    public static void main(String[] args) {
        Object obj = new Object();
        obj = null;
        System.gc();
    }
}`,
          questions: [
            {
              id: 'gc-q1',
              question: 'What Is JVM Memory?',
              answer: 'JVM memory is the memory used by the Java Virtual Machine to store objects, method calls, local variables, and class information while a Java program runs.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q2',
              question: 'What Is Stack Memory?',
              answer: "Stack memory stores method calls and local variables. Each thread has its own stack, and a method's stack frame is removed when the method finishes.",
              difficulty: 'Essential'
            },
            {
              id: 'gc-q3',
              question: 'What Is Heap Memory?',
              answer: 'Heap memory stores objects and arrays created during program execution. It is shared among threads, and objects can be removed by Garbage Collection when they are no longer reachable.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q4',
              question: 'What Is Static Memory?',
              answer: 'Static variables belong to the class rather than individual objects. They are associated with class-level data, and each class has its own static fields. In JVM memory discussions, static fields are commonly associated with class metadata and runtime structures, while objects they reference are stored on the heap.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q5',
              question: 'What Is the Method Area?',
              answer: 'The method area is a JVM memory area that stores class-level information, such as class structure, method information, and runtime constant pools. In HotSpot JVM, class metadata is stored in Metaspace.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q6',
              question: 'What Is Garbage Collection?',
              answer: "Garbage Collection (GC) is the JVM's automatic process of reclaiming heap memory used by objects that are no longer reachable.",
              difficulty: 'Essential'
            },
            {
              id: 'gc-q7',
              question: 'What Happens When a Method Finishes?',
              answer: 'When a method finishes, its stack frame is removed from the stack. Objects created by that method can remain in heap memory until they become unreachable and are reclaimed by Garbage Collection.',
              codeExample: `void process() {\n    int temp = 42;          // Stack variable: cleared on method exit\n    User u = new User();   // 'u' is on stack; new User() object remains on heap\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'gc-q8',
              question: 'What Is the Difference Between Stack and Heap Memory?',
              answer: '• Stack: Stores method calls and local variables. Each thread has its own stack.\n• Heap: Stores objects and arrays. It is shared among threads.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q9',
              question: 'When Does an Object Become Eligible for Garbage Collection?',
              answer: 'An object becomes eligible for Garbage Collection when it is no longer reachable through any live reference.',
              codeExample: `User user = new User("Chakri");\nuser = null; // Reference severed -> Object on heap is now eligible for GC`,
              difficulty: 'Essential'
            },
            {
              id: 'gc-q10',
              question: 'Can We Force Garbage Collection in Java?',
              answer: 'No. We cannot guarantee when Garbage Collection runs. Calling System.gc() only requests the JVM to perform Garbage Collection.',
              codeExample: `System.gc(); // Only a request/hint to the JVM; execution is not guaranteed`,
              difficulty: 'Essential'
            },
            {
              id: 'gc-q11',
              question: 'What Is Metaspace?',
              answer: 'Metaspace is the memory area used by the HotSpot JVM to store class metadata, such as information about loaded classes and methods.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q12',
              question: 'What Is the Difference Between Stack, Heap, and Metaspace?',
              answer: '• Stack: Stores method frames and local variables.\n• Heap: Stores objects and arrays.\n• Metaspace: Stores class metadata.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q13',
              question: 'Give a Real-World Example of Stack and Heap Memory.',
              answer: 'Think of the stack as a temporary notebook used while completing a task. When the task finishes, its notes are cleared. The heap is like a storage room where objects remain until they are no longer needed and can be removed by Garbage Collection.',
              example: 'Sticky Notes (Stack) are discarded when call ends; Public Library Books (Heap) remain until inventory staff (Garbage Collector) clears unread books.',
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'oop-concepts',
      title: 'Object-Oriented Programming (OOP) Pillars',
      description: 'OOP fundamentals, Classes, Objects, Encapsulation, static keyword, Constructors, Inheritance, super/final, Polymorphism, Method Hiding, Upcasting/Downcasting, Abstraction, and HAS-A relationships.',
      concepts: [
        {
          id: 'cj-oop-class-object-array',
          title: 'OOP Concepts, Classes & Objects',
          description: 'Comprehensive interview definitions, examples, and rules for OOP Concepts, Classes, Objects & The 4 Pillars.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS OOP?
Object-oriented programming (OOP) organizes software around classes and objects. It helps model real-world entities and supports modularity, reuse, and maintainability.

WHAT IS A CLASS?
A class is a blueprint or template that defines the fields (state) and methods (behavior) that its objects can have.

WHAT IS AN OBJECT?
An object is a runtime instance of a class. It has state (field values), behavior (methods), and identity. The new keyword commonly creates class objects.

FOUR PILLARS OF OOP
1. Encapsulation: Bundling data and methods into a single unit while restricting direct access to internal state.
2. Inheritance: Mechanism where a child class acquires fields and methods of a parent class for code reuse.
3. Polymorphism: Ability of an object or method to take many forms (method overloading and overriding).
4. Abstraction: Hiding internal implementation details and showing only the essential functionality to users.`,
          interviewAnswer: 'OOP organizes software around Classes (compile-time blueprints defining state and behavior) and Objects (runtime instances created via "new" with state, behavior, and identity). The 4 fundamental pillars are Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (flexibility via overloading/overriding), and Abstraction (hiding implementation complexity).',
          explanation: `1. What is OOP?
Object-oriented programming organizes software around classes and objects to model real-world entities with modularity, reuse, and maintainability.

2. Class:
A class is a blueprint or template defining the fields (state) and methods (behavior) that its objects will have. It occupies no heap memory until instantiated.

3. Object:
An object is a runtime instance of a class with state (field values), behavior (methods), and identity (unique memory address).

4. Four Pillars of OOP:
- Encapsulation: Bundles data and methods, hiding internal state via private fields and public getters/setters.
- Inheritance: Subclass acquires accessible properties and behaviors of a superclass using "extends".
- Polymorphism: One interface, multiple implementations (compile-time overloading and runtime overriding).
- Abstraction: Hides complex implementation details, exposing clean interfaces or abstract classes.`,
          realWorldExample: 'An architectural blueprint of a building is a Class. The actual physical building constructed from that blueprint is an Object, having state (floors, paint color) and behavior (elevators move, lights turn on).',
          codeSnippet: {
            code: `class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void displayDetails() {
        System.out.println("Employee: " + name + " (ID: " + id + ")");
    }
}

public class OOPBasicsDemo {
    public static void main(String[] args) {
        // Creating an Object from the Class blueprint using 'new'
        Employee e1 = new Employee(101, "Chakri");
        e1.displayDetails();
    }
}`,
            input: "id = 101, name = 'Chakri'",
            output: `Employee: Chakri (ID: 101)`
          },
          codeExample: `class Employee {
    int id;
    String name;
    void display() { System.out.println(name); }
}
Employee e = new Employee();`,
          questions: [
            {
              id: 'oop-q1',
              question: 'What is OOP?',
              answer: 'OOP (Object-Oriented Programming) is a programming approach that organizes code using classes and objects. It makes code reusable, organized, and easier to maintain.',
              difficulty: 'Essential'
            },
            {
              id: 'oop-q2',
              question: 'What is a Class?',
              answer: 'A class is a blueprint or template used to create objects. It defines the properties (variables) and behaviors (methods) of objects.',
              codeExample: `class Car {\n    String brand;\n    void drive() {\n        System.out.println(brand + " is driving.");\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'oop-q3',
              question: 'What is an Object?',
              answer: 'An object is an instance of a class. It has state (data), behavior (methods), and identity. Objects are commonly created using the new keyword in Java.',
              codeExample: `Car myCar = new Car(); // 'myCar' is a runtime object instance\nmyCar.brand = "Tesla";\nmyCar.drive();`,
              difficulty: 'Essential'
            },
            {
              id: 'oop-q4',
              question: 'What are the Four Pillars of OOP?',
              answer: 'The four pillars of OOP are:\n\n• Encapsulation: Wrapping data and methods into a single unit and restricting direct access to data.\n• Inheritance: Allowing one class to acquire the properties and methods of another class for code reusability.\n• Polymorphism: Allowing the same method name or interface to behave differently in different situations.\n• Abstraction: Hiding implementation details and showing only essential functionality.',
              difficulty: 'Essential'
            },
            {
              id: 'oop-q5',
              question: 'What is the Difference Between a Class and an Object?',
              answer: 'A class is a blueprint used to create objects, whereas an object is an instance of a class that has its own state and can perform actions.',
              codeExample: `// Blueprint (Class)\nclass Car { String model; }\n\n// Real instances (Objects)\nCar car1 = new Car();\nCar car2 = new Car();`,
              difficulty: 'Essential'
            },
            {
              id: 'oop-q6',
              question: 'Give a Real-World Example of OOP.',
              answer: 'A building blueprint is a class, and the actual buildings constructed from that blueprint are objects. The buildings have properties, such as color and number of floors, and behaviors, such as opening doors and operating elevators.',
              example: 'Blueprint (Class) defines structure; 5 constructed towers (Objects) have unique colors and occupied rooms.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-encapsulation',
          title: 'Encapsulation, Getters, Setters & "this" Keyword',
          description: 'Comprehensive interview definitions, examples, and rules for Encapsulation, Getters, Setters, "this" Keyword & "this()" Call.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS ENCAPSULATION?
Encapsulation bundles data and the methods that operate on it within a class and restricts direct access to internal state. It is commonly implemented with private fields and public methods that control access.

GETTER AND SETTER
A getter returns or reads a field's value. A setter assigns or updates a field's value and can validate the value before changing the field.

ADVANTAGES OF ENCAPSULATION
Data Hiding: Protects data from direct access.
Controlled Access: Allows access through methods.
Validation: Checks values before updating data.
Maintainability: Makes code easier to modify and maintain.
Security: Helps protect an object's internal state.

VARIABLE SHADOWING
Variable shadowing occurs when a local variable or parameter has the same name as an instance variable, hiding the instance variable within that scope.

WHAT IS "this" KEYWORD?
The this keyword refers to the current object. It is commonly used to distinguish instance variables from local variables or parameters with the same name (e.g. this.id = id;).

WHAT IS "this()" CONSTRUCTOR CALL?
The this() statement is used to call another constructor within the same class (constructor chaining). It must be the first statement in the constructor.`,
          interviewAnswer: 'Encapsulation bundles data and methods while restricting direct access using private fields and public getters/setters with validation. "this" keyword refers to the current object and is used to solve the variable shadowing problem (this.id = id). "this()" constructor call is used for constructor chaining to call another constructor within the same class and must be the first statement.',
          explanation: `1. Encapsulation:
Bundles data and methods that operate on it within a class while restricting direct access to internal state using private fields and public methods.

2. Advantages of Encapsulation:
Supports data hiding, controlled access, validation, lower coupling, and easier maintenance.

3. Getters and Setters:
- Getter: reads and returns field value.
- Setter: validates input and assigns field value.

4. "this" Keyword vs "this()" Constructor Call:
- "this" Keyword: A reference variable pointing to the current object instance. It solves the variable shadowing problem (differentiating instance variables from local parameters: this.balance = balance).
- "this()" Call: A constructor invocation statement used for constructor chaining to call another constructor within the same class. It must be the very first statement inside the constructor.`,
          realWorldExample: 'A bank account is an example of encapsulation. The account balance is private, and users access or modify it through methods like deposit() and withdraw(), which can validate transactions before updating the balance.',
          codeSnippet: {
            code: `class BankAccount {
    private String owner;
    private double balance;

    // 1. "this()" constructor call -> calls another constructor in same class (Constructor Chaining)
    public BankAccount(String owner) {
        this(owner, 0.0); // Must be the first statement!
    }

    public BankAccount(String owner, double balance) {
        // 2. "this" keyword -> solves variable shadowing problem
        this.owner = owner;
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance; // 'this' keyword refers to instance variable
        }
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        // Invokes constructor chaining with this()
        BankAccount acc = new BankAccount("Chakri");
        acc.setBalance(5000.0);
        System.out.println("Account Balance: $" + acc.getBalance());
    }
}`,
            input: "owner = 'Chakri', setBalance(5000.0)",
            output: `Account Balance: $5000.0`
          },
          codeExample: `class BankAccount {
  private double balance;
  public double getBalance() { return balance; }
  public void setBalance(double balance) {
    if (balance >= 0) this.balance = balance;
  }
}`,
          questions: [
            {
              id: 'enc-q1',
              question: 'What is Encapsulation?',
              answer: 'Encapsulation is the process of wrapping data and methods into a single class and restricting direct access to data using access modifiers like private.',
              difficulty: 'Essential'
            },
            {
              id: 'enc-q2',
              question: 'What are Getters and Setters?',
              answer: "A getter is a method used to read a variable's value, whereas a setter is a method used to update a variable's value and validate it if necessary.",
              codeExample: `public class Account {\n    private double balance;\n    public double getBalance() { return balance; } // Getter\n    public void setBalance(double b) {             // Setter with validation\n        if (b >= 0) this.balance = b;\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'enc-q3',
              question: 'What are the Advantages of Encapsulation?',
              answer: "• Data Hiding: Protects data from direct access.\n• Controlled Access: Allows access through methods.\n• Validation: Checks values before updating data.\n• Maintainability: Makes code easier to modify and maintain.\n• Security: Helps protect an object's internal state.",
              difficulty: 'Essential'
            },
            {
              id: 'enc-q4',
              question: 'What is Variable Shadowing?',
              answer: 'Variable shadowing occurs when a local variable or parameter has the same name as an instance variable, hiding the instance variable within that scope.',
              codeExample: `class Student {\n    int id = 10; // Instance variable\n    void setId(int id) { // Local parameter shadows instance 'id'\n        this.id = id;    // 'this.id' avoids shadowing\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'enc-q5',
              question: 'What is the this Keyword in Java?',
              answer: 'The this keyword refers to the current object. It is commonly used to distinguish instance variables from local variables or parameters with the same name.\n\nExample: this.id = id;',
              codeExample: `class Student {\n    int id;\n    Student(int id) {\n        this.id = id; // 'this.id' refers to instance variable\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'enc-q6',
              question: 'What is this() in Java?',
              answer: 'The this() statement is used to call another constructor within the same class. It is called constructor chaining, and it must be the first statement in the constructor.',
              codeExample: `class Employee {\n    String name;\n    int age;\n    Employee(String name) {\n        this(name, 25); // Constructor chaining using this()\n    }\n    Employee(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'enc-q7',
              question: 'What is the Difference Between this and this()?',
              answer: '• this: Refers to the current object.\n• this(): Calls another constructor in the same class.',
              codeExample: `class Demo {\n    int x;\n    Demo() {\n        this(10);   // this(): calls parameterized constructor\n    }\n    Demo(int x) {\n        this.x = x; // this: refers to current object instance field\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'enc-q8',
              question: 'Give a Real-World Example of Encapsulation.',
              answer: 'A bank account is an example of encapsulation. The account balance is private, and users access or modify it through methods like deposit() and withdraw(), which can validate transactions before updating the balance.',
              example: 'ATM / Banking: You cannot modify balance directly in the vault; deposit(amount) and withdraw(amount) validate positive amounts and sufficient funds.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-static-keyword',
          title: 'static Keyword, Static Methods & Static Blocks',
          description: 'Comprehensive interview definitions, examples, and rules for static Keyword, Static Methods & Static Blocks.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS A STATIC VARIABLE?
A static variable is a variable declared using the static keyword. It belongs to the class and is shared by all objects of that class.

WHAT IS A STATIC METHOD?
A static method is a method declared using the static keyword. It belongs to the class and can be called using the class name without creating an object.

WHAT IS A STATIC BLOCK?
A static block is a block of code that executes when the JVM initializes a class. It is mainly used to initialize static variables.

WHY SHOULD A VARIABLE BE DECLARED STATIC?
A variable should be declared static when its value needs to be shared by all objects of a class instead of having a separate copy for each object.`,
          interviewAnswer: 'In Java, static members belong to the class rather than individual objects: 1) A Static Variable belongs to the class and is shared by all objects of that class. 2) A Static Method belongs to the class and can be called using the class name without creating an object. 3) A Static Block executes when the JVM initializes a class and is mainly used to initialize static variables. 4) A variable should be declared static when its value needs to be shared across all objects of a class instead of maintaining a separate copy for each object.',
          explanation: `1. What is a Static Variable?
A static variable is a variable declared using the static keyword. It belongs to the class and is shared by all objects of that class.

2. What is a Static Method?
A static method is a method declared using the static keyword. It belongs to the class and can be called using the class name without creating an object.

3. What is a Static Block?
A static block is a block of code that executes when the JVM initializes a class. It is mainly used to initialize static variables.

4. Why Should a Variable Be Declared Static?
A variable should be declared static when its value needs to be shared by all objects of a class instead of having a separate copy for each object.`,
          realWorldExample: 'In a school, every student has their own unique studentName and rollNumber (instance variables). But the schoolName and principalName are static (shared identically by all 1000 students).',
          codeSnippet: {
            code: `public class StaticDemo {
    static int objectCount = 0; // Shared static variable

    static {
        System.out.println("Static block executed once on class initialization.");
    }

    public StaticDemo() {
        objectCount++;
    }

    public static void printTotal() {
        // Can directly access static variables, but not instance variables
        System.out.println("Total instances created: " + objectCount);
    }

    public static void main(String[] args) {
        new StaticDemo();
        new StaticDemo();
        StaticDemo.printTotal();
    }
}`,
            input: "Two instances created",
            output: `Static block executed once on class initialization.
Total instances created: 2`
          },
          codeExample: `public class StaticDemo {
    static int count = 0;
    static void display() { System.out.println(count); }
}`,
          questions: [
            {
              id: 'st-q1',
              question: 'What Is a Static Variable?',
              answer: 'A static variable is a variable declared using the static keyword. It belongs to the class and is shared by all objects of that class.',
              codeExample: `class Student {\n    static String schoolName = "ABC High School"; // Shared by all students\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q2',
              question: 'What Is a Static Method?',
              answer: 'A static method is a method declared using the static keyword. It belongs to the class and can be called using the class name without creating an object.',
              codeExample: `class MathUtil {\n    static int square(int x) {\n        return x * x;\n    }\n}\n// Call directly via class name:\nint result = MathUtil.square(5); // Output: 25`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q3',
              question: 'What Is a Static Block?',
              answer: 'A static block is a block of code that executes when the JVM initializes a class. It is mainly used to initialize static variables.',
              codeExample: `class DatabaseConfig {\n    static String connectionUrl;\n    static {\n        // Executes once when class is loaded\n        connectionUrl = "jdbc:mysql://localhost:3306/mydb";\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q4',
              question: 'Why Should a Variable Be Declared Static?',
              answer: 'A variable should be declared static when its value needs to be shared by all objects of a class instead of having a separate copy for each object.',
              difficulty: 'Essential'
            },
            {
              id: 'st-q5',
              question: 'What Is the Difference Between Static and Instance Variables?',
              answer: 'A static variable is shared by all objects of a class, whereas an instance variable has a separate copy for each object.',
              codeExample: `class Employee {\n    static String company = "TechCorp"; // 1 shared copy in Metaspace\n    String name;                        // Unique copy per object on heap\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q6',
              question: 'Can We Call a Static Method Without Creating an Object?',
              answer: 'Yes. We can call a static method using the class name without creating an object.',
              codeExample: `ClassName.staticMethodName(); // Direct invocation without 'new ClassName()'`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q7',
              question: 'Can a Static Method Access Instance Variables Directly?',
              answer: 'No. A static method cannot directly access instance variables because they belong to individual objects. It can access them through an object reference.',
              codeExample: `class Test {\n    int num = 10; // Instance variable\n    static void show() {\n        // System.out.println(num); // Error: non-static variable cannot be referenced from static context\n        Test t = new Test();\n        System.out.println(t.num); // Allowed via object reference\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q8',
              question: 'Can We Use this Inside a Static Method?',
              answer: 'No. The this keyword refers to the current object, and a static method does not belong to a particular object.',
              difficulty: 'Essential'
            },
            {
              id: 'st-q9',
              question: 'Can We Overload a Static Method?',
              answer: 'Yes. We can overload a static method by using the same method name with different parameter lists.',
              codeExample: `class Calculator {\n    static int add(int a, int b) { return a + b; }\n    static double add(double a, double b) { return a + b; } // Overloaded\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q10',
              question: 'Can We Override a Static Method?',
              answer: 'No. Static methods cannot be overridden in the runtime-polymorphism sense. If a subclass declares a static method with the same signature, it is called method hiding.',
              codeExample: `class Parent {\n    static void print() { System.out.println("Parent"); }\n}\nclass Child extends Parent {\n    static void print() { System.out.println("Child"); } // Method Hiding, not overriding\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'st-q11',
              question: 'What Is the Difference Between a Static Variable and a Static Block?',
              answer: 'A static variable stores class-level data shared by all objects, whereas a static block executes when the class is initialized and is commonly used to initialize static variables.',
              difficulty: 'Essential'
            },
            {
              id: 'st-q12',
              question: 'Give a Real-World Example of a Static Variable.',
              answer: 'In a school, each student has a different name and roll number, but all students share the same school name. Therefore, studentName and rollNumber can be instance variables, while schoolName can be a static variable.',
              example: 'School Scenario: 1,000 students have unique studentName & rollNumber (Instance), but all share 1 schoolName (Static).',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-constructors',
          title: 'Constructors & Constructor Chaining (Default, Copy, this & super)',
          description: 'Comprehensive interview definitions, examples, and rules for Constructors & Constructor Chaining (Default, Copy, this & super).',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS A CONSTRUCTOR?
A constructor initializes a new object. It has the same name as its class and has no return type, not even void. It is invoked when an object is created.

DEFAULT CONSTRUCTOR
If a class declares no constructor, the compiler provides a no-argument default constructor. If you declare any constructor, the compiler does not automatically add that default constructor.

COPY CONSTRUCTOR
Java does not automatically provide a special copy-constructor feature. A copy constructor is programmer-defined and accepts an object of the same class, copying selected values into a new object.

CONSTRUCTOR CHAINING
Constructor chaining is when one constructor calls another to reuse initialization logic. Use this(...) for another constructor in the same class, or super(...) for a parent constructor. The call must be the first statement. Cyclic constructor chaining occurs when constructors call one another in a cycle; Java rejects such a cycle at compile time.`,
          interviewAnswer: 'A constructor initializes an object and has no return type. If you declare no constructor, the compiler provides a default no-argument constructor. Chaining reuses initialization logic using this(...) in the same class or super(...) in the parent class; it must be the very first statement. A copy constructor accepts an existing object of the same class and duplicates its field values.',
          explanation: `1. What Is a Constructor?
A constructor is a specialized setter of a class that has the same name as the class and no return type. It is automatically called when an object is created to initialize the object.

2. What Is a Default Constructor?
A default constructor is a no-argument constructor automatically provided by the compiler when we do not declare any constructor in a class.

3. What Is a Parameterized Constructor?
A parameterized constructor is a constructor that accepts parameters to initialize an object with specific values at the time of object creation.

4. What Is a Copy Constructor?
A copy constructor is a user-defined constructor that accepts an object of the same class and copies its values into a new object.

5. What Is Constructor Chaining?
Constructor chaining is the process of calling one constructor from another constructor to reuse initialization code.`,
          realWorldExample: "When ordering a customized pizza: the default constructor gives you plain cheese; the parameterized constructor lets you pick custom toppings; the copy constructor makes a duplicate of your friend's exact custom order.",
          codeSnippet: {
            code: `class ParentPizza {
    String crust;
    ParentPizza(String crust) {
        this.crust = crust;
    }
}

class Pizza extends ParentPizza {
    String topping;
    int size;

    // Parameterized constructor
    Pizza(String crust, String topping, int size) {
        super(crust); // super(...) must be first statement!
        this.topping = topping;
        this.size = size;
    }

    // Constructor chaining using this(...)
    Pizza() {
        this("Thin Crust", "Plain Cheese", 10); // this(...) must be first statement!
    }

    // Copy constructor (user-defined)
    Pizza(Pizza other) {
        this(other.crust, other.topping, other.size); // Chaining to copy values
    }

    void display() {
        System.out.println(size + "-inch " + crust + " Pizza with " + topping);
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Pizza defaultOrder = new Pizza(); // Default / chained
        Pizza customOrder = new Pizza("Pan", "Mushrooms & Olives", 12); // Parameterized
        Pizza friendOrder = new Pizza(customOrder); // Copy constructor

        defaultOrder.display();
        customOrder.display();
        friendOrder.display();
    }
}`,
            input: "Creating Pizza with default, parameterized, and copy constructors",
            output: `10-inch Thin Crust Pizza with Plain Cheese
12-inch Pan Pizza with Mushrooms & Olives
12-inch Pan Pizza with Mushrooms & Olives`
          },
          codeExample: `// Constructor chaining using this() and super()
Pizza() {
    this("Thin Crust", "Plain Cheese", 10); // Must be the first statement
}`,
          questions: [
            {
              id: 'con-q1',
              question: 'What Is a Constructor?',
              answer: 'A constructor is a specialized setter of a class that has the same name as the class and no return type. It is automatically called when an object is created to initialize the object.',
              codeExample: `class Student {\n    Student() { // Same name as class, no return type\n        System.out.println("Object initialized");\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q2',
              question: 'What Is a Default Constructor?',
              answer: 'A default constructor is a no-argument constructor automatically provided by the compiler when we do not declare any constructor in a class.',
              codeExample: `class Person {\n    // Compiler automatically supplies:\n    // Person() { super(); }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q3',
              question: 'What Is a Parameterized Constructor?',
              answer: 'A parameterized constructor is a constructor that accepts parameters to initialize an object with specific values at the time of object creation.',
              codeExample: `class Student {\n    String name;\n    Student(String name) { // Accepts parameter\n        this.name = name;\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q4',
              question: 'What Is a Copy Constructor?',
              answer: 'A copy constructor is a user-defined constructor that accepts an object of the same class and copies its values into a new object.',
              codeExample: `class Student {\n    String name;\n    int age;\n    // Copy constructor\n    Student(Student other) {\n        this.name = other.name;\n        this.age = other.age;\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q5',
              question: 'What Is Constructor Chaining?',
              answer: 'Constructor chaining is the process of calling one constructor from another constructor to reuse initialization code.',
              codeExample: `class Car {\n    Car() {\n        this("Sedan"); // Calls Car(String)\n    }\n    Car(String type) {\n        System.out.println("Car type: " + type);\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q6',
              question: 'What Is this() in Constructor Chaining?',
              answer: 'this() is used to call another constructor within the same class. It must be the first statement in the constructor.',
              codeExample: `class Box {\n    int length;\n    Box() {\n        this(10); // Must be first statement!\n    }\n    Box(int length) {\n        this.length = length;\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q7',
              question: 'What Is super() in Constructor Chaining?',
              answer: 'super() is used to call the parent class constructor. It must be the first statement in the constructor when used explicitly.',
              codeExample: `class Parent {\n    Parent(String msg) { System.out.println(msg); }\n}\nclass Child extends Parent {\n    Child() {\n        super("Calling Parent"); // Must be first statement!\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q8',
              question: 'What Is the Difference Between a Default Constructor and a Parameterized Constructor?',
              answer: 'A default constructor takes no arguments, whereas a parameterized constructor accepts arguments to initialize an object with specific values.',
              difficulty: 'Essential'
            },
            {
              id: 'con-q9',
              question: 'Can a Constructor Have a Return Type?',
              answer: 'No. A constructor cannot have a return type, not even void. If a return type is specified, Java treats it as a regular method rather than a constructor.',
              codeExample: `class Demo {\n    void Demo() { } // Warning: This is a method, not a constructor!\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q10',
              question: 'When Is a Constructor Called?',
              answer: 'A constructor is called automatically when an object is created using the new keyword.',
              codeExample: `Student s = new Student(); // Constructor is invoked here`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q11',
              question: 'Can We Overload a Constructor?',
              answer: 'Yes. Constructor overloading means defining multiple constructors in the same class with different parameter lists.',
              codeExample: `class Demo {\n    Demo() { }\n    Demo(int a) { }\n    Demo(int a, String b) { } // Overloaded constructors\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'con-q12',
              question: 'What Is Cyclic Constructor Chaining?',
              answer: 'Cyclic constructor chaining occurs when constructors call one another in a cycle. Java does not allow it and produces a compile-time error.',
              codeExample: `class Demo {\n    Demo() { this(10); }     // Error: Recursive constructor invocation\n    Demo(int x) { this(); }   // Error: Calls Demo() back\n}`,
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-inheritance',
          title: 'Inheritance & is-a Relationship (Single, Multilevel, Hierarchical)',
          description: 'Comprehensive interview definitions, examples, and rules for Inheritance & is-a Relationship (Single, Multilevel, Hierarchical).',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS INHERITANCE?
Inheritance allows a subclass to acquire accessible fields and methods from a superclass. A class uses extends to inherit from one direct superclass. Inheritance supports code reuse and method overriding.

TYPES OF INHERITANCE
- Single inheritance: One child class extends one parent class.
- Multilevel inheritance: A class extends a class that itself extends another class, forming a chain.
- Hierarchical inheritance: Two or more child classes extend the same parent class.
- Multiple inheritance: Java classes cannot extend multiple classes (to avoid ambiguity), but a class can implement multiple interfaces.
- Hybrid inheritance: Combines two or more inheritance patterns.

IS-A RELATIONSHIP
An is-a relationship means one type is a specialized form of another type. For example, Dog is an Animal when Dog extends Animal.`,
          interviewAnswer: 'Inheritance allows a subclass to acquire fields and methods from a superclass using "extends", modeling an is-a relationship. Java supports Single, Multilevel, and Hierarchical inheritance for classes. Multiple inheritance is not supported with classes to prevent Diamond ambiguity, but is supported through interfaces. Behavior can be Inherited, Overridden, or Specialized.',
          explanation: `1. What Is Inheritance?
Inheritance is a mechanism in Java where a child class acquires the properties and methods of a parent class using the extends keyword. It helps achieve code reusability.

2. Types of Inheritance:
- Single: One child class inherits from one parent class (class B extends A).
- Multilevel: A class inherits from a child class that inherits from another parent class (class C extends B, and B extends A).
- Hierarchical: Multiple child classes inherit from the same parent class (class B extends A, and class C extends A).
- Multiple: One class inherits from multiple parent classes. Java does not support this through classes to avoid the Diamond Problem, but a class can implement multiple interfaces.
- Hybrid: A combination of two or more inheritance types, achieved using classes and interfaces.

3. IS-A Relationship:
An IS-A relationship means one class is a specialized type of another class, achieved through inheritance using extends or implements (e.g., Dog IS-A Animal, Smartphone IS-A ElectronicDevice).

4. Why We Use Inheritance:
To reuse existing code, reduce code duplication, support method overriding, and establish clean class hierarchies.`,
          realWorldExample: 'A smartphone IS-A electronic device. It inherits basic electronic power functions, overrides display brightness, and adds specialized mobile internet connectivity.',
          codeSnippet: {
            code: `class ElectronicDevice {
    void powerOn() {
        System.out.println("Device power turned ON (Inherited)");
    }
}

class Smartphone extends ElectronicDevice {
    // Specialized behavior
    void enable5G() {
        System.out.println("Connecting to 5G network (Specialized)");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Smartphone phone = new Smartphone();
        phone.powerOn();  // Inherited from ElectronicDevice
        phone.enable5G(); // Specialized Smartphone method
    }
}`,
            input: "Smartphone object created",
            output: `Device power turned ON (Inherited)
Connecting to 5G network (Specialized)`
          },
          codeExample: `class ElectronicDevice { void powerOn() {} }
class Smartphone extends ElectronicDevice { void enable5G() {} }`,
          questions: [
            {
              id: 'inh-q1',
              question: 'What Is Inheritance?',
              answer: 'Inheritance is a mechanism in Java where a child class acquires the properties and methods of a parent class using the extends keyword. It helps achieve code reusability.',
              codeExample: `class Parent { void greet() {} }\nclass Child extends Parent { } // Child inherits greet()`,
              difficulty: 'Essential'
            },
            {
              id: 'inh-q2',
              question: 'What Are the Types of Inheritance in Java?',
              answer: 'Java inheritance has five commonly discussed types:\n• Single Inheritance: One child class inherits from one parent class.\n• Multilevel Inheritance: A class inherits from a child class that inherits from another parent class.\n• Hierarchical Inheritance: Multiple child classes inherit from the same parent class.\n• Multiple Inheritance: One class inherits from multiple parent classes. Java does not support this through classes, but a class can implement multiple interfaces.\n• Hybrid Inheritance: A combination of two or more inheritance types. It can be achieved in Java using classes and interfaces.',
              codeExample: `// Single: class B extends A {}\n// Multilevel: class C extends B {}\n// Hierarchical: class B extends A {}, class C extends A {}\n// Multiple: class C implements I1, I2 {}`,
              difficulty: 'Essential'
            },
            {
              id: 'inh-q3',
              question: 'What Is an IS-A Relationship?',
              answer: 'An IS-A relationship means one class is a specialized type of another class. It is achieved through inheritance using extends or implements.\n\nExample: A Dog IS-A Animal.',
              codeExample: `class Animal { }\nclass Dog extends Animal { } // Dog IS-A Animal`,
              difficulty: 'Essential'
            },
            {
              id: 'inh-q4',
              question: 'Why Do We Use Inheritance?',
              answer: 'Inheritance is used to reuse existing code, reduce code duplication, support method overriding, and create relationships between classes.',
              difficulty: 'Essential'
            },
            {
              id: 'inh-q5',
              question: 'Why Does Java Not Support Multiple Inheritance Through Classes?',
              answer: 'Java does not support multiple inheritance through classes to avoid ambiguity when multiple parent classes provide the same method implementation. This is commonly known as the Diamond Problem.',
              codeExample: `// If Java permitted:
// class C extends A, B { } // If both A and B define display(), which one should C execute?
// Java avoids this ambiguity by prohibiting multiple class inheritance.`,
              difficulty: 'Essential'
            },
            {
              id: 'inh-q6',
              question: 'What Is the Difference Between a Parent Class and a Child Class?',
              answer: 'A parent class is the class whose accessible members can be inherited, whereas a child class is the class that inherits from the parent class using extends.',
              codeExample: `class Parent { } // Base / Superclass\nclass Child extends Parent { } // Derived / Subclass`,
              difficulty: 'Essential'
            },
            {
              id: 'inh-q7',
              question: 'Can We Achieve Multiple Inheritance in Java?',
              answer: 'Yes. Java supports multiple inheritance of type through interfaces. A class can implement multiple interfaces using the implements keyword.',
              codeExample: `interface Printable { void print(); }\ninterface Showable { void show(); }\nclass Document implements Printable, Showable {\n    public void print() { System.out.println("Printing"); }\n    public void show() { System.out.println("Showing"); }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'inh-q8',
              question: 'Give a Real-World Example of Inheritance.',
              answer: 'A smartphone IS-A electronic device. The smartphone can inherit common properties and methods from an ElectronicDevice class (such as powerOn) and add its own specialized features, such as mobile internet connectivity (such as enable5G).',
              example: 'ElectronicDevice (Parent: powerOn) -> Smartphone (Child: powerOn + enable5G)',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-super-final-access',
          title: 'super, final & Access Modifiers (public, protected, package-private, private)',
          description: 'Comprehensive interview definitions, examples, and rules for super, final & Access Modifiers (public, protected, package-private, private).',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS THE SUPER KEYWORD?
The super keyword is used to refer to the immediate parent class. It is used to access parent class variables and methods and to call the parent class constructor.

WHAT IS THE FINAL KEYWORD?
The final keyword is used to restrict changes in Java:
- Final Variable: Its value cannot be reassigned after initialization.
- Final Method: It cannot be overridden by a subclass.
- Final Class: It cannot be inherited by another class.

ACCESS MODIFIERS
Access modifiers are keywords used to control the visibility and accessibility of classes, variables, methods, and constructors in Java:
- public: Allows a class or member to be accessed from anywhere, subject to normal Java access rules.
- protected: Allows access within the same package and also in subclasses outside the package, subject to Java's access rules.
- default (package-private): When no access modifier is specified, the member can be accessed within the same package.
- private: Restricts access to the declaring class.`,
          interviewAnswer: 'The super keyword refers to the immediate parent class to access parent variables and methods and call parent constructors. The final keyword restricts changes: a final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited. Access modifiers (public, protected, package-private, private) define the visibility and accessibility of classes and members.',
          explanation: `1. What Is the super Keyword?
The super keyword is used to refer to the immediate parent class. It is used to access parent class variables and methods and to call the parent class constructor.

2. What Is the final Keyword?
The final keyword is used to restrict changes in Java:
- Final Variable: Value cannot be reassigned after initialization.
- Final Method: Cannot be overridden by a subclass.
- Final Class: Cannot be inherited by another class.

3. What Are Access Modifiers?
Access modifiers control the visibility and accessibility of classes, variables, methods, and constructors:
- public: Broadest access (anywhere).
- protected: Same package + subclasses across packages.
- default (package-private): Same package only.
- private: Declaring class only (most restrictive).

4. Difference Between super and this:
- super refers to the immediate parent class.
- this refers to the current object.`,
          realWorldExample: 'A final variable is like a fixed passport number that cannot be reassigned. A private variable is like a personal diary that others cannot access directly, whereas a public notice is available for everyone to see.',
          codeSnippet: {
            code: `class ParentDevice {
    protected String brand = "GenericTech";

    ParentDevice(String brand) {
        this.brand = brand;
    }

    void showInfo() {
        System.out.println("Brand: " + brand);
    }
}

final class SecurePhone extends ParentDevice { // final class: cannot be inherited
    private final String imeiNumber; // final variable: cannot be reassigned
    public String modelName;

    SecurePhone(String brand, String modelName, String imei) {
        super(brand); // super constructor call
        this.modelName = modelName;
        this.imeiNumber = imei;
    }

    @Override
    public final void showInfo() { // final method: cannot be overridden
        super.showInfo(); // Calls parent method
        System.out.println("Model: " + modelName + " (Public)");
        System.out.println("IMEI: " + imeiNumber + " (Private Final)");
    }
}

public class SuperFinalDemo {
    public static void main(String[] args) {
        SecurePhone phone = new SecurePhone("Apple", "iPhone 15", "990001234567890");
        phone.showInfo();
    }
}`,
            input: "Creating SecurePhone with final IMEI and public model",
            output: `Brand: Apple
Model: iPhone 15 (Public)
IMEI: 990001234567890 (Private Final)`
          },
          codeExample: `final class ImmutableClass { }
public / protected / package-private / private`,
          questions: [
            {
              id: 'sf-q1',
              question: 'What Is the super Keyword?',
              answer: 'The super keyword is used to refer to the immediate parent class. It is used to access parent class variables and methods and to call the parent class constructor.',
              codeExample: `class Child extends Parent {\n    void test() {\n        super.display(); // Calls parent method\n        System.out.println(super.name); // Parent variable\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q2',
              question: 'What Is the final Keyword?',
              answer: 'The final keyword is used to restrict changes in Java:\n• Final Variable: Its value cannot be reassigned after initialization.\n• Final Method: It cannot be overridden by a subclass.\n• Final Class: It cannot be inherited by another class.',
              codeExample: `final class A { } // Cannot be inherited\nclass B {\n    final int MAX = 100; // Cannot be reassigned\n    final void lock() { } // Cannot be overridden\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q3',
              question: 'What Are Access Modifiers?',
              answer: 'Access modifiers are keywords used to control the visibility and accessibility of classes, variables, methods, and constructors in Java.',
              codeExample: `public class Demo {\n    public int a;\n    protected int b;\n    int c; // default\n    private int d;\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q4',
              question: 'What Is public?',
              answer: 'public allows a class or member to be accessed from anywhere, subject to normal Java access rules.',
              codeExample: `public class PublicDemo {\n    public void display() {\n        System.out.println("Accessible anywhere");\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q5',
              question: 'What Is private?',
              answer: 'private restricts access to the declaring class.',
              codeExample: `class BankAccount {\n    private double balance; // Accessible only inside BankAccount\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q6',
              question: 'What Is protected?',
              answer: 'protected allows access within the same package and also in subclasses outside the package, subject to Java\'s access rules.',
              codeExample: `class Parent {\n    protected int score = 90; // Same package & subclasses\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q7',
              question: 'What Is the Default Access Modifier?',
              answer: 'When no access modifier is specified, Java uses package-private access. The member can be accessed within the same package.',
              codeExample: `class PackageDemo {\n    int defaultNumber = 42; // Package-private\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q8',
              question: 'What Is the Difference Between public, private, protected, and Default?',
              answer: '• Public: Accessible from anywhere, subject to normal access rules.\n• Protected: Accessible within the same package and through inheritance under Java\'s access rules.\n• Default: Accessible only within the same package.\n• Private: Accessible only within the declaring class.',
              difficulty: 'Essential'
            },
            {
              id: 'sf-q9',
              question: 'What Is the Difference Between super and this?',
              answer: '• super: Refers to the immediate parent class.\n• this: Refers to the current object.',
              codeExample: `class Child extends Parent {\n    int x = 20;\n    void print() {\n        System.out.println(this.x);  // 20 (Child)\n        System.out.println(super.x); // 10 (Parent)\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'sf-q10',
              question: 'Give a Real-World Example of final and Access Modifiers.',
              answer: 'A final variable is like a fixed passport number that cannot be reassigned. A private variable is like a personal diary that others cannot access directly, whereas a public notice is available for everyone to see.',
              example: 'Passport Number (final: immutable) | Personal Diary (private) | Family Album (protected) | Office Notice (package-private) | Billboard (public)',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-polymorphism',
          title: 'Polymorphism (Method Overloading, Method Overriding & Covariant Return)',
          description: 'Comprehensive interview definitions, examples, and rules for Polymorphism, Method Overloading, Method Overriding & Covariant Return.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS POLYMORPHISM?
Polymorphism means one name, many forms. In Java, it allows the same method name or interface to behave differently in different situations.

WHAT IS METHOD OVERLOADING?
Method overloading means defining multiple methods with the same name but different parameter lists in the same class. It is an example of compile-time polymorphism.

WHAT IS METHOD OVERRIDING?
Method overriding occurs when a child class provides its own implementation of an inherited instance method with the same signature. It supports runtime polymorphism.

WHAT IS A COVARIANT RETURN TYPE?
A covariant return type allows an overriding method to return a more specific reference type (subtype) than the method in the parent class.`,
          interviewAnswer: 'Polymorphism means one name, many forms. Compile-time polymorphism is achieved through Method Overloading (compiler binds method based on parameter list: count, type, or order). Runtime polymorphism is achieved through Method Overriding (JVM dynamically selects method to execute at runtime based on actual heap object). A covariant return type allows an overriding method to return a subtype of the parent method\'s return type.',
          explanation: `1. What is Polymorphism?
Polymorphism means one name, many forms. In Java, it allows the same method name or interface to behave differently in different situations.

2. Method Overloading (Compile-Time Polymorphism):
Defining multiple methods in the same class with the same name but different parameter lists (count, type, or order). Return type alone cannot distinguish overloaded methods.

3. Method Overriding (Runtime Polymorphism):
A child class provides its own implementation of an inherited instance method with the same name, same parameters, and compatible return type.

4. Covariant Return Type:
Enables the overriding method in the child class to return a subtype of the parent method's return type without requiring an explicit cast.`,
          realWorldExample: 'A smartphone volume button: In a media player, it adjusts video volume. During a phone call, it adjusts in-call speech volume. On the home screen, it adjusts ringtone volume. One button (same interface), multiple behaviors based on current runtime context.',
          codeSnippet: {
            code: `class Calculator {
    // 1. Method Overloading (Compile-Time Polymorphism)
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

class Animal {
    // 2. Method Overriding (Runtime Polymorphism)
    Animal reproduce() { return new Animal(); }
    void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    // 3. Covariant Return Type (Dog is a subtype of Animal)
    @Override
    Dog reproduce() { return new Dog(); }

    @Override
    void sound() { System.out.println("Dog barks: Woof Woof!"); }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Method Overloading
        Calculator calc = new Calculator();
        System.out.println("add(2, 3): " + calc.add(2, 3));
        System.out.println("add(2, 3, 4): " + calc.add(2, 3, 4));

        // Method Overriding & Dynamic Dispatch
        Animal a = new Dog(); // Upcasting
        a.sound(); // Calls Dog's overridden sound() at runtime
    }
}`,
            input: "calc.add(2, 3), calc.add(2, 3, 4), Animal a = new Dog()",
            output: `add(2, 3): 5
add(2, 3, 4): 9
Dog barks: Woof Woof!`
          },
          codeExample: `// Overloading
int add(int a, int b) { return a + b; }
// Overriding with Covariant Return
@Override Dog reproduce() { return new Dog(); }`,
          questions: [
            {
              id: 'poly-q1',
              question: 'What is Polymorphism?',
              answer: 'Polymorphism means one name, many forms. In Java, it allows the same method name or interface to behave differently in different situations.',
              codeExample: `// Compile-time (Overloading) & Runtime (Overriding)`,
              difficulty: 'Essential'
            },
            {
              id: 'poly-q2',
              question: 'What is Method Overloading?',
              answer: 'Method overloading means defining multiple methods with the same name but different parameter lists in the same class. It is an example of compile-time polymorphism.',
              codeExample: `class Calc {\n    int add(int a, int b) { return a + b; }\n    int add(int a, int b, int c) { return a + b + c; }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'poly-q3',
              question: 'What is Method Overriding?',
              answer: 'Method overriding occurs when a child class provides its own implementation of an inherited instance method with the same signature. It supports runtime polymorphism.',
              codeExample: `class Animal { void sound() { System.out.println("Animal"); } }\nclass Dog extends Animal {\n    @Override void sound() { System.out.println("Dog barks"); }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'poly-q4',
              question: 'What is Covariant Return Type?',
              answer: 'A covariant return type allows an overriding method to return a more specific reference type than the method in the parent class.',
              codeExample: `class Parent { Parent get() { return this; } }\nclass Child extends Parent {\n    @Override Child get() { return this; } // Covariant return\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'poly-q5',
              question: 'What is the Difference Between Overloading and Overriding?',
              answer: '• Overloading: Same method name with different parameter lists; compile-time polymorphism.\n• Overriding: A child class provides a new implementation of an inherited method; runtime polymorphism.',
              codeExample: `// Overloading: happens within the same class\n// Overriding: happens between superclass and subclass`,
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-method-hiding',
          title: 'Method Hiding vs Method Overriding',
          description: 'Comprehensive interview definitions, examples, and rules for Method Hiding vs Method Overriding.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS METHOD HIDING?
Method hiding occurs when a child class declares a static method with the same signature as a static method in its parent class. Selection depends on the class or reference type used to make the call, not runtime overriding dispatch.

CAN STATIC METHODS BE OVERRIDDEN?
No. Static methods cannot be overridden in the runtime-polymorphism sense. A static method with the same signature in a child class hides the parent method.`,
          interviewAnswer: 'Method hiding occurs when a child class declares a static method with the same signature as a static method in its parent class. Static methods belong to the class, not instance objects; therefore, the compiler resolves them at compile-time based on the declared reference type (Early Binding). In contrast, method overriding applies to instance methods where the JVM dynamically selects the method at runtime based on the actual heap object (Dynamic Binding).',
          explanation: `1. What is Method Hiding?
Method hiding occurs when a child class declares a static method with the same signature as a static method in its parent class.

2. Difference Between Method Hiding and Method Overriding:
- Method Hiding: Applies to static methods and depends on the reference or class used to call the method (compile-time).
- Method Overriding: Applies to instance methods and the implementation is selected at runtime based on the actual object.

3. Can We Override a Static Method?
No. Static methods cannot be overridden in the runtime-polymorphism sense. A static method with the same signature in a child class hides the parent method.

4. Can We Hide an Instance Method?
No. An instance method cannot be hidden by declaring a static method with the same signature in a child class. Java reports a compilation error.`,
          realWorldExample: 'A corporate memo issued by the main company headquarters Corporate.policy() versus a branch notice Branch.policy(). A customer reading the corporate letterhead will always read Corporate.policy() because static notices belong to the letterhead, not the individual delivery courier.',
          codeSnippet: {
            code: `class Parent {
    static void print() { System.out.println("Parent static print() [Hidden]"); }
    void display() { System.out.println("Parent display() [Overridden]"); }
}

class Child extends Parent {
    static void print() { System.out.println("Child static print()"); }
    @Override
    void display() { System.out.println("Child display()"); }
}

public class MethodHidingDemo {
    public static void main(String[] args) {
        Parent ref = new Child();
        ref.print();   // Method Hiding -> Calls Parent.print() (Resolved by Parent reference type!)
        ref.display(); // Overriding -> Calls Child.display() (Resolved dynamically by Child object!)
    }
}`,
            input: "Parent ref = new Child()",
            output: `Parent static print() [Hidden]
Child display() [Overridden]`
          },
          codeExample: `class Parent { static void print() {} }
class Child extends Parent { static void print() {} }`,
          questions: [
            {
              id: 'mh-q1',
              question: 'What is Method Hiding?',
              answer: 'Method hiding occurs when a child class declares a static method with the same signature as a static method in its parent class.',
              codeExample: `class Parent { static void show() { System.out.println("Parent"); } }\nclass Child extends Parent { static void show() { System.out.println("Child"); } }`,
              difficulty: 'Essential'
            },
            {
              id: 'mh-q2',
              question: 'What is the Difference Between Method Hiding and Method Overriding?',
              answer: '• Method Hiding: Applies to static methods and depends on the reference or class used to call the method.\n• Method Overriding: Applies to instance methods and the implementation is selected at runtime based on the actual object.',
              codeExample: `Parent p = new Child();\np.staticMethod(); // Calls Parent (Method Hiding)\np.instanceMethod(); // Calls Child (Method Overriding)`,
              difficulty: 'Essential'
            },
            {
              id: 'mh-q3',
              question: 'Can We Override a Static Method?',
              answer: 'No. Static methods cannot be overridden in the runtime-polymorphism sense. A static method with the same signature in a child class hides the parent method.',
              codeExample: `// Static methods belong to the class, not to an object instance`,
              difficulty: 'Essential'
            },
            {
              id: 'mh-q4',
              question: 'Can We Hide an Instance Method?',
              answer: 'No. An instance method cannot be hidden by declaring a static method with the same signature in a child class. Java reports a compilation error.',
              codeExample: `class Parent { void display() {} }\nclass Child extends Parent {\n    // static void display() {} // COMPILE ERROR: Cannot hide instance method with static\n}`,
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-upcasting-downcasting',
          title: 'Type Casting: Upcasting vs Downcasting',
          description: 'Comprehensive interview definitions, examples, and rules for Type Casting: Upcasting vs Downcasting.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS UPCASTING?
Upcasting means converting a child-class reference into a parent-class reference. It happens implicitly and safely. E.g.: Animal a = new Dog();

WHAT IS DOWNCASTING?
Downcasting means converting a parent-class reference into a child-class reference. It generally requires an explicit cast. E.g.: Dog d = (Dog) a;`,
          interviewAnswer: 'Upcasting converts a child-class reference to a parent-class reference implicitly and safely, powering runtime polymorphism. Downcasting converts a parent-class reference back to a child-class reference explicitly to access child-specific members, and can throw a runtime ClassCastException if the heap object is not compatible.',
          explanation: `1. What is Upcasting?
Upcasting means converting a child-class reference into a parent-class reference. It happens implicitly.

2. What is Downcasting?
Downcasting means converting a parent-class reference into a child-class reference. It generally requires an explicit cast.

3. Difference Between Upcasting and Downcasting:
- Upcasting: Child reference to parent reference; automatic, safe, and supports polymorphism.
- Downcasting: Parent reference to child reference; explicit and can fail at runtime if the object is not compatible.

4. Why We Use Upcasting:
Allows us to refer to different child-class objects through a common parent-class reference and supports runtime polymorphism.

5. Why We Use Downcasting:
Used when we need to access child-specific members through a parent reference and know that the actual object is an instance of that child class.`,
          realWorldExample: 'Upcasting: Handing someone an iPhone and saying "Here is a smartphone" (always true). Downcasting: Handing a mystery gadget box and claiming "This is specifically an iPhone with FaceID". If the box actually contains an Android, it fails with ClassCastException.',
          codeSnippet: {
            code: `class Animal {
    void eat() { System.out.println("Animal eats"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Dog barks: Woof!"); }
}

public class CastingDemo {
    public static void main(String[] args) {
        // 1. Upcasting: Safe & Implicit
        Animal a = new Dog();
        a.eat(); // Valid

        // 2. Downcasting: Explicit & Safe with instanceof
        if (a instanceof Dog) {
            Dog d = (Dog) a;
            d.bark(); // Valid
        }
    }
}`,
            input: "Animal a = new Dog()",
            output: `Animal eats
Dog barks: Woof!`
          },
          codeExample: `Animal a = new Dog(); // Upcasting (Implicit)
if (a instanceof Dog) { Dog d = (Dog) a; } // Downcasting (Explicit)`,
          questions: [
            {
              id: 'ud-q1',
              question: 'What is Upcasting?',
              answer: 'Upcasting means converting a child-class reference into a parent-class reference. It happens implicitly.',
              codeExample: `Animal a = new Dog(); // Child reference converted to Parent`,
              difficulty: 'Essential'
            },
            {
              id: 'ud-q2',
              question: 'What is Downcasting?',
              answer: 'Downcasting means converting a parent-class reference into a child-class reference. It generally requires an explicit cast.',
              codeExample: `Dog d = (Dog) a; // Explicit cast required`,
              difficulty: 'Essential'
            },
            {
              id: 'ud-q3',
              question: 'What is the Difference Between Upcasting and Downcasting?',
              answer: '• Upcasting: Child reference to parent reference; automatic.\n• Downcasting: Parent reference to child reference; explicit and can fail at runtime if the object is not compatible.',
              difficulty: 'Essential'
            },
            {
              id: 'ud-q4',
              question: 'Why Do We Use Upcasting?',
              answer: 'Upcasting allows us to refer to different child-class objects through a common parent-class reference and supports runtime polymorphism.',
              codeExample: `void process(Animal a) { a.eat(); } // Accepts any Animal subclass`,
              difficulty: 'Essential'
            },
            {
              id: 'ud-q5',
              question: 'Why Do We Use Downcasting?',
              answer: 'Downcasting is used when we need to access child-specific members through a parent reference and know that the actual object is an instance of that child class.',
              codeExample: `if (a instanceof Dog) {\n    Dog d = (Dog) a;\n    d.bark(); // Access Dog-specific method\n}`,
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-abstraction-interfaces',
          title: 'Abstraction, Abstract Classes & Interfaces',
          description: 'Comprehensive interview definitions, examples, and rules for Abstraction, Abstract Classes & Interfaces.',
          difficulty: 'Essential',
          studyTime: '12 minutes',
          definition: `WHAT IS ABSTRACTION?
Abstraction means hiding implementation details and showing only the essential functionality to the user. In Java, it is achieved using abstract classes and interfaces.

WHAT IS AN ABSTRACT CLASS?
An abstract class is declared using the abstract keyword. It can contain abstract methods and concrete methods, and we cannot create its objects directly.

WHAT IS AN ABSTRACT METHOD?
An abstract method is a method declared without an implementation. A concrete subclass must implement it unless the subclass is also abstract.

WHAT IS AN INTERFACE?
An interface defines a contract that implementing classes agree to follow. It can contain abstract methods, default methods, static methods, and constants.`,
          interviewAnswer: 'Abstraction is the process of hiding implementation details and showing only essential functionality to the user via abstract classes and interfaces. An abstract class cannot be instantiated directly and can contain abstract methods, concrete methods, constructors, and variables. An interface defines a contract supporting multiple inheritance of type; interface variables are public static final, and methods can be abstract, default, static, or private. Interfaces cannot be instantiated directly, but their references can point to implementing objects.',
          explanation: `1. What is Abstraction?
Abstraction means hiding implementation details and showing only the essential functionality to the user. In Java, it is achieved using abstract classes and interfaces.

2. What is an Abstract Class?
An abstract class is declared using the abstract keyword. It can contain abstract methods and concrete methods, and we cannot create its objects directly.

3. What is an Abstract Method?
An abstract method is a method declared without an implementation. A concrete subclass must implement it unless the subclass is also abstract.

4. What is an Interface?
An interface defines a contract that implementing classes agree to follow. It can contain abstract methods, default methods, static methods, and constants.

5. Difference Between Abstract Class and Interface:
- Abstract Class: Can have instance variables, constructors, abstract methods, and concrete methods. Extended using "extends".
- Interface: Defines a contract and supports multiple interface implementation by a class using "implements".`,
          realWorldExample: 'A car\'s steering wheel and brake pedal are an Abstraction. You use them to drive without needing to know the hydraulic fluid pressure or mechanical gearbox ratios under the hood.',
          codeSnippet: {
            code: `interface Drivable {
    void drive(); // Abstract method
}

abstract class Vehicle implements Drivable {
    void fuel() { System.out.println("Fuel tank filled."); } // Concrete method
}

class ElectricCar extends Vehicle {
    @Override
    public void drive() {
        System.out.println("Electric motor driving silently.");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        Drivable v = new ElectricCar();
        v.drive();
    }
}`,
            input: "Drivable v = new ElectricCar()",
            output: `Electric motor driving silently.`
          },
          codeExample: `interface Drivable { void drive(); }
abstract class Vehicle implements Drivable {}`,
          questions: [
            {
              id: 'abs-q1',
              question: 'What is Abstraction?',
              answer: 'Abstraction means hiding implementation details and showing only the essential functionality to the user. In Java, it is achieved using abstract classes and interfaces.',
              difficulty: 'Essential'
            },
            {
              id: 'abs-q2',
              question: 'What is an Abstract Class?',
              answer: 'An abstract class is declared using the abstract keyword. It can contain abstract methods and concrete methods, and we cannot create its objects directly.',
              codeExample: `abstract class Vehicle {\n    abstract void start();\n    void stop() { System.out.println("Stopped"); }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'abs-q3',
              question: 'What is an Abstract Method?',
              answer: 'An abstract method is a method declared without an implementation. A concrete subclass must implement it unless the subclass is also abstract.',
              codeExample: `abstract void calculate(); // No body, ends with semicolon`,
              difficulty: 'Essential'
            },
            {
              id: 'abs-q4',
              question: 'What is an Interface?',
              answer: 'An interface defines a contract that implementing classes agree to follow. It can contain abstract methods, default methods, static methods, and constants.',
              codeExample: `interface Drivable {\n    int MAX_SPEED = 120; // public static final\n    void drive(); // public abstract\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'abs-q5',
              question: 'What is the Difference Between an Abstract Class and an Interface?',
              answer: '• Abstract Class: Can have instance variables, constructors, abstract methods, and concrete methods.\n• Interface: Defines a contract and supports multiple interface implementation by a class.',
              difficulty: 'Essential'
            },
            {
              id: 'abs-q6',
              question: 'Can We Create an Object of an Abstract Class?',
              answer: 'No. We cannot directly create an object of an abstract class, but we can create an object of its concrete subclass.',
              codeExample: `// Vehicle v = new Vehicle(); // COMPILE ERROR\nVehicle v = new Car(); // VALID`,
              difficulty: 'Essential'
            },
            {
              id: 'abs-q7',
              question: 'Can an Interface Have a Constructor?',
              answer: 'No. An interface cannot have a constructor because it cannot be instantiated directly.',
              difficulty: 'Essential'
            },
            {
              id: 'abs-q8',
              question: 'Can a Class Implement Multiple Interfaces?',
              answer: 'Yes. A class can implement multiple interfaces using the implements keyword.',
              codeExample: `class Smartphone implements Camera, GPS, MusicPlayer { }`,
              difficulty: 'Essential'
            },
            {
              id: 'abs-q9',
              question: 'Can an Abstract Class Have a Constructor?',
              answer: 'Yes. An abstract class can have a constructor, which is called when a subclass object is created.',
              codeExample: `abstract class Parent {\n    Parent() { System.out.println("Parent constructor called"); }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'abs-q10',
              question: 'What Is the Difference Between Abstraction and Encapsulation?',
              answer: '• Abstraction: Hides implementation details and shows essential functionality.\n• Encapsulation: Bundles data and methods together and restricts direct access to data.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-has-a-relationships',
          title: 'HAS-A Relationships: Association, Aggregation & Composition',
          description: 'Comprehensive interview definitions, examples, and rules for HAS-A Relationships: Association, Aggregation & Composition.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS A HAS-A RELATIONSHIP?
A HAS-A relationship means one class contains or uses a reference to an object of another class. Example: A Car has an Engine.

WHAT IS ASSOCIATION?
Association is a relationship between two independent classes that interact with or use each other. Example: A teacher teaches students.

WHAT IS AGGREGATION?
Aggregation is a weak HAS-A relationship in which one object contains or uses another object, but both can exist independently. Example: A department has teachers.

WHAT IS COMPOSITION?
Composition is a strong HAS-A relationship in which a contained object is considered part of the owning object and its lifecycle is closely tied to the owner. Example: A house has rooms.`,
          interviewAnswer: 'A HAS-A relationship means one class contains or uses an object of another class. Association connects two independent classes. Aggregation is a weak HAS-A relationship where the contained object exists independently of the owner (Department has Teachers). Composition is a strong HAS-A relationship where the contained object\'s lifecycle is tied to the owner (House has Rooms). "Favor composition over inheritance" allows flexible design without tight coupling.',
          explanation: `1. What is a HAS-A Relationship?
A HAS-A relationship means one class contains or uses a reference to an object of another class.

2. What is Association?
Association is a relationship between two independent classes that interact with or use each other. Example: A teacher teaches students.

3. What is Aggregation?
Aggregation is a weak HAS-A relationship in which one object contains or uses another object, but both can exist independently. Example: A department has teachers.

4. What is Composition?
Composition is a strong HAS-A relationship in which a contained object is considered part of the owning object and its lifecycle is closely tied to the owner. Example: A house has rooms.`,
          realWorldExample: 'A smartphone HAS-A SIM card (Aggregation: you can take the SIM card out and insert it into another phone). A smartphone HAS-A Motherboard (Composition: if the phone is crushed and destroyed, that motherboard is destroyed with it).',
          codeSnippet: {
            code: `// 1. Aggregation: Teacher exists independently
class Teacher {
    String name;
    Teacher(String name) { this.name = name; }
}

class Department {
    Teacher teacher;
    Department(Teacher t) { this.teacher = t; } // Aggregation
}

// 2. Composition: Engine lifecycle is bound to Car
class Engine {
    void start() { System.out.println("Engine started"); }
}

class Car {
    private final Engine engine = new Engine(); // Composition
    void drive() { engine.start(); }
}

public class HasADemo {
    public static void main(String[] args) {
        Teacher t = new Teacher("Dr. Rao");
        Department dept = new Department(t); // Aggregation
        Car car = new Car(); // Composition
        car.drive();
    }
}`,
            input: "Teacher 'Dr. Rao', Car initialized",
            output: `Engine started`
          },
          codeExample: `class Car { private final Engine engine = new Engine(); } // Composition
class Department { Teacher teacher; } // Aggregation`,
          questions: [
            {
              id: 'has-q1',
              question: 'What is a HAS-A Relationship?',
              answer: 'A HAS-A relationship means one class contains or uses a reference to an object of another class.',
              codeExample: `class Car {\n    private Engine engine; // Car HAS-A Engine\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'has-q2',
              question: 'What is Association?',
              answer: 'Association is a relationship between two independent classes that interact with or use each other.',
              example: 'A teacher teaches students.',
              codeExample: `class Teacher {\n    void teach(Student s) { }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'has-q3',
              question: 'What is Aggregation?',
              answer: 'Aggregation is a weak HAS-A relationship in which one object contains or uses another object, but both can exist independently.',
              example: 'A department has teachers, and the teachers can exist independently of the department.',
              codeExample: `class Department {\n    Teacher teacher;\n    Department(Teacher t) { this.teacher = t; }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'has-q4',
              question: 'What is Composition?',
              answer: 'Composition is a strong HAS-A relationship in which a contained object is considered part of the owning object and its lifecycle is closely tied to the owner.',
              example: 'A house has rooms.',
              codeExample: `class House {\n    private final Room room = new Room(); // Composition\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'has-q5',
              question: 'What is the Difference Between Aggregation and Composition?',
              answer: '• Aggregation: The contained object can exist independently of the owner.\n• Composition: The contained object is treated as a part of the owner, with a closely tied lifecycle.',
              difficulty: 'Essential'
            },
            {
              id: 'has-q6',
              question: 'What is the Difference Between IS-A and HAS-A?',
              answer: '• IS-A: Represents inheritance. Example: A Dog is an Animal.\n• HAS-A: Represents a relationship between objects. Example: A Car has an Engine.',
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'java-arrays',
      title: 'Java Arrays',
      description: 'Array fundamentals, indexing, 1D vs 2D arrays, advantages, length property, Array vs ArrayList, and ArrayIndexOutOfBoundsException.',
      concepts: [
        {
          id: 'cj-arrays',
          title: 'Java Arrays — Top 6 Important Interview Questions & Answers',
          description: 'Comprehensive interview definitions, examples, and rules for Java Arrays — Top 6 Important Interview Questions & Answers.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS AN ARRAY?
An array is a data structure that stores a fixed number of elements of the same type in a single variable. Elements are stored sequentially in memory and accessed using zero-based indexes [0 to length - 1].

ADVANTAGES OF ARRAYS
- Stores multiple values of the same type under a single variable name.
- Provides fast, constant-time O(1) random access to elements using indexes.
- Simple and efficient to traverse and process using loops.

ARRAY VS ARRAYLIST
- Array: Fixed size, can store both primitive types and objects, uses the .length property.
- ArrayList: Resizable dynamic array, stores only objects (uses wrapper classes for primitives), uses the size() method.

1D VS 2D ARRAYS
- One-Dimensional (1D) Array: A single sequence of elements.
- Two-Dimensional (2D) Array: Elements organized into rows and columns (an array of arrays).`,
          interviewAnswer: 'An array in Java is a fixed-size, index-based data structure that stores elements of the same type sequentially in memory, with zero-based indexing. It provides O(1) direct access by index. To find the largest or second-largest element, traverse with tracking variables. To reverse, use a two-pointer approach swapping from ends to center. To identify or remove duplicates, use a Set to track seen elements.',
          explanation: `1. Array Characteristics:
- Fixed length (cannot grow or shrink after creation).
- Homogeneous elements (same data type).
- Zero-based index [0 to length - 1]. Accessing outside bounds throws ArrayIndexOutOfBoundsException.

2. Essential Array Algorithms:
- Largest / Second-Largest: Single-pass traversal maintaining tracking variables.
- Reversal: Two-pointer technique swapping elements in-place with O(1) extra space.
- Duplicates: HashSet gives O(n) lookup and deduplication.`,
          realWorldExample: 'A row of numbered lockers in a gym: each locker has a fixed index (0, 1, 2...), you can access locker #5 immediately in O(1) time without checking lockers 0-4, and trying to open locker #20 in a 10-locker bank throws an out-of-bounds error.',
          codeSnippet: {
            code: `import java.util.*;

public class ArrayOperationsDemo {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1, 35};

        // 1. Largest element
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }

        // 2. Second-largest distinct element
        int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num != largest) {
                second = num;
            }
        }

        // 3. Finding duplicates using Set
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new LinkedHashSet<>();
        for (int num : arr) {
            if (!seen.add(num)) duplicates.add(num);
        }

        System.out.println("Largest: " + max);
        System.out.println("Second Largest: " + second);
        System.out.println("Duplicates: " + duplicates);
    }
}`,
            input: "arr = {12, 35, 1, 10, 34, 1, 35}",
            output: `Largest: 35
Second Largest: 34
Duplicates: [1, 35]`
          },
          codeExample: `int[] arr = {12, 35, 1, 10, 34};
int max = arr[0];
for (int num : arr) if (num > max) max = num;`,
          questions: [
            {
              id: 'arr-q1',
              question: 'What is an Array?',
              answer: 'An array is a data structure that stores a fixed number of elements of the same type. Elements are accessed using indexes starting from 0.',
              codeExample: `int[] arr = new int[5]; // Fixed-size 5, zero-indexed`,
              difficulty: 'Essential'
            },
            {
              id: 'arr-q2',
              question: 'How Do You Find the Largest Element in an Array?',
              answer: 'Initialize a variable with the first element, then traverse the array and update the variable whenever a larger element is found.',
              codeExample: `int max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'arr-q3',
              question: 'How Do You Find the Second-Largest Element in an Array?',
              answer: 'Traverse the array while maintaining the largest and second-largest distinct values. Update them whenever a larger value is found.',
              codeExample: `int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;\nfor (int num : arr) {\n    if (num > largest) {\n        second = largest;\n        largest = num;\n    } else if (num > second && num != largest) {\n        second = num;\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'arr-q4',
              question: 'How Do You Reverse an Array?',
              answer: 'Use two pointers: one at the beginning and one at the end. Swap their elements and move both pointers toward the center.',
              codeExample: `int left = 0, right = arr.length - 1;\nwhile (left < right) {\n    int temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++;\n    right--;\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'arr-q5',
              question: 'How Do You Remove Duplicate Elements from an Array?',
              answer: 'Use a HashSet to track elements already seen, or use a nested loop to identify duplicates.',
              codeExample: `Set<Integer> uniqueSet = new LinkedHashSet<>();\nfor (int num : arr) uniqueSet.add(num);\n// uniqueSet contains all distinct elements in original insertion order`,
              difficulty: 'Essential'
            },
            {
              id: 'arr-q6',
              question: 'How Do You Find Duplicate Elements in an Array?',
              answer: 'Traverse the array and use a HashSet to track previously seen elements. If an element is already present, it is a duplicate.',
              codeExample: `Set<Integer> seen = new HashSet<>();\nfor (int num : arr) {\n    if (!seen.add(num)) {\n        System.out.println("Duplicate found: " + num);\n    }\n}`,
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'java-strings',
      title: 'Strings & Text Processing',
      description: 'String class, immutability, String constant pool, StringBuilder vs StringBuffer, length vs capacity, and split() vs StringTokenizer.',
      concepts: [
        {
          id: 'cj-string-immutability',
          title: 'String Class, Immutability & String Constant Pool',
          description: 'Comprehensive interview definitions, examples, and rules for String Class, Immutability & String Constant Pool.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS A STRING?
String is a class in Java used to represent a sequence of characters. String objects are immutable, which means their contents cannot be changed after creation. Any operation that modifies a String creates a new String.

WHY IS STRING IMMUTABLE?
String is immutable for security, thread safety, efficient use of the String Constant Pool, and reliable use as a key in HashMap. Once created, its contents cannot be changed.

WHAT IS THE STRING CONSTANT POOL?
The String Constant Pool is a special area managed by the JVM where String literals are stored and reused to save memory. Strings with the same literal value can share the same pooled object.

WHAT IS THE DIFFERENCE BETWEEN == AND equals() IN STRING?
The == operator compares the references of two String objects, while the equals() method compares their actual contents.

WHAT ARE COMMON STRING METHODS?
length() returns the number of UTF-16 code units in a String.
charAt() returns the character at a specified index.
equals() compares String contents.
substring() extracts a portion of a String.
indexOf() finds the position of a character or substring.
toUpperCase() converts letters to uppercase.
toLowerCase() converts letters to lowercase.
trim() removes leading and trailing characters with values up to U+0020.
strip() removes leading and trailing Unicode whitespace.
replace() replaces characters or sequences.
split() divides a String using a regular expression.
isEmpty() checks whether the String has zero length.

WHAT IS THE DIFFERENCE BETWEEN STRING, STRINGBUILDER, AND STRINGBUFFER?
String is immutable, meaning its contents cannot be changed after creation.
StringBuilder is mutable and is generally preferred for modifying strings repeatedly in a single thread.
StringBuffer is mutable and its methods are synchronized for thread-safe operations.

WHY SHOULD WE USE equals() INSTEAD OF == TO COMPARE STRINGS?
We use equals() to compare the actual contents of two Strings. The == operator compares object references, so two different String objects can have the same content but return false when compared using ==.`,
          interviewAnswer: 'String in Java is an immutable class used to represent character sequences; modifying operations always return a new String. Immutability guarantees security, thread-safety, HashMap key reliability, and caching in the String Constant Pool. Use equals() to compare character contents rather than ==, which only compares memory references. For repeated modifications, use mutable StringBuilder (single-threaded) or StringBuffer (synchronized thread-safe).',
          explanation: `1. What is a String?
String is a class in Java used to represent a sequence of characters. String objects are immutable, which means their contents cannot be changed after creation. Any operation that modifies a String creates a new String.

2. Why is String Immutable?
String is immutable for security, thread safety, efficient use of the String Constant Pool, and reliable use as a key in HashMap. Once created, its contents cannot be changed.

3. What is the String Constant Pool?
The String Constant Pool is a special area managed by the JVM where String literals are stored and reused to save memory. Strings with the same literal value can share the same pooled object.

4. Difference Between == and equals():
The == operator compares the references of two String objects, while the equals() method compares their actual contents.

5. Common String Methods:
- length(): returns the number of UTF-16 code units in a String.
- charAt(): returns the character at a specified index.
- equals(): compares String contents.
- substring(): extracts a portion of a String.
- indexOf(): finds the position of a character or substring.
- toUpperCase() / toLowerCase(): converts case.
- trim() / strip(): removes leading and trailing whitespace.
- replace(): replaces characters or sequences.
- split(): divides a String using regex.
- isEmpty(): checks whether the String has zero length.

6. Difference Between String, StringBuilder, and StringBuffer:
- String: immutable, contents cannot be changed after creation.
- StringBuilder: mutable, preferred for single-threaded modifications.
- StringBuffer: mutable, synchronized for thread-safe operations.

7. Why Use equals() Instead of ==?
We use equals() to compare the actual contents of two Strings. The == operator compares object references, so two different String objects can have the same content but return false when compared using ==.`,
          realWorldExample: 'A printed book page is immutable: you cannot edit the printed text on the page once published. If you want a revised edition, the publisher prints a brand-new page.',
          codeSnippet: {
            code: `public class StringDemo {
    public static void main(String[] args) {
        String s1 = "Java"; // Pooled literal
        String s2 = "Java"; // Points to same pooled instance
        String s3 = new String("Java"); // New heap object

        System.out.println("s1 == s2 (same pooled reference): " + (s1 == s2)); // true
        System.out.println("s1 == s3 (different heap references): " + (s1 == s3)); // false
        System.out.println("s1.equals(s3) (same content): " + s1.equals(s3)); // true
    }
}`,
            input: "s1 = 'Java', s2 = 'Java', s3 = new String('Java')",
            output: `s1 == s2 (same pooled reference): true
s1 == s3 (different heap references): false
s1.equals(s3) (same content): true`
          },
          codeExample: `String s1 = "Java";
String s2 = new String("Java");
System.out.println(s1.equals(s2));`,
          questions: [
            {
              id: 'str-q1',
              question: 'Why is String immutable in Java?',
              answer: 'String is immutable to support: 1) The String Constant Pool (memory optimization), 2) Security (preventing tampering of network URLs and credentials), 3) Thread safety (safe sharing without synchronization), and 4) Caching of hash codes for reliable HashMap keys.',
              difficulty: 'Essential'
            },
            {
              id: 'str-q2',
              question: 'What is the difference between == and .equals() when comparing Strings?',
              answer: 'The == operator compares reference identity (whether both variables point to the exact same memory address). The .equals() method compares the actual character sequence content of the Strings.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-stringbuilder-buffer',
          title: 'StringBuilder vs StringBuffer & Key String Operations',
          description: 'Comprehensive interview definitions, examples, and rules for StringBuilder vs StringBuffer & Key String Operations.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `STRINGBUILDER VS STRINGBUFFER
• StringBuilder: Mutable, not thread-safe, and generally faster for single-threaded operations.
• StringBuffer: Mutable and synchronized, making it suitable for thread-safe operations when shared between threads.

STRING VS STRINGBUILDER
String is immutable, meaning its value cannot be changed after creation. StringBuilder is mutable, meaning its content can be modified without creating a new object for every operation.

HOW TO REVERSE A STRING
Create a StringBuilder object from the String and call its reverse() method.

PALINDROME CHECKING
Reverse the String and compare it with the original String. If both are equal, it is a palindrome.

== VS EQUALS() FOR STRINGS
== compares object references, whereas equals() compares String contents.`,
          interviewAnswer: 'String is immutable, whereas StringBuilder and StringBuffer are mutable. StringBuilder is non-synchronized and faster for single-threaded operations; StringBuffer is synchronized and thread-safe. To reverse a string or check for a palindrome, instantiate a StringBuilder and use its reverse() method. Always use equals() to compare string contents rather than ==, which only compares memory addresses.',
          explanation: `1. Difference Between StringBuilder and StringBuffer:
- StringBuilder: Mutable, not thread-safe, and generally faster for single-threaded operations.
- StringBuffer: Mutable and synchronized, making it suitable for thread-safe operations when shared between threads.

2. Difference Between String and StringBuilder:
String is immutable (value cannot be changed after creation). StringBuilder is mutable (content can be modified in-place without creating a new object).

3. String Reversal and Palindrome:
- Reversal: new StringBuilder(str).reverse().toString()
- Palindrome: str.equals(new StringBuilder(str).reverse().toString())

4. == vs equals():
- == checks if both references point to the same memory address.
- equals() checks if both strings contain the same characters in the same sequence.`,
          realWorldExample: 'String is a stone tablet (words carved in stone cannot change). StringBuilder is a whiteboard with a dry-erase marker (you can erase, append, and reverse text instantly without buying a new whiteboard).',
          codeSnippet: {
            code: `public class StringOperationsDemo {
    public static void main(String[] args) {
        // 1. StringBuilder reversal
        String original = "madam";
        String reversed = new StringBuilder(original).reverse().toString();

        // 2. Palindrome check
        boolean isPalindrome = original.equals(reversed);
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
        System.out.println("Is Palindrome: " + isPalindrome);

        // 3. == vs equals()
        String s1 = new String("Java");
        String s2 = new String("Java");
        System.out.println("s1 == s2: " + (s1 == s2));         // false (different references)
        System.out.println("s1.equals(s2): " + s1.equals(s2)); // true (same content)
    }
}`,
            input: "original = 'madam', s1 and s2 = new String('Java')",
            output: `Original: madam
Reversed: madam
Is Palindrome: true
s1 == s2: false
s1.equals(s2): true`
          },
          codeExample: `// String reversal & palindrome check
String reversed = new StringBuilder("madam").reverse().toString();
boolean isPal = "madam".equals(reversed);`,
          questions: [
            {
              id: 'sb-q1',
              question: 'What is the Difference Between StringBuilder and StringBuffer?',
              answer: '• StringBuilder: Mutable, not thread-safe, and generally faster for single-threaded operations.\n• StringBuffer: Mutable and synchronized, making it suitable for thread-safe operations when shared between threads.',
              difficulty: 'Essential'
            },
            {
              id: 'sb-q2',
              question: 'What Is the Difference Between String and StringBuilder?',
              answer: 'String is immutable, meaning its value cannot be changed after creation. StringBuilder is mutable, meaning its content can be modified without creating a new object for every operation.',
              codeExample: `String s = "Hello"; s += " World"; // Creates new object\nStringBuilder sb = new StringBuilder("Hello"); sb.append(" World"); // Modifies in-place`,
              difficulty: 'Essential'
            },
            {
              id: 'sb-q3',
              question: 'How Do You Reverse a String in Java?',
              answer: 'Create a StringBuilder object from the String and call its reverse() method.',
              codeExample: `String str = "hello";\nString reversed = new StringBuilder(str).reverse().toString();\nSystem.out.println(reversed); // "olleh"`,
              difficulty: 'Essential'
            },
            {
              id: 'sb-q4',
              question: 'How Do You Check Whether a String Is a Palindrome?',
              answer: 'Reverse the String and compare it with the original String. If both are equal, it is a palindrome.',
              codeExample: `String str = "racecar";\nString rev = new StringBuilder(str).reverse().toString();\nboolean isPalindrome = str.equalsIgnoreCase(rev);`,
              difficulty: 'Essential'
            },
            {
              id: 'sb-q5',
              question: 'What Is the Difference Between == and equals() for Strings?',
              answer: '== compares object references, whereas equals() compares String contents.',
              codeExample: `String s1 = new String("test");\nString s2 = new String("test");\nSystem.out.println(s1 == s2);      // false (different heap objects)\nSystem.out.println(s1.equals(s2));  // true (identical content)`,
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'exception-handling',
      title: 'Exception Handling & Reliability',
      description: 'Exception hierarchy, Error vs Exception, Checked vs Unchecked, try/catch/finally, throw vs throws, Exception propagation, and Custom Exceptions.',
      concepts: [
        {
          id: 'cj-exception-hierarchy',
          title: 'Exception Hierarchy (Throwable, Error vs Exception, Checked vs Unchecked)',
          description: 'Comprehensive interview definitions, examples, and rules for Exception Hierarchy (Throwable, Error vs Exception, Checked vs Unchecked).',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `EXCEPTION HIERARCHY
Throwable is the parent class of Error and Exception. Exception includes checked exceptions and the unchecked RuntimeException class and its subclasses.

ERROR VS EXCEPTION
• Error: Represents serious problems generally outside an application's normal handling, such as OutOfMemoryError.
• Exception: Represents conditions an application may handle, such as IOException.

CHECKED EXCEPTIONS
A checked exception is checked by the compiler. It must be caught or declared using throws.
Example: IOException

UNCHECKED EXCEPTIONS
An unchecked exception is not checked by the compiler at compile time. It includes RuntimeException and its subclasses.
Example: NullPointerException

CHECKED VS UNCHECKED COMPARISON
Checked exceptions must be caught or declared using throws, whereas unchecked exceptions do not have this requirement.`,
          interviewAnswer: 'In Java, Throwable is the root parent class, branching into Error and Exception. Errors represent fatal system problems (OutOfMemoryError) that applications cannot handle. Exceptions represent recoverable conditions. Exceptions are divided into Checked Exceptions (checked by the compiler, requiring try-catch or throws, e.g. IOException) and Unchecked Exceptions (subclasses of RuntimeException, not checked at compile time, e.g. NullPointerException).',
          explanation: `1. Exception Hierarchy:
Throwable is the parent class of Error and Exception. Exception includes checked exceptions and the unchecked RuntimeException class and its subclasses.

2. Error vs Exception:
- Error: Serious problems generally outside an application's normal handling (e.g. OutOfMemoryError, StackOverflowError).
- Exception: Abnormal conditions that an application can handle (e.g. IOException, ArithmeticException).

3. Checked vs Unchecked:
- Checked: Checked by compiler; must be caught or declared with throws.
- Unchecked: Not checked by compiler; includes RuntimeException and subclasses.`,
          realWorldExample: 'A flat tire on your car is an Exception (you pull over, put on the spare tire, and continue). The bridge collapsing beneath your car is an Error (catastrophic failure that you cannot recover from).',
          codeSnippet: {
            code: `public class ExceptionHierarchyDemo {
    public static void main(String[] args) {
        try {
            // Unchecked RuntimeException: division by zero
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught Unchecked Exception: " + e.getMessage());
        }
        System.out.println("Application recovered and continued execution!");
    }
}`,
            input: "10 / 0",
            output: `Caught Unchecked Exception: / by zero
Application recovered and continued execution!`
          },
          codeExample: `// Checked: needs try-catch or throws
// Unchecked: RuntimeException subclass
try { int result = 10 / 0; }
catch (ArithmeticException e) { System.out.println(e); }`,
          questions: [
            {
              id: 'ex-q1',
              question: 'What Is the Exception Hierarchy in Java?',
              answer: 'Throwable is the parent class of Error and Exception. Exception includes checked exceptions and the unchecked RuntimeException class and its subclasses.',
              codeExample: `// Object -> Throwable -> (Error, Exception -> RuntimeException)`,
              difficulty: 'Essential'
            },
            {
              id: 'ex-q2',
              question: 'What Is the Difference Between Error and Exception?',
              answer: '• Error: Represents serious problems generally outside an application\'s normal handling, such as OutOfMemoryError and StackOverflowError.\n• Exception: Represents conditions an application may handle, such as IOException and ArithmeticException.',
              difficulty: 'Essential'
            },
            {
              id: 'ex-q3',
              question: 'What Is a Checked Exception?',
              answer: 'A checked exception is checked by the compiler. It must be caught or declared using throws.\n\nExample: IOException, SQLException.',
              codeExample: `void readFile() throws IOException { // Must be declared or handled\n    FileReader file = new FileReader("test.txt");\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'ex-q4',
              question: 'What Is an Unchecked Exception?',
              answer: 'An unchecked exception is not checked by the compiler at compile time. It includes RuntimeException and its subclasses.\n\nExample: NullPointerException, ArithmeticException.',
              codeExample: `String s = null;\nSystem.out.println(s.length()); // Throws NullPointerException at runtime`,
              difficulty: 'Essential'
            },
            {
              id: 'ex-q5',
              question: 'What Is the Difference Between Checked and Unchecked Exceptions?',
              answer: 'Checked exceptions must be caught or declared using throws, whereas unchecked exceptions do not have this requirement.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-try-catch-finally',
          title: 'try, catch, finally & Multiple Catch Blocks',
          description: 'Comprehensive interview definitions, examples, and rules for try, catch, finally & Multiple Catch Blocks.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `TRY BLOCK
A try block contains code that might throw an exception.

CATCH BLOCK
A catch block handles an exception thrown from its associated try block.

FINALLY BLOCK
A finally block is used for cleanup code and normally executes whether an exception occurs or not.

MULTIPLE CATCH BLOCKS
Yes. We can use multiple catch blocks to handle different exception types. More specific exception types must appear before more general types.

TRY WITHOUT CATCH
Yes. A try block can be followed by finally without a catch block. A try-with-resources statement can also be used without an explicit catch or finally.

UNHANDLED EXCEPTIONS
The exception propagates up the call stack. If it remains unhandled, the thread's uncaught-exception handler processes it, and the thread generally terminates.`,
          interviewAnswer: 'In Java, the try block contains code that may throw an exception, catch handles specific exceptions to prevent abrupt termination, and finally executes critical cleanup code whether an exception occurred or not. Multiple catch blocks allow specialized handling per exception type (subclass before superclass). A try block can be paired with finally without catch, and unhandled exceptions bubble up the call stack until reaching the thread uncaught-exception handler.',
          explanation: `1. Try Block:
Contains code that might throw an exception during execution.

2. Catch Block:
Catches and handles an exception thrown from its associated try block.

3. Finally Block:
Used for cleanup code and normally executes whether an exception occurs or not.

4. Multiple Catch Blocks:
Handles different exception types; specific exception types must appear before general types.

5. try Without catch:
A try block can be followed by finally without catch, or used as a try-with-resources statement.

6. Unhandled Exceptions:
Propagate up the call stack until caught or processed by the thread's uncaught exception handler, terminating the thread.`,
          realWorldExample: 'A try-catch-finally is like booking a flight ticket: Try to charge the credit card; Catch insufficient balance and notify user; Finally, close the banking session whether payment succeeded or failed.',
          codeSnippet: {
            code: `public class TryCatchFinallyDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // Throws ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Handled ArithmeticException: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General Exception fallback");
        } finally {
            System.out.println("Finally block executed for resource cleanup!");
        }
    }
}`,
            input: "10 / 0",
            output: `Handled ArithmeticException: / by zero
Finally block executed for resource cleanup!`
          },
          codeExample: `try { int result = 10 / 0; }
catch (ArithmeticException e) { System.out.println(e.getMessage()); }
finally { System.out.println("Cleanup executed"); }`,
          questions: [
            {
              id: 'tcf-q1',
              question: 'What Is a try Block?',
              answer: 'A try block contains code that might throw an exception.',
              codeExample: `try {\n    int data = 50 / 0; // Risky code\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'tcf-q2',
              question: 'What Is a catch Block?',
              answer: 'A catch block handles an exception thrown from its associated try block.',
              codeExample: `catch (ArithmeticException e) {\n    System.out.println("Division by zero prevented");\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'tcf-q3',
              question: 'What Is a finally Block?',
              answer: 'A finally block is used for cleanup code and normally executes whether an exception occurs or not.',
              codeExample: `finally {\n    System.out.println("Always executed for resource release");\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'tcf-q4',
              question: 'Can We Use Multiple Catch Blocks?',
              answer: 'Yes. We can use multiple catch blocks to handle different exception types. More specific exception types must appear before more general types.',
              codeExample: `try { ... }\ncatch (ArithmeticException e) { } // Subclass first\ncatch (Exception e) { }           // Superclass last`,
              difficulty: 'Essential'
            },
            {
              id: 'tcf-q5',
              question: 'Can We Use try Without catch?',
              answer: 'Yes. A try block can be followed by finally without a catch block. A try-with-resources statement can also be used without an explicit catch or finally.',
              codeExample: `try {\n    // Code\n} finally {\n    // Cleanup\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'tcf-q6',
              question: 'What Happens If an Exception Is Not Handled?',
              answer: 'The exception propagates up the call stack. If it remains unhandled, the thread\'s uncaught-exception handler processes it, and the thread generally terminates.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-throw-throws-custom',
          title: 'throw vs throws, Exception Propagation, Ducking & Custom Exceptions',
          description: 'Comprehensive interview definitions, examples, and rules for throw vs throws, Exception Propagation, Ducking & Custom Exceptions.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `THROW VS THROWS
• throw: Used to explicitly throw an exception.
• throws: Used in a method declaration to indicate exceptions that may be thrown to the caller.

EXCEPTION PROPAGATION
Exception propagation is the process of passing an exception from the method where it occurs to its calling methods until it is handled.

EXCEPTION DUCKING
Exception ducking means declaring an exception using throws and allowing the calling method to handle it instead of handling it in the current method.

CUSTOM EXCEPTIONS
A custom exception is a user-defined exception created by extending Exception or RuntimeException.

HOW TO CREATE A CUSTOM EXCEPTION
Create a class that extends Exception or RuntimeException, define a constructor, and use throw to throw an instance when the required condition occurs.

EXCEPTION VS RUNTIMEEXCEPTION
Exception is the parent class for many application exceptions, including checked exceptions. RuntimeException is a subclass of Exception whose subclasses are unchecked.`,
          interviewAnswer: 'throw explicitly instantiates and raises an exception inside a method, while throws declares potential exceptions in a method signature to pass responsibility to the caller. Exception propagation moves an unhandled exception up the call stack. Exception ducking defers handling to the caller via throws. Custom exceptions represent business-specific failures by subclassing Exception (checked) or RuntimeException (unchecked).',
          explanation: `1. throw vs throws:
- throw: explicitly throws an exception instance.
- throws: declares exceptions a method might pass to callers.

2. Exception Propagation:
Passing an exception up the call stack until handled or reaching the JVM.

3. Exception Ducking:
Declaring exceptions using throws to pass handling responsibility to the caller.

4. Custom Exception:
A user-defined class extending Exception (checked) or RuntimeException (unchecked).

5. Exception vs RuntimeException:
Exception includes checked exceptions; RuntimeException represents unchecked runtime flaws.`,
          realWorldExample: 'A bank teller detecting a forged signature uses "throw" to raise an alert. The manager uses "throws" to notify the police department (caller) that this transaction might encounter a FraudException.',
          codeSnippet: {
            code: `class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    // 'throws' declares the exception to callers (Exception Ducking)
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            // 'throw' explicitly throws the exception instance
            throw new InvalidAgeException("Age " + age + " is below legal voting age!");
        }
        System.out.println("Age valid for voting.");
    }

    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught Custom Exception: " + e.getMessage());
        }
    }
}`,
            input: "age = 15",
            output: `Caught Custom Exception: Age 15 is below legal voting age!`
          },
          codeExample: `class InvalidAgeException extends Exception {
  InvalidAgeException(String msg) { super(msg); }
}`,
          questions: [
            {
              id: 'th-q1',
              question: 'What Is the Difference Between throw and throws?',
              answer: '• throw: Used inside a method body to explicitly throw an exception object.\n• throws: Used in a method declaration to indicate exceptions that may be thrown to the caller.',
              codeExample: `void check(int val) throws Exception { // throws in signature\n    if (val < 0) throw new Exception("Negative"); // throw in body\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'th-q2',
              question: 'What Is Exception Propagation?',
              answer: 'Exception propagation is the process of passing an exception from the method where it occurs to its calling methods up the call stack until it is handled.',
              difficulty: 'Essential'
            },
            {
              id: 'th-q3',
              question: 'What Is Exception Ducking?',
              answer: 'Exception ducking means declaring an exception using throws and allowing the calling method to handle it instead of handling it in the current method.',
              codeExample: `void processFile() throws IOException { // Ducks handling to caller\n    new FileReader("data.txt");\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'th-q4',
              question: 'What Is a Custom Exception?',
              answer: 'A custom exception is a user-defined exception created by extending Exception or RuntimeException to handle application-specific business rules.',
              difficulty: 'Essential'
            },
            {
              id: 'th-q5',
              question: 'How Do You Create a Custom Exception?',
              answer: 'Create a class that extends Exception or RuntimeException, define a constructor passing the message to super(), and use throw to throw an instance when the required condition occurs.',
              codeExample: `class InsufficientFundsException extends Exception {\n    public InsufficientFundsException(String msg) { super(msg); }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'th-q6',
              question: 'What Is the Difference Between Exception and RuntimeException?',
              answer: 'Exception is the parent class for many application exceptions, including checked exceptions that must be handled or declared. RuntimeException is a subclass of Exception whose subclasses are unchecked exceptions that do not require mandatory handling.',
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'advanced-java-lambdas',
      title: 'Functional Interfaces, Inner Classes & Lambdas',
      description: 'Functional interfaces, Lambda expressions, Inner classes (Member, Static nested, Local, Anonymous), and interview corrections.',
      concepts: [
        {
          id: 'cj-functional-interfaces-lambda',
          title: 'Functional Interfaces & Lambda Expressions',
          description: 'Comprehensive interview definitions, examples, and rules for Functional Interfaces & Lambda Expressions.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `FUNCTIONAL INTERFACES
A functional interface is an interface with exactly one abstract method. It can also contain default and static methods.

LAMBDA EXPRESSIONS
A lambda expression is a concise way to provide an implementation of a functional interface without creating a separate named class.

@FUNCTIONALINTERFACE ANNOTATION
It tells the compiler that an interface is intended to be functional. The compiler reports an error if the interface does not satisfy the functional-interface requirements.

ADVANTAGES OF LAMBDA EXPRESSIONS
They reduce boilerplate code, improve readability, and make it easier to work with functional interfaces and the Stream API.

COMMON BUILT-IN FUNCTIONAL INTERFACES
• Predicate: Accepts an input and returns a boolean.
• Function: Accepts an input and returns a result.
• Consumer: Accepts an input and returns no result.
• Supplier: Provides a result without accepting an input.

LAMBDAS REQUIRE FUNCTIONAL INTERFACES
No. A lambda expression needs a target functional-interface type to determine its parameter and return types.`,
          interviewAnswer: 'A functional interface has exactly one abstract method (SAM), annotated with @FunctionalInterface. Lambda expressions provide a concise implementation of that abstract method without anonymous inner class boilerplate. Common built-in functional interfaces in java.util.function include Predicate (boolean test), Function (transform T to R), Consumer (consume with no return), and Supplier (produce a value). A lambda expression always requires a target functional interface type to bind parameter and return types.',
          explanation: `1. What Is a Functional Interface?
A functional interface is an interface with exactly one abstract method. It can also contain default and static methods.

2. What Is a Lambda Expression?
A lambda expression is a concise way to provide an implementation of a functional interface without creating a separate named class.

3. @FunctionalInterface Annotation:
Tells the compiler that an interface is intended to be functional, generating an error if more than one abstract method is present.

4. Advantages:
Reduces boilerplate, improves readability, and seamlessly powers the Stream API.

5. Common Built-in Interfaces:
- Predicate<T>: T -> boolean
- Function<T, R>: T -> R
- Consumer<T>: T -> void
- Supplier<T>: () -> T`,
          realWorldExample: 'Instead of hiring a courier company with a 5-page legal contract (anonymous inner class) to deliver one single envelope, you simply hand the envelope to a messenger directly (lambda expression).',
          codeSnippet: {
            code: `@FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}

public class LambdaDemo {
    public static void main(String[] args) {
        // Lambda expression implementing Calculator's single abstract method
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;

        System.out.println("Add Result: " + add.operate(10, 20));
        System.out.println("Multiply Result: " + multiply.operate(5, 6));

        // Runnable with Lambda
        Runnable task = () -> System.out.println("Hello from Lambda Runnable!");
        task.run();
    }
}`,
            input: "operate(10, 20) and operate(5, 6)",
            output: `Add Result: 30
Multiply Result: 30
Hello from Lambda Runnable!`
          },
          codeExample: `Runnable task = () -> System.out.println("Hello");
task.run();`,
          questions: [
            {
              id: 'lam-q1',
              question: 'What Is a Functional Interface?',
              answer: 'A functional interface is an interface with exactly one abstract method. It can also contain default and static methods.',
              codeExample: `@FunctionalInterface\ninterface Greeter {\n    void greet(String name); // Exactly 1 abstract method\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'lam-q2',
              question: 'What Is a Lambda Expression?',
              answer: 'A lambda expression is a concise way to provide an implementation of a functional interface without creating a separate named class.',
              codeExample: `Greeter g = name -> System.out.println("Hello, " + name);`,
              difficulty: 'Essential'
            },
            {
              id: 'lam-q3',
              question: 'What Is the @FunctionalInterface Annotation?',
              answer: 'It tells the compiler that an interface is intended to be functional. The compiler reports an error if the interface does not satisfy the functional-interface requirements.',
              codeExample: `@FunctionalInterface // Compiler verifies Single Abstract Method\ninterface Printable {\n    void print();\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'lam-q4',
              question: 'What Are the Advantages of Lambda Expressions?',
              answer: 'They reduce boilerplate code, improve readability, and make it easier to work with functional interfaces and the Stream API.',
              difficulty: 'Essential'
            },
            {
              id: 'lam-q5',
              question: 'What Are Common Built-in Functional Interfaces in Java?',
              answer: '• Predicate: Accepts an input and returns a boolean.\n• Function: Accepts an input and returns a result.\n• Consumer: Accepts an input and returns no result.\n• Supplier: Provides a result without accepting an input.',
              codeExample: `Predicate<Integer> isEven = n -> n % 2 == 0;\nFunction<String, Integer> length = s -> s.length();\nConsumer<String> printer = s -> System.out.println(s);\nSupplier<Double> random = () -> Math.random();`,
              difficulty: 'Essential'
            },
            {
              id: 'lam-q6',
              question: 'Can We Use a Lambda Expression Without a Functional Interface?',
              answer: 'No. A lambda expression needs a target functional-interface type to determine its parameter and return types.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-nested-inner-classes',
          title: 'Nested & Inner Classes (Member, Static Nested, Local & Anonymous)',
          description: 'Comprehensive interview definitions, examples, and rules for Nested & Inner Classes (Member, Static Nested, Local & Anonymous).',
          difficulty: 'Common',
          studyTime: '8 minutes',
          definition: `NESTED CLASSES
A nested class is a class declared inside another class or interface.

INNER CLASSES
An inner class is a non-static nested class. It is associated with an instance of its enclosing class and can access its enclosing instance's members.

STATIC NESTED CLASSES
A static nested class is declared using the static keyword inside another class. It does not require an instance of the enclosing class to be created.

LOCAL INNER CLASSES
A local inner class is declared inside a method, constructor, or block and can be used within that scope.

ANONYMOUS INNER CLASSES
An anonymous inner class is a class without a declared name that is defined and instantiated in a single expression, commonly to implement an interface or extend a class.

INNER CLASS VS STATIC NESTED CLASS
• Inner Class: Requires an enclosing-class instance to be created and can access its instance members directly.
• Static Nested Class: Does not require an enclosing-class instance and cannot directly access its instance members without an object reference.`,
          interviewAnswer: 'In Java, a nested class is a class defined within another class. Non-static nested classes are called Inner Classes (Member, Local, and Anonymous) and are bound to an enclosing instance with direct access to its members. A Static Nested Class is declared with the static keyword, does not require an outer instance, and cannot directly access non-static instance fields of the enclosing class.',
          explanation: `1. What Is a Nested Class?
A nested class is a class declared inside another class or interface.

2. What Is an Inner Class?
An inner class is a non-static nested class. It is associated with an instance of its enclosing class and can access its enclosing instance's members.

3. What Is a Static Nested Class?
A static nested class is declared using the static keyword inside another class. It does not require an instance of the enclosing class to be created.

4. What Is a Local Inner Class?
A local inner class is declared inside a method, constructor, or block and can be used within that scope.

5. What Is an Anonymous Inner Class?
An anonymous inner class is a class without a declared name that is defined and instantiated in a single expression, commonly to implement an interface or extend a class.

6. Inner Class vs Static Nested Class:
- Inner Class: Requires an enclosing-class instance to be created and can access its instance members directly.
- Static Nested Class: Does not require an enclosing-class instance and cannot directly access its instance members without an object reference.`,
          realWorldExample: 'A Car has an Engine (Member Inner class: an engine cannot function without a car chassis). A Car has a standard CarManual (Static Nested class: you can read the manual on a bookshelf without owning the car).',
          codeSnippet: {
            code: `class Outer {
    private String secret = "Outer Secret";

    // 1. Non-static Member Inner Class
    class Inner {
        void reveal() {
            System.out.println("Inner accessed: " + secret);
        }
    }

    // 2. Static Nested Class
    static class StaticNested {
        void info() {
            System.out.println("Static Nested Class instantiated independently.");
        }
    }
}

public class NestedClassesDemo {
    public static void main(String[] args) {
        // Inner class requires outer object
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.reveal();

        // Static nested class needs no outer object
        Outer.StaticNested nested = new Outer.StaticNested();
        nested.info();
    }
}`,
            input: "outer.new Inner() and new Outer.StaticNested()",
            output: `Inner accessed: Outer Secret
Static Nested Class instantiated independently.`
          },
          codeExample: `Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();`,
          questions: [
            {
              id: 'nc-q1',
              question: 'What Is a Nested Class?',
              answer: 'A nested class is a class declared inside another class or interface.',
              codeExample: `class Outer {\n    class Nested { }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'nc-q2',
              question: 'What Is an Inner Class?',
              answer: 'An inner class is a non-static nested class. It is associated with an instance of its enclosing class and can access its enclosing instance\'s members.',
              codeExample: `Outer outer = new Outer();\nOuter.Inner inner = outer.new Inner();`,
              difficulty: 'Essential'
            },
            {
              id: 'nc-q3',
              question: 'What Is a Static Nested Class?',
              answer: 'A static nested class is declared using the static keyword inside another class. It does not require an instance of the enclosing class to be created.',
              codeExample: `Outer.StaticNested nested = new Outer.StaticNested();`,
              difficulty: 'Essential'
            },
            {
              id: 'nc-q4',
              question: 'What Is a Local Inner Class?',
              answer: 'A local inner class is declared inside a method, constructor, or block and can be used within that scope.',
              codeExample: `void myMethod() {\n    class LocalHelper {\n        void run() { System.out.println("Local inner class"); }\n    }\n    new LocalHelper().run();\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'nc-q5',
              question: 'What Is an Anonymous Inner Class?',
              answer: 'An anonymous inner class is a class without a declared name that is defined and instantiated in a single expression, commonly to implement an interface or extend a class.',
              codeExample: `Runnable r = new Runnable() {\n    @Override\n    public void run() { System.out.println("Anonymous inner class running"); }\n};`,
              difficulty: 'Essential'
            },
            {
              id: 'nc-q6',
              question: 'What Is the Difference Between an Inner Class and a Static Nested Class?',
              answer: '• Inner Class: Requires an enclosing-class instance to be created and can access its instance members directly.\n• Static Nested Class: Does not require an enclosing-class instance and cannot directly access its instance members without an object reference.',
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'java-multithreading',
      title: 'Multithreading & Concurrency',
      description: 'Thread creation, Thread vs Runnable, start() vs run(), synchronization, deadlock, and sleep() vs wait().',
      concepts: [
        {
          id: 'cj-multithreading',
          title: 'Java Multithreading — Top 7 Interview Questions & Answers',
          description: 'Comprehensive interview definitions, examples, and rules for Java Multithreading — Top 7 Interview Questions & Answers.',
          difficulty: 'Essential',
          studyTime: '12 minutes',
          definition: `WHAT IS MULTITHREADING
Multithreading is a process of executing multiple threads concurrently within a single program. It helps perform multiple tasks efficiently.

WHAT IS A THREAD
A thread is the smallest unit of execution within a process. It allows a program to perform tasks independently.

HOW CAN WE CREATE A THREAD IN JAVA
We can create a thread in two main ways:
1. Extending the Thread class.
2. Implementing the Runnable interface.

THREAD CLASS VS RUNNABLE INTERFACE
• Thread: We extend the Thread class and override its run() method.
• Runnable: We implement the Runnable interface and provide the implementation of its run() method. This approach allows the class to extend another class.

START() VS RUN()
• start(): Starts a new thread, which then executes the run() method.
• run(): Contains the code executed by the thread. Calling it directly behaves like a normal method call and does not start a new thread.

THREAD SYNCHRONIZATION
Thread synchronization is a mechanism that controls access to shared resources to prevent multiple threads from executing critical sections simultaneously.

SLEEP() VS WAIT()
• sleep(): Pauses the current thread for a specified time without releasing any monitors it holds.
• wait(): Makes a thread wait until it is notified or interrupted, or until its timeout expires. It releases the monitor associated with the object.`,
          interviewAnswer: `Multithreading allows multiple threads to execute concurrently within a single process to maximize CPU utilization. A thread is the smallest execution unit in a process. Threads are created by extending Thread or implementing Runnable (preferred for loose coupling and multiple inheritance). The start() method creates a new OS thread and calls run(), while run() executes synchronously on the current thread. Synchronization prevents concurrent race conditions on shared data, sleep() pauses without releasing locks, and wait() pauses while releasing the monitor until notified.`,
          explanation: `1. What Is Multithreading?
Multithreading is a process of executing multiple threads concurrently within a single program. It helps perform multiple tasks efficiently.

2. What Is a Thread?
A thread is the smallest unit of execution within a process. It allows a program to perform tasks independently.

3. How Can We Create a Thread in Java?
We can create a thread in two main ways:
- Extending the Thread class.
- Implementing the Runnable interface.

4. What Is the Difference Between the Thread Class and the Runnable Interface?
- Thread: We extend the Thread class and override its run() method.
- Runnable: We implement the Runnable interface and provide the implementation of its run() method. This approach allows the class to extend another class.

5. What Is the Difference Between start() and run()?
- start(): Starts a new thread, which then executes the run() method.
- run(): Contains the code executed by the thread. Calling it directly behaves like a normal method call and does not start a new thread.

6. What Is Thread Synchronization?
Thread synchronization is a mechanism that controls access to shared resources to prevent multiple threads from executing critical sections simultaneously.

7. What Is the Difference Between sleep() and wait()?
- sleep(): Pauses the current thread for a specified time without releasing any monitors it holds.
- wait(): Makes a thread wait until it is notified or interrupted, or until its timeout expires. It releases the monitor associated with the object.`,
          realWorldExample: 'A restaurant kitchen with multiple chefs working simultaneously: Chef A prepares the salad, Chef B cooks the main course, and Chef C bakes the dessert. If they all need the same single oven at the same time, synchronization ensures they take turns without colliding; a deadlock happens if Chef A holds the oven and waits for the knife held by Chef B, while Chef B waits for the oven.',
          codeSnippet: {
            code: `// 1. Creating thread using Runnable
class Task implements Runnable {
    public void run() {
        System.out.println(Thread.currentThread().getName() + " is running concurrently via Runnable.");
    }
}

public class MultithreadingDemo {
    public static void main(String[] args) throws InterruptedException {
        // Creating thread via Runnable
        Thread t1 = new Thread(new Task(), "Worker-Thread-1");
        
        // Creating thread via Lambda
        Thread t2 = new Thread(() -> {
            System.out.println(Thread.currentThread().getName() + " is running concurrently via Lambda.");
        }, "Worker-Thread-2");

        // start() spawns a new thread; run() runs directly in main thread
        t1.start();
        t2.start();

        t1.join();
        t2.join();
        System.out.println("Both concurrent threads completed successfully!");
    }
}`,
            input: "t1.start() and t2.start()",
            output: `Worker-Thread-1 is running concurrently via Runnable.
Worker-Thread-2 is running concurrently via Lambda.
Both concurrent threads completed successfully!`
          },
          codeExample: `Thread t = new Thread(() -> System.out.println("Running in: " + Thread.currentThread().getName()));
t.start();`,
          questions: [
            {
              id: 'mt-q1',
              question: 'What Is Multithreading?',
              answer: 'Multithreading is a process of executing multiple threads concurrently within a single program. It helps perform multiple tasks efficiently.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q2',
              question: 'What Is a Thread?',
              answer: 'A thread is the smallest unit of execution within a process. It allows a program to perform tasks independently.',
              codeExample: `Thread current = Thread.currentThread();\nSystem.out.println("Running thread: " + current.getName());`,
              difficulty: 'Essential'
            },
            {
              id: 'mt-q3',
              question: 'How Can We Create a Thread in Java?',
              answer: 'We can create a thread in two main ways:\n1. Extending the Thread class.\n2. Implementing the Runnable interface.',
              codeExample: `// Way 1: Extending Thread\nclass Worker extends Thread {\n    public void run() { System.out.println("Thread running"); }\n}\n\n// Way 2: Implementing Runnable (Recommended)\nRunnable task = () -> System.out.println("Runnable running");\nnew Thread(task).start();`,
              difficulty: 'Essential'
            },
            {
              id: 'mt-q4',
              question: 'What Is the Difference Between the Thread Class and the Runnable Interface?',
              answer: '• Thread: We extend the Thread class and override its run() method.\n• Runnable: We implement the Runnable interface and provide the implementation of its run() method. This approach allows the class to extend another class.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q5',
              question: 'What Is the Difference Between start() and run()?',
              answer: '• start(): Starts a new thread, which then executes the run() method.\n• run(): Contains the code executed by the thread. Calling it directly behaves like a normal method call and does not start a new thread.',
              codeExample: `Thread t = new Thread(() -> System.out.println("Executed in new thread"));\nt.start(); // Creates new OS thread\n// t.run(); // Calls synchronously in current thread`,
              difficulty: 'Essential'
            },
            {
              id: 'mt-q6',
              question: 'What Is Thread Synchronization?',
              answer: 'Thread synchronization is a mechanism that controls access to shared resources to prevent multiple threads from executing critical sections simultaneously.',
              codeExample: `class Counter {\n    private int count = 0;\n    public synchronized void increment() {\n        count++; // Thread-safe critical section\n    }\n}`,
              difficulty: 'Essential'
            },
            {
              id: 'mt-q7',
              question: 'What Is the Difference Between sleep() and wait()?',
              answer: '• sleep(): Pauses the current thread for a specified time without releasing any monitors it holds.\n• wait(): Makes a thread wait until it is notified or interrupted, or until its timeout expires. It releases the monitor associated with the object.',
              codeExample: `// sleep: does not release lock\nThread.sleep(1000);\n\n// wait: called inside synchronized block, releases lock\nsynchronized(sharedObject) {\n    sharedObject.wait();\n}`,
              difficulty: 'Essential'
            }
          ]
        }
      ]
    },
    {
      id: 'java-collections',
      title: 'Collections Framework',
      description: 'Java Collections Framework: List, Set, Map, ArrayList vs LinkedList, HashSet vs TreeSet, HashMap vs Hashtable, Comparable vs Comparator, Iterators, and Fail-Fast vs Fail-Safe.',
      concepts: [
        {
          id: 'cj-collections-framework',
          title: 'Java Collections — Top 10 Interview Questions & Answers',
          description: 'Top 10 essential Java Collections interview questions and answers, differences between core interfaces/classes, and 3 key coding programs.',
          difficulty: 'Essential',
          studyTime: '15 minutes',
          definition: `COLLECTIONS FRAMEWORK
The Java Collections Framework is a set of interfaces and classes used to store, manage, and manipulate groups of objects efficiently.

COLLECTION VS COLLECTIONS
• Collection: An interface that represents a group of objects.
• Collections: A utility class that provides methods for operations such as sorting, searching, and reversing collections.

LIST, SET, AND MAP
• List: Stores elements in an ordered sequence and allows duplicates.
• Set: Stores unique elements and does not allow duplicates.
• Map: Stores key-value pairs, with unique keys.

ARRAYLIST VS LINKEDLIST
• ArrayList: Uses a dynamic array and provides fast indexed access.
• LinkedList: Uses a doubly linked list and can efficiently insert or remove elements when the relevant position or node is already known.

HASHSET VS TREESET
• HashSet: Stores unique elements without guaranteeing their iteration order.
• TreeSet: Stores unique elements in sorted order.

HASHMAP VS HASHTABLE
• HashMap: Is not synchronized and allows one null key and multiple null values.
• Hashtable: Is synchronized and does not allow null keys or null values.

HASHMAP VS TREEMAP
• HashMap: Does not guarantee key iteration order.
• TreeMap: Stores entries sorted by their keys.

ITERATOR VS LISTITERATOR
• Iterator: Traverses a collection forward and can remove elements during iteration when supported.
• ListIterator: Traverses a list forward and backward and supports additional operations such as adding and replacing elements.

COMPARABLE VS COMPARATOR
• Comparable: Defines a class's natural ordering through the compareTo() method.
• Comparator: Defines a comparison rule through the compare() method and allows different sorting orders.

FAIL-FAST AND FAIL-SAFE ITERATION
• Fail-Fast: An iterator may throw ConcurrentModificationException if a collection is structurally modified outside the iterator during iteration.
• Fail-Safe: An informal term often used for iterators that tolerate certain concurrent modifications, such as weakly consistent iterators or snapshot-based iterators. It is not an official Java Collections Framework category.`,
          interviewAnswer: `The Java Collection Framework provides a standardized architecture of interfaces and classes (List, Set, Queue, Map) to store and manipulate object groups efficiently. List (ArrayList/LinkedList) permits duplicates and preserves insertion order; Set (HashSet/TreeSet) enforces element uniqueness; and Map (HashMap/TreeMap/Hashtable) maps unique keys to values. For iteration, Iterator allows forward traversal across collections with safe element removal, while ListIterator enables bidirectional traversal in lists. Standard iterators are fail-fast (throwing ConcurrentModificationException on concurrent modification), whereas concurrent collections (e.g., CopyOnWriteArrayList) provide fail-safe snapshot iteration. Natural sorting uses Comparable with compareTo(), whereas custom or dynamic sorting uses Comparator with compare().`,
          explanation: `1. What Is the Collections Framework in Java?
The Java Collections Framework is a set of interfaces and classes used to store, manage, and manipulate groups of objects efficiently.

2. What Is the Difference Between Collection and Collections?
• Collection: An interface that represents a group of objects.
• Collections: A utility class that provides methods for operations such as sorting, searching, and reversing collections.

3. What Is the Difference Between List, Set, and Map?
• List: Stores elements in an ordered sequence and allows duplicates.
• Set: Stores unique elements and does not allow duplicates.
• Map: Stores key-value pairs, with unique keys.

4. What Is the Difference Between ArrayList and LinkedList?
• ArrayList: Uses a dynamic array and provides fast indexed access.
• LinkedList: Uses a doubly linked list and can efficiently insert or remove elements when the relevant position or node is already known.

5. What Is the Difference Between HashSet and TreeSet?
• HashSet: Stores unique elements without guaranteeing their iteration order.
• TreeSet: Stores unique elements in sorted order.

6. What Is the Difference Between HashMap and Hashtable?
• HashMap: Is not synchronized and allows one null key and multiple null values.
• Hashtable: Is synchronized and does not allow null keys or null values.

7. What Is the Difference Between HashMap and TreeMap?
• HashMap: Does not guarantee key iteration order.
• TreeMap: Stores entries sorted by their keys.

8. What Is the Difference Between Iterator and ListIterator?
• Iterator: Traverses a collection forward and can remove elements during iteration when supported.
• ListIterator: Traverses a list forward and backward and supports additional operations such as adding and replacing elements.

9. What Is the Difference Between Comparable and Comparator?
• Comparable: Defines a class's natural ordering through the compareTo() method.
• Comparator: Defines a comparison rule through the compare() method and allows different sorting orders.

10. What Is Fail-Fast and Fail-Safe Iteration?
• Fail-Fast: An iterator may throw ConcurrentModificationException if a collection is structurally modified outside the iterator during iteration.
• Fail-Safe: An informal term often used for iterators that tolerate certain concurrent modifications, such as weakly consistent iterators or snapshot-based iterators. It is not an official Java Collections Framework category.`,
          realWorldExample: `A modern eCommerce Fulfillment Warehouse:
• List (ArrayList): Order Cart Items — preserves checkout sequence, items can be duplicated (e.g., 2 identical shirts at index 0 and index 1).
• Set (HashSet): Unique Product SKU Registry — every product barcode must be globally unique with zero duplicates.
• Map (HashMap): Order Tracking System — maps unique Order Number (Key) to Order Customer & Shipping Details (Value) for O(1) instant lookup.`,
          codeSnippet: {
            code: `import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class CharacterCountHashMap {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Take user input string
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();

        // Normal HashMap to store character and count
        HashMap<Character, Integer> map = new HashMap<>();

        // Normal map.put to count character occurrences
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (map.containsKey(ch)) {
                map.put(ch, map.get(ch) + 1);
            } else {
                map.put(ch, 1);
            }
        }

        // Print character counts
        System.out.println("Character counts:");
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }

        scanner.close();
    }
}`,
            input: 'Enter a string: programming',
            output: `Enter a string: programming
Character counts:
p : 1
r : 2
o : 1
g : 2
a : 1
m : 2
i : 1
n : 1`
          },
          codePrograms: [
            {
              id: 'col-prog-1',
              title: '1. Character Count in a String (HashMap with User Input)',
              label: '1. HashMap (Count)',
              input: 'Enter a string: programming',
              output: `Enter a string: programming
Character counts:
p : 1
r : 2
o : 1
g : 2
a : 1
m : 2
i : 1
n : 1`,
              code: `import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class CharacterCountHashMap {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Take user input string
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();

        // Normal HashMap to store character and count
        HashMap<Character, Integer> map = new HashMap<>();

        // Normal map.put to count character occurrences
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (map.containsKey(ch)) {
                map.put(ch, map.get(ch) + 1);
            } else {
                map.put(ch, 1);
            }
        }

        // Print character counts
        System.out.println("Character counts:");
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }

        scanner.close();
    }
}`
            },
            {
              id: 'col-prog-2',
              title: '2. Remove Duplicates from Array (HashSet with User Input)',
              label: '2. HashSet (Duplicates)',
              input: `Enter size of array: 6
Enter 6 elements:
10
20
30
20
10
40`,
              output: `Enter size of array: 6
Enter 6 elements:
Original Array: [10, 20, 30, 20, 10, 40]

Elements after removing duplicates (using set.add):
10
20
30
40`,
              code: `import java.util.Scanner;
import java.util.Arrays;
import java.util.HashSet;

public class RemoveDuplicatesHashSet {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Take array size from user
        System.out.print("Enter size of array: ");
        int n = scanner.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        System.out.println("Original Array: " + Arrays.toString(arr));

        // Normal HashSet to remove duplicates
        HashSet<Integer> set = new HashSet<>();

        // Add array elements to HashSet using set.add()
        for (int num : arr) {
            set.add(num);
        }

        // Print elements after removing duplicates
        System.out.println("\\nElements after removing duplicates (using set.add):");
        for (int element : set) {
            System.out.println(element);
        }

        scanner.close();
    }
}`
            },
            {
              id: 'col-prog-3',
              title: '3. ArrayList Operations (User Input, list.add & Print Elements)',
              label: '3. ArrayList (Elements)',
              input: `Enter number of elements: 4
Enter 4 elements:
Java
Python
C++
JavaScript`,
              output: `Enter number of elements: 4
Enter 4 elements:

ArrayList elements (added via list.add):
1. Java
2. Python
3. C++
4. JavaScript

Total elements: 4`,
              code: `import java.util.Scanner;
import java.util.ArrayList;

public class ArrayListUserInputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Take number of elements from user
        System.out.print("Enter number of elements: ");
        int n = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        // Normal ArrayList
        ArrayList<String> list = new ArrayList<>();

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            String element = scanner.nextLine();
            list.add(element); // Normal list.add
        }

        // Print elements
        System.out.println("\\nArrayList elements (added via list.add):");
        for (int i = 0; i < list.size(); i++) {
            System.out.println((i + 1) + ". " + list.get(i));
        }

        System.out.println("\\nTotal elements: " + list.size());

        scanner.close();
    }
}`
            }
          ],
          questions: [
            {
              id: 'col-q1',
              question: 'What Is the Collections Framework in Java?',
              answer: 'The Java Collections Framework is a set of interfaces and classes used to store, manage, and manipulate groups of objects efficiently.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q2',
              question: 'What Is the Difference Between Collection and Collections?',
              answer: '• Collection: An interface that represents a group of objects.\n• Collections: A utility class that provides methods for operations such as sorting, searching, and reversing collections.',
              codeExample: `// Collection: Interface representing a group of objects\nCollection<String> group = new ArrayList<>();\n\n// Collections: Utility class providing static algorithms\nCollections.sort((List<String>) group);\nCollections.reverse((List<String>) group);`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q3',
              question: 'What Is the Difference Between List, Set, and Map?',
              answer: '• List: Stores elements in an ordered sequence and allows duplicates.\n• Set: Stores unique elements and does not allow duplicates.\n• Map: Stores key-value pairs, with unique keys.',
              codeExample: `List<String> list = Arrays.asList("A", "B", "A"); // Allows duplicate "A"\nSet<String> set = new HashSet<>(list);            // [A, B] (Duplicates removed)\nMap<String, Integer> map = Map.of("A", 1, "B", 2); // Key-Value mapping`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q4',
              question: 'What Is the Difference Between ArrayList and LinkedList?',
              answer: '• ArrayList: Uses a dynamic array and provides fast indexed access.\n• LinkedList: Uses a doubly linked list and can efficiently insert or remove elements when the relevant position or node is already known.',
              codeExample: `List<Integer> al = new ArrayList<>();  // O(1) random access: al.get(i)\nList<Integer> ll = new LinkedList<>(); // O(1) insert/remove at known node`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q5',
              question: 'What Is the Difference Between HashSet and TreeSet?',
              answer: '• HashSet: Stores unique elements without guaranteeing their iteration order.\n• TreeSet: Stores unique elements in sorted order.',
              codeExample: `Set<Integer> hashSet = new HashSet<>(Arrays.asList(40, 10, 30)); // Unpredictable order\nSet<Integer> treeSet = new TreeSet<>(Arrays.asList(40, 10, 30)); // Sorted: [10, 30, 40]`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q6',
              question: 'What Is the Difference Between HashMap and Hashtable?',
              answer: '• HashMap: Is not synchronized and allows one null key and multiple null values.\n• Hashtable: Is synchronized and does not allow null keys or null values.',
              codeExample: `Map<String, String> map = new HashMap<>();\nmap.put(null, "allowed"); // HashMap permits 1 null key\n\n// Hashtable ht = new Hashtable();\n// ht.put(null, "fail"); // Throws NullPointerException!`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q7',
              question: 'What Is the Difference Between HashMap and TreeMap?',
              answer: '• HashMap: Does not guarantee key iteration order.\n• TreeMap: Stores entries sorted by their keys.',
              codeExample: `Map<String, Integer> hashMap = new HashMap<>(); // Fast O(1) lookup, no ordering\nMap<String, Integer> treeMap = new TreeMap<>(); // O(log n) lookup, sorted by keys`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q8',
              question: 'What Is the Difference Between Iterator and ListIterator?',
              answer: '• Iterator: Traverses a collection forward and can remove elements during iteration when supported.\n• ListIterator: Traverses a list forward and backward and supports additional operations such as adding and replacing elements.',
              codeExample: `ListIterator<String> lit = list.listIterator();\nwhile (lit.hasNext()) lit.next();\nwhile (lit.hasPrevious()) System.out.println(lit.previous()); // Reverse traversal`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q9',
              question: 'What Is the Difference Between Comparable and Comparator?',
              answer: '• Comparable: Defines a class\'s natural ordering through the compareTo() method.\n• Comparator: Defines a comparison rule through the compare() method and allows different sorting orders.',
              codeExample: `// 1. Comparable (Natural Order in class definition)\nclass Student implements Comparable<Student> {\n    public int compareTo(Student o) { return this.id - o.id; }\n}\n\n// 2. Comparator (Custom sorting)\nComparator<Student> byName = (s1, s2) -> s1.name.compareTo(s2.name);`,
              difficulty: 'Essential'
            },
            {
              id: 'col-q10',
              question: 'What Is Fail-Fast and Fail-Safe Iteration?',
              answer: '• Fail-Fast: An iterator may throw ConcurrentModificationException if a collection is structurally modified outside the iterator during iteration.\n• Fail-Safe: An informal term often used for iterators that tolerate certain concurrent modifications, such as weakly consistent iterators or snapshot-based iterators. It is not an official Java Collections Framework category.',
              codeExample: `// Fail-Fast: standard ArrayList iterator throws ConcurrentModificationException\nfor (String item : arrayList) arrayList.add("new"); // Throws exception!\n\n// Fail-Safe / Snapshot: CopyOnWriteArrayList traverses snapshot safely\nCopyOnWriteArrayList<String> safeList = new CopyOnWriteArrayList<>(arrayList);`,
              difficulty: 'Essential'
            }
          ]
        }
      ]
    }
  ]
};
