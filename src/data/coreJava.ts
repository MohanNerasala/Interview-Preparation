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

PRIMITIVE DATA TYPES:
Java has eight primitive data types: byte, short, int, long, float, double, char, and boolean. The first six store numeric values, char stores a UTF-16 code unit, and boolean stores true or false.

REFERENCE TYPES:
Reference types include classes, arrays, interfaces, enums, and types such as String. A reference variable holds a reference to an object, or null; it does not directly store the complete object.

ASCII VS UNICODE:
ASCII is a character-encoding standard with 128 basic characters, including English letters, digits, and control characters (e.g. ASCII 'A' has value 65). Unicode is a universal character standard intended to represent characters from writing systems around the world.`,
          interviewAnswer: 'Java has eight primitive data types: byte, short, int, long, float, double, char, and boolean. The first six store numeric values, char stores a UTF-16 code unit, and boolean stores true or false. Reference types include classes, arrays, interfaces, enums, and types such as String; a reference variable holds a reference to an object, or null, and does not directly store the complete object.',
          explanation: `1. Primitive Data Types:
- byte: 1 byte (8 bits), range -128 to 127
- short: 2 bytes (16 bits), range -32,768 to 32,767
- int: 4 bytes (32 bits), range -2^31 to 2^31-1
- long: 8 bytes (64 bits), range -2^63 to 2^63-1
- float: 4 bytes (32-bit IEEE 754 floating point)
- double: 8 bytes (64-bit IEEE 754 floating point)
- char: 2 bytes (16 bits, UTF-16 code unit, range '\u0000' to '\uffff')
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
          description: 'Comprehensive interview definitions, examples, and rules for Type Casting (Widening vs Narrowing).',
          difficulty: 'Essential',
          studyTime: '6 minutes',
          definition: `WHAT IS TYPE CASTING?
Type casting is converting a value from one data type to another.

WIDENING (IMPLICIT) CASTING:
Widening converts a value to a compatible type with a wider range, such as int to long or int to double. It is automatic and safe, though some numeric conversions (such as long to float) can still lose precision.

NARROWING (EXPLICIT) CASTING:
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
              question: 'What is type casting and what are its two main types in Java?',
              answer: 'Type casting is converting a value from one data type to another. The two types are:\n1. Widening (Implicit): Converts a smaller type to a larger compatible type automatically without data loss (e.g. int to double).\n2. Narrowing (Explicit): Converts a larger type to a smaller type requiring a cast operator (int) and can result in truncation or loss of precision (e.g. double to int).',
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

TYPES OF OPERATORS:
Arithmetic (+, -, *, /, %), Relational (<, >, <=, >=, ==, !=), Logical (&&, ||, !), Assignment (=, +=, -=, *=, /=), Unary (++, --, +, -, !, ~), Conditional/ternary (condition ? value1 : value2), Bitwise (&, |, ^, ~), and Shift (<<, >>, >>>).

PRE/POST INCREMENT AND DECREMENT:
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
              question: 'Explain pre-increment (++x) vs post-increment (x++) in Java.',
              answer: 'Pre-increment (++x) increases the value of x first and then returns the new value for expression evaluation. Post-increment (x++) returns the current value of x for expression evaluation first, and increments x only after the expression is evaluated.',
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

LOCAL VARIABLE:
A local variable is declared inside a method, constructor, or block. Its scope is limited to that method or block. Java does not automatically assign a default value to local variables; they must be assigned before use.

INSTANCE VARIABLE:
An instance variable is declared in a class but outside methods, constructors, and blocks, without static. Each object has its own copy on the heap. Instance fields receive default values when an object is created.

STATIC VARIABLE:
A static variable is declared with static. It belongs to the class and is shared by all instances of that class. It receives a default value if no explicit value is assigned.

LOCAL VS INSTANCE VARIABLE:
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
          definition: `HIGH-LEVEL JVM MEMORY AREAS:
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

