// ========================================================
// CORE JAVA CODING & INTERVIEW PREPARATION DATA
// 5 Topics | Exactly 55 Questions with Complete Java Code
// ========================================================

export interface JavaQuestion {
  id: string;
  topicId: 'arrays' | 'strings' | 'collections' | 'exceptions' | 'multithreading';
  number: number;
  title: string;
  isCoding: boolean;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  answer?: string;
  problemStatement?: string;
  input?: string;
  output?: string;
  code?: string;
  explanation?: string;
}

export interface JavaTopic {
  id: 'arrays' | 'strings' | 'collections' | 'exceptions' | 'multithreading';
  title: string;
  questionCount: number;
  description: string;
  questions: JavaQuestion[];
}

export const coreJavaTopics: JavaTopic[] = [
  // ----------------------------------------------------
  // TOPIC 1: ARRAYS (15 Questions)
  // ----------------------------------------------------
  {
    id: 'arrays',
    title: 'Arrays',
    questionCount: 15,
    description: '15 essential array interview coding problems with loops, two pointers, and frequency logic.',
    questions: [
      {
        id: 'cj-arr-1',
        topicId: 'arrays',
        number: 1,
        title: 'Print All Array Elements',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to print all elements of an array.',
        problemStatement: 'Traverse an integer array and print each element separated by space using a standard loop.',
        input: 'int[] arr = {10, 20, 30, 40, 50};',
        output: '10 20 30 40 50',
        code: `public class PrintArray {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        
        System.out.print("Array elements: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}`
      },
      {
        id: 'cj-arr-2',
        topicId: 'arrays',
        number: 2,
        title: 'Find the Sum of Array Elements',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to calculate the sum of all elements in an integer array.',
        problemStatement: 'Iterate through the array, accumulate each element into a sum variable, and print the result.',
        input: 'int[] arr = {5, 10, 15, 20};',
        output: 'Sum: 50',
        code: `public class SumOfArray {
    public static void main(String[] args) {
        int[] arr = {5, 10, 15, 20};
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        System.out.println("Sum: " + sum);
    }
}`
      },
      {
        id: 'cj-arr-3',
        topicId: 'arrays',
        number: 3,
        title: 'Find the Largest Element',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find the maximum value in an array.',
        problemStatement: 'Initialize max with the first element and update it whenever a larger element is found.',
        input: 'int[] arr = {12, 45, 7, 89, 23};',
        output: 'Largest element: 89',
        code: `public class LargestElement {
    public static void main(String[] args) {
        int[] arr = {12, 45, 7, 89, 23};
        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println("Largest element: " + max);
    }
}`
      },
      {
        id: 'cj-arr-4',
        topicId: 'arrays',
        number: 4,
        title: 'Find the Smallest Element',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find the minimum value in an array.',
        problemStatement: 'Initialize min with the first element and compare each subsequent element to find the smallest.',
        input: 'int[] arr = {12, 45, 7, 89, 23};',
        output: 'Smallest element: 7',
        code: `public class SmallestElement {
    public static void main(String[] args) {
        int[] arr = {12, 45, 7, 89, 23};
        int min = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Smallest element: " + min);
    }
}`
      },
      {
        id: 'cj-arr-5',
        topicId: 'arrays',
        number: 5,
        title: 'Find the Second-Largest Distinct Element',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to find the second-largest distinct element in an array in a single pass.',
        problemStatement: 'Maintain two variables: largest and secondLargest. Update both in one traversal without sorting.',
        input: 'int[] arr = {10, 20, 4, 45, 99, 99};',
        output: 'Second largest: 45',
        code: `public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {10, 20, 4, 45, 99, 99};

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }

        System.out.println("Second largest: " + secondLargest);
    }
}`
      },
      {
        id: 'cj-arr-6',
        topicId: 'arrays',
        number: 6,
        title: 'Reverse an Array',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to reverse an array in-place using two pointers.',
        problemStatement: 'Use left and right pointers. Swap elements at left and right, increment left, decrement right until they meet.',
        input: 'int[] arr = {1, 2, 3, 4, 5};',
        output: 'Reversed: [5, 4, 3, 2, 1]',
        code: `import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int left = 0, right = arr.length - 1;

        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        System.out.println("Reversed: " + Arrays.toString(arr));
    }
}`
      },
      {
        id: 'cj-arr-7',
        topicId: 'arrays',
        number: 7,
        title: 'Sort an Array in Ascending Order',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to sort an array using Bubble Sort.',
        problemStatement: 'Compare adjacent elements repeatedly and swap them if they are in the wrong order.',
        input: 'int[] arr = {5, 2, 8, 1, 3};',
        output: 'Sorted: [1, 2, 3, 5, 8]',
        code: `import java.util.Arrays;

public class SortArray {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 3};

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        System.out.println("Sorted: " + Arrays.toString(arr));
    }
}`
      },
      {
        id: 'cj-arr-8',
        topicId: 'arrays',
        number: 8,
        title: 'Find Duplicate Elements in an Array',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find duplicate elements in an array using a HashSet.',
        problemStatement: 'Iterate through the array and add elements to a Set. If add() returns false, the element is a duplicate.',
        input: 'int[] arr = {1, 2, 3, 2, 4, 5, 1};',
        output: 'Duplicate: 2\nDuplicate: 1',
        code: `import java.util.HashSet;
import java.util.Set;

public class FindDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 5, 1};
        Set<Integer> seen = new HashSet<>();

        System.out.println("Duplicate elements:");
        for (int num : arr) {
            if (!seen.add(num)) {
                System.out.println("Duplicate: " + num);
            }
        }
    }
}`
      },
      {
        id: 'cj-arr-9',
        topicId: 'arrays',
        number: 9,
        title: 'Remove Duplicates from a Sorted Array',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to remove duplicates from a sorted array in-place.',
        problemStatement: 'Use a slow pointer to keep track of unique elements and overwrite duplicates.',
        input: 'int[] arr = {1, 1, 2, 2, 3, 4, 4};',
        output: 'Unique elements: [1, 2, 3, 4]',
        code: `public class RemoveDuplicatesSorted {
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 4, 4};
        int j = 0; // index of next unique element

        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] != arr[i + 1]) {
                arr[j++] = arr[i];
            }
        }
        arr[j++] = arr[arr.length - 1];

        System.out.print("Unique elements: [");
        for (int i = 0; i < j; i++) {
            System.out.print(arr[i] + (i < j - 1 ? ", " : ""));
        }
        System.out.println("]");
    }
}`
      },
      {
        id: 'cj-arr-10',
        topicId: 'arrays',
        number: 10,
        title: 'Find the Missing Number from 1 to N',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find the single missing number in an array containing numbers from 1 to N.',
        problemStatement: 'Compute expected sum using N * (N + 1) / 2 and subtract the actual array sum to find the missing value.',
        input: 'int[] arr = {1, 2, 4, 5, 6}; int n = 6;',
        output: 'Missing number: 3',
        code: `public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        int n = 6;

        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;

        for (int num : arr) {
            actualSum += num;
        }

        int missing = expectedSum - actualSum;
        System.out.println("Missing number: " + missing);
    }
}`
      },
      {
        id: 'cj-arr-11',
        topicId: 'arrays',
        number: 11,
        title: 'Move All Zeros to the End',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to move all zeros in an array to the end while maintaining relative order of non-zero elements.',
        problemStatement: 'Place all non-zero elements forward starting at index 0, then fill remaining slots with zeros.',
        input: 'int[] arr = {0, 1, 0, 3, 12};',
        output: '[1, 3, 12, 0, 0]',
        code: `import java.util.Arrays;

public class MoveZeros {
    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        int insertPos = 0;

        for (int num : arr) {
            if (num != 0) {
                arr[insertPos++] = num;
            }
        }

        while (insertPos < arr.length) {
            arr[insertPos++] = 0;
        }

        System.out.println("Result: " + Arrays.toString(arr));
    }
}`
      },
      {
        id: 'cj-arr-12',
        topicId: 'arrays',
        number: 12,
        title: 'Find the Frequency of Each Element',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to count the frequency of each element in an array using a HashMap.',
        problemStatement: 'Traverse the array and update element frequencies in a Map using getOrDefault.',
        input: 'int[] arr = {1, 2, 2, 3, 1, 4};',
        output: '1 -> 2 times\n2 -> 2 times\n3 -> 1 time\n4 -> 1 time',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class FrequencyCount {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 1, 4};
        Map<Integer, Integer> freqMap = new LinkedHashMap<>();

        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        freqMap.forEach((k, v) -> 
            System.out.println(k + " -> " + v + (v > 1 ? " times" : " time"))
        );
    }
}`
      },
      {
        id: 'cj-arr-13',
        topicId: 'arrays',
        number: 13,
        title: 'Find the Intersection of Two Arrays',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find common elements between two integer arrays.',
        problemStatement: 'Store elements of the first array in a Set, then check which elements of the second array exist in the set.',
        input: 'int[] arr1 = {1, 2, 3, 4}; int[] arr2 = {3, 4, 5, 6};',
        output: 'Common elements: [3, 4]',
        code: `import java.util.HashSet;
import java.util.Set;

public class ArrayIntersection {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4};
        int[] arr2 = {3, 4, 5, 6};

        Set<Integer> set1 = new HashSet<>();
        for (int num : arr1) set1.add(num);

        Set<Integer> intersection = new HashSet<>();
        for (int num : arr2) {
            if (set1.contains(num)) {
                intersection.add(num);
            }
        }

        System.out.println("Common elements: " + intersection);
    }
}`
      },
      {
        id: 'cj-arr-14',
        topicId: 'arrays',
        number: 14,
        title: 'Find Two Elements Whose Sum Equals a Target',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to find the indices of two numbers that add up to a specific target (Two Sum).',
        problemStatement: 'Use a HashMap to store values and their indices. For each element, check if target - num exists.',
        input: 'int[] arr = {2, 7, 11, 15}; int target = 9;',
        output: 'Indices: [0, 1] (Values: 2 + 7 = 9)',
        code: `import java.util.HashMap;
