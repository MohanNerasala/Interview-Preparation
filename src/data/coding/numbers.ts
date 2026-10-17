import type { CodingQuestion } from '../../types/codingQuestion';

export const numberQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q01',
    number: 1,
    title: 'Check Whether a Number Is Prime',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Write a Java program to check whether a given integer is a prime number (greater than 1 with no divisors other than 1 and itself).',
    input: '17',
    output: '17 is a Prime Number',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        boolean isPrime = true;

        if (n <= 1) {
            isPrime = false;
        } else {
            // Check divisibility up to sqrt(n)
            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            System.out.println(n + " is a Prime Number");
        } else {
            System.out.println(n + " is Not a Prime Number");
        }
    }
}`,
    dryRun: 'For n = 17: loop runs for i=2, 3, 4 (since 4*4 <= 17). 17 % 2 != 0, 17 % 3 != 0, 17 % 4 != 0. Loop terminates. isPrime remains true.',
    timeComplexity: 'O(√n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q02',
    number: 2,
    title: 'Find Factorial of a Number',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Calculate the factorial of a given positive integer n (n! = n * (n-1) * ... * 1). Factorial of 0 is 1.',
    input: '5',
    output: 'Factorial of 5 is 120',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }

        System.out.println("Factorial of " + n + " is " + fact);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q03',
    number: 3,
    title: 'Print Fibonacci Series',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Print the first n terms of the Fibonacci sequence, where each number is the sum of the preceding two (starting with 0 and 1).',
    input: 'n = 7',
    output: '0 1 1 2 3 5 8',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();

        int first = 0, second = 1;

        for (int i = 1; i <= n; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }
    }
}`,
    dryRun: 'i=1: print 0, next=1, first=1, second=1. i=2: print 1, next=2, first=1, second=2. i=3: print 1, next=3, first=2, second=3. i=4: print 2...',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q04',
    number: 4,
    title: 'Check Armstrong Number',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'An Armstrong number is an integer such that the sum of its digits each raised to the power of the number of digits equals the number itself (e.g., 153 = 1³ + 5³ + 3³).',
    input: '153',
    output: '153 is an Armstrong Number',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        int original = n;
        int digits = String.valueOf(n).length();
        int sum = 0;

        int temp = n;
        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp /= 10;
        }

        if (sum == original) {
            System.out.println(original + " is an Armstrong Number");
        } else {
            System.out.println(original + " is Not an Armstrong Number");
        }
    }
}`,
    timeComplexity: 'O(log10 n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q05',
    number: 5,
    title: 'Check Palindrome Number',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Determine whether an integer reads the same forwards and backwards without converting it to a string.',
    input: '121',
    output: '121 is a Palindrome',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println(n + " is Not a Palindrome");
            return;
        }

        int original = n;
        int reversed = 0;

        while (n > 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }

        if (original == reversed) {
            System.out.println(original + " is a Palindrome");
        } else {
            System.out.println(original + " is Not a Palindrome");
        }
    }
}`,
    timeComplexity: 'O(log10 n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q06',
    number: 6,
    title: 'Reverse a Number',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Given an integer, reverse its digits mathematically.',
    input: '12345',
    output: '54321',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        int reversed = 0;
        while (n != 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }

        System.out.println("Reversed number: " + reversed);
    }
}`,
    timeComplexity: 'O(log10 n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q07',
    number: 7,
    title: 'Find Sum of Digits',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Calculate the sum of all individual digits in an integer.',
    input: '1234',
    output: 'Sum of digits is 10 (1+2+3+4)',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        int sum = 0;
        int temp = Math.abs(n);

        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }

        System.out.println("Sum of digits: " + sum);
    }
}`,
    timeComplexity: 'O(log10 n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q08',
    number: 8,
    title: 'Count Digits in a Number',
    category: 'Numbers',
    difficulty: 'Easy',
    problem: 'Count the total number of digits in a given integer (handling 0 properly).',
    input: '987654',
    output: 'Number of digits: 6',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        if (n == 0) {
            System.out.println("Number of digits: 1");
            return;
        }

        int count = 0;
        int temp = Math.abs(n);

        while (temp > 0) {
            count++;
            temp /= 10;
        }

        System.out.println("Number of digits: " + count);
    }
}`,
    timeComplexity: 'O(log10 n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q09',
    number: 9,
    title: 'Find GCD and LCM',
    category: 'Numbers',
    difficulty: 'Medium',
    problem: 'Find the Greatest Common Divisor (GCD) using the Euclidean algorithm, and calculate Least Common Multiple (LCM = (a * b) / GCD).',
    input: 'a = 12, b = 18',
    output: 'GCD: 6, LCM: 36',
    javaSolution: `import java.util.Scanner;

public class Main {
    // Euclidean algorithm for GCD
    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        int gcd = findGCD(a, b);
        int lcm = (a * b) / gcd;

        System.out.println("GCD: " + gcd);
        System.out.println("LCM: " + lcm);
    }
}`,
    dryRun: 'a=12, b=18: 12 % 18 = 12 -> a=18, b=12. 18 % 12 = 6 -> a=12, b=6. 12 % 6 = 0 -> a=6, b=0. Loop ends, GCD = 6. LCM = (12 * 18) / 6 = 36.',
    timeComplexity: 'O(log(min(a, b)))',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q10',
    number: 10,
    title: 'Check Perfect Number',
    category: 'Numbers',
    difficulty: 'Medium',
    problem: 'A perfect number is a positive integer equal to the sum of its positive proper divisors excluding itself (e.g., 28 = 1 + 2 + 4 + 7 + 14).',
    input: '28',
    output: '28 is a Perfect Number',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        if (n <= 1) {
            System.out.println(n + " is Not a Perfect Number");
            return;
        }

        int sum = 1; // 1 is always a proper divisor

        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                sum += i;
                if (i != n / i) {
                    sum += n / i;
                }
            }
        }

        if (sum == n) {
            System.out.println(n + " is a Perfect Number");
        } else {
            System.out.println(n + " is Not a Perfect Number");
        }
    }
}`,
    timeComplexity: 'O(√n)',
    spaceComplexity: 'O(1)',
  },
];