FOUR PILLARS OF OOP:
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
              question: 'What is the difference between a Class and an Object?',
              answer: 'A class is a compile-time blueprint or template defining fields and methods. An object is a runtime instance of a class allocated on the heap that possesses state (field values), behavior (methods), and identity.',
              difficulty: 'Essential'
            },
            {
              id: 'oop-q2',
              question: 'What are the four core pillars of Object-Oriented Programming (OOP)?',
              answer: 'The four fundamental pillars of OOP in Java are: 1) Encapsulation (data hiding and bundling data with methods), 2) Inheritance (code reuse via parent-child class hierarchy), 3) Polymorphism (ability to take many forms via method overloading and overriding), and 4) Abstraction (hiding implementation details and showing only essential features via abstract classes and interfaces).',
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

GETTER AND SETTER:
A getter returns or reads a field's value. A setter assigns or updates a field's value and can validate the value before changing the field.

ADVANTAGES OF ENCAPSULATION:
Encapsulation supports data hiding, controlled access, validation, lower coupling, and easier maintenance.

VARIABLE SHADOWING:
Shadowing occurs when a variable in a more local scope (such as a method parameter or local variable) has the same name as a variable in an outer scope (instance variable). Without "this", the local variable shadows (hides) the instance variable.

WHAT IS "this" KEYWORD?
"this" is a reference keyword in Java that refers to the current object (current class instance). It is primarily used to solve the variable shadowing problem by distinguishing instance variables from local parameters when both have the same name (e.g., this.id = id;). It can also pass or return the current instance.

WHAT IS "this()" CONSTRUCTOR CALL?
"this()" is a constructor call statement used for constructor chaining to invoke another constructor within the same class. A this(...) constructor call must always be the very first statement inside that constructor.`,
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
          realWorldExample: 'A bank ATM or bank account: Your account balance is private. You cannot directly write a new number in the bank vault; you must use deposit() or withdraw() setters that validate sufficient funds.',
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
              question: 'What is encapsulation and what are its advantages?',
              answer: 'Encapsulation is bundling data and methods into a single class while restricting direct access through private fields and public methods. Advantages: 1) Data hiding, 2) Input validation, 3) Loose coupling, 4) Ease of maintenance and refactoring.',
              difficulty: 'Essential'
            },
            {
              id: 'enc-q2',
              question: 'What is the difference between "this" keyword and "this()" constructor call?',
              answer: '1) "this" keyword: A reference keyword pointing to the current object instance. It is used to solve the variable shadowing problem (e.g., this.id = id;) and distinguish instance fields from local parameters. 2) "this()" constructor call: Used for constructor chaining to invoke another constructor within the same class. It can only be used inside a constructor and must be the very first statement.',
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
              question: 'Why can a static method not access non-static instance variables directly?',
              answer: 'Static methods belong to the class and are loaded into memory before any object instance exists. Because static methods do not have a "this" reference pointing to an object on the heap, they have no way of knowing which object\'s instance variable to access.',
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
          description: 'Comprehensive interview definitions, examples, and rules for Constructors & Constructor Chaining (Default, Copy, this & super).',
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
          realWorldExample: 'When ordering a customized pizza: the default constructor gives you plain cheese; the parameterized constructor lets you pick custom toppings; the copy constructor makes a duplicate of your friend\'s exact custom order.',
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
          description: 'Comprehensive interview definitions, examples, and rules for Inheritance & is-a Relationship (Single, Multilevel, Hierarchical).',
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
          description: 'Comprehensive interview definitions, examples, and rules for super, final & Access Modifiers (public, protected, package-private, private).',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS SUPER?
The super keyword is used to refer to the immediate parent class. It is used to access parent class variables and methods and to call the parent class constructor.

WHAT IS FINAL?
The final keyword is used to restrict changes in Java. A final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited.

ACCESS MODIFIERS:
- public: broadest member access (accessible from anywhere).
- protected: same package and subclass access under Java's rules.
- Package-private (no modifier): same package only.
- private: restricted to the declaring class and permitted enclosing scope. Top-level classes can be public or package-private, not protected or private.`,
          interviewAnswer: 'In Java, the "super" keyword refers to the immediate parent class to access parent variables and methods and call parent constructors. The "final" keyword restricts changes: a final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited. Access modifiers (public, protected, package-private, private) define the visibility and accessibility of classes and members.',
          explanation: `1. What is super?
The super keyword is used to refer to the immediate parent class. It is used to access parent class variables and methods and to call the parent class constructor.

2. What is final?
The final keyword is used to restrict changes in Java. A final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be inherited.

3. Access Modifiers:
- public: Broadest member access (accessible from anywhere).
- protected: Accessible within the same package and by subclasses in other packages.
- package-private (default): Same package only.
- private: Restricted to the declaring class only.`,
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
              answer: '1. final variable: Cannot be reassigned once initialized (acts as a constant).\n2. final method: Cannot be overridden by any subclass.\n3. final class: Cannot be extended or inherited by any subclass (e.g. String, Integer).',
              difficulty: 'Essential'
            },
            {
              id: 'sf-q2',
              question: 'Explain the visibility of Java\'s four access modifiers.',
              answer: 'public: Accessible everywhere.\nprotected: Accessible within the same package and by subclasses in other packages.\npackage-private (default): Accessible only within classes of the same package.\nprivate: Accessible only within the declaring class.',
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
Polymorphism means one thing can take many forms. In Java, it allows the same method name or parent class reference to behave differently depending on the situation or actual object.

WHAT IS METHOD OVERRIDING?
Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class, using the same method signature and a compatible return type.

WHAT IS A COVARIANT RETURN TYPE?
A covariant return type allows an overridden method in a child class to return a subtype of the return type declared in the parent class.

WHAT IS COMPILE-TIME POLYMORPHISM?
Compile-time polymorphism occurs when the compiler selects the appropriate method based on its parameter list. It is achieved through method overloading.

WHAT IS RUNTIME POLYMORPHISM?
Runtime polymorphism occurs when the JVM selects the overridden method to execute based on the actual object at runtime. It is achieved through method overriding.

WHAT IS METHOD OVERLOADING?
Method overloading occurs when a class contains multiple methods with the same name but different parameter lists. The parameters can differ in number, type, or order. It is an example of compile-time polymorphism.`,
          interviewAnswer: 'Polymorphism means one thing can take many forms. Compile-time polymorphism is achieved through Method Overloading (compiler binds method based on parameter list: number, type, or order). Runtime polymorphism is achieved through Method Overriding (JVM selects method to execute at runtime based on the actual heap object). A covariant return type allows an overridden method in a child class to return a subtype of the parent method\'s return type.',
          explanation: `1. What is Polymorphism?
Polymorphism means one thing can take many forms. In Java, it allows the same method name or parent class reference to behave differently depending on the situation or actual object.

2. What is Method Overriding?
Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class, using the same method signature and a compatible return type.

3. What is a Covariant Return Type?
A covariant return type allows an overridden method in a child class to return a subtype of the return type declared in the parent class.

4. What is Compile-Time Polymorphism?
Compile-time polymorphism occurs when the compiler selects the appropriate method based on its parameter list. It is achieved through method overloading.

5. What is Runtime Polymorphism?
Runtime polymorphism occurs when the JVM selects the overridden method to execute based on the actual object at runtime. It is achieved through method overriding.

6. What is Method Overloading?
Method overloading occurs when a class contains multiple methods with the same name but different parameter lists. The parameters can differ in number, type, or order. It is an example of compile-time polymorphism.`,
          realWorldExample: 'A smartphone volume button: In a media player, it adjusts video volume. During a phone call, it adjusts in-call speech volume. On the home screen, it adjusts ringtone volume. One button (same interface), multiple behaviors based on current runtime context.',
          codeSnippet: {
            code: `class Calculator {
    // 1. Compile-Time Polymorphism (Method Overloading)
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

class Animal {
    // 2. Runtime Polymorphism (Method Overriding)
    Animal reproduce() { return new Animal(); }
    void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    // 3. Covariant Return Type (Dog is subtype of Animal)
    @Override
    Dog reproduce() { return new Dog(); }

    @Override
    void sound() { System.out.println("Dog barks: Woof Woof!"); }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Compile-time overloading
        Calculator calc = new Calculator();
        System.out.println("Overloaded add(2, 3): " + calc.add(2, 3));
        System.out.println("Overloaded add(2, 3, 4): " + calc.add(2, 3, 4));

        // Runtime overriding (Parent reference pointing to Child object)
        Animal a = new Dog();
        a.sound(); // Dynamic method dispatch executes Dog's sound()
    }
}`,
            input: "calc.add(2, 3), calc.add(2, 3, 4), a = new Dog()",
            output: `Overloaded add(2, 3): 5
Overloaded add(2, 3, 4): 9
Dog barks: Woof Woof!`
          },
          codeExample: `class Animal { void sound() { System.out.println("Animal"); } }
class Dog extends Animal {
  @Override void sound() { System.out.println("Dog"); }
}`,
          questions: [
            {
              id: 'poly-q1',
              question: 'What is the difference between Compile-Time and Runtime Polymorphism?',
              answer: '1) Compile-time polymorphism is achieved through Method Overloading; the compiler binds the method call based on parameter count, type, or order at compile time.\n2) Runtime polymorphism is achieved through Method Overriding; the JVM dynamically determines which method to execute at runtime based on the actual object instance on the heap.',
              difficulty: 'Essential'
            },
            {
              id: 'poly-q2',
              question: 'What is a covariant return type in Java method overriding?',
              answer: 'A covariant return type allows an overridden method in a child class to return a subtype of the return type declared in the parent class method (for example, parent returns Animal, child returns Dog).',
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
          description: 'Comprehensive interview definitions, examples, and rules for Type Casting: Upcasting vs Downcasting.',
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
          description: 'Comprehensive interview definitions, examples, and rules for Abstraction, Abstract Classes & Interfaces.',
          difficulty: 'Essential',
          studyTime: '12 minutes',
          definition: `WHAT IS ABSTRACTION?
Abstraction is the process of hiding implementation details and showing only the essential functionality to the user. In Java, abstraction is achieved using abstract classes and interfaces.

WHAT IS AN ABSTRACT CLASS?
An abstract class is a class declared with the abstract keyword that cannot be instantiated directly. It can contain abstract methods, concrete methods, constructors, and variables.

WHAT IS AN ABSTRACT METHOD?
An abstract method is a method declared without a method body. A concrete subclass must implement the inherited abstract method unless the subclass is also abstract.

WHAT IS A CONCRETE METHOD?
A concrete method is a method that has a method body containing the implementation.

WHAT IS AN INTERFACE?
An interface is a blueprint that defines a contract that implementing classes must follow. It supports abstraction and allows a class to implement multiple interfaces.

WHAT ARE THE RULES OF AN INTERFACE?
A class can implement multiple interfaces, and an interface can extend multiple interfaces. Interface variables are implicitly public, static, and final. Interfaces can contain abstract, default, static, and private methods.

WHAT IS A MARKER INTERFACE?
A marker interface is an interface that contains no declared methods or fields and is used to mark a class with a particular property or indicate special behavior. Examples include Serializable and Cloneable.

CAN WE CREATE AN INTERFACE OBJECT?
No, we cannot instantiate an interface directly. However, an interface reference can refer to an object of a class that implements the interface.

WHAT IS THE DIFFERENCE BETWEEN AN ABSTRACT CLASS AND AN INTERFACE?
An abstract class can contain abstract methods, concrete methods, constructors, and instance variables. An interface defines a contract and supports multiple inheritance of type because a class can implement multiple interfaces.`,
          interviewAnswer: 'Abstraction is the process of hiding implementation details and showing only essential functionality to the user via abstract classes and interfaces. An abstract class cannot be instantiated directly and can contain abstract methods, concrete methods, constructors, and variables. An interface defines a contract supporting multiple inheritance of type; interface variables are public static final, and methods can be abstract, default, static, or private. Interfaces cannot be instantiated directly, but their references can point to implementing objects.',
          explanation: `1. What is Abstraction?
Abstraction is the process of hiding implementation details and showing only the essential functionality to the user. In Java, abstraction is achieved using abstract classes and interfaces.

2. What is an Abstract Class?
An abstract class is a class declared with the abstract keyword that cannot be instantiated directly. It can contain abstract methods, concrete methods, constructors, and variables.

3. What is an Abstract Method?
An abstract method is a method declared without a method body. A concrete subclass must implement the inherited abstract method unless the subclass is also abstract.

4. What is a Concrete Method?
A concrete method is a method that has a method body containing the implementation.

5. What is an Interface?
An interface is a blueprint that defines a contract that implementing classes must follow. It supports abstraction and allows a class to implement multiple interfaces.

6. What are the Rules of an Interface?
A class can implement multiple interfaces, and an interface can extend multiple interfaces. Interface variables are implicitly public, static, and final. Interfaces can contain abstract, default, static, and private methods.

7. What is a Marker Interface?
A marker interface is an interface that contains no declared methods or fields and is used to mark a class with a particular property or indicate special behavior. Examples include Serializable and Cloneable.

8. Can We Create an Interface Object?
No, we cannot instantiate an interface directly. However, an interface reference can refer to an object of a class that implements the interface.

9. What is the Difference Between an Abstract Class and an Interface?
An abstract class can contain abstract methods, concrete methods, constructors, and instance variables. An interface defines a contract and supports multiple inheritance of type because a class can implement multiple interfaces.`,
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
              question: 'What is the difference between an Abstract Class and an Interface in Java?',
              answer: '1. Abstract classes can have instance variables and constructors; interfaces cannot have constructors and only have public static final constants.\n2. A class can extend only one abstract class, but can implement multiple interfaces.\n3. Abstract classes represent an "is-a" relationship for related classes; interfaces represent a contract for unrelated classes.\n4. Interfaces support default, static, and private methods in modern Java.',
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
          description: 'Comprehensive interview definitions, examples, and rules for HAS-A Relationships: Association, Aggregation & Composition.',
          difficulty: 'Essential',
          studyTime: '8 minutes',
          definition: `WHAT IS A HAS-A RELATIONSHIP?
A has-a relationship means one class contains or uses an object of another class. Example: A Car has an Engine.

WHAT IS AGGREGATION?
Aggregation is a weak has-a relationship in which the child object can exist independently of the parent object. Example: A Department has Teachers.

WHAT IS COMPOSITION?
Composition is a strong has-a relationship in which the parent object owns the child object as part of its lifecycle. Example: A House has Rooms.

WHAT IS THE DIFFERENCE BETWEEN AGGREGATION AND COMPOSITION?
Aggregation is a weak relationship where the child object can exist independently. Composition is a strong relationship where the child object's lifecycle is closely tied to the parent object.

WHAT IS "FAVOR COMPOSITION OVER INHERITANCE"?
It means using objects of other classes to achieve code reuse instead of relying too much on inheritance. Composition often provides more flexibility.`,
          interviewAnswer: 'A has-a relationship means one class contains or uses an object of another class (Car has an Engine). Aggregation is a weak has-a relationship where the child object can exist independently of the parent (Department has Teachers). Composition is a strong has-a relationship where the child object\'s lifecycle is tied to the parent (House has Rooms). "Favor composition over inheritance" means using objects of other classes to achieve code reuse instead of relying too much on inheritance, providing more flexibility.',
          explanation: `1. What is a Has-a Relationship?
A has-a relationship means one class contains or uses an object of another class. Example: A Car has an Engine.

2. What is Aggregation?
Aggregation is a weak has-a relationship in which the child object can exist independently of the parent object. Example: A Department has Teachers.

3. What is Composition?
Composition is a strong has-a relationship in which the parent object owns the child object as part of its lifecycle. Example: A House has Rooms.

4. What is the Difference Between Aggregation and Composition?
Aggregation is a weak relationship where the child object can exist independently. Composition is a strong relationship where the child object's lifecycle is closely tied to the parent object.

5. What is "Favor Composition Over Inheritance"?
It means using objects of other classes to achieve code reuse instead of relying too much on inheritance. Composition often provides more flexibility.`,
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
          definition: `1. WHAT IS AN ARRAY?
An array is a data structure used to store multiple values of the same data type in a single variable. Array elements are accessed using indexes, starting from 0, and an array has a fixed length.

2. WHAT ARE THE ADVANTAGES OF AN ARRAY?
An array stores multiple values of the same type, provides fast access to elements using indexes, and makes it easy to process data using loops.

3. WHAT IS THE DIFFERENCE BETWEEN AN ARRAY AND AN ARRAYLIST?
An array has a fixed length, whereas an ArrayList can grow or shrink dynamically. An array can store primitives and objects, whereas an ArrayList stores objects and uses wrapper classes for primitive values.

4. WHAT IS THE DIFFERENCE BETWEEN A ONE-DIMENSIONAL AND A TWO-DIMENSIONAL ARRAY?
A one-dimensional array stores elements in a single sequence, whereas a two-dimensional array organizes elements into rows and columns.

5. HOW DO YOU FIND THE LENGTH OF AN ARRAY?
In Java, the length property returns the number of elements an array can hold.

Example:
int[] arr = {10, 20, 30, 40};
System.out.println(arr.length);

Output:
4

6. WHAT HAPPENS WHEN YOU ACCESS AN INVALID ARRAY INDEX?
Java throws an ArrayIndexOutOfBoundsException when you access an array using an invalid index.

Example:
int[] arr = {10, 20, 30};
System.out.println(arr[5]);

Output:
ArrayIndexOutOfBoundsException`,
          interviewAnswer: `An array in Java is a fixed-size, index-based data structure that stores elements of the same data type sequentially in memory, with indexes starting at 0. Key advantages include fast O(1) random access by index and clean loop traversal. An array has a fixed length and can store both primitives and objects, whereas an ArrayList is dynamic in size and stores only objects. Multi-dimensional arrays organize elements into rows and columns (arrays of arrays). Accessing an index outside valid bounds [0, length - 1] results in an unchecked ArrayIndexOutOfBoundsException at runtime.`,
          explanation: `1. What is an Array?
An array is a data structure used to store multiple values of the same data type in a single variable. Array elements are accessed using indexes, starting from 0, and an array has a fixed length.

2. What are the Advantages of an Array?
An array stores multiple values of the same type, provides fast access to elements using indexes, and makes it easy to process data using loops.

3. What is the Difference Between an Array and an ArrayList?
An array has a fixed length, whereas an ArrayList can grow or shrink dynamically. An array can store primitives and objects, whereas an ArrayList stores objects and uses wrapper classes for primitive values.

4. What is the Difference Between a One-Dimensional and a Two-Dimensional Array?
A one-dimensional array stores elements in a single sequence, whereas a two-dimensional array organizes elements into rows and columns.

5. How do you Find the Length of an Array?
In Java, the length property returns the number of elements an array can hold.

Example:
int[] arr = {10, 20, 30, 40};
System.out.println(arr.length); // Output: 4

6. What Happens When you Access an Invalid Array Index?
Java throws an ArrayIndexOutOfBoundsException when you access an array using an invalid index.

Example:
int[] arr = {10, 20, 30};
System.out.println(arr[5]); // Throws ArrayIndexOutOfBoundsException`,
          realWorldExample: `A row of numbered lockers at a gym or an egg carton:
• Fixed Length: A standard 12-slot egg carton cannot stretch to hold 13 eggs.
• Fast Index Access: You can go directly to Locker #5 in O(1) time without checking lockers 0 to 4.
• Homogeneous: All slots contain items of the same type.
• Index Bounds: Trying to open Locker #20 in a 10-locker facility throws an error immediately because that locker index does not exist.`,
          codeSnippet: {
            code: `public class ArrayDemo {
    public static void main(String[] args) {
        // 1. One-dimensional array initialization
        int[] arr = {10, 20, 30, 40};

        // 2. Finding length using .length property
        System.out.println("Array Length: " + arr.length);

        // 3. Fast index access & processing with loop
        System.out.print("Array elements: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + (i < arr.length - 1 ? ", " : ""));
        }
        System.out.println();

        // 4. Two-dimensional array (rows and columns)
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };
        System.out.println("2D Matrix element at [1][2]: " + matrix[1][2]);

        // 5. Accessing an invalid index throws ArrayIndexOutOfBoundsException
        try {
            System.out.println("Accessing arr[5]: " + arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught Exception: " + e.getClass().getSimpleName() + " (Index 5 out of bounds for length " + arr.length + ")");
        }
    }
}`,
            input: "int[] arr = {10, 20, 30, 40}; int[][] matrix = {{1, 2, 3}, {4, 5, 6}};",
            output: `Array Length: 4
Array elements: 10, 20, 30, 40
2D Matrix element at [1][2]: 6
Caught Exception: ArrayIndexOutOfBoundsException (Index 5 out of bounds for length 4)`
          },
          codeExample: `int[] arr = {10, 20, 30, 40};
System.out.println("Length: " + arr.length);
System.out.println("First element: " + arr[0]);`,
          questions: [
            {
              id: 'arr-q1',
              question: 'What is an Array in Java?',
              answer: 'An array is a data structure used to store multiple values of the same data type in a single variable. Array elements are accessed using zero-based indexes, and an array has a fixed length.',
              difficulty: 'Essential'
            },
            {
              id: 'arr-q2',
              question: 'What are the advantages of an Array?',
              answer: 'An array stores multiple values of the same type, provides fast access to elements using indexes (O(1) time complexity), and makes it easy to process data using loops.',
              difficulty: 'Essential'
            },
            {
              id: 'arr-q3',
              question: 'What is the difference between an Array and an ArrayList?',
              answer: '• An array has a fixed length, whereas an ArrayList can grow or shrink dynamically.\n• An array can store primitives and objects, whereas an ArrayList stores objects and uses wrapper classes for primitive values.\n• An array uses the .length property, whereas an ArrayList uses the size() method.',
              difficulty: 'Essential'
            },
            {
              id: 'arr-q4',
              question: 'What is the difference between a one-dimensional and a two-dimensional array?',
              answer: '• A one-dimensional (1D) array stores elements in a single linear sequence.\n• A two-dimensional (2D) array organizes elements into rows and columns (arrays of arrays).',
              difficulty: 'Essential'
            },
            {
              id: 'arr-q5',
              question: 'How do you find the length of an array in Java?',
              answer: 'In Java, the length property returns the number of elements an array can hold.\n\nExample:\nint[] arr = {10, 20, 30, 40};\nSystem.out.println(arr.length);\n\nOutput:\n4',
              difficulty: 'Essential'
            },
            {
              id: 'arr-q6',
              question: 'What happens when you access an invalid array index?',
              answer: 'Java throws an unchecked ArrayIndexOutOfBoundsException at runtime when you access an array using an invalid index (e.g. index < 0 or index >= arr.length).\n\nExample:\nint[] arr = {10, 20, 30};\nSystem.out.println(arr[5]);\n\nOutput:\nArrayIndexOutOfBoundsException',
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
          definition: `1. STRING VS STRINGBUILDER VS STRINGBUFFER
String: String is immutable, which means its value cannot be changed after creation.
StringBuilder: StringBuilder is mutable, which means its value can be changed without creating a new object for every modification. It is faster for repeated string modifications in a single thread.
StringBuffer: StringBuffer is mutable, and its methods are synchronized, making it suitable for thread-safe operations.

2. STRINGBUILDER LENGTH AND CAPACITY
length(): Returns the number of characters currently stored in the StringBuilder.
capacity(): Returns the amount of character storage available before more capacity is needed. The default capacity of an empty StringBuilder is 16.

3. SPLIT() VS STRINGTOKENIZER
split(): The split() method divides a String into parts using a regular expression and returns a String array.
StringTokenizer: StringTokenizer is a class used to divide a String into tokens using delimiters. It is a legacy class, and split() is often preferred in modern Java.`,
          interviewAnswer: `String is immutable, whereas StringBuilder and StringBuffer are mutable. StringBuilder is generally faster for repeated modifications in a single thread because it is not synchronized. StringBuffer uses synchronized methods for thread safety.

In StringBuilder, length() gives the number of characters, while capacity() gives the available character storage.

The split() method divides a String using a regular expression and returns a String array, whereas StringTokenizer separates a String into tokens using delimiters.`,
          explanation: `1. String vs StringBuilder vs StringBuffer:
- String: String is immutable, which means its value cannot be changed after creation.
- StringBuilder: StringBuilder is mutable, which means its value can be changed without creating a new object for every modification. It is faster for repeated string modifications in a single thread.
- StringBuffer: StringBuffer is mutable, and its methods are synchronized, making it suitable for thread-safe operations.

2. StringBuilder Length and Capacity:
- length(): Returns the number of characters currently stored in the StringBuilder.
- capacity(): Returns the amount of character storage available before more capacity is needed. The default capacity of an empty StringBuilder is 16.

3. split() vs StringTokenizer:
- split(): The split() method divides a String into parts using a regular expression and returns a String array.
- StringTokenizer: StringTokenizer is a class used to divide a String into tokens using delimiters. It is a legacy class, and split() is often preferred in modern Java.`,
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
          description: 'Comprehensive interview definitions, examples, and rules for Exception Hierarchy (Throwable, Error vs Exception, Checked vs Unchecked).',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `WHAT IS AN EXCEPTION?
An exception is an unwanted event that occurs during program execution and interrupts the normal flow of the program.

EXCEPTION HIERARCHY:
Throwable is the parent class of Error and Exception.
Exception is divided into Checked and Unchecked Exceptions.

ERROR VS EXCEPTION:
Error:
An Error is a serious problem that usually occurs at the JVM or system level and is generally difficult to recover from.
Example: OutOfMemoryError, StackOverflowError.

Exception:
An Exception is an abnormal condition that occurs during program execution and can be handled to maintain the normal flow of the program.
Example: IOException, ArithmeticException.

CHECKED VS UNCHECKED EXCEPTIONS:
Checked Exception:
A checked exception is checked by the compiler. We must handle it using try-catch or declare it using throws.
Example: IOException, SQLException.

Unchecked Exception:
An unchecked exception is not checked by the compiler. Handling or declaring it is not compulsory.
Example: NullPointerException, ArithmeticException.`,
          interviewAnswer: `In Java, Throwable is the parent class of Error and Exception. An Error represents a serious problem, such as OutOfMemoryError. An Exception represents a problem that a program may handle. Exceptions are divided into checked and unchecked exceptions. Checked exceptions must be caught or declared using throws, whereas unchecked exceptions do not require compulsory handling or declaration.`,
          explanation: `1. What is an Exception?
An exception is an unwanted event that occurs during program execution and interrupts the normal flow of the program.

2. Exception Hierarchy:
Throwable is the parent class of Error and Exception.
Exception is divided into Checked and Unchecked Exceptions.

3. Error vs Exception:
Error:
An Error is a serious problem that usually occurs at the JVM or system level and is generally difficult to recover from.
Example: OutOfMemoryError, StackOverflowError.

Exception:
An Exception is an abnormal condition that occurs during program execution and can be handled to maintain the normal flow of the program.
Example: IOException, ArithmeticException.

4. Checked vs Unchecked Exceptions:
Checked Exception:
A checked exception is checked by the compiler. We must handle it using try-catch or declare it using throws.
Example: IOException, SQLException.

Unchecked Exception:
An unchecked exception is not checked by the compiler. Handling or declaring it is not compulsory.
Example: NullPointerException, ArithmeticException.`,
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
              answer: 'An Error is a serious problem that usually occurs at the JVM or system level and is generally difficult to recover from (e.g. OutOfMemoryError, StackOverflowError).\n\nAn Exception is an abnormal condition that occurs during program execution and can be handled to maintain the normal flow of the program (e.g. IOException, ArithmeticException).',
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
          definition: `TRY BLOCK:
The try block contains code that may cause an exception during program execution.

CATCH BLOCK:
The catch block handles an exception thrown from the try block so that the program can continue normally.

FINALLY BLOCK:
The finally block is used to execute important cleanup code, such as closing resources. It normally executes whether an exception occurs or not.

MULTIPLE CATCH BLOCKS:
Java allows multiple catch blocks to handle different types of exceptions. More specific exceptions must be placed before more general exceptions.

getMessage():
The getMessage() method returns the detail message describing an exception.

printStackTrace():
The printStackTrace() method prints the exception details and the sequence of method calls that led to the exception.`,
          interviewAnswer: `In Java, the try block contains code that may throw an exception, the catch block handles the exception, and the finally block is used for cleanup and normally executes whether an exception occurs or not. We can use multiple catch blocks to handle different exceptions, placing specific exceptions before general ones. The getMessage() method returns the exception message, while printStackTrace() prints the exception details and stack trace.`,
          explanation: `1. Try Block:
The try block contains code that may cause an exception during program execution.

2. Catch Block:
The catch block handles an exception thrown from the try block so that the program can continue normally.

3. Finally Block:
The finally block is used to execute important cleanup code, such as closing resources. It normally executes whether an exception occurs or not.

4. Multiple Catch Blocks:
Java allows multiple catch blocks to handle different types of exceptions. More specific exceptions must be placed before more general exceptions.

5. getMessage():
The getMessage() method returns the detail message describing an exception.

6. printStackTrace():
The printStackTrace() method prints the exception details and the sequence of method calls that led to the exception.`,
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
          description: 'Comprehensive interview definitions, examples, and rules for throw vs throws, Exception Propagation, Ducking & Custom Exceptions.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `1. THROW VS THROWS
throw:
The throw keyword is used to explicitly throw an exception object.
Example: throw new ArithmeticException("Invalid operation");

throws:
The throws keyword is used in a method declaration to tell the caller which exceptions may occur.
Example: void display() throws IOException

2. EXCEPTION PROPAGATION
Exception propagation means an exception moves from the current method to the calling method when it is not handled in the current method.

3. EXCEPTION DUCKING
Exception ducking means declaring an exception using throws instead of handling it in the current method. The responsibility is passed to the calling method.

4. CUSTOM EXCEPTION
A custom exception is an exception created by a programmer to handle application-specific errors.

Extend Exception to create a checked exception or RuntimeException to create an unchecked exception.`,
          interviewAnswer: `In Java, throw is used to throw an exception explicitly, whereas throws is used to declare exceptions in a method signature. Exception propagation means an unhandled exception moves up the call stack until a matching handler is found. Exception ducking means passing the responsibility of handling an exception to the caller using throws. A custom exception is a user-defined exception created to handle application-specific errors.`,
          explanation: `1. throw vs throws:
throw:
The throw keyword is used to explicitly throw an exception object.
Example: throw new ArithmeticException("Invalid operation");

throws:
The throws keyword is used in a method declaration to tell the caller which exceptions may occur.
Example: void display() throws IOException

2. Exception Propagation:
Exception propagation means an exception moves from the current method to the calling method when it is not handled in the current method.

3. Exception Ducking:
Exception ducking means declaring an exception using throws instead of handling it in the current method. The responsibility is passed to the calling method.

4. Custom Exception:
A custom exception is an exception created by a programmer to handle application-specific errors.
Extend Exception to create a checked exception or RuntimeException to create an unchecked exception.`,
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
              answer: '1. "throw" is a keyword used inside a method body to explicitly throw an exception instance (e.g. throw new Exception()).\n2. "throws" is a keyword used in the method signature to declare that the method might throw one or more exception classes to its caller (e.g. void test() throws IOException).',
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
          description: 'Comprehensive interview definitions, examples, and rules for Functional Interfaces & Lambda Expressions.',
          difficulty: 'Essential',
          studyTime: '10 minutes',
          definition: `1. WHAT IS A FUNCTIONAL INTERFACE?
A functional interface is an interface that contains exactly one abstract method. It can also contain multiple default and static methods.

Example: Runnable, Comparator.

@FunctionalInterface is used to tell the compiler to check whether the interface follows the functional interface rules.

2. WHAT IS A LAMBDA EXPRESSION?
A lambda expression is a short way to provide an implementation of a functional interface without writing lengthy code.

Example:
() -> System.out.println("Hello");

3. WHY DO WE USE LAMBDA EXPRESSIONS?
Lambda expressions reduce code, improve readability, and make it easier to pass behavior as an argument.`,
          interviewAnswer: `A functional interface is an interface that contains exactly one abstract method. A lambda expression provides a short implementation of that method without writing lengthy code. We use lambda expressions to reduce boilerplate code and make Java programs simpler and more readable.`,
          explanation: `1. What is a Functional Interface?
A functional interface is an interface that contains exactly one abstract method. It can also contain multiple default and static methods.

Example: Runnable, Comparator.

@FunctionalInterface is used to tell the compiler to check whether the interface follows the functional interface rules.

2. What is a Lambda Expression?
A lambda expression is a short way to provide an implementation of a functional interface without writing lengthy code.

Example:
() -> System.out.println("Hello");

3. Why Do We Use Lambda Expressions?
Lambda expressions reduce code, improve readability, and make it easier to pass behavior as an argument.`,
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
          description: 'Comprehensive interview definitions, examples, and rules for Nested & Inner Classes (Member, Static Nested, Local & Anonymous).',
          difficulty: 'Common',
          studyTime: '8 minutes',
          definition: `REGULAR CLASS:
A regular class is a standard class declared at top level or as a member. It defines fields, constructors, and methods and can be instantiated if it is not abstract.

INNER CLASS (NON-STATIC NESTED CLASS):
A non-static nested class declared inside another class is an inner class. Its instance is associated with an instance of the enclosing class and it can access the enclosing object's private members. (Outer outer = new Outer(); Outer.Inner inner = outer.new Inner();)

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
              answer: 'An Inner Class is non-static and tied to an instance of the enclosing outer class, with full access to the outer instance\'s fields. A Static Nested Class is static, does not require an outer object instance, and cannot directly access non-static instance fields of the outer class.',
              difficulty: 'Common'
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
          definition: `1. WHAT IS MULTITHREADING?
Multithreading is the process of executing multiple threads concurrently within a single program to perform multiple tasks efficiently.

2. HOW CAN WE CREATE A THREAD IN JAVA?
We can create a thread in two ways:
1. By extending the Thread class.
2. By implementing the Runnable interface.

3. WHAT IS THE DIFFERENCE BETWEEN start() AND run()?
start() starts a new thread, which executes the run() method. Calling run() directly executes it like a normal method without starting a new thread.

4. WHAT IS SYNCHRONIZATION?
Synchronization controls access to shared resources to prevent multiple threads from executing a synchronized section simultaneously on the same monitor.

5. WHAT IS DEADLOCK?
Deadlock occurs when two or more threads wait indefinitely for resources held by one another.

6. WHAT IS THE DIFFERENCE BETWEEN sleep() AND wait()?
sleep() pauses the current thread without releasing its held monitors. wait() releases the object's monitor while waiting and must be called while holding that monitor.

7. WHAT IS THE DIFFERENCE BETWEEN THREAD AND RUNNABLE?
Thread is a class used to create and control threads, whereas Runnable is an interface used to define a task that a thread executes.`,
          interviewAnswer: `Multithreading allows multiple threads to execute concurrently within a single process to maximize CPU utilization. In Java, threads are created by extending Thread or implementing Runnable (preferred for loose coupling). The start() method creates a new OS thread and invokes run(), whereas calling run() directly executes synchronously on the current thread. Synchronization prevents race conditions on shared resources, sleep() pauses without releasing locks, and wait() releases the monitor to coordinate with notify(). Deadlock happens when threads wait indefinitely for each other's locks.`,
          explanation: `1. What is Multithreading?
Multithreading is the process of executing multiple threads concurrently within a single program to perform multiple tasks efficiently.

2. How can we create a Thread in Java?
We can create a thread in two ways:
1. By extending the Thread class.
2. By implementing the Runnable interface.

3. What is the difference between start() and run()?
start() starts a new thread, which executes the run() method. Calling run() directly executes it like a normal method without starting a new thread.

4. What is Synchronization?
Synchronization controls access to shared resources to prevent multiple threads from executing a synchronized section simultaneously on the same monitor.

5. What is Deadlock?
Deadlock occurs when two or more threads wait indefinitely for resources held by one another.

6. What is the difference between sleep() and wait()?
sleep() pauses the current thread without releasing its held monitors. wait() releases the object's monitor while waiting and must be called while holding that monitor.

7. What is the difference between Thread and Runnable?
Thread is a class used to create and control threads, whereas Runnable is an interface used to define a task that a thread executes.`,
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
              question: 'What is Multithreading in Java?',
              answer: 'Multithreading is the process of executing multiple threads concurrently within a single program to perform multiple tasks efficiently and maximize CPU utilization.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q2',
              question: 'How can we create a Thread in Java?',
              answer: 'We can create a thread in two ways:\n1. By extending the Thread class and overriding its run() method.\n2. By implementing the Runnable interface and passing it to a Thread instance (recommended for loose coupling and multiple inheritance).',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q3',
              question: 'What is the difference between start() and run()?',
              answer: 'start() creates a new thread of execution and schedules it with the JVM thread scheduler, which then calls run(). Calling run() directly does not create a new thread; it executes synchronously in the caller thread like a regular method.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q4',
              question: 'What is Synchronization?',
              answer: 'Synchronization controls access to shared resources to prevent multiple threads from executing a synchronized section simultaneously on the same monitor, preventing race conditions.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q5',
              question: 'What is Deadlock?',
              answer: 'Deadlock occurs when two or more threads wait indefinitely for resources held by one another, causing all involved threads to remain blocked permanently.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q6',
              question: 'What is the difference between sleep() and wait()?',
              answer: 'sleep() pauses the current thread for a specified time without releasing its held monitors/locks. wait() releases the object\'s monitor while waiting and must be called from within a synchronized context.',
              difficulty: 'Essential'
            },
            {
              id: 'mt-q7',
              question: 'What is the difference between Thread and Runnable?',
              answer: 'Thread is a class used to create and control threads, whereas Runnable is an interface used to define the task or behavior that a thread executes. Implementing Runnable is generally preferred because Java supports implementing multiple interfaces.',
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
          definition: `1. WHAT IS THE COLLECTION FRAMEWORK?
The Collection Framework is a set of interfaces and classes in Java used to store, manage, and manipulate groups of objects efficiently.

2. WHAT IS THE DIFFERENCE BETWEEN LIST, SET, AND MAP?
List allows duplicate elements and maintains insertion order.
Set does not allow duplicate elements.
Map stores data in key-value pairs, and keys must be unique.

3. WHAT IS THE DIFFERENCE BETWEEN ARRAYLIST AND LINKEDLIST?
ArrayList uses a dynamic array and provides fast access by index.
LinkedList uses a doubly linked list and can efficiently insert or remove elements when the position is already known.

4. WHAT IS THE DIFFERENCE BETWEEN HASHSET AND TREESET?
HashSet stores unique elements without guaranteeing their order.
TreeSet stores unique elements in sorted order.

5. WHAT IS THE DIFFERENCE BETWEEN HASHMAP AND HASHTABLE?
HashMap is not synchronized and allows one null key and multiple null values.
Hashtable is synchronized and does not allow null keys or null values.

6. WHAT IS THE DIFFERENCE BETWEEN HASHMAP AND TREEMAP?
HashMap stores key-value pairs without guaranteeing their order.
TreeMap stores key-value pairs sorted by keys.

7. WHAT IS THE DIFFERENCE BETWEEN ARRAYLIST AND VECTOR?
ArrayList is not synchronized by default and is generally faster in single-threaded use.
Vector is synchronized and is a legacy collection class.

8. WHAT IS THE DIFFERENCE BETWEEN COMPARABLE AND COMPARATOR?
Comparable defines the natural ordering of objects using the compareTo() method.
Comparator defines a custom ordering using the compare() method.

9. WHAT IS THE DIFFERENCE BETWEEN ITERATOR AND LISTITERATOR?
Iterator traverses elements in the forward direction and can remove elements.
ListIterator works only with lists and supports forward and backward traversal, as well as adding, setting, and removing elements.

10. WHAT IS THE DIFFERENCE BETWEEN FAIL-FAST AND FAIL-SAFE ITERATORS?
Fail-fast iterators generally throw ConcurrentModificationException when they detect structural modification outside the iterator's permitted operations.
Iterators of concurrent collections, such as CopyOnWriteArrayList, can traverse a snapshot or use weakly consistent behavior without throwing this exception for concurrent modifications.`,
          interviewAnswer: `The Java Collection Framework provides a standardized architecture of interfaces and classes (List, Set, Queue, Map) to store and manipulate object groups efficiently. List (ArrayList/LinkedList) permits duplicates and preserves insertion order; Set (HashSet/TreeSet) enforces element uniqueness; and Map (HashMap/TreeMap/Hashtable) maps unique keys to values. For iteration, Iterator allows forward traversal across collections with safe element removal, while ListIterator enables bidirectional traversal in lists. Standard iterators are fail-fast (throwing ConcurrentModificationException on concurrent modification), whereas concurrent collections (e.g., CopyOnWriteArrayList) provide fail-safe snapshot iteration. Natural sorting uses Comparable with compareTo(), whereas custom or dynamic sorting uses Comparator with compare().`,
          explanation: `1. WHAT IS THE COLLECTION FRAMEWORK?
The Collection Framework is a set of interfaces and classes in Java used to store, manage, and manipulate groups of objects efficiently.

2. WHAT IS THE DIFFERENCE BETWEEN LIST, SET, AND MAP?
List allows duplicate elements and maintains insertion order.
Set does not allow duplicate elements.
Map stores data in key-value pairs, and keys must be unique.

3. WHAT IS THE DIFFERENCE BETWEEN ARRAYLIST AND LINKEDLIST?
ArrayList uses a dynamic array and provides fast access by index.
LinkedList uses a doubly linked list and can efficiently insert or remove elements when the position is already known.

4. WHAT IS THE DIFFERENCE BETWEEN HASHSET AND TREESET?
HashSet stores unique elements without guaranteeing their order.
TreeSet stores unique elements in sorted order.

5. WHAT IS THE DIFFERENCE BETWEEN HASHMAP AND HASHTABLE?
HashMap is not synchronized and allows one null key and multiple null values.
Hashtable is synchronized and does not allow null keys or null values.

6. WHAT IS THE DIFFERENCE BETWEEN HASHMAP AND TREEMAP?
HashMap stores key-value pairs without guaranteeing their order.
TreeMap stores key-value pairs sorted by keys.

7. WHAT IS THE DIFFERENCE BETWEEN ARRAYLIST AND VECTOR?
ArrayList is not synchronized by default and is generally faster in single-threaded use.
Vector is synchronized and is a legacy collection class.

8. WHAT IS THE DIFFERENCE BETWEEN COMPARABLE AND COMPARATOR?
Comparable defines the natural ordering of objects using the compareTo() method.
Comparator defines a custom ordering using the compare() method.

9. WHAT IS THE DIFFERENCE BETWEEN ITERATOR AND LISTITERATOR?
Iterator traverses elements in the forward direction and can remove elements.
ListIterator works only with lists and supports forward and backward traversal, as well as adding, setting, and removing elements.

10. WHAT IS THE DIFFERENCE BETWEEN FAIL-FAST AND FAIL-SAFE ITERATORS?
Fail-fast iterators generally throw ConcurrentModificationException when they detect structural modification outside the iterator's permitted operations.
Iterators of concurrent collections, such as CopyOnWriteArrayList, can traverse a snapshot or use weakly consistent behavior without throwing this exception for concurrent modifications.`,
          realWorldExample: `A modern eCommerce Fulfillment Warehouse:
• List (ArrayList): Order Cart Items — preserves checkout sequence, items can be duplicated (e.g., 2 identical shirts at index 0 and index 1).
• Set (HashSet): Unique Product SKU Registry — every product barcode must be globally unique with zero duplicates.
• Map (HashMap): Order Tracking System — maps unique Order Number (Key) to Order Customer & Shipping Details (Value) for O(1) instant lookup.`,
          codeSnippet: {
            code: `import java.util.Map;
import java.util.LinkedHashMap;

public class CharacterCountDemo {
    public static void main(String[] args) {
        String input = "programming";
        
        // Count frequency of each character using Map
        Map<Character, Integer> charCountMap = new LinkedHashMap<>();
        for (char ch : input.toCharArray()) {
            charCountMap.put(ch, charCountMap.getOrDefault(ch, 0) + 1);
        }

        System.out.println("Input String: " + input);
        System.out.println("Character Frequencies: " + charCountMap);
    }
}`,
            input: 'String input = "programming";',
            output: `Input String: programming
Character Frequencies: {p=1, r=2, o=1, g=2, a=1, m=2, i=1, n=1}`
          },
          codePrograms: [
            {
              id: 'col-prog-1',
              title: '1. Character Count in a String (HashMap)',
              label: '1. Character Count',
              input: 'String input = "programming";',
              output: `Input String: programming
Character Frequencies: {p=1, r=2, o=1, g=2, a=1, m=2, i=1, n=1}
'p' -> 1 time
'r' -> 2 times
'o' -> 1 time
'g' -> 2 times
'a' -> 1 time
'm' -> 2 times
'i' -> 1 time
'n' -> 1 time`,
              code: `import java.util.Map;
import java.util.LinkedHashMap;

public class CharacterCountDemo {
    public static void main(String[] args) {
        String input = "programming";
        
        // Using LinkedHashMap to count frequencies while maintaining character order
        Map<Character, Integer> charCountMap = new LinkedHashMap<>();

        for (char ch : input.toCharArray()) {
            charCountMap.put(ch, charCountMap.getOrDefault(ch, 0) + 1);
        }

        System.out.println("Input String: " + input);
        System.out.println("Character Frequencies: " + charCountMap);

        // Printing each character occurrence
        charCountMap.forEach((ch, count) -> {
            System.out.println("'" + ch + "' -> " + count + (count > 1 ? " times" : " time"));
        });
    }
}`
            },
            {
              id: 'col-prog-2',
              title: '2. Remove Duplicates from List (LinkedHashSet & TreeSet)',
              label: '2. Remove Duplicates',
              input: 'List<Integer> list = Arrays.asList(10, 20, 30, 20, 40, 10, 50, 30);',
              output: `Original List with duplicates: [10, 20, 30, 20, 40, 10, 50, 30]
Unique (Preserving Insertion Order via LinkedHashSet): [10, 20, 30, 40, 50]
Unique (Sorted Natural Order via TreeSet): [10, 20, 30, 40, 50]`,
              code: `import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.TreeSet;

public class RemoveDuplicatesDemo {
    public static void main(String[] args) {
        List<Integer> listWithDuplicates = Arrays.asList(10, 20, 30, 20, 40, 10, 50, 30);
        System.out.println("Original List with duplicates: " + listWithDuplicates);

        // 1. LinkedHashSet: Removes duplicates while strictly preserving insertion order
        Set<Integer> uniquePreserved = new LinkedHashSet<>(listWithDuplicates);
        System.out.println("Unique (Preserving Insertion Order via LinkedHashSet): " + uniquePreserved);

        // 2. TreeSet: Removes duplicates and sorts elements in natural ascending order
        Set<Integer> uniqueSorted = new TreeSet<>(listWithDuplicates);
        System.out.println("Unique (Sorted Natural Order via TreeSet): " + uniqueSorted);
    }
}`
            },
            {
              id: 'col-prog-3',
              title: '3. Shift / Rotate Elements in Collection (Collections.rotate)',
              label: '3. Shift Elements',
              input: 'List: [1, 2, 3, 4, 5] | Right shift distance = 2 | Left shift distance = -1',
              output: `Initial List: [1, 2, 3, 4, 5]
After Right Shift by 2 positions (Collections.rotate(list, 2)): [4, 5, 1, 2, 3]
After Left Shift by 1 position (Collections.rotate(list, -1)): [5, 1, 2, 3, 4]
After Manual Left Shift by 1 (remove(0) -> add()): [1, 2, 3, 4, 5]`,
              code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShiftElementsDemo {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        System.out.println("Initial List: " + numbers);

        // 1. Right Shift by 2 positions using Collections.rotate()
        // Positive distance moves elements to the right; end elements wrap to front
        Collections.rotate(numbers, 2);
        System.out.println("After Right Shift by 2 positions (Collections.rotate(list, 2)): " + numbers);

        // 2. Left Shift by 1 position using Collections.rotate()
        // Negative distance moves elements to the left; front elements wrap to end
        Collections.rotate(numbers, -1);
        System.out.println("After Left Shift by 1 position (Collections.rotate(list, -1)): " + numbers);

        // 3. Manual Left Shift: Remove element from index 0 and append to end
        int first = numbers.remove(0);
        numbers.add(first);
        System.out.println("After Manual Left Shift by 1 (remove(0) -> add()): " + numbers);
    }
}`
            }
          ],
          questions: [
            {
              id: 'col-q1',
              question: 'What is the Collection Framework in Java?',
              answer: 'The Collection Framework is a set of interfaces and classes in Java used to store, manage, and manipulate groups of objects efficiently.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q2',
              question: 'What is the difference between List, Set, and Map?',
              answer: '• List allows duplicate elements and maintains insertion order.\n• Set does not allow duplicate elements.\n• Map stores data in key-value pairs, and keys must be unique.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q3',
              question: 'What is the difference between ArrayList and LinkedList?',
              answer: '• ArrayList uses a dynamic array and provides fast access by index.\n• LinkedList uses a doubly linked list and can efficiently insert or remove elements when the position is already known.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q4',
              question: 'What is the difference between HashSet and TreeSet?',
              answer: '• HashSet stores unique elements without guaranteeing their order.\n• TreeSet stores unique elements in sorted order.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q5',
              question: 'What is the difference between HashMap and Hashtable?',
              answer: '• HashMap is not synchronized and allows one null key and multiple null values.\n• Hashtable is synchronized and does not allow null keys or null values.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q6',
              question: 'What is the difference between HashMap and TreeMap?',
              answer: '• HashMap stores key-value pairs without guaranteeing their order.\n• TreeMap stores key-value pairs sorted by keys.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q7',
              question: 'What is the difference between ArrayList and Vector?',
              answer: '• ArrayList is not synchronized by default and is generally faster in single-threaded use.\n• Vector is synchronized and is a legacy collection class.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q8',
              question: 'What is the difference between Comparable and Comparator?',
              answer: '• Comparable defines the natural ordering of objects using the compareTo() method.\n• Comparator defines a custom ordering using the compare() method.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q9',
              question: 'What is the difference between Iterator and ListIterator?',
              answer: '• Iterator traverses elements in the forward direction and can remove elements.\n• ListIterator works only with lists and supports forward and backward traversal, as well as adding, setting, and removing elements.',
              difficulty: 'Essential'
            },
            {
              id: 'col-q10',
              question: 'What is the difference between Fail-Fast and Fail-Safe Iterators?',
              answer: '• Fail-fast iterators generally throw ConcurrentModificationException when they detect structural modification outside the iterator\'s permitted operations.\n• Iterators of concurrent collections, such as CopyOnWriteArrayList, can traverse a snapshot or use weakly consistent behavior without throwing this exception for concurrent modifications.',
              difficulty: 'Essential'
            }
          ]
        }
      ]
    }
  ]
};
