import type { Topic } from '../types';

export const dsaTopic: Topic = {
  id: 'dsa',
  number: '10',
  title: 'DSA & Coding',
  description: 'Data Structures, Algorithms, and coding practice problems.',
  icon: 'Code',
  subtopics: [
    {
      id: 'dsa-number-problems',
      title: 'Number Problems',
      description: 'Prime, factorial, Fibonacci, and other number problems.',
      concepts: [
        {
          id: 'dsa-palindrome', title: 'Palindrome Number', description: 'Check if a number reads the same forward and backward.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'A palindrome number reads the same forwards and backwards (e.g., 121, 12321).',
          interviewAnswer: 'A palindrome number is the same when read forwards and backwards. To check: reverse the number and compare with the original. If they match, it is a palindrome.',
          explanation: 'Reverse the number by extracting digits one by one using modulo and division.',
          codeExample: 'public static boolean isPalindrome(int num) {\n    int original = num;\n    int reversed = 0;\n    while (num > 0) {\n        int digit = num % 10;       // Extract last digit\n        reversed = reversed * 10 + digit;  // Build reversed number\n        num = num / 10;             // Remove last digit\n    }\n    return original == reversed;\n}\n\n// Dry run: num = 121\n// Step 1: digit=1, reversed=1, num=12\n// Step 2: digit=2, reversed=12, num=1\n// Step 3: digit=1, reversed=121, num=0\n// 121 == 121 → true (palindrome)',
          questions: [
            { id: 'dsa-q1', question: 'How do you check if a number is a palindrome?', answer: 'Reverse the number and compare with the original.\n1) Store the original number.\n2) Extract digits using % 10, build reversed number.\n3) Remove last digit using / 10.\n4) Compare original with reversed.\nTime: O(log n), Space: O(1).', difficulty: 'Essential' },
          ]
        },
        {
          id: 'dsa-fibonacci', title: 'Fibonacci Sequence', description: 'Generate Fibonacci numbers.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Fibonacci sequence: each number is the sum of the two preceding ones. 0, 1, 1, 2, 3, 5, 8, 13...',
          interviewAnswer: 'The Fibonacci sequence starts with 0 and 1. Each subsequent number is the sum of the previous two. It can be solved iteratively (O(n) time, O(1) space) or recursively (O(2^n) time, inefficient without memoization).',
          explanation: 'Iterative approach is preferred for efficiency. Recursive approach demonstrates the concept but is slow without memoization.',
          codeExample: '// Iterative (Efficient)\npublic static void fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        System.out.print(a + " ");\n        int next = a + b;\n        a = b;\n        b = next;\n    }\n}\n// Output: 0 1 1 2 3 5 8 13 21 34\n\n// Recursive\npublic static int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}',
          questions: [
            { id: 'dsa-q2', question: 'Write a program to print Fibonacci sequence.', answer: 'Iterative approach:\n1) Start with a=0, b=1.\n2) Print a, then compute next = a+b.\n3) Shift: a=b, b=next.\n4) Repeat n times.\nTime: O(n), Space: O(1).\nAvoid recursive approach without memoization as it has O(2^n) time complexity.', difficulty: 'Essential' },
          ]
        }
      ]
    },
    {
      id: 'dsa-string-problems',
      title: 'String Problems',
      description: 'Reverse, palindrome, character frequency, and anagram problems.',
      concepts: [
        {
          id: 'dsa-reverse-string', title: 'Reverse a String', description: 'Multiple approaches to reverse a string.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Reversing a string means rearranging characters in the opposite order.',
          interviewAnswer: 'Reverse a string using: 1) StringBuilder.reverse(), 2) Character array with two pointers, 3) Loop from end to start. StringBuilder is the most efficient in Java.',
          explanation: 'Multiple approaches exist. Choose based on the context and interview requirements.',
          codeExample: '// Method 1: StringBuilder (Best)\npublic static String reverse(String s) {\n    return new StringBuilder(s).reverse().toString();\n}\n\n// Method 2: Two Pointers\npublic static String reverseManual(String s) {\n    char[] chars = s.toCharArray();\n    int left = 0, right = chars.length - 1;\n    while (left < right) {\n        char temp = chars[left];\n        chars[left] = chars[right];\n        chars[right] = temp;\n        left++;\n        right--;\n    }\n    return new String(chars);\n}\n\n// "hello" → "olleh"',
          questions: [
            { id: 'dsa-q3', question: 'How do you reverse a string in Java?', answer: 'Method 1: new StringBuilder(s).reverse().toString() — simplest and efficient.\nMethod 2: Convert to char array, use two pointers (left and right), swap characters until they meet.\nMethod 3: Loop from end to start, append each character.\nTime: O(n), Space: O(n).', difficulty: 'Essential' },
          ]
        },
        {
          id: 'dsa-two-sum', title: 'Two Sum Problem', description: 'Find two numbers that add up to a target.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'Given an array of numbers and a target, find two numbers that add up to the target.',
          interviewAnswer: 'Use a HashMap: For each number, check if (target - number) exists in the map. If yes, return both indices. If no, add the current number to the map. This gives O(n) time and O(n) space.',
          explanation: 'Brute force is O(n²) with nested loops. HashMap approach is O(n) — much better.',
          codeExample: 'public static int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[]{map.get(complement), i};\n        }\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}\n\n// Dry run: nums = [2, 7, 11, 15], target = 9\n// i=0: complement=7, map={2:0}\n// i=1: complement=2, map has 2! → return [0, 1]\n// Answer: nums[0] + nums[1] = 2 + 7 = 9',
          questions: [
            { id: 'dsa-q4', question: 'How do you solve the Two Sum problem?', answer: 'Use a HashMap:\n1) For each number, calculate complement = target - number.\n2) Check if complement exists in the HashMap.\n3) If yes, return both indices.\n4) If no, add current number and index to HashMap.\nTime: O(n), Space: O(n).\nBrute force with nested loops is O(n²).', difficulty: 'Essential' },
          ]
        }
      ]
    },
    {
      id: 'dsa-array-problems',
      title: 'Array Problems',
      description: 'Second largest, duplicates, max subarray, and missing number.',
      concepts: [
        {
          id: 'dsa-second-largest', title: 'Second Largest Element', description: 'Find the second largest element in an array.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Find the second largest element in an array without sorting.',
          interviewAnswer: 'Track two variables: largest and secondLargest. Traverse the array once. If current element is greater than largest, update secondLargest = largest, then largest = current. If current is between them, update secondLargest. O(n) time.',
          explanation: 'Sorting would give O(n log n). Single-pass with two variables gives O(n).',
          codeExample: 'public static int secondLargest(int[] arr) {\n    int first = Integer.MIN_VALUE;\n    int second = Integer.MIN_VALUE;\n\n    for (int num : arr) {\n        if (num > first) {\n            second = first;\n            first = num;\n        } else if (num > second && num != first) {\n            second = num;\n        }\n    }\n    return second;\n}\n\n// arr = [12, 35, 1, 10, 34, 1]\n// first=35, second=34',
          questions: [
            { id: 'dsa-q5', question: 'How do you find the second largest element in an array?', answer: 'Use two variables (first, second). Single pass:\n1) If num > first: second = first, first = num.\n2) Else if num > second and num ≠ first: second = num.\nTime: O(n), Space: O(1).\nDo NOT sort (O(n log n)) when O(n) is possible.', difficulty: 'Essential' },
          ]
        }
      ]
    }
  ]
};