import java.util.Map;

public class TwoSumArray {
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];
            if (map.containsKey(complement)) {
                System.out.println("Indices: [" + map.get(complement) + ", " + i + "] (Values: " + complement + " + " + arr[i] + " = " + target + ")");
                return;
            }
            map.put(arr[i], i);
        }
    }
}`
      },
      {
        id: 'cj-arr-15',
        topicId: 'arrays',
        number: 15,
        title: 'Find the Maximum Sum Subarray (Kadane’s Algorithm)',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to find the contiguous subarray with the largest sum using Kadane’s Algorithm.',
        problemStatement: 'Maintain currentSum and maxSum. At each step, either extend the subarray or start fresh from current element.',
        input: 'int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};',
        output: 'Maximum Subarray Sum: 6',
        code: `public class MaxSubarraySum {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        int currentSum = arr[0];
        int maxSum = arr[0];

        for (int i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        System.out.println("Maximum Subarray Sum: " + maxSum);
    }
}`
      }
    ]
  },

  // ----------------------------------------------------
  // TOPIC 2: STRINGS (15 Questions)
  // ----------------------------------------------------
  {
    id: 'strings',
    title: 'Strings',
    questionCount: 15,
    description: '15 essential string interview coding problems with reversals, palindromes, anagrams, and frequency logic.',
    questions: [
      {
        id: 'cj-str-1',
        topicId: 'strings',
        number: 1,
        title: 'Reverse a String',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to reverse a string without using built-in reverse() method.',
        problemStatement: 'Loop from the last character to the first, or swap characters using a two-pointer approach on a char array.',
        input: 'String str = "hello";',
        output: 'Reversed: olleh',
        code: `public class ReverseString {
    public static void main(String[] args) {
        String str = "hello";
        String reversed = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }

        System.out.println("Reversed: " + reversed);
    }
}`
      },
      {
        id: 'cj-str-2',
        topicId: 'strings',
        number: 2,
        title: 'Check Whether a String is a Palindrome',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to check if a string reads the same backward as forward.',
        problemStatement: 'Use two pointers from start and end. Compare characters until pointers meet. If any mismatch occurs, it is not a palindrome.',
        input: 'String str = "madam";',
        output: 'madam is a Palindrome',
        code: `public class PalindromeString {
    public static void main(String[] args) {
        String str = "madam";
        boolean isPalindrome = true;
        int left = 0, right = str.length() - 1;

        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }

        if (isPalindrome) {
            System.out.println(str + " is a Palindrome");
        } else {
            System.out.println(str + " is NOT a Palindrome");
        }
    }
}`
      },
      {
        id: 'cj-str-3',
        topicId: 'strings',
        number: 3,
        title: 'Check Whether Two Strings are Anagrams',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to verify if two strings contain the exact same characters in any order.',
        problemStatement: 'Convert both strings to char arrays, sort both, and compare whether they are equal.',
        input: 'String s1 = "listen", s2 = "silent";',
        output: 'listen and silent are Anagrams',
        code: `import java.util.Arrays;

