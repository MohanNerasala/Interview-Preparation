import type { CodingQuestion } from '../../types/codingQuestion';

export const recursionQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q54',
    number: 54,
    title: 'Factorial Using Recursion',
    category: 'Recursion',
    difficulty: 'Easy',
    problem: 'Compute the factorial of n using a recursive method showing base case (n <= 1) and recursive call n * fact(n - 1).',
    input: 'n = 5',
    output: 'Factorial: 120',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static long factorial(int n) {
        // Base case
        if (n <= 1) {
            return 1;
        }
        // Recursive call
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number: ");
        int n = sc.nextInt();

        System.out.println("Factorial of " + n + " is: " + factorial(n));
    }
}`,
    dryRun: 'fact(5) = 5 * fact(4) = 5 * (4 * fact(3)) = 5 * 4 * (3 * fact(2)) = 5 * 4 * 3 * (2 * fact(1)) = 5 * 4 * 3 * 2 * 1 = 120.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) call stack space',
  },
  {
    id: 'dsa-q55',
    number: 55,
    title: 'Fibonacci Using Recursion',
    category: 'Recursion',
    difficulty: 'Easy',
    problem: 'Find the nth Fibonacci number using recursion. Explain why memoization is recommended in interviews.',
    input: 'n = 6',
    output: 'Fibonacci(6) = 8',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static int fib(int n) {
        // Base cases
        if (n <= 0) return 0;
        if (n == 1) return 1;

        // Recursive case
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = sc.nextInt();

        System.out.println("Fibonacci at position " + n + " is: " + fib(n));
    }
}`,
    dryRun: 'fib(4) = fib(3) + fib(2) = (fib(2)+fib(1)) + (fib(1)+fib(0)) = ((1+0)+1) + (1+0) = 2 + 1 = 3.',
    timeComplexity: 'O(2^n) naive exponential (O(n) with memoization)',
    spaceComplexity: 'O(n) call stack depth',
  },
  {
    id: 'dsa-q56',
    number: 56,
    title: 'Sum of Natural Numbers Using Recursion',
    category: 'Recursion',
    difficulty: 'Easy',
    problem: 'Calculate the sum of first n natural numbers (1 + 2 + ... + n) using recursion.',
    input: 'n = 10',
    output: 'Sum: 55',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static int sumOfNatural(int n) {
        if (n <= 1) return n;
        return n + sumOfNatural(n - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = sc.nextInt();

        System.out.println("Sum of first " + n + " numbers is: " + sumOfNatural(n));
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) call stack',
  },
  {
    id: 'dsa-q57',
    number: 57,
    title: 'Reverse a String Using Recursion',
    category: 'Recursion',
    difficulty: 'Medium',
    problem: 'Reverse a string recursively by taking the last character and appending the reverse of the remaining substring.',
    input: '"recursion"',
    output: '"noisrucer"',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static String reverse(String str) {
        // Base case: empty or single char string
        if (str == null || str.length() <= 1) {
            return str;
        }

        // Recursive call: last character + reverse of preceding substring
        return str.charAt(str.length() - 1) + reverse(str.substring(0, str.length() - 1));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s = sc.nextLine();

        System.out.println("Reversed string: " + reverse(s));
    }
}`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(n) call stack depth',
  },
];
