# -*- coding: utf-8 -*-
import json

def get_full_core_java_ts():
    # Build the entire coreJava.ts with exact docx definitions
    # All strings properly escaped for TypeScript
    
    code_text = '''import type { Topic } from '../types';

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
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: 'Java is called platform-independent because Java source code is compiled into bytecode. This bytecode can run on any operating system that has a compatible Java Virtual Machine (JVM). This is commonly described as "Write Once, Run Anywhere."',
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
              answer: 'JVM (Java Virtual Machine) executes Java bytecode.\\nJRE (Java Runtime Environment) provides the JVM and standard runtime libraries needed to run Java applications.\\nJDK (Java Development Kit) includes development tools (such as javac compiler and debugger) plus the JRE needed to develop and run Java programs.\\nIn short: JDK ⊃ JRE ⊃ JVM.',
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
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: 'A data type specifies what kind of value a variable can store and which operations can be performed on that value. Java is strongly typed with two categories: 8 Primitive types and Reference types.',
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
              question: 'What is the difference between Primitive types and Reference types in Java?',
              answer: 'Primitive types store raw values directly on the stack and have fixed sizes (byte, short, int, long, float, double, char, boolean). Reference types store the memory address of an object created on the heap (classes, interfaces, arrays, String); uninitialized reference variables hold null.',
              difficulty: 'Essential'
            },
            {
              id: 'dt-q2',
              question: 'What is ASCII vs Unicode in Java?',
              answer: 'ASCII is a 7-bit encoding standard supporting 128 basic English characters and digits (e.g. ASCII "A" is 65). Unicode is a universal international character standard designed to represent characters from writing systems worldwide. Java char uses 2 bytes (16 bits) to support Unicode.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-type-casting',
          title: 'Type Casting (Widening vs Narrowing)',
          difficulty: 'Essential',
          studyTime: '6 minutes',
          definition: 'Type casting is converting a value from one data type to another. In Java, type casting occurs in two primary forms: Widening (implicit) casting and Narrowing (explicit) casting.',
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
              question: 'What is type casting and what are its two main types in Java?',
              answer: 'Type casting is converting a value from one data type to another. The two types are:\\n1. Widening (Implicit): Converts a smaller type to a larger compatible type automatically without data loss (e.g. int to double).\\n2. Narrowing (Explicit): Converts a larger type to a smaller type requiring a cast operator (int) and can result in truncation or loss of precision (e.g. double to int).',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-operators',
          title: 'Operators & Pre/Post Increment Evaluation',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: 'An operator is a symbol that performs an operation on one or more values or variables. The values it acts on are called operands.',
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
              question: 'Explain pre-increment (++x) vs post-increment (x++) in Java.',
              answer: 'Pre-increment (++x) increases the value of x first and then returns the new value for expression evaluation. Post-increment (x++) returns the current value of x for expression evaluation first, and increments x only after the expression is evaluated.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-variables',
          title: 'Variables (Local, Instance, Static & Scoping Rules)',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: 'A variable is a named storage location used by a program to hold a value. The value of a variable may change while the program runs. Java defines three variable scopes: Local variables, Instance variables, and Static variables.',
          interviewAnswer: 'A local variable is declared inside a method, constructor, or block, has scope limited to that block, and Java does NOT automatically assign default values (it must be assigned before use). An instance variable is declared in a class without static; each object has its own copy receiving default values. A static variable is declared with static, belongs to the class, is shared by all instances, and receives default values.',
          explanation: `1. Local Variable:
Declared inside a method, constructor, or block. Scope is limited to that method or block. Java does not automatically assign a default value to local variables; they must be explicitly assigned before use.

2. Instance Variable:
Declared in a class but outside methods, constructors, and blocks, without static. Each object has its own copy stored on the heap. Instance fields receive default values (0, null, false) when an object is created.

3. Static Variable:
Declared with static. It belongs to the class and is shared identically by all instances of that class in Metaspace. It receives a default value if no explicit value is assigned.

4. Local vs Instance Variable:
A local variable belongs to a method or block, is usable only within its scope, and has no automatic default value. An instance variable belongs to an object, is declared at class level, and receives a default value.`,
          realWorldExample: 'In an office: An employee\'s employeeId and deskNumber are instance variables (unique to each employee). The companyName and buildingAddress are static variables (shared by all employees). A paper memo written during a 10-minute meeting is a local variable (exists only during the meeting).',
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
              question: 'What is the difference between Local variables and Instance variables?',
              answer: 'A local variable belongs to a method or block, is usable only within its scope, and has no automatic default value (must be initialized before reading). An instance variable belongs to an object, is declared at class level, and receives an automatic default value (0, null, false) upon object instantiation.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-methods-pass-by-value',
          title: 'Methods, Method Overloading & Pass-by-Value',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: 'A method is a named block of code that performs a specific task. It can accept parameters and may return a value. Java is ALWAYS pass-by-value.',
          interviewAnswer: 'Java is strictly pass-by-value. A method receives a copy of the argument value. For primitives, the primitive value is copied. For objects, the reference value (memory pointer) is copied, so a method can change the object\'s internal state but cannot replace the caller\'s reference variable.',
          explanation: `1. Four Common Method Forms:
- 1) No parameters, no return value: void run() {}
- 2) Parameters, no return value: void log(String msg) {}
- 3) No parameters, returns a value: int getCount() { return 10; }
- 4) Parameters and returns a value: int add(int a, int b) { return a + b; }

2. Pass-by-Value in Java:
Java is always pass-by-value. For primitive types, the actual data value is copied into the method parameter. For reference types, the memory address pointer is copied; mutating object fields modifies the caller's object, but reassigning the parameter reference variable has no effect on the caller's variable.

3. Method Overloading:
Method overloading means defining multiple methods with the same name in the same class but different parameter lists (number, types, or order of parameters). Return type alone CANNOT distinguish overloaded methods.`,
          realWorldExample: 'If you give someone a copy of your apartment key, they can enter and repaint the kitchen wall (mutating object state). But giving them a key does not allow them to change the deed of your real estate property (cannot replace caller reference variable).',
          codeSnippet: {
            code: `public class PassByValueDemo {
    static void changePrimitive(int x) {
        x = 50; // Modifies local copy only
    }

    static void mutateObject(StringBuilder sb) {
        sb.append(" World"); // Modifies underlying object through copied reference
    }

    public static void main(String[] args) {
        int num = 10;
        changePrimitive(num);
        System.out.println("num after method: " + num); // Still 10

        StringBuilder text = new StringBuilder("Hello");
        mutateObject(text);
        System.out.println("text after method: " + text); // Hello World
    }
}`,
            input: "num = 10, text = 'Hello'",
            output: `num after method: 10
text after method: Hello World`
          },
          codeExample: `public class OverloadDemo {
    void show(int x) {}
    void show(String x) {}
}`,
          questions: [
            {
              id: 'pbv-q1',
              question: 'Is Java pass-by-value or pass-by-reference?',
              answer: 'Java is strictly pass-by-value. When passing primitive variables, their literal value is copied. When passing object references, a copy of the memory reference address is passed. Therefore, a method can modify the object\\'s fields, but cannot reassign the caller\\'s reference variable.',
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
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: 'Each thread has its own JVM stack for method frames and local variables. The heap stores objects and arrays. The JVM also maintains class metadata and runtime data. Garbage collection is the JVM\'s automatic process of reclaiming heap memory used by objects that are no longer reachable.',
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
              question: 'What happens to objects on the heap when a method completes execution?',
              answer: 'When a method completes, its stack frame is popped from the thread stack. Objects created by that method on the heap are NOT immediately deleted; they simply become eligible for garbage collection if no other active references point to them.',
              difficulty: 'Essential'
            },
            {
              id: 'gc-q2',
              question: 'Does calling System.gc() force the JVM to run garbage collection immediately?',
              answer: 'No. System.gc() is only a request or suggestion to the JVM. The JVM decides whether and when to execute garbage collection based on heap memory pressure and GC algorithms.',
              difficulty: 'Common'
            }
          ]
        }
      ]
    },
    {
      id: 'oop-concepts',
      title: 'Object-Oriented Programming (OOP) Pillars',
      description: 'OOP fundamentals, Classes, Objects, Arrays, Encapsulation, static keyword, Constructors, Inheritance, super/final, Polymorphism, Method Hiding, Upcasting/Downcasting, Abstraction, and HAS-A relationships.',
      concepts: [
        {
          id: 'cj-oop-class-object-array',
          title: 'OOP, Classes, Objects & Arrays',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS OOP?
Object-oriented programming (OOP) organizes software around classes and objects. It helps model real-world entities and supports modularity, reuse, and maintainability.

WHAT IS A CLASS?
A class is a blueprint or template that defines the fields (state) and methods (behavior) that its objects can have.

WHAT IS AN OBJECT?
An object is a runtime instance of a class. It has state (field values), behavior (methods), and identity. The new keyword commonly creates class objects.

WHAT IS AN ARRAY?
An array is an object that stores a fixed number of elements of one declared component type. Elements are accessed by zero-based indexes, from 0 to length - 1. An array's length cannot change after creation. A two-dimensional array is an array whose elements refer to other arrays (supporting jagged arrays).`,
          interviewAnswer: 'In Java, OOP structures software around Classes (logical blueprints defining state and behavior) and Objects (runtime instances created via "new" with state, behavior, and identity). An Array is a fixed-size container object holding elements of one declared type indexed from 0 to length - 1.',
          explanation: `1. What is OOP?
Object-oriented programming organizes software around classes and objects to model real-world entities with modularity, reuse, and maintainability.

2. Class:
A class is a blueprint or template defining the fields (state) and methods (behavior) that its objects will have. It occupies no heap memory until instantiated.

3. Object:
An object is a runtime instance of a class with state (field values), behavior (methods), and identity (unique memory address).

4. Array:
An array is an object storing a fixed number of elements of a single component type accessed by zero-based indexes (0 to length - 1). Two-dimensional Java arrays are arrays of array references, permitting inner arrays of different lengths (jagged arrays).`,
          realWorldExample: 'An architectural drawing is a Class. The actual constructed physical house is an Object. A row of houses on the same street accessed by house number 0, 1, 2 is an Array.',
          codeSnippet: {
            code: `class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

public class OOPBasicsDemo {
    public static void main(String[] args) {
        // Object creation with 'new'
        Employee e = new Employee(101, "Chakri");
        System.out.println("Employee Object: " + e.name + " (ID: " + e.id + ")");

        // Array of fixed size
        int[] arr = {10, 20, 30, 40};
        System.out.println("Array index 0: " + arr[0]);
        System.out.println("Array length: " + arr.length);
    }
}`,
            input: "id = 101, name = 'Chakri', arr = {10, 20, 30, 40}",
            output: `Employee Object: Chakri (ID: 101)
Array index 0: 10
Array length: 4`
          },
          codeExample: `class Employee { int id; String name; }
Employee e = new Employee();
int[] arr = {10, 20, 30, 40};`,
          questions: [
            {
              id: 'oop-q1',
              question: 'What is the difference between a Class and an Object?',
              answer: 'A class is a compile-time blueprint or template defining fields and methods. An object is a runtime instance of a class allocated on the heap that possesses state (field values), behavior (methods), and identity.',
              difficulty: 'Essential'
            },
            {
              id: 'oop-q2',
              question: 'Can the size of an array change after it is created in Java?',
              answer: 'No. In Java, an array is an object with a fixed length established at creation time. To store a dynamically changing number of elements, use Collections such as ArrayList.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-encapsulation',
          title: 'Encapsulation, Getters, Setters & "this" Keyword',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS ENCAPSULATION?
Encapsulation bundles data and the methods that operate on it within a class and restricts direct access to internal state. It is commonly implemented with private fields and public methods that control access.

GETTER AND SETTER:
A getter returns or reads a field\'s value. A setter assigns or updates a field\'s value and can validate the value before changing the field.

VARIABLE SHADOWING:
Shadowing occurs when a variable in a more local scope has the same name as a variable in an outer scope. this.field refers to the current object\'s field when a parameter or local variable has the same name.

WHAT IS THIS?
this refers to the current object. It can distinguish fields from parameters and call another constructor in the same class using this(...). A this(...) constructor call must be the first statement in that constructor.`,
          interviewAnswer: 'Encapsulation bundles data and methods while restricting direct access to internal state through private fields and public getters/setters with validation. Advantages include data hiding, validation, and lower coupling. "this" refers to the current object, resolving variable shadowing and enabling constructor chaining with this(...).',
          explanation: `1. Encapsulation:
Bundles data and methods that operate on it within a class while restricting direct access to internal state using private fields and public methods.

2. Advantages of Encapsulation:
Supports data hiding, controlled access, validation, lower coupling, and easier maintenance.

3. Getters and Setters:
- Getter: reads and returns field value.
- Setter: validates input and assigns field value.

4. Variable Shadowing & "this":
Shadowing occurs when a local parameter shares the same name as an instance field. "this.field" distinguishes the instance field from the local parameter. this(...) calls another constructor in the same class as the very first statement.`,
          realWorldExample: 'A bank ATM or bank account: Your account balance is private. You cannot directly write a new number in the bank vault; you must use deposit() or withdraw() setters that validate sufficient funds.',
          codeSnippet: {
            code: `class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance; // 'this' resolves variable shadowing
        }
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.setBalance(5000.0);
        System.out.println("Account Balance: $" + acc.getBalance());
    }
}`,
            input: "balance = 5000.0",
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
              question: 'What is encapsulation and what are its advantages?',
              answer: 'Encapsulation is bundling data and methods into a single class while restricting direct access through private fields and public methods. Advantages: 1) Data hiding, 2) Input validation, 3) Loose coupling, 4) Ease of maintenance and refactoring.',
              difficulty: 'Essential'
            },
            {
              id: 'enc-q2',
              question: 'What is variable shadowing and how does the "this" keyword resolve it?',
              answer: 'Variable shadowing occurs when a local variable or method parameter has the exact same name as an instance field. Using "this.fieldName" explicitly tells the compiler to access the current object instance field rather than the local parameter.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-static-keyword',
          title: 'static Keyword, Static Methods & Static Blocks',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT DOES STATIC MEAN?
static marks a member as belonging to the class rather than to each object. Static fields are shared by instances, and static methods can be called using the class name.

STATIC METHOD LIMITATION:
A static method has no current-object this reference and cannot directly access instance fields or instance methods without an object reference. It can directly access static members.

STATIC BLOCK:
A static initialization block runs when the class is initialized, before the class is used to create its first instance or invoke its static method, subject to Java class-initialization rules.

WHEN SHOULD A VARIABLE BE STATIC?
Use a static variable when the value represents shared class-level state rather than separate state for each object, such as a shared constant or an instance counter.`,
          interviewAnswer: 'In Java, static members belong to the class in Metaspace rather than individual heap objects. Static methods cannot use "this" and cannot directly call instance methods or fields without an explicit object reference. Static blocks execute once when the class is initialized. Use static variables for shared state across all instances.',
          explanation: `1. static Keyword:
Marks a field, method, or nested class as belonging to the class rather than individual instances.

2. Static Method Limitations:
Static methods execute without any object context and therefore have no "this" pointer. They cannot access instance variables or instance methods directly without explicitly creating an object.

3. Static Initialization Block:
Executes exactly once when the class is loaded and initialized by the JVM, before any object constructor or static method is invoked.

4. When to Use Static:
When data represents shared class-level state (e.g. Math.PI, totalCount, database connection pool).`,
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
              question: 'Why can a static method not access non-static instance variables directly?',
              answer: 'Static methods belong to the class and are loaded into memory before any object instance exists. Because static methods do not have a "this" reference pointing to an object on the heap, they have no way of knowing which object\\'s instance variable to access.',
              difficulty: 'Essential'
            },
            {
              id: 'st-q2',
              question: 'When does a static block execute in Java?',
              answer: 'A static block executes once when the class is loaded and initialized by the JVM ClassLoader, before any constructor is called and before any static method is executed.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-constructors',
          title: 'Constructors & Constructor Chaining (Default, Copy, this & super)',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS A CONSTRUCTOR?
A constructor initializes a new object. It has the same name as its class and has no return type, not even void. It is invoked when an object is created.

DEFAULT CONSTRUCTOR:
If a class declares no constructor, the compiler provides a no-argument default constructor. If you declare any constructor, the compiler does not automatically add that default constructor.

COPY CONSTRUCTOR:
Java does not automatically provide a special copy-constructor feature. A copy constructor is programmer-defined and accepts an object of the same class, copying selected values into a new object.

CONSTRUCTOR CHAINING:
Constructor chaining is when one constructor calls another to reuse initialization logic. Use this(...) for another constructor in the same class, or super(...) for a parent constructor. The call must be the first statement. Cyclic constructor chaining occurs when constructors call one another in a cycle; Java rejects such a cycle at compile time.`,
          interviewAnswer: 'A constructor initializes an object and has no return type. If you declare no constructor, the compiler provides a default no-argument constructor. Chaining reuses initialization logic using this(...) in the same class or super(...) in the parent class; it must be the very first statement. A copy constructor accepts an existing object of the same class and duplicates its field values.',
          explanation: `1. Constructor Rules:
- Same name as the class.
- No return type (writing void turns it into a normal method!).
- Invoked automatically with "new".

2. Default vs No-Argument vs Parameterized:
- Default constructor: Inserted by compiler only if NO constructor is declared in the class.
- No-arg constructor: User-defined with zero parameters.
- Parameterized constructor: Accepts parameters to initialize custom values.

3. Copy Constructor:
Programmer-defined constructor that takes an instance of the same class:
Student(Student other) { this.name = other.name; this.age = other.age; }

4. Constructor Chaining:
- this(...) calls another constructor in the same class.
- super(...) calls parent class constructor.
- Must be the first line of code.
- Cyclic chaining (A calls B and B calls A) causes a compile error.`,
          realWorldExample: 'When ordering a customized pizza: the default constructor gives you plain cheese; the parameterized constructor lets you pick custom toppings; the copy constructor makes a duplicate of your friend\\'s exact custom order.',
          codeSnippet: {
            code: `class Student {
    String name;
    int age;

    // Parameterized constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Constructor chaining using this(...)
    Student() {
        this("Unknown", 18); // Must be first statement!
    }

    // Copy constructor
    Student(Student other) {
        this.name = other.name;
        this.age = other.age;
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Chakri", 24);
        Student s2 = new Student(s1); // Copied values
        System.out.println("Original: " + s1.name + ", Age " + s1.age);
        System.out.println("Copied: " + s2.name + ", Age " + s2.age);
    }
}`,
            input: "s1 initialized with ('Chakri', 24)",
            output: `Original: Chakri, Age 24
Copied: Chakri, Age 24`
          },
          codeExample: `Student(Student other) {
    this.name = other.name;
    this.age = other.age;
}`,
          questions: [
            {
              id: 'con-q1',
              question: 'Does the compiler always provide a default constructor in Java?',
              answer: 'No. The compiler supplies a default no-argument constructor ONLY if the class declares no constructors at all. If you declare any constructor (even a parameterized one), the compiler will NOT provide a default constructor.',
              difficulty: 'Essential'
            },
            {
              id: 'con-q2',
              question: 'Why must this() or super() be the first statement in a constructor?',
              answer: 'Because base class and prior initialization logic must be fully established before the current constructor runs its specific initialization statements, preventing accesses to uninitialized state.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-inheritance',
          title: 'Inheritance & is-a Relationship (Single, Multilevel, Hierarchical)',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS INHERITANCE?
Inheritance allows a subclass to acquire accessible fields and methods from a superclass. A class uses extends to inherit from one direct superclass. Inheritance supports code reuse and method overriding.

TYPES OF INHERITANCE:
- Single inheritance: One child class extends one parent class.
- Multilevel inheritance: A class extends a class that itself extends another class, forming a chain.
- Hierarchical inheritance: Two or more child classes extend the same parent class.
- Multiple inheritance: Java classes cannot extend multiple classes (to avoid ambiguity), but a class can implement multiple interfaces.
- Hybrid inheritance: Combines two or more inheritance patterns.

IS-A RELATIONSHIP:
An is-a relationship means one type is a specialized form of another type. For example, Dog is an Animal when Dog extends Animal.`,
          interviewAnswer: 'Inheritance allows a subclass to acquire fields and methods from a superclass using "extends", modeling an is-a relationship. Java supports Single, Multilevel, and Hierarchical inheritance for classes. Multiple inheritance is not supported with classes to prevent Diamond ambiguity, but is supported through interfaces. Behavior can be Inherited, Overridden, or Specialized.',
          explanation: `1. What is Inheritance?
Allows a subclass to acquire accessible members of a superclass using the "extends" keyword.

2. Types of Inheritance:
- Single: B extends A
- Multilevel: C extends B, B extends A
- Hierarchical: B extends A, C extends A
- Multiple (Classes): NOT supported in Java to avoid ambiguity (the Diamond Problem).
- Multiple (Interfaces): Supported (class C implements A, B).

3. is-a Relationship:
Represents type specialization (e.g. Dog is-a Animal).

4. Inherited, Overridden, and Specialized Behavior:
- Inherited behavior: Used directly from parent without changing code.
- Overridden behavior: Subclass provides a specific implementation of an inherited instance method.
- Specialized behavior: New methods defined strictly in the child class.`,
          realWorldExample: 'A smartphone IS-A electronic device. It inherits basic electronic power functions, overrides display brightness, and adds specialized mobile internet connectivity.',
          codeSnippet: {
            code: `class Animal {
    void eat() { System.out.println("Animal eats food (Inherited)"); }
}

class Dog extends Animal {
    // Specialized behavior
    void bark() { System.out.println("Dog barks: Woof Woof! (Specialized)"); }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Inherited from Animal
        d.bark(); // Specialized Dog method
    }
}`,
            input: "Dog object instantiated",
            output: `Animal eats food (Inherited)
Dog barks: Woof Woof! (Specialized)`
          },
          codeExample: `class Animal { void eat() {} }
class Dog extends Animal { void bark() {} }`,
          questions: [
            {
              id: 'inh-q1',
              question: 'Why does Java not support multiple inheritance with classes?',
              answer: 'To prevent ambiguity known as the Diamond Problem. If two parent classes define the same method with different implementations and a child class extends both, the compiler cannot decide which parent method to invoke. Java avoids this ambiguity by permitting multiple inheritance only through interfaces.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-super-final-access',
          title: 'super, final & Access Modifiers (public, protected, package-private, private)',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS SUPER?
super refers to the immediate superclass from a subclass. It can access superclass members hidden or overridden by the subclass and call a superclass constructor with super(...).

WHAT IS FINAL?
A final variable can be assigned only once. A final method cannot be overridden. A final class cannot be subclassed. A final reference cannot be reassigned, but the referenced object is not automatically immutable.

ACCESS MODIFIERS:
- public: broadest member access (accessible from anywhere).
- protected: same package and subclass access under Java's rules.
- Package-private (no modifier): same package only.
- private: restricted to the declaring class and permitted enclosing scope. Top-level classes can be public or package-private, not protected or private.`,
          interviewAnswer: '"super" refers to the immediate parent class to access overridden methods or invoke parent constructors. "final" prevents modification (constant variable, un-overridable method, un-extendable class). Java access modifiers control visibility: public (everywhere), protected (package + subclasses), package-private default (same package only), and private (declaring class only).',
          explanation: `1. super Keyword:
- super.methodName(): calls overridden superclass method.
- super.variableName: accesses hidden superclass field.
- super(args): calls superclass constructor (must be first statement).

2. final Keyword:
- final variable: constant value (can be assigned only once).
- final method: cannot be overridden by subclasses.
- final class: cannot be extended (prevents inheritance, e.g. java.lang.String).
- Note: A final reference cannot be reassigned, but the internal fields of the referenced object can still be mutated unless the class itself is immutable.

3. Access Modifiers Table:
- public: World (any class in any package).
- protected: Same package + Subclasses in different packages.
- package-private (no modifier keyword): Same package only.
- private: Inside the declaring class only.`,
          realWorldExample: 'A "final" variable is like a stamped passport number (cannot be changed). "private" is your personal diary (accessible only to you). "public" is a billboard on a highway (visible to everyone).',
          codeSnippet: {
            code: `class Parent {
    String role = "Parent";
    void greet() { System.out.println("Hello from Parent"); }
}

class Child extends Parent {
    String role = "Child";

    void test() {
        super.greet(); // Calls superclass method
        System.out.println("this.role: " + this.role);
        System.out.println("super.role: " + super.role);
    }
}

public class SuperFinalDemo {
    public static void main(String[] args) {
        final int MAX = 100; // Cannot be reassigned
        new Child().test();
    }
}`,
            input: "MAX = 100",
            output: `Hello from Parent
this.role: Child
super.role: Parent`
          },
          codeExample: `final class ImmutableClass {}
public / protected / package-private / private`,
          questions: [
            {
              id: 'sf-q1',
              question: 'What is the effect of applying the final keyword to a variable, method, and class?',
              answer: '1. final variable: Cannot be reassigned once initialized (acts as a constant).\\n2. final method: Cannot be overridden by any subclass.\\n3. final class: Cannot be extended or inherited by any subclass (e.g. String, Integer).',
              difficulty: 'Essential'
            },
            {
              id: 'sf-q2',
              question: 'Explain the visibility of Java\\'s four access modifiers.',
              answer: 'public: Accessible everywhere.\\nprotected: Accessible within the same package and by subclasses in other packages.\\npackage-private (default): Accessible only within classes of the same package.\\nprivate: Accessible only within the declaring class.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-polymorphism',
          title: 'Polymorphism, Method Overriding & Covariant Return',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS POLYMORPHISM?
Polymorphism means one parent-type reference or common interface can represent objects of different concrete classes. With runtime polymorphism, an overridden instance method is selected according to the actual object at runtime.

METHOD OVERRIDING:
A subclass overrides an inherited instance method by providing a compatible implementation. The return type must be the same or covariant; access cannot be more restrictive; checked exceptions cannot be broader than allowed. Use @Override to catch mistakes.

COVARIANT RETURN TYPE:
A covariant return type allows an overriding method to return a subtype of the return type declared by the parent method.

COMPILE-TIME VS RUNTIME POLYMORPHISM:
Compile-time polymorphism commonly refers to overloading, where the compiler chooses a method based on its parameter list. Runtime polymorphism refers to overriding, where the actual object's class determines which overridden instance method runs.`,
          interviewAnswer: 'Polymorphism allows one interface or reference to take multiple forms. Compile-time polymorphism is Method Overloading (resolved at compile-time by parameters). Runtime polymorphism is Method Overriding (resolved at runtime based on the actual heap object). Covariant return allows an overriding method to return a subtype of the parent method\'s return type.',
          explanation: `1. What is Polymorphism?
Allows one parent reference type to represent objects of different concrete classes.

2. Method Overriding Rules:
- Same method name and parameter signature.
- Return type must be the same or covariant subtype.
- Access modifier cannot be more restrictive (e.g. cannot override public with protected).
- Cannot throw broader checked exceptions.
- Instance methods only; private, static, and final methods cannot be overridden.

3. Covariant Return Type:
If Parent returns Object, Child override can return String.

4. Overloading vs Overriding:
- Overloading: same name, different parameters; compile-time; in same class.
- Overriding: same name and same parameters; runtime dynamic dispatch; between parent and child.`,
          realWorldExample: 'A person speaking: When in the office, they speak English. When at home, they speak their native mother tongue. When abroad, they speak Spanish. Same person (reference), different behaviors based on actual context (runtime polymorphism).',
          codeSnippet: {
            code: `class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Dog barks: Woof Woof!"); }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Parent reference pointing to child object (Runtime Polymorphism)
        Animal a = new Dog();
        a.sound(); // Dispatches to Dog's sound() at runtime!
    }
}`,
            input: "Animal a = new Dog()",
            output: `Dog barks: Woof Woof!`
          },
          codeExample: `class Animal { void sound() { System.out.println("Animal"); } }
class Dog extends Animal {
  @Override void sound() { System.out.println("Dog"); }
}`,
          questions: [
            {
              id: 'poly-q1',
              question: 'What is runtime polymorphism and how does Java implement it?',
              answer: 'Runtime polymorphism (Dynamic Method Dispatch) is the process where a call to an overridden method is resolved at runtime based on the actual object created on the heap, rather than the type of the reference variable.',
              difficulty: 'Essential'
            },
            {
              id: 'poly-q2',
              question: 'What is a covariant return type in Java method overriding?',
              answer: 'A covariant return type allows an overriding method in a subclass to declare a return type that is a subtype of the return type declared in the superclass method (e.g., parent returns Number, child returns Integer).',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-method-hiding',
          title: 'Method Hiding vs Method Overriding',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `CAN STATIC METHODS BE OVERRIDDEN?
Static methods are hidden, not overridden, because they belong to the class rather than an object. Selection depends on the class/reference type, not runtime overriding dispatch.

WHAT IS METHOD HIDING?
Method hiding occurs when a subclass declares a static method with the same signature as a superclass static method. Selection depends on the class/reference type.`,
          interviewAnswer: 'In Java, static methods cannot be overridden. If a subclass declares a static method with the same signature as a superclass static method, it is Method Hiding. Because static methods belong to the class, the compiler resolves them at compile-time using the declared reference type (Static Binding), whereas overriding uses Dynamic Method Dispatch at runtime based on the actual heap object.',
          explanation: `1. Can Static Methods Be Overridden?
No. Static methods belong to the class rather than an individual object instance. They are resolved at compile-time by the compiler using the declared reference variable type (Static / Early Binding).

2. Method Hiding:
Occurs when a subclass declares a static method with the same signature as a static method in its superclass.
When invoked via a parent reference pointing to a child object (Parent p = new Child()), the parent's static method runs, not the child's!

3. Method Hiding vs Overriding:
- Overriding: applies to non-static instance methods; runtime dynamic dispatch.
- Method Hiding: applies to static methods; compile-time static binding.`,
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
              question: 'Can static methods be overridden in Java? Why or why not?',
              answer: 'No, static methods cannot be overridden because they belong to the class, not an object instance. The compiler binds static method calls at compile-time using the declared reference type (Early Binding). If a subclass declares a static method with the same signature, it is Method Hiding, not overriding.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-upcasting-downcasting',
          title: 'Type Casting: Upcasting vs Downcasting',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS UPCASTING?
Upcasting assigns a subclass object to a superclass reference. It is implicit and safe, but only members visible through the declared reference type can be called directly. E.g.: Animal a = new Dog();

WHAT IS DOWNCASTING?
Downcasting converts a superclass reference back to a subclass reference. It needs an explicit cast and is safe only if the object really is an instance of that subclass; otherwise, ClassCastException may occur. E.g.: if (a instanceof Dog) { Dog d = (Dog) a; }`,
          interviewAnswer: 'Upcasting converts a subclass reference to a superclass type (Animal a = new Dog()). It is implicit, safe, and powers runtime polymorphism. Downcasting converts a superclass reference back to a subclass type (Dog d = (Dog) a). It is explicit and can throw a runtime ClassCastException if the heap object is not an instance of that subclass; hence, we always verify with the "instanceof" operator first.',
          explanation: `1. Upcasting:
- Subclass object assigned to superclass reference: Animal a = new Dog();
- Implicit and 100% safe because every Dog IS-A Animal.
- Limitation: Through 'a', you can only call methods declared in Animal.

2. Downcasting:
- Superclass reference converted down to subclass: Dog d = (Dog) a;
- Explicit cast operator required.
- Danger: If the actual object on the heap is a Cat and you cast to Dog, Java throws ClassCastException at runtime.

3. Safe Downcasting with instanceof:
Always guard downcasting with instanceof check:
if (a instanceof Dog) { Dog d = (Dog) a; d.bark(); }`,
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
          codeExample: `Animal a = new Dog();
if (a instanceof Dog) { Dog d = (Dog) a; }`,
          questions: [
            {
              id: 'ud-q1',
              question: 'What is the difference between Upcasting and Downcasting in Java?',
              answer: 'Upcasting assigns a subclass object to a superclass reference; it is implicit and always safe. Downcasting converts a superclass reference back to a subclass reference; it requires an explicit cast and can throw ClassCastException if the object is not an instance of that subclass.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-abstraction-interfaces',
          title: 'Abstraction, Abstract Classes & Interfaces',
          difficulty: 'Essential',
          studyTime: '12 minutes',
          definition: `WHAT IS ABSTRACTION?
Abstraction exposes essential operations while hiding unnecessary implementation details. In Java, it is commonly achieved with interfaces and abstract classes.

ABSTRACT CLASS & METHOD:
An abstract class is declared with abstract and cannot be instantiated directly. It can contain abstract methods (declared without a body), concrete methods (with an implementation body), fields, constructors, and static methods. A concrete subclass must implement inherited abstract methods unless it is also abstract.

WHAT IS AN INTERFACE?
An interface defines a contract that implementing classes agree to follow. A class uses implements to implement an interface. Interfaces support abstraction, loose coupling, and polymorphism.

INTERFACE RULES:
A class can implement multiple interfaces. An interface can extend one or more interfaces. Interface fields are implicitly public, static, and final. Abstract interface methods are implicitly public; modern interfaces may also have default, static, and private methods with bodies.

MARKER INTERFACE:
A marker interface has no declared methods and marks a class as having a particular property or signals behavior to a framework/runtime (e.g., Serializable, Cloneable).

CAN WE CREATE AN INTERFACE OBJECT?
An interface cannot be instantiated directly. An interface reference can point to an object of an implementing class, anonymous class, or suitable lambda expression.`,
          interviewAnswer: 'Abstraction hides internal implementation details and shows only essential functionality. An Abstract Class can have both abstract and concrete methods, constructors, and state. An Interface defines a pure contract supporting multiple inheritance of type; interface fields are public static final, and methods can be abstract, default, or static. A Marker Interface has no methods (e.g. Serializable). Interfaces cannot be instantiated directly.',
          explanation: `1. Abstraction:
Exposes essential operations while hiding unnecessary implementation details.

2. Abstract Class:
Declared with "abstract", cannot be instantiated with "new", can have instance state, constructors, abstract methods, and concrete methods.

3. Interface:
Defines a contract implemented using "implements". Supports multiple inheritance of type. Interface fields are implicitly public static final constants. Java 8 added default and static methods with bodies; Java 9 added private helper methods.

4. Abstract Class vs Interface:
- Abstract class is used when related classes share state or code implementation (single class inheritance).
- Interface defines a common contract that unrelated classes can implement (multiple interfaces can be implemented).

5. Marker Interface:
An interface with 0 methods used to tag a class for runtime JVM behavior (e.g. java.io.Serializable, java.lang.Cloneable).`,
          realWorldExample: 'A car\\'s steering wheel and brake pedal are an Abstraction. You use them to drive without needing to know the hydraulic fluid pressure or mechanical gearbox ratios under the hood.',
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
              question: 'What is the difference between an Abstract Class and an Interface in Java?',
              answer: '1. Abstract classes can have instance variables and constructors; interfaces cannot have constructors and only have public static final constants.\\n2. A class can extend only one abstract class, but can implement multiple interfaces.\\n3. Abstract classes represent an "is-a" relationship for related classes; interfaces represent a contract for unrelated classes.\\n4. Interfaces support default, static, and private methods in modern Java.',
              difficulty: 'Essential'
            },
            {
              id: 'abs-q2',
              question: 'What is a Marker Interface in Java?',
              answer: 'A marker interface is an interface that contains zero methods and zero constants (e.g. Serializable, Cloneable). It is used to "mark" or tag a class so the JVM or frameworks can treat instances of that class with special behavior.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-has-a-relationships',
          title: 'HAS-A Relationships: Association, Aggregation & Composition',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS A HAS-A RELATIONSHIP?
A has-a relationship exists when one class contains or uses an object of another class. For example, a Car has an Engine.

AGGREGATION:
Aggregation is a weak has-a relationship: the contained object can exist independently of the container.

COMPOSITION:
Composition is a stronger has-a relationship in which the containing object owns the contained part as part of its lifecycle or responsibility. Exact lifecycle behavior depends on the design.

AGGREGATION VS COMPOSITION:
The distinction is ownership and lifecycle dependency: composition expresses stronger ownership, while aggregation expresses a looser association. These are design concepts, not Java keywords.`,
          interviewAnswer: 'A has-a relationship represents object containment or usage. Aggregation is a weak has-a relationship where the child object has an independent lifecycle and survives if the container is destroyed (Department and Teacher). Composition is a strong has-a relationship where the child object lifecycle is strictly tied to the parent (Car and Engine). Design principles recommend "Favor Composition over Inheritance".',
          explanation: `1. Has-a Relationship:
Exists when a class holds a reference to another class as an instance field.

2. Aggregation (Weak HAS-A):
The contained object can exist independently of the container. E.g. A Department has Teachers; if the department closes, the teachers continue to exist.

3. Composition (Strong HAS-A):
The containing object owns the contained part as part of its lifecycle. E.g. A Car has an Engine, or a House has Rooms; if the car or house is destroyed, its parts cannot exist independently as a working whole.

4. Why Favor Composition over Inheritance?
Promotes loose coupling, avoids the fragile base class problem, and allows swapping behaviors dynamically at runtime.`,
          realWorldExample: 'A smartphone HAS-A SIM card (Aggregation: you can take the SIM card out and insert it into another phone). A smartphone HAS-A Motherboard (Composition: if the phone is crushed and destroyed, that motherboard is destroyed with it).',
          codeSnippet: {
            code: `// Aggregation: Teacher exists independently
class Teacher { String name; Teacher(String n) { this.name = n; } }

class Department {
    Teacher teacher;
    Department(Teacher t) { this.teacher = t; }
}

// Composition: Engine lifecycle is bound to Car
class Engine { void start() { System.out.println("Engine started"); } }

class Car {
    private final Engine engine = new Engine(); // Owned lifecycle
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
          codeExample: `class Car { private final Engine engine = new Engine(); }`,
          questions: [
            {
              id: 'has-q1',
              question: 'What is the difference between Aggregation and Composition?',
              answer: 'Aggregation is a weak HAS-A relationship where the contained object can exist independently of the container (e.g. Teacher and Department). Composition is a strong HAS-A relationship where the contained object cannot exist without the container and shares its lifecycle (e.g. Engine and Car).',
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
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS STRING?
String is a class in java.lang used to represent a sequence of characters. String objects are immutable: once created, their contents cannot be changed. Operations that appear to modify a String return a new String.

WHY IS STRING IMMUTABLE?
Immutability supports safe sharing, the String constant pool, reliable hash-based keys, and security-sensitive uses. It also makes String objects naturally safe to share between threads.

STRING CONSTANT POOL:
The string pool is a JVM-managed pool of canonical String instances. String literals and explicitly interned strings can share pooled instances. A String created with new normally creates a distinct String object on the heap even if an equal value is pooled.

COMMON STRING METHODS:
equals() compares content; == compares primitive values or reference identity; length() returns UTF-16 code-unit length; charAt(i) returns a char; substring() extracts a portion; indexOf() searches; trim()/strip() remove surrounding whitespace; toUpperCase()/toLowerCase() change case; replace() replaces text; split() divides text; isEmpty() checks length zero.`,
          interviewAnswer: 'String in Java is an immutable class in java.lang. Once created, its value cannot be changed; modifying operations return a new String object. Immutability ensures thread-safety, security (passwords/network URLs), caching in the String Constant Pool, and reliable HashMap keys. Always use .equals() to compare String contents, not == (which compares reference memory identity).',
          explanation: `1. String Immutability:
Once created, its contents cannot be modified. Any method like toUpperCase() or concat() returns a new String object.

2. Why Immutability?
- String Pool Caching: Saves substantial heap memory by reusing identical string literals.
- Security: Network connections, database URLs, and file paths cannot be maliciously altered once passed.
- Thread Safety: Safe to share across multiple concurrent threads without synchronization.
- HashMap Keys: HashCode is calculated once and cached reliably.

3. String Constant Pool (SCP):
- String s1 = "Java"; // Stored in String Constant Pool
- String s2 = new String("Java"); // Creates a new object on heap outside pool
- s1 == s2 is false (different references), but s1.equals(s2) is true (same content).`,
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
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `STRING VS STRINGBUILDER VS STRINGBUFFER:
String is immutable. StringBuilder is mutable and usually preferred for repeated changes in a single thread because it is not synchronized. StringBuffer is mutable and its methods are synchronized.

STRINGBUILDER LENGTH AND CAPACITY:
length() is the number of characters currently stored. capacity() is the storage available before expansion is needed. An empty StringBuilder has a default capacity of 16; constructing it with a String gives an initial capacity equal to the string length plus 16.

SPLIT() VS STRINGTOKENIZER:
String.split() divides text using a regular expression and returns a String array. StringTokenizer is a legacy utility class that separates text using delimiter characters; for modern code, split() or a clearer parser is preferred.`,
          interviewAnswer: 'String is immutable. StringBuilder is mutable and not synchronized, making it fast and preferred for single-threaded string concatenation. StringBuffer is mutable and synchronized (thread-safe), with slight synchronization overhead. length() is character count; capacity() is allocated buffer space (default 16). split() uses regex to return a String array.',
          explanation: `1. String vs StringBuilder vs StringBuffer:
- String: Immutable. Creating concatenations in loops creates excessive garbage objects.
- StringBuilder: Mutable, NOT synchronized, high performance. Recommended for single-threaded loops.
- StringBuffer: Mutable, synchronized (thread-safe), slightly slower due to thread locking.

2. length() vs capacity():
- length(): number of characters currently in the buffer.
- capacity(): total character space allocated before the internal array must grow.
- Default empty capacity = 16.

3. split() vs StringTokenizer:
- String.split(regex): modern, returns String[].
- StringTokenizer: legacy class from Java 1.0, splits on delimiter characters without regex.`,
          realWorldExample: 'String is a stone tablet (words carved in stone cannot change). StringBuilder is a whiteboard with a dry-erase marker (you can erase and append text instantly without throwing the whiteboard away).',
          codeSnippet: {
            code: `public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Java");
        sb.append("Script");
        System.out.println("Modified StringBuilder: " + sb);
        System.out.println("length(): " + sb.length());     // 10 characters
        System.out.println("capacity(): " + sb.capacity()); // 16 + 4 = 20

        // split() example
        String[] parts = "apple,banana,mango".split(",");
        System.out.println("Split parts count: " + parts.length);
    }
}`,
            input: "sb = 'Java', append 'Script'",
            output: `Modified StringBuilder: JavaScript
length(): 10
capacity(): 20
Split parts count: 3`
          },
          codeExample: `StringBuilder sb = new StringBuilder("Java");
sb.append("Script");
System.out.println(sb);`,
          questions: [
            {
              id: 'sb-q1',
              question: 'What is the difference between String, StringBuilder, and StringBuffer?',
              answer: 'String is immutable. StringBuilder is mutable and not thread-safe (fastest, ideal for single-threaded loops). StringBuffer is mutable and synchronized/thread-safe (slower due to synchronization overhead).',
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
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS AN EXCEPTION?
An exception is an object representing an abnormal condition during execution that interrupts the normal flow unless it is handled.

EXCEPTION HIERARCHY:
Throwable is the root class for objects that can be thrown. Its main branches are Error and Exception. RuntimeException is a subclass of Exception.

ERROR VS EXCEPTION:
An Error generally represents a serious problem, such as OutOfMemoryError or StackOverflowError. An Exception represents a condition an application may handle, such as IOException or ArithmeticException. A syntax error is normally a compile-time error, not a java.lang.Error object.

CHECKED VS UNCHECKED EXCEPTIONS:
Checked exceptions must be caught or declared; IOException is an example. Unchecked exceptions are RuntimeException subclasses and need not be caught or declared; NullPointerException and ArithmeticException are examples. Error subclasses are also unchecked.`,
          interviewAnswer: 'In Java, Throwable is the root class, dividing into Error (fatal system conditions like OutOfMemoryError, not expected to be caught) and Exception (application conditions). Exceptions are divided into Checked Exceptions (must be caught or declared with throws at compile-time, e.g. IOException, SQLException) and Unchecked Exceptions (subclasses of RuntimeException that happen at runtime due to programming bugs, e.g. NullPointerException).',
          explanation: `1. Throwable Root Hierarchy:
- java.lang.Throwable
  ├── java.lang.Error (Fatal JVM conditions: OutOfMemoryError, StackOverflowError)
  └── java.lang.Exception (Application recoverable conditions)
        ├── Checked Exceptions (IOException, SQLException, ClassNotFoundException)
        └── java.lang.RuntimeException (Unchecked: NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException)

2. Error vs Exception:
- Error: Indicates severe hardware or JVM resource exhaustion. Applications should not attempt to catch Error.
- Exception: Indicates conditions that a reasonable application might want to catch and recover from.
- Syntax error: A compile-time error detected by javac, NOT a runtime Error object!

3. Checked vs Unchecked:
- Checked: Checked at compile-time. The compiler enforces either handling with try-catch or declaring with throws.
- Unchecked: Occurs at runtime (RuntimeException subclasses). Compiler does not force declaration.`,
          realWorldExample: 'A flat tire on your car is an Exception (you can pull over, replace it with a spare tire, and continue your journey). The bridge collapsing beneath your car is an Error (catastrophic failure that you cannot recover from).',
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
          codeExample: `try { int result = 10 / 0; }
catch (ArithmeticException e) { System.out.println(e); }`,
          questions: [
            {
              id: 'ex-q1',
              question: 'What is the difference between Checked and Unchecked Exceptions in Java?',
              answer: 'Checked exceptions are checked at compile time; the compiler requires them to be caught in a try-catch block or declared in the method signature with "throws" (e.g. IOException, SQLException). Unchecked exceptions are subclasses of RuntimeException; they occur at runtime and do not require explicit declaration or handling (e.g. NullPointerException, ArithmeticException).',
              difficulty: 'Essential'
            },
            {
              id: 'ex-q2',
              question: 'What is the difference between Error and Exception?',
              answer: 'Error represents serious, catastrophic JVM-level problems from which programs cannot typically recover (e.g. OutOfMemoryError, StackOverflowError). Exception represents conditions that an application can anticipate and handle (e.g. IOException, ArithmeticException).',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-try-catch-finally',
          title: 'try, catch, finally & Multiple Catch Blocks',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `TRY, CATCH, FINALLY:
A try block contains code that may throw an exception. A catch block handles a matching exception. A finally block normally runs after try/catch and is commonly used for cleanup, though abrupt JVM termination can prevent it from running.

MULTIPLE CATCH BLOCKS:
A try block can have multiple catch blocks for different exception types. More specific types must appear before more general types.

GETMESSAGE() AND PRINTSTACKTRACE():
getMessage() returns an exception\'s detail message, which may be null. printStackTrace() prints the exception and its stack trace.`,
          interviewAnswer: 'The try block encloses exception-prone code. Catch blocks intercept specific exception types; more specific child exceptions must precede general parent exceptions. The finally block executes unconditionally after try/catch (useful for closing file/database resources), except when the JVM abruptly exits via System.exit(0).',
          explanation: `1. try, catch, finally Blocks:
- try: Encloses code that may throw an exception.
- catch: Handles the matching exception object.
- finally: Always executes regardless of whether an exception was thrown or caught. Ideal for releasing external resources.

2. Multiple Catch Ordering Rule:
Child/specific exception classes must be placed BEFORE parent/general exception classes. Placing catch (Exception e) before catch (ArithmeticException e) causes a compile-time unreachable code error.

3. When does finally NOT execute?
- When System.exit(0) is explicitly invoked.
- Fatal JVM crash or immediate power failure.`,
          realWorldExample: 'A try-catch-finally is like booking a flight ticket: Try to charge the credit card; Catch insufficient balance and notify user; Finally, close the banking session whether payment succeeded or failed.',
          codeSnippet: {
            code: `public class TryCatchFinallyDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
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
finally { System.out.println("Cleanup"); }`,
          questions: [
            {
              id: 'tcf-q1',
              question: 'Does a finally block always execute in Java?',
              answer: 'Yes, the finally block executes almost unconditionally whether an exception occurs or not, even if there is a return statement inside the try or catch block. The only exceptions are when System.exit(0) is called or the JVM abruptly crashes.',
              difficulty: 'Essential'
            },
            {
              id: 'tcf-q2',
              question: 'Why must subclass catch blocks appear before superclass catch blocks in multiple catch?',
              answer: 'Because Java evaluates catch blocks in top-down sequential order. If a superclass catch block (like catch (Exception e)) was placed first, it would catch all exceptions, rendering subsequent subclass catch blocks unreachable and causing a compile error.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-throw-throws-custom',
          title: 'throw vs throws, Exception Propagation, Ducking & Custom Exceptions',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `THROW VS THROWS:
throw is a statement that explicitly throws one exception object. throws appears in a method or constructor declaration to declare exception types the caller may need to handle.

EXCEPTION PROPAGATION:
Exception propagation means an exception moves up the call stack when the current method does not handle it. It continues until a matching handler is found or the thread\'s uncaught-exception handler handles it.

EXCEPTION DUCKING:
Exception ducking is an informal term for declaring an exception with throws rather than handling it in the current method, leaving the caller responsible for handling or declaring it further.

CUSTOM EXCEPTION:
A custom exception is a programmer-defined exception for an application-specific error. Extend Exception for a checked exception or RuntimeException for an unchecked exception.`,
          interviewAnswer: '"throw" is used inside a method body to explicitly throw an exception instance (throw new MyException()). "throws" is used in the method signature to declare exceptions that the method might throw to the caller. Exception propagation is the mechanism where unhandled exceptions travel backwards through the call stack. A custom exception extends Exception (checked) or RuntimeException (unchecked).',
          explanation: `1. throw vs throws:
- throw: An active statement used inside a method body to throw a single exception instance (e.g. throw new IllegalArgumentException("Invalid age");).
- throws: A clause in a method signature declaring exception types that callers must handle or declare (e.g. void readFile() throws IOException).

2. Exception Propagation:
If a method throws an exception and does not catch it, the exception drops down the call stack to the previous calling method. This continues until a matching try-catch handler is reached, or the default uncaught-exception handler prints the stack trace and terminates the thread.

3. Exception Ducking:
Passing the responsibility of handling a checked exception up to the caller using "throws" instead of catching it locally.

4. Creating Custom Exceptions:
- For checked: extend java.lang.Exception
- For unchecked: extend java.lang.RuntimeException`,
          realWorldExample: 'A bank teller detecting a forged signature uses "throw" to raise an alert. The manager uses "throws" to notify the police department (caller) that this transaction might encounter a FraudException.',
          codeSnippet: {
            code: `class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    // 'throws' declares the exception to callers
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            // 'throw' explicitly creates and throws the exception
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
  InvalidAgeException(String message) { super(message); }
}`,
          questions: [
            {
              id: 'th-q1',
              question: 'What is the difference between throw and throws in Java?',
              answer: '1. "throw" is a keyword used inside a method body to explicitly throw an exception instance (e.g. throw new Exception()).\\n2. "throws" is a keyword used in the method signature to declare that the method might throw one or more exception classes to its caller (e.g. void test() throws IOException).',
              difficulty: 'Essential'
            },
            {
              id: 'th-q2',
              question: 'How do you create a custom checked vs unchecked exception in Java?',
              answer: 'To create a custom checked exception, extend java.lang.Exception. To create a custom unchecked exception, extend java.lang.RuntimeException. Both should provide a constructor passing an error message to super(message).',
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
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS A FUNCTIONAL INTERFACE?
A functional interface has exactly one abstract method, ignoring methods matching public methods of Object. It may also contain default, static, and private methods. @FunctionalInterface asks the compiler to verify the single abstract method rule.

WHAT IS A LAMBDA EXPRESSION?
A lambda expression is a concise way to provide an implementation of a functional interface. The compiler infers the target functional-interface type from context.

WHY USE LAMBDAS?
Lambdas reduce boilerplate when passing behavior as data, especially with functional interfaces, collections, streams, and event-handling APIs.`,
          interviewAnswer: 'A Functional Interface contains exactly one Single Abstract Method (SAM), though it can have any number of default or static methods. @FunctionalInterface enforces this rule. A Lambda Expression provides a concise, inline implementation of that SAM without anonymous class boilerplate, enabling functional programming and treating behavior as data.',
          explanation: `1. Functional Interface:
An interface with exactly ONE abstract method (SAM - Single Abstract Method).
Annotated with @FunctionalInterface (optional, but informs compiler to fail if a second abstract method is added).
Can contain multiple default and static methods.
Examples: Runnable (run()), Callable (call()), Comparator (compare()), Predicate (test()).

2. Lambda Expressions:
Syntax: (parameters) -> { body }
Provides an inline implementation for the single abstract method of a functional interface.
Eliminates verbose anonymous inner class boilerplate code.

3. Why Use Lambdas:
Passing executable behavior as a method argument, writing clean declarative Stream operations, and reducing boilerplate.`,
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
              question: 'What is a Functional Interface in Java?',
              answer: 'A functional interface is an interface that contains exactly one abstract method (Single Abstract Method). It can also contain default, static, and private methods. The @FunctionalInterface annotation can be used to ensure the compiler enforces this rule.',
              difficulty: 'Essential'
            },
            {
              id: 'lam-q2',
              question: 'What is a Lambda Expression in Java and what problem does it solve?',
              answer: 'A lambda expression is an anonymous function that implements the single abstract method of a functional interface concisely. It eliminates verbose anonymous inner class syntax and enables passing behavior as data.',
              difficulty: 'Essential'
            }
          ]
        },
        {
          id: 'cj-nested-inner-classes',
          title: 'Nested & Inner Classes (Member, Static Nested, Local & Anonymous)',
          difficulty: 'Common',
          studyTime: '8 minutes',
          definition: `REGULAR CLASS:
A regular class is a standard class declared at top level or as a member. It defines fields, constructors, and methods and can be instantiated if it is not abstract.

INNER CLASS (NON-STATIC NESTED CLASS):
A non-static nested class declared inside another class is an inner class. Its instance is associated with an instance of the enclosing class and it can access the enclosing object\'s private members. (Outer outer = new Outer(); Outer.Inner inner = outer.new Inner();)

STATIC NESTED CLASS:
A static nested class does not require an instance of the outer class to be created.

LOCAL CLASS:
A local class is declared inside a method or block and is visible only within that scope.

ANONYMOUS CLASS:
An anonymous class has no declared name and is used to instantiate a class or implement an interface while providing behavior at the point of use.`,
          interviewAnswer: 'Java supports four types of nested classes: 1) Member Inner Class (non-static, requires an outer instance), 2) Static Nested Class (static, does not require an outer instance), 3) Local Inner Class (defined inside a method block), and 4) Anonymous Inner Class (declared and instantiated simultaneously without a name for one-time use).',
          explanation: `1. Member Inner Class:
Declared inside a class without static. Belongs to an instance of the outer class and has direct access to all outer fields (even private ones).
Instantiated as: Outer.Inner in = new Outer().new Inner();

2. Static Nested Class:
Declared with static. Does not have a reference to the outer class instance and can only directly access outer static members.
Instantiated as: Outer.StaticNested sn = new Outer.StaticNested();

3. Local Inner Class:
Declared inside a method body. Scope is restricted solely to that method.

4. Anonymous Inner Class:
A class with no name declared and instantiated on the fly to override a method or implement an interface (e.g. new Runnable() { public void run() {} }).`,
          realWorldExample: 'A Car has an Engine (Member Inner class: an engine cannot function without a car chassis). A Car has a standard CarManual (Static Nested class: you can read the manual on a bookshelf without owning the car).',
          codeSnippet: {
            code: `class Outer {
    private String secret = "Outer Secret";

    // Non-static Inner Class
    class Inner {
        void reveal() {
            System.out.println("Inner accessed: " + secret);
        }
    }

    // Static Nested Class
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
              question: 'What is the difference between a Static Nested Class and an Inner Class in Java?',
              answer: 'An Inner Class is non-static and tied to an instance of the enclosing outer class, with full access to the outer instance\\'s fields. A Static Nested Class is static, does not require an outer object instance, and cannot directly access non-static instance fields of the outer class.',
              difficulty: 'Common'
            }
          ]
        },
        {
          id: 'cj-interview-corrections',
          title: 'Essential Core Java Interview Traps & Corrections',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `CORRECTIONS YOU MUST REMEMBER IN INTERVIEWS:
1. Java is always pass-by-value. For object arguments, a copy of the reference is passed; Java is never pass-by-reference.
2. Local variables have no automatic default value. Instance and static fields do receive default values.
3. A class can extend only one class, but it can implement multiple interfaces. An interface can extend multiple interfaces.
4. Interfaces can contain default and static methods, and private helper methods. It is incorrect to say every interface method must be abstract.
5. Static methods are hidden, not overridden. Runtime polymorphism applies to overridden instance methods.
6. The compiler supplies a default constructor only if the class declares no constructor.
7. A constructor has no return type. Writing void makes it a method, not a constructor.
8. String is immutable; StringBuilder is mutable and unsynchronized; StringBuffer is mutable and synchronized.
9. An array has a fixed length and indexes begin at 0.
10. A syntax/compile-time error is not the same as a java.lang.Error object.
11. System.gc() does not guarantee immediate garbage collection.
12. An object's heap memory is not reclaimed just because a method finishes. The object must become unreachable, and garbage collection occurs later.
13. Use equals() to compare String content. Use == for primitive equality or reference identity.`,
          interviewAnswer: 'Mastering these 13 critical technical corrections prevents common interview traps: Java is strictly pass-by-value; static methods are hidden rather than overridden; constructors have no return type; local variables require initialization; and interfaces support default and static methods in modern Java.',
          explanation: `Interviewers frequently test candidates on subtle misconceptions. Remember these rules:
1. Pass-by-value: Java never passes references by reference; it passes copies of reference addresses.
2. Default values: Local variables have none; instance/static fields get 0, null, or false.
3. Inheritance rules: Single class inheritance, multiple interface inheritance.
4. Constructor return type: Never put void on a constructor.
5. String comparison: Always use .equals() for text contents.
6. Garbage collection: System.gc() is only a recommendation.`,
          realWorldExample: 'Like traffic laws: Knowing the general road rules is good, but knowing the exact speed limits and warning signs prevents penalties and accidents during your driving test.',
          codeSnippet: {
            code: `public class InterviewTrapsDemo {
    public static void main(String[] args) {
        String a = new String("Java");
        String b = new String("Java");

        System.out.println("Reference check (==): " + (a == b)); // false
        System.out.println("Content check (.equals): " + a.equals(b)); // true
        System.out.println("Remember: Always use .equals() for content comparison!");
    }
}`,
            input: "a = new String('Java'), b = new String('Java')",
            output: `Reference check (==): false
Content check (.equals): true
Remember: Always use .equals() for content comparison!`
          },
          codeExample: `// 13 Critical Interview Corrections
System.out.println("Always use .equals() for String content!");`,
          questions: [
            {
              id: 'trap-q1',
              question: 'Summarize the top 3 most common Core Java interview traps.',
              answer: '1. Pass-by-value vs Pass-by-reference: Java is strictly pass-by-value; for objects, the reference pointer value is copied.\\n2. Static Method Overriding: Static methods cannot be overridden; redefining them in a subclass is Method Hiding.\\n3. Constructors with void: Adding "void" to a constructor definition turns it into a normal method that cannot initialize objects.',
              difficulty: 'Essential'
            }
          ]
        }
      ]
    }
  ]
};
'''
    return code_text

with open('Interview-Preparation/src/data/coreJava.ts', 'w', encoding='utf-8') as f:
    f.write(get_full_core_java_ts())

print("Successfully written complete coreJava.ts with all docx definitions!")