public class AnagramCheck {
    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";

        if (s1.length() != s2.length()) {
            System.out.println("Not Anagrams");
            return;
        }

        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        if (Arrays.equals(arr1, arr2)) {
            System.out.println(s1 + " and " + s2 + " are Anagrams");
        } else {
            System.out.println("Not Anagrams");
        }
    }
}`
      },
      {
        id: 'cj-str-4',
        topicId: 'strings',
        number: 4,
        title: 'Count Vowels and Consonants',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to count the number of vowels and consonants in a string.',
        problemStatement: 'Iterate through each character of the string, check if it is a vowel (a, e, i, o, u), consonant, or other.',
        input: 'String str = "Interview";',
        output: 'Vowels: 4, Consonants: 5',
        code: `public class CountVowelsConsonants {
    public static void main(String[] args) {
        String str = "Interview".toLowerCase();
        int vowels = 0, consonants = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);
    }
}`
      },
      {
        id: 'cj-str-5',
        topicId: 'strings',
        number: 5,
        title: 'Count Characters in a String',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to count the total characters in a string excluding whitespace.',
        problemStatement: 'Traverse string characters and increment a counter only for non-space characters.',
        input: 'String str = "Java Developer";',
        output: 'Total characters (excluding spaces): 13',
        code: `public class CountCharacters {
    public static void main(String[] args) {
        String str = "Java Developer";
        int count = 0;

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ' ') {
                count++;
            }
        }

        System.out.println("Total characters (excluding spaces): " + count);
    }
}`
      },
      {
        id: 'cj-str-6',
        topicId: 'strings',
        number: 6,
        title: 'Count the Frequency of Each Character',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to count occurrences of each character using HashMap.',
        problemStatement: 'Traverse the string and store character counts in a LinkedHashMap to preserve order.',
        input: 'String str = "programming";',
        output: 'p: 1\nr: 2\no: 1\ng: 2\na: 1\nm: 2\ni: 1\nn: 1',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class CharFrequency {
    public static void main(String[] args) {
        String str = "programming";
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        map.forEach((k, v) -> System.out.println(k + ": " + v));
    }
}`
      },
      {
        id: 'cj-str-7',
        topicId: 'strings',
        number: 7,
        title: 'Find Duplicate Characters in a String',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to print only the duplicate characters present in a string.',
        problemStatement: 'Count character frequencies with a Map, then filter and display characters with count > 1.',
        input: 'String str = "programming";',
        output: 'Duplicates: r, g, m',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class DuplicateCharacters {
    public static void main(String[] args) {
        String str = "programming";
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        System.out.print("Duplicates: ");
        map.forEach((k, v) -> {
            if (v > 1) System.out.print(k + " ");
        });
        System.out.println();
    }
}`
      },
      {
        id: 'cj-str-8',
        topicId: 'strings',
        number: 8,
        title: 'Find the First Non-Repeated Character',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to find the first character in a string that does not repeat.',
        problemStatement: 'Store character counts in a LinkedHashMap and find the first entry with count equal to 1.',
        input: 'String str = "swiss";',
        output: 'First non-repeated: w',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeated {
    public static void main(String[] args) {
        String str = "swiss";
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.println("First non-repeated: " + entry.getKey());
                return;
            }
        }
        System.out.println("No non-repeated character found");
    }
}`
      },
      {
        id: 'cj-str-9',
        topicId: 'strings',
        number: 9,
        title: 'Find the First Repeated Character',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find the first character that appears more than once in a string.',
        problemStatement: 'Iterate characters and insert into a HashSet. The first character that fails to insert is the first repeated.',
        input: 'String str = "swiss";',
        output: 'First repeated: s',
        code: `import java.util.HashSet;
import java.util.Set;

public class FirstRepeated {
    public static void main(String[] args) {
        String str = "swiss";
        Set<Character> seen = new HashSet<>();

        for (char ch : str.toCharArray()) {
            if (!seen.add(ch)) {
                System.out.println("First repeated: " + ch);
                return;
            }
        }
        System.out.println("No repeated character found");
    }
}`
      },
      {
        id: 'cj-str-10',
        topicId: 'strings',
        number: 10,
        title: 'Reverse Each Word in a Sentence',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to reverse every word in a sentence while keeping word positions identical.',
        problemStatement: 'Split the sentence by spaces, reverse each word using a StringBuilder, and join back with spaces.',
        input: 'String str = "Java is fun";',
        output: 'avaJ si nuf',
        code: `public class ReverseEachWord {
    public static void main(String[] args) {
        String str = "Java is fun";
        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            String reversedWord = new StringBuilder(word).reverse().toString();
            result.append(reversedWord).append(" ");
        }

        System.out.println(result.toString().trim());
    }
}`
      },
      {
        id: 'cj-str-11',
        topicId: 'strings',
        number: 11,
        title: 'Reverse the Order of Words in a Sentence',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to reverse the order of words in a sentence.',
        problemStatement: 'Split by space and traverse the resulting array from the last index down to 0.',
        input: 'String str = "Java is fun";',
        output: 'fun is Java',
        code: `public class ReverseWordOrder {
    public static void main(String[] args) {
        String str = "Java is fun";
        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();

        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]).append(i > 0 ? " " : "");
        }

        System.out.println(result.toString());
    }
}`
      },
      {
        id: 'cj-str-12',
        topicId: 'strings',
        number: 12,
        title: 'Remove Duplicate Characters',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to remove all duplicate characters from a string, keeping only the first occurrence.',
        problemStatement: 'Use a LinkedHashSet to preserve first-occurrence insertion order while filtering duplicates.',
        input: 'String str = "programming";',
        output: 'progamin',
        code: `import java.util.LinkedHashSet;
import java.util.Set;

public class RemoveDuplicateChars {
    public static void main(String[] args) {
        String str = "programming";
        Set<Character> set = new LinkedHashSet<>();

        for (char ch : str.toCharArray()) {
            set.add(ch);
        }

        StringBuilder sb = new StringBuilder();
        for (char ch : set) {
            sb.append(ch);
        }

        System.out.println(sb.toString());
    }
}`
      },
      {
        id: 'cj-str-13',
        topicId: 'strings',
        number: 13,
        title: 'Check Whether a String Contains Only Digits',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to check if a string contains numeric digits only.',
        problemStatement: 'Check each character with Character.isDigit(). If any character is not a digit, return false.',
        input: 'String str = "123456";',
        output: 'Contains only digits: true',
        code: `public class OnlyDigits {
    public static void main(String[] args) {
        String str = "123456";
        boolean onlyDigits = true;

        for (char ch : str.toCharArray()) {
            if (!Character.isDigit(ch)) {
                onlyDigits = false;
                break;
            }
        }

        System.out.println("Contains only digits: " + onlyDigits);
    }
}`
      },
      {
        id: 'cj-str-14',
        topicId: 'strings',
        number: 14,
        title: 'Find the Longest Substring Without Repeating Characters',
        isCoding: true,
        difficulty: 'Hard',
        question: 'Write a Java program to find the length of the longest substring containing unique characters.',
        problemStatement: 'Use a sliding window with a HashSet to store characters in the current window and track max length.',
        input: 'String str = "abcabcbb";',
        output: 'Longest unique substring length: 3 (Substrings: "abc")',
        code: `import java.util.HashSet;
import java.util.Set;

public class LongestUniqueSubstring {
    public static void main(String[] args) {
        String str = "abcabcbb";
        Set<Character> set = new HashSet<>();
        int left = 0, maxLength = 0;

        for (int right = 0; right < str.length(); right++) {
            while (set.contains(str.charAt(right))) {
                set.remove(str.charAt(left));
                left++;
            }
            set.add(str.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }

        System.out.println("Longest unique substring length: " + maxLength);
    }
}`
      },
      {
        id: 'cj-str-15',
        topicId: 'strings',
        number: 15,
        title: 'Compress Consecutive Characters (Run-Length Encoding)',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to perform basic string compression by counting consecutive character runs.',
        problemStatement: 'Count repeating consecutive characters and append character followed by its count.',
        input: 'String str = "aabcccccaaa";',
        output: 'Compressed: a2b1c5a3',
        code: `public class StringCompression {
    public static void main(String[] args) {
        String str = "aabcccccaaa";
        StringBuilder sb = new StringBuilder();
        int count = 1;

        for (int i = 0; i < str.length(); i++) {
            if (i + 1 < str.length() && str.charAt(i) == str.charAt(i + 1)) {
                count++;
            } else {
                sb.append(str.charAt(i)).append(count);
                count = 1;
            }
        }

        System.out.println("Compressed: " + sb.toString());
    }
}`
      }
    ]
  },

  // ----------------------------------------------------
  // TOPIC 3: COLLECTIONS FRAMEWORK (15 Questions)
  // ----------------------------------------------------
  {
    id: 'collections',
    title: 'Collections Framework',
    questionCount: 15,
    description: '15 crucial Java Collections interview questions covering List, Set, Map, Comparators, and Map-based coding.',
    questions: [
      {
        id: 'cj-col-1',
        topicId: 'collections',
        number: 1,
        title: 'What is the Collection Framework?',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the Collection Framework in Java?',
        answer: 'The Collection Framework is a unified architecture in Java containing interfaces (List, Set, Queue, Map) and classes (ArrayList, HashSet, HashMap) used to store, manage, and manipulate groups of objects efficiently.'
      },
      {
        id: 'cj-col-2',
        topicId: 'collections',
        number: 2,
        title: 'Difference between List, Set, and Map',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between List, Set, and Map in Java?',
        answer: '• List: Allows duplicate elements and preserves insertion order (e.g. ArrayList, LinkedList).\n• Set: Does not allow duplicate elements and ensures uniqueness (e.g. HashSet, TreeSet).\n• Map: Stores data in key-value pairs where keys must be unique (e.g. HashMap, TreeMap).'
      },
      {
        id: 'cj-col-3',
        topicId: 'collections',
        number: 3,
        title: 'Difference between ArrayList and LinkedList',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between ArrayList and LinkedList?',
        answer: '• ArrayList uses a dynamic resizable array, offering fast O(1) index access, but slower insertions/deletions in the middle.\n• LinkedList uses a doubly-linked list, offering efficient O(1) insertions and removals when the position is known, but slower O(n) index lookups.'
      },
      {
        id: 'cj-col-4',
        topicId: 'collections',
        number: 4,
        title: 'Difference between HashSet and TreeSet',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between HashSet and TreeSet?',
        answer: '• HashSet stores unique elements without guaranteeing order, backed by a Hash Table with O(1) lookup.\n• TreeSet stores unique elements in sorted ascending order, backed by a Red-Black Tree with O(log n) lookup.'
      },
      {
        id: 'cj-col-5',
        topicId: 'collections',
        number: 5,
        title: 'Difference between HashMap and Hashtable',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between HashMap and Hashtable?',
        answer: '• HashMap is not synchronized (not thread-safe), is faster, and allows one null key and multiple null values.\n• Hashtable is synchronized (thread-safe, legacy), is slower, and does not allow any null keys or null values.'
      },
      {
        id: 'cj-col-6',
        topicId: 'collections',
        number: 6,
        title: 'Difference between HashMap and TreeMap',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between HashMap and TreeMap?',
        answer: '• HashMap stores key-value pairs without guaranteeing any order, with O(1) time complexity.\n• TreeMap stores key-value pairs sorted in natural ascending order of keys (or via custom Comparator) with O(log n) time complexity.'
      },
      {
        id: 'cj-col-7',
        topicId: 'collections',
        number: 7,
        title: 'Difference between Comparable and Comparator',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between Comparable and Comparator?',
        answer: '• Comparable: Defines natural ordering of objects using compareTo() in java.lang. Modifies the original class.\n• Comparator: Defines custom multiple sorting strategies using compare() in java.util. Does not modify the original class.'
      },
      {
        id: 'cj-col-8',
        topicId: 'collections',
        number: 8,
        title: 'Difference between Iterator and ListIterator',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between Iterator and ListIterator?',
        answer: '• Iterator: Traverses any collection in the forward direction only and supports element removal.\n• ListIterator: Works only with List implementations, supports bidirectional traversal (forward and backward), and supports adding, replacing, and removing elements.'
      },
      {
        id: 'cj-col-9',
        topicId: 'collections',
        number: 9,
        title: 'Count Character Frequency Using HashMap',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to count the frequency of each character in a string using HashMap.',
        problemStatement: 'Iterate through string characters and populate a Map with character frequencies using entrySet() traversal.',
        input: 'String str = "developer";',
        output: 'd -> 1\ne -> 3\nv -> 1\nl -> 1\no -> 1\np -> 1\nr -> 1',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class CharFrequencyMap {
    public static void main(String[] args) {
        String str = "developer";
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`
      },
      {
        id: 'cj-col-10',
        topicId: 'collections',
        number: 10,
        title: 'Count Word Frequency Using HashMap',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to count the frequency of words in a sentence using HashMap.',
        problemStatement: 'Split the sentence into words and count occurrences of each word with a HashMap.',
        input: 'String sentence = "java is fun and java is powerful";',
        output: 'java -> 2\nis -> 2\nfun -> 1\nand -> 1\npowerful -> 1',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class WordFrequencyMap {
    public static void main(String[] args) {
        String sentence = "java is fun and java is powerful";
        String[] words = sentence.split(" ");
        Map<String, Integer> wordMap = new LinkedHashMap<>();

        for (String word : words) {
            wordMap.put(word, wordMap.getOrDefault(word, 0) + 1);
        }

        for (Map.Entry<String, Integer> entry : wordMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`
      },
      {
        id: 'cj-col-11',
        topicId: 'collections',
        number: 11,
        title: 'Find Duplicate Elements Using HashSet',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find duplicate elements from an array using HashSet.',
        problemStatement: 'Iterate through items and add to a Set. If add() returns false, collect as duplicate.',
        input: 'Integer[] items = {10, 20, 30, 20, 40, 10, 50};',
        output: 'Duplicate items: [20, 10]',
        code: `import java.util.HashSet;
import java.util.Set;

public class DuplicateHashSet {
    public static void main(String[] args) {
        int[] items = {10, 20, 30, 20, 40, 10, 50};
        Set<Integer> unique = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int item : items) {
            if (!unique.add(item)) {
                duplicates.add(item);
            }
        }

        System.out.println("Duplicate items: " + duplicates);
    }
}`
      },
      {
        id: 'cj-col-12',
        topicId: 'collections',
        number: 12,
        title: 'Find Repeated Words in a Sentence',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to find all repeated words in a sentence.',
        problemStatement: 'Split by space and use a Set to find words that appear more than once.',
        input: 'String text = "hello world hello java world";',
        output: 'Repeated words: [hello, world]',
        code: `import java.util.HashSet;
import java.util.Set;

public class RepeatedWords {
    public static void main(String[] args) {
        String text = "hello world hello java world";
        String[] words = text.split(" ");
        Set<String> seen = new HashSet<>();
        Set<String> repeated = new HashSet<>();

        for (String word : words) {
            if (!seen.add(word)) {
                repeated.add(word);
            }
        }

        System.out.println("Repeated words: " + repeated);
    }
}`
      },
      {
        id: 'cj-col-13',
        topicId: 'collections',
        number: 13,
        title: 'Find the Most Frequent Element Using HashMap',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to find the element that occurs with the highest frequency in an array.',
        problemStatement: 'Build a frequency map and find the key with maximum count.',
        input: 'int[] arr = {1, 3, 2, 1, 4, 1, 3, 3, 3};',
        output: 'Most frequent element: 3 (Occurred 4 times)',
        code: `import java.util.HashMap;
import java.util.Map;

public class MostFrequentElement {
    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 1, 4, 1, 3, 3, 3};
        Map<Integer, Integer> map = new HashMap<>();

        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int mostFrequent = arr[0];
        int maxCount = 0;

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }

        System.out.println("Most frequent element: " + mostFrequent + " (Occurred " + maxCount + " times)");
    }
}`
      },
      {
        id: 'cj-col-14',
        topicId: 'collections',
        number: 14,
        title: 'Remove Duplicate Elements from a List',
        isCoding: true,
        difficulty: 'Easy',
        question: 'Write a Java program to remove duplicates from an ArrayList while maintaining order.',
        problemStatement: 'Pass the List into a LinkedHashSet and convert back to a List.',
        input: 'List<String> list = Arrays.asList("apple", "banana", "apple", "orange", "banana");',
        output: 'List without duplicates: [apple, banana, orange]',
        code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;

public class RemoveDuplicatesList {
    public static void main(String[] args) {
        List<String> fruits = Arrays.asList("apple", "banana", "apple", "orange", "banana");
        
        // LinkedHashSet removes duplicates and preserves insertion order
        List<String> uniqueFruits = new ArrayList<>(new LinkedHashSet<>(fruits));

        System.out.println("List without duplicates: " + uniqueFruits);
    }
}`
      },
      {
        id: 'cj-col-15',
        topicId: 'collections',
        number: 15,
        title: 'Sort a List of Custom Objects Using Comparator',
        isCoding: true,
        difficulty: 'Medium',
        question: 'Write a Java program to sort a list of Employee objects by salary in descending order.',
        problemStatement: 'Create an Employee class and sort using Collections.sort with a custom Comparator.',
        input: 'Employees: Alice(50000), Bob(85000), Charlie(65000)',
        output: 'Bob: 85000\nCharlie: 65000\nAlice: 50000',
        code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Employee {
    String name;
    int salary;

    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }
}

public class SortEmployees {
    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee("Alice", 50000));
        list.add(new Employee("Bob", 85000));
        list.add(new Employee("Charlie", 65000));

        // Sort by salary descending
        Collections.sort(list, (e1, e2) -> e2.salary - e1.salary);

        for (Employee e : list) {
            System.out.println(e.name + ": " + e.salary);
        }
    }
}`
      }
    ]
  },

  // ----------------------------------------------------
  // TOPIC 4: EXCEPTION HANDLING (5 Questions)
  // ----------------------------------------------------
  {
    id: 'exceptions',
    title: 'Exception Handling',
    questionCount: 5,
    description: '5 high-impact Exception Handling interview questions covering try-catch-finally, checked vs unchecked, and custom exceptions.',
    questions: [
      {
        id: 'cj-ex-1',
        topicId: 'exceptions',
        number: 1,
        title: 'What is an Exception? Error vs Exception',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is an Exception in Java? What is the difference between Error and Exception?',
        answer: 'An Exception is an abnormal condition that occurs during program execution that can be caught and handled.\n• Error: Serious, fatal JVM-level problem that programs cannot recover from (e.g., OutOfMemoryError, StackOverflowError).\n• Exception: Conditions that an application can anticipate and recover from (e.g., IOException, NullPointerException).'
      },
      {
        id: 'cj-ex-2',
        topicId: 'exceptions',
        number: 2,
        title: 'Difference between Checked and Unchecked Exceptions',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between Checked and Unchecked Exceptions?',
        answer: '• Checked Exceptions: Checked at compile-time. Must be handled with try-catch or declared with throws (e.g., IOException, SQLException).\n• Unchecked Exceptions: Occur at runtime (subclasses of RuntimeException). Not checked by compiler (e.g., NullPointerException, ArithmeticException).'
      },
      {
        id: 'cj-ex-3',
        topicId: 'exceptions',
        number: 3,
        title: 'Explain try, catch, and finally',
        isCoding: false,
        difficulty: 'Easy',
        question: 'Explain the purpose of try, catch, and finally blocks.',
        answer: '• try: Encloses code that might throw an exception.\n• catch: Catches and handles the thrown exception.\n• finally: Always executes after try and catch blocks, whether an exception occurred or not (used for releasing resources like closing files or DB connections), unless System.exit(0) is called.'
      },
      {
        id: 'cj-ex-4',
        topicId: 'exceptions',
        number: 4,
        title: 'Difference between throw and throws',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between throw and throws in Java?',
        answer: '• throw: A keyword used inside a method body to explicitly throw an exception object (e.g., throw new IllegalArgumentException()).\n• throws: A keyword used in the method signature to declare exceptions that the caller must handle (e.g., void readFile() throws IOException).'
      },
      {
        id: 'cj-ex-5',
        topicId: 'exceptions',
        number: 5,
        title: 'What is a Custom Exception? Write a Program',
        isCoding: true,
        difficulty: 'Medium',
        question: 'What is a custom exception in Java? Write a complete program to demonstrate defining and throwing a custom exception.',
        problemStatement: 'Define a user-defined checked exception by extending Exception and throw it when age is less than 18.',
        input: 'int age = 15;',
        output: 'Caught Custom Exception: Age 15 is not eligible to vote',
        code: `// 1. Defining custom exception class
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    // 2. Declaring throws in method signature
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age " + age + " is not eligible to vote");
        }
        System.out.println("Eligible to vote!");
    }

    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught Custom Exception: " + e.getMessage());
        }
    }
}`
      }
    ]
  },

  // ----------------------------------------------------
  // TOPIC 5: MULTITHREADING (5 Questions)
  // ----------------------------------------------------
  {
    id: 'multithreading',
    title: 'Multithreading',
    questionCount: 5,
    description: '5 essential Multithreading interview questions covering thread creation, start() vs run(), synchronization, and deadlocks.',
    questions: [
      {
        id: 'cj-mt-1',
        topicId: 'multithreading',
        number: 1,
        title: 'What is Multithreading? How do you create a thread?',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is Multithreading in Java? How can we create a thread?',
        answer: 'Multithreading is executing multiple threads concurrently within a single program to maximize CPU utilization.\nIn Java, threads are created in two ways:\n1. Extending the Thread class and overriding run().\n2. Implementing the Runnable interface and passing it to a Thread object (preferred approach).'
      },
      {
        id: 'cj-mt-2',
        topicId: 'multithreading',
        number: 2,
        title: 'Difference between Thread and Runnable',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between extending Thread and implementing Runnable?',
        answer: '• Extending Thread: A class cannot extend any other class because Java does not support multiple inheritance of classes.\n• Implementing Runnable: Recommended because the class can still extend another class, promotes loose coupling, and supports lambda expressions.'
      },
      {
        id: 'cj-mt-3',
        topicId: 'multithreading',
        number: 3,
        title: 'Difference between start() and run()',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is the difference between start() and run() in Multithreading?',
        answer: '• start(): Spawns a new operating system thread and then internally invokes the run() method asynchronously.\n• run(): If called directly, executes like a normal synchronous method in the current thread without starting a new thread.'
      },
      {
        id: 'cj-mt-4',
        topicId: 'multithreading',
        number: 4,
        title: 'What is Synchronization? Explain with an example',
        isCoding: true,
        difficulty: 'Medium',
        question: 'What is Synchronization in Java? Write a program demonstrating a synchronized method to prevent race conditions.',
        problemStatement: 'Use the synchronized keyword on a shared counter method so only one thread can modify count at a time.',
        input: 'Two threads incrementing shared counter 1000 times each',
        output: 'Final Count: 2000',
        code: `class Counter {
    private int count = 0;

    // synchronized ensures only one thread executes at a time
    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SyncDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Final Count: " + counter.getCount());
    }
}`
      },
      {
        id: 'cj-mt-5',
        topicId: 'multithreading',
        number: 5,
        title: 'What is Deadlock?',
        isCoding: false,
        difficulty: 'Easy',
        question: 'What is Deadlock in Multithreading and how can it be avoided?',
        answer: 'Deadlock is a situation where two or more threads are permanently blocked, each waiting for a lock held by the other.\nExample: Thread 1 holds Lock A and waits for Lock B; Thread 2 holds Lock B and waits for Lock A.\nPrevention: Acquire locks in a consistent global order, use tryLock() with timeouts, and avoid nested locks.'
      }
    ]
  }
];
