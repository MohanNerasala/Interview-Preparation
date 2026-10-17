// ========================================================
// CORE JAVA CODING & INTERVIEW PREPARATION DATA
// 5 Topics | Exactly 65 Questions with Complete Java Code
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
  // TOPIC 3: COLLECTIONS FRAMEWORK (25 Questions)
  // ----------------------------------------------------
  {
    id: 'collections',
    title: 'Collections Framework',
    questionCount: 25,
    description: '25 crucial Java Collections interview coding questions covering HashMap, HashSet, LinkedHashMap, TreeMap, PriorityQueue, and Deque across 3 levels.',
    questions: [
      {
        id: "cj-col-1",
        topicId: "collections",
        number: 1,
        title: "Count the frequency of each character in a String",
        isCoding: true,
        difficulty: "Easy",
        question: "Given a string, count the frequency of each character using Java's HashMap.",
        input: "String s = \"interview preparation\";",
        output: "{ =1, a=2, p=2, r=3, e=3, t=2, v=1, w=1, i=3, n=1, o=1}",
        explanation: "Iterate through each character using str.toCharArray(). Use freqMap.getOrDefault(ch, 0) + 1 to increment the count in O(1) average time per character.",
        code: `import java.util.HashMap;
import java.util.Map;

public class CharFrequency {
    public static void main(String[] args) {
        String str = "interview preparation";
        Map<Character, Integer> freqMap = new HashMap<>();

        for (char ch : str.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }

        System.out.println("Character Frequencies: " + freqMap);
    }
}`
      },
      {
        id: "cj-col-2",
        topicId: "collections",
        number: 2,
        title: "Count the frequency of each word in a String",
        isCoding: true,
        difficulty: "Easy",
        question: "Given a sentence or string of words, count how many times each word occurs using HashMap and iterate through the results using entrySet().",
        input: "String text = \"java python java spring boot java python spring\";",
        output: "boot -> 1\\npython -> 2\\njava -> 3\\nspring -> 2",
        explanation: "Split the string into words using regular expression \\\\s+. Store the count in a HashMap and use entrySet() to access both word (key) and frequency (value) without extra map lookups.",
        code: `import java.util.HashMap;
import java.util.Map;

public class WordFrequency {
    public static void main(String[] args) {
        String text = "java python java spring boot java python spring";
        String[] words = text.toLowerCase().split("\\s+");
        Map<String, Integer> wordCount = new HashMap<>();

        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        // Iterating using entrySet()
        System.out.println("Word Frequencies:");
        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`
      },
      {
        id: "cj-col-3",
        topicId: "collections",
        number: 3,
        title: "Find duplicate characters in a String",
        isCoding: true,
        difficulty: "Easy",
        question: "Given a string, find all characters that appear more than once using a HashMap.",
        input: "String str = \"programming language\";",
        output: "Duplicate characters: [a, r, g, m, n]",
        explanation: "Build a frequency map of characters. Then filter keys whose mapped value is greater than 1 using entrySet().",
        code: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DuplicateCharacters {
    public static void main(String[] args) {
        String str = "programming language";
        Map<Character, Integer> charMap = new HashMap<>();

        for (char c : str.toCharArray()) {
            if (c != ' ') { // Ignore spaces
                charMap.put(c, charMap.getOrDefault(c, 0) + 1);
            }
        }

        List<Character> duplicates = new ArrayList<>();
        for (Map.Entry<Character, Integer> entry : charMap.entrySet()) {
            if (entry.getValue() > 1) {
                duplicates.add(entry.getKey());
            }
        }

        System.out.println("Duplicate characters: " + duplicates);
    }
}`
      },
      {
        id: "cj-col-4",
        topicId: "collections",
        number: 4,
        title: "Find the first non-repeated character in a String",
        isCoding: true,
        difficulty: "Easy",
        question: "Find the first character in a string that does not repeat. Use LinkedHashMap to preserve the order in which characters were encountered.",
        input: "String str = \"swiss\";",
        output: "First non-repeated character: 'w'",
        explanation: "LinkedHashMap retains the chronological insertion order of elements. The first key with a count of 1 is guaranteed to be the first non-repeating character.",
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeatedChar {
    public static void main(String[] args) {
        String str = "swiss";
        Map<Character, Integer> counts = new LinkedHashMap<>();

        // LinkedHashMap preserves character insertion order
        for (char ch : str.toCharArray()) {
            counts.put(ch, counts.getOrDefault(ch, 0) + 1);
        }

        Character result = null;
        for (Map.Entry<Character, Integer> entry : counts.entrySet()) {
            if (entry.getValue() == 1) {
                result = entry.getKey();
                break;
            }
        }

        if (result != null) {
            System.out.println("First non-repeated character: '" + result + "'");
        } else {
            System.out.println("No non-repeated character found.");
        }
    }
}`
      },
      {
        id: "cj-col-5",
        topicId: "collections",
        number: 5,
        title: "Find the first repeated character in a String",
        isCoding: true,
        difficulty: "Easy",
        question: "Given a string, find the first character that repeats as you scan from left to right. Use HashSet's add() method which returns false for duplicates.",
        input: "String str = \"interview\";",
        output: "First repeated character: 'i'",
        explanation: "HashSet.add() returns false when trying to insert an element already present in the set. The moment false is returned, we have found the first repeated character.",
        code: `import java.util.HashSet;
import java.util.Set;

public class FirstRepeatedChar {
    public static void main(String[] args) {
        String str = "interview";
        Set<Character> seen = new HashSet<>();
        Character firstRepeat = null;

        for (char ch : str.toCharArray()) {
            // set.add(ch) returns false if element is already present
            if (!seen.add(ch)) {
                firstRepeat = ch;
                break;
            }
        }

        if (firstRepeat != null) {
            System.out.println("First repeated character: '" + firstRepeat + "'");
        } else {
            System.out.println("No repeated character found.");
        }
    }
}`
      },
      {
        id: "cj-col-6",
        topicId: "collections",
        number: 6,
        title: "Find duplicate elements in an ArrayList",
        isCoding: true,
        difficulty: "Easy",
        question: "Given an ArrayList with duplicate elements, extract all duplicate values using a HashSet.",
        input: "List<Integer> list = Arrays.asList(10, 20, 30, 20, 40, 50, 30, 60, 20);",
        output: "Duplicate elements: [20, 30]",
        explanation: "Maintain two sets: uniqueSet to track encountered items, and duplicateSet to store items that fail to be added into uniqueSet.",
        code: `import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class FindDuplicatesArrayList {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(10, 20, 30, 20, 40, 50, 30, 60, 20);
        Set<Integer> uniqueSet = new HashSet<>();
        Set<Integer> duplicateSet = new HashSet<>();

        for (Integer num : list) {
            if (!uniqueSet.add(num)) {
                duplicateSet.add(num);
            }
        }

        System.out.println("Original List: " + list);
        System.out.println("Duplicate elements: " + duplicateSet);
    }
}`
      },
      {
        id: "cj-col-7",
        topicId: "collections",
        number: 7,
        title: "Remove duplicate elements from an ArrayList",
        isCoding: true,
        difficulty: "Easy",
        question: "Given an ArrayList with duplicate items, remove all duplicates while preserving the original order using LinkedHashSet.",
        input: "List<Integer> list = Arrays.asList(10, 20, 20, 30, 40, 40, 50, 10);",
        output: "After removing duplicates: [10, 20, 30, 40, 50]",
        explanation: "LinkedHashSet removes duplicates in O(N) time while preserving the original list sequence. Re-wrapping in an ArrayList restores the list interface.",
        code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

public class RemoveDuplicatesArrayList {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(10, 20, 20, 30, 40, 40, 50, 10));

        // LinkedHashSet retains insertion order and discards duplicates
        Set<Integer> set = new LinkedHashSet<>(list);
        List<Integer> uniqueList = new ArrayList<>(set);

        System.out.println("Original: " + list);
        System.out.println("After removing duplicates: " + uniqueList);
    }
}`
      },
      {
        id: "cj-col-8",
        topicId: "collections",
        number: 8,
        title: "Count the frequency of each element in an array",
        isCoding: true,
        difficulty: "Easy",
        question: "Given an integer array, find the occurrence count of each unique number using a HashMap.",
        input: "int[] arr = {1, 2, 8, 3, 2, 2, 2, 5, 1};",
        output: "{1=2, 2=4, 3=1, 5=1, 8=1}",
        explanation: "Each array element is mapped to its frequency count using HashMap.put() with getOrDefault(). Iterating over entrySet() prints each unique value and count.",
        code: `import java.util.HashMap;
import java.util.Map;

public class ArrayElementFrequency {
    public static void main(String[] args) {
        int[] arr = {1, 2, 8, 3, 2, 2, 2, 5, 1};
        Map<Integer, Integer> freqMap = new HashMap<>();

        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        System.out.println("Element Frequencies:");
        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            System.out.println(entry.getKey() + " occurs " + entry.getValue() + " time(s)");
        }
    }
}`
      },
      {
        id: "cj-col-9",
        topicId: "collections",
        number: 9,
        title: "Find the most frequently occurring element in an array",
        isCoding: true,
        difficulty: "Easy",
        question: "Find the element that appears the maximum number of times in an array using a HashMap.",
        input: "int[] arr = {1, 3, 2, 1, 4, 1, 3, 3, 1, 5};",
        output: "Most frequent element: 1 (Frequency: 4)",
        explanation: "Store counts in a HashMap, then find the entry with the highest value in O(N) time and O(N) space.",
        code: `import java.util.HashMap;
import java.util.Map;

public class MostFrequentElement {
    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 1, 4, 1, 3, 3, 1, 5};
        Map<Integer, Integer> freq = new HashMap<>();

        for (int num : arr) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        int maxElement = arr[0];
        int maxCount = 0;

        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                maxElement = entry.getKey();
            }
        }

        System.out.println("Most frequent element: " + maxElement + " (Frequency: " + maxCount + ")");
    }
}`
      },
      {
        id: "cj-col-10",
        topicId: "collections",
        number: 10,
        title: "Sort a HashMap by its keys",
        isCoding: true,
        difficulty: "Easy",
        question: "Sort an unsorted HashMap based on its keys in natural ascending order using TreeMap.",
        input: "HashMap: {Banana=2, Apple=5, Orange=3, Mango=7}",
        output: "Sorted by Keys: {Apple=5, Banana=2, Mango=7, Orange=3}",
        explanation: "TreeMap is a Red-Black tree-based NavigableMap implementation. Initializing a TreeMap with an existing Map automatically orders all entries by keys in O(N log N) time.",
        code: `import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class SortHashMapByKeys {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("Banana", 2);
        map.put("Apple", 5);
        map.put("Orange", 3);
        map.put("Mango", 7);

        System.out.println("Before Sorting: " + map);

        // Passing HashMap into TreeMap automatically sorts keys in natural order
        Map<String, Integer> sortedMap = new TreeMap<>(map);

        System.out.println("Sorted by Keys (TreeMap): " + sortedMap);
    }
}`
      },
      {
        id: "cj-col-11",
        topicId: "collections",
        number: 11,
        title: "Sort a HashMap by its values",
        isCoding: true,
        difficulty: "Medium",
        question: "Given a HashMap, sort its entries by values (ascending order) using a List of Map.Entry and a Comparator, then store the result into a LinkedHashMap.",
        input: "Map: {\"Alice\"=85, \"Bob\"=92, \"Charlie\"=78, \"David\"=95}",
        output: "Sorted by Values: {Charlie=78, Alice=85, Bob=92, David=95}",
        explanation: "Because Map interfaces do not provide value-based ordering, entries are copied into an ArrayList, sorted via Map.Entry.comparingByValue(), and collected into a LinkedHashMap.",
        code: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class SortHashMapByValues {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 85);
        scores.put("Bob", 92);
        scores.put("Charlie", 78);
        scores.put("David", 95);

        // 1. Convert entrySet into a List
        List<Map.Entry<String, Integer>> entryList = new ArrayList<>(scores.entrySet());

        // 2. Sort using Map.Entry.comparingByValue()
        entryList.sort(Map.Entry.comparingByValue());

        // 3. Put into LinkedHashMap to preserve sorted sequence
        Map<String, Integer> sortedMap = new LinkedHashMap<>();
        for (Map.Entry<String, Integer> entry : entryList) {
            sortedMap.put(entry.getKey(), entry.getValue());
        }

        System.out.println("Sorted by Values: " + sortedMap);
    }
}`
      },
      {
        id: "cj-col-12",
        topicId: "collections",
        number: 12,
        title: "Find the first non-repeated element in an array",
        isCoding: true,
        difficulty: "Medium",
        question: "Find the first element in an array of numbers that does not repeat anywhere in the array using LinkedHashMap.",
        input: "int[] arr = {4, 5, 1, 2, 0, 4, 1, 2};",
        output: "First non-repeated element: 5",
        explanation: "LinkedHashMap retains the chronological arrival order. By scanning the entries in insertion order, the first key with count 1 is the first non-repeated element in O(N) time.",
        code: `import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeatedArrayElement {
    public static void main(String[] args) {
        int[] arr = {4, 5, 1, 2, 0, 4, 1, 2};
        Map<Integer, Integer> map = new LinkedHashMap<>();

        // LinkedHashMap preserves array element encounter order
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        Integer result = null;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                result = entry.getKey();
                break;
            }
        }

        if (result != null) {
            System.out.println("First non-repeated element: " + result);
        } else {
            System.out.println("No non-repeated element found.");
        }
    }
}`
      },
      {
        id: "cj-col-13",
        topicId: "collections",
        number: 13,
        title: "Find the common elements between two arrays",
        isCoding: true,
        difficulty: "Medium",
        question: "Given two integer arrays, find all unique elements present in both arrays using HashSet.",
        input: "arr1 = [1, 4, 9, 73, 2, 6], arr2 = [2, 3, 89, 4, 7, 2]",
        output: "Common Elements: [2, 4]",
        explanation: "Store elements of the first array in a HashSet for O(1) lookup. Iterate through the second array; if an element is in set1, add it to commonSet.",
        code: `import java.util.HashSet;
import java.util.Set;

public class CommonElementsTwoArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 4, 9, 73, 2, 6};
        int[] arr2 = {2, 3, 89, 4, 7, 2};

        Set<Integer> set1 = new HashSet<>();
        for (int num : arr1) {
            set1.add(num);
        }

        Set<Integer> commonSet = new HashSet<>();
        for (int num : arr2) {
            if (set1.contains(num)) {
                commonSet.add(num);
            }
        }

        System.out.println("Common Elements: " + commonSet);
    }
}`
      },
      {
        id: "cj-col-14",
        topicId: "collections",
        number: 14,
        title: "Check whether two Strings are anagrams",
        isCoding: true,
        difficulty: "Medium",
        question: "Determine if two strings are anagrams (contain identical characters with identical frequencies) using a frequency HashMap.",
        input: "String s1 = \"listen\", String s2 = \"silent\";",
        output: "Are \"listen\" and \"silent\" anagrams? true",
        explanation: "Increment character frequencies for string 1 and decrement for string 2. If the map ends up empty and lengths match, the two strings are anagrams.",
        code: `import java.util.HashMap;
import java.util.Map;

public class AnagramCheck {
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;

        Map<Character, Integer> charCount = new HashMap<>();

        for (char c : s1.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        for (char c : s2.toCharArray()) {
            if (!charCount.containsKey(c)) return false;
            charCount.put(c, charCount.get(c) - 1);
            if (charCount.get(c) == 0) {
                charCount.remove(c);
            }
        }

        return charCount.isEmpty();
    }

    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";
        System.out.println("Are \"" + s1 + "\" and \"" + s2 + "\" anagrams? " + isAnagram(s1, s2));
    }
}`
      },
      {
        id: "cj-col-15",
        topicId: "collections",
        number: 15,
        title: "Find the top two most frequent elements in an array",
        isCoding: true,
        difficulty: "Medium",
        question: "Given an array, determine the top two elements that occur most frequently using a frequency HashMap.",
        input: "int[] arr = {1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5};",
        output: "Top 1: 4 (Frequency: 4)\\nTop 2: 1 (Frequency: 3)",
        explanation: "Count frequencies using HashMap, convert entries to a List, and sort descending by value using a lambda comparator to extract top 1 and top 2.",
        code: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TopTwoFrequentElements {
    public static void main(String[] args) {
        int[] arr = {1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5};
        Map<Integer, Integer> freqMap = new HashMap<>();

        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        // Sort entries by frequency descending
        List<Map.Entry<Integer, Integer>> list = new ArrayList<>(freqMap.entrySet());
        list.sort((e1, e2) -> e2.getValue() - e1.getValue());

        System.out.println("Top 1: " + list.get(0).getKey() + " (Frequency: " + list.get(0).getValue() + ")");
        if (list.size() > 1) {
            System.out.println("Top 2: " + list.get(1).getKey() + " (Frequency: " + list.get(1).getValue() + ")");
        }
    }
}`
      },
      {
        id: "cj-col-16",
        topicId: "collections",
        number: 16,
        title: "Group words that are anagrams",
        isCoding: true,
        difficulty: "Medium",
        question: "Given an array of strings, group anagrams together using HashMap<String, List<String>> where the sorted character representation serves as the map key.",
        input: "String[] words = {\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"};",
        output: "Grouped Anagrams: [[eat, tea, ate], [tan, nat], [bat]]",
        explanation: "All anagrams produce the exact same string when their characters are sorted. Use that sorted string as a key in HashMap<String, List<String>>.",
        code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();

        for (String word : strs) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String sortedKey = new String(chars);

            map.putIfAbsent(sortedKey, new ArrayList<>());
            map.get(sortedKey).add(word);
        }

        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> grouped = groupAnagrams(words);
        System.out.println("Grouped Anagrams: " + grouped);
    }
}`
      },
      {
        id: "cj-col-17",
        topicId: "collections",
        number: 17,
        title: "Find the union of two arrays without duplicates",
        isCoding: true,
        difficulty: "Medium",
        question: "Find the union of two arrays containing all distinct elements from both arrays using LinkedHashSet.",
        input: "int[] arr1 = {1, 2, 3, 4, 5}; int[] arr2 = {1, 2, 3, 6, 7};",
        output: "Union without duplicates: [1, 2, 3, 4, 5, 6, 7]",
        explanation: "A Set automatically ignores duplicates. Using LinkedHashSet preserves the encounter sequence of both arrays.",
        code: `import java.util.LinkedHashSet;
import java.util.Set;

public class UnionOfArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {1, 2, 3, 6, 7};

        Set<Integer> unionSet = new LinkedHashSet<>();

        for (int num : arr1) unionSet.add(num);
        for (int num : arr2) unionSet.add(num);

        System.out.println("Union without duplicates: " + unionSet);
    }
}`
      },
      {
        id: "cj-col-18",
        topicId: "collections",
        number: 18,
        title: "Find the intersection of two arrays without duplicates",
        isCoding: true,
        difficulty: "Medium",
        question: "Compute the intersection of two arrays returning only unique common values using HashSet.",
        input: "int[] arr1 = {1, 2, 2, 1, 3}; int[] arr2 = {2, 2, 3, 4};",
        output: "Intersection: [2, 3]",
        explanation: "Collect elements of array 1 in a HashSet. For array 2, add elements to intersection only if set1 contains them. This ensures O(N + M) time complexity.",
        code: `import java.util.HashSet;
import java.util.Set;

public class IntersectionOfArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 2, 1, 3};
        int[] arr2 = {2, 2, 3, 4};

        Set<Integer> set1 = new HashSet<>();
        for (int num : arr1) {
            set1.add(num);
        }

        Set<Integer> intersection = new HashSet<>();
        for (int num : arr2) {
            if (set1.contains(num)) {
                intersection.add(num);
            }
        }

        System.out.println("Intersection: " + intersection);
    }
}`
      },
      {
        id: "cj-col-19",
        topicId: "collections",
        number: 19,
        title: "Find the pair of elements whose sum equals a target",
        isCoding: true,
        difficulty: "Medium",
        question: "Given an array of integers and a target sum, find indices or elements that add up to the target in O(N) time using a HashMap.",
        input: "int[] arr = {2, 7, 11, 15}, target = 9",
        output: "Pair found: 2 + 7 = 9\\nIndices: [0, 1]",
        explanation: "For each element arr[i], compute complement = target - arr[i]. Check if complement is in the HashMap in O(1) time before storing the current element.",
        code: `import java.util.HashMap;
import java.util.Map;

public class TwoSumHashMap {
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;

        // Map stores: element value -> array index
        Map<Integer, Integer> map = new HashMap<>();
        boolean found = false;

        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];
            if (map.containsKey(complement)) {
                System.out.println("Pair found: " + complement + " + " + arr[i] + " = " + target);
                System.out.println("Indices: [" + map.get(complement) + ", " + i + "]");
                found = true;
                break;
            }
            map.put(arr[i], i);
        }

        if (!found) {
            System.out.println("No pair with sum " + target + " exists.");
        }
    }
}`
      },
      {
        id: "cj-col-20",
        topicId: "collections",
        number: 20,
        title: "Find the element that appears more than N/2 times",
        isCoding: true,
        difficulty: "Medium",
        question: "Find the majority element in an array of size N that appears strictly more than N/2 times using a HashMap.",
        input: "int[] arr = {3, 3, 4, 2, 4, 4, 2, 4, 4} (N = 9)",
        output: "Majority Element (> N/2): 4",
        explanation: "Increment the occurrence count of each number in the HashMap. As soon as any element's count surpasses n / 2, return it.",
        code: `import java.util.HashMap;
import java.util.Map;

public class MajorityElement {
    public static void main(String[] args) {
        int[] arr = {3, 3, 4, 2, 4, 4, 2, 4, 4};
        int n = arr.length;
        Map<Integer, Integer> countMap = new HashMap<>();

        Integer majority = null;
        for (int num : arr) {
            int count = countMap.getOrDefault(num, 0) + 1;
            countMap.put(num, count);
            if (count > n / 2) {
                majority = num;
                break;
            }
        }

        if (majority != null) {
            System.out.println("Majority Element (> N/2): " + majority);
        } else {
            System.out.println("No majority element found.");
        }
    }
}`
      },
      {
        id: "cj-col-21",
        topicId: "collections",
        number: 21,
        title: "Find the longest consecutive sequence in an array",
        isCoding: true,
        difficulty: "Hard",
        question: "Given an unsorted array of integers, find the length of the longest consecutive elements sequence in O(N) time using HashSet.",
        input: "int[] arr = {100, 4, 200, 1, 3, 2};",
        output: "Longest Consecutive Sequence Length: 4",
        explanation: "Insert all numbers into a HashSet. Only start a streak count if num - 1 is absent, ensuring each number is visited at most twice for a guaranteed O(N) runtime.",
        code: `import java.util.HashSet;
import java.util.Set;

public class LongestConsecutiveSequence {
    public static int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }

        int longestStreak = 0;

        for (int num : numSet) {
            // Only start counting if num is the start of a sequence (num - 1 not in set)
            if (!numSet.contains(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;

                while (numSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }

    public static void main(String[] args) {
        int[] arr = {100, 4, 200, 1, 3, 2};
        System.out.println("Longest Consecutive Sequence Length: " + longestConsecutive(arr));
    }
}`
      },
      {
        id: "cj-col-22",
        topicId: "collections",
        number: 22,
        title: "Find the K most frequent elements in an array",
        isCoding: true,
        difficulty: "Hard",
        question: "Given an integer array and an integer k, return the k most frequent elements using HashMap and a Min-Heap (PriorityQueue).",
        input: "int[] arr = {1, 1, 1, 2, 2, 3, 3, 3, 3, 4}, k = 2",
        output: "Top 2 Most Frequent Elements: [3, 1]",
        explanation: "Use HashMap to count frequencies, then maintain a Min-Heap (PriorityQueue) of size k. Running time is O(N log K), optimal when k is smaller than N.",
        code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

public class TopKFrequentElements {
    public static List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int n : nums) {
            freqMap.put(n, freqMap.getOrDefault(n, 0) + 1);
        }

        // Min-Heap ordered by frequency ascending
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap =
            new PriorityQueue<>(Comparator.comparingInt(Map.Entry::getValue));

        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll(); // Discard element with smaller frequency
            }
        }

        List<Integer> result = new ArrayList<>();
        while (!minHeap.isEmpty()) {
            result.add(minHeap.poll().getKey());
        }
        Collections.reverse(result);
        return result;
    }

    public static void main(String[] args) {
        int[] arr = {1, 1, 1, 2, 2, 3, 3, 3, 3, 4};
        int k = 2;
        System.out.println("Top " + k + " Most Frequent Elements: " + topKFrequent(arr, k));
    }
}`
      },
      {
        id: "cj-col-23",
        topicId: "collections",
        number: 23,
        title: "Find all pairs with a given difference",
        isCoding: true,
        difficulty: "Hard",
        question: "Given an integer array and a difference value k, find all unique pairs (a, b) such that b - a = diff using HashSet.",
        input: "int[] arr = {1, 5, 3, 4, 2}, diff = 2",
        output: "Pairs with difference 2:\\n(1, 3)\\n(2, 4)\\n(3, 5)",
        explanation: "Load all unique numbers into a HashSet. For every number num in the set, check if num + diff exists in O(1) time.",
        code: `import java.util.HashSet;
import java.util.Set;

public class PairsWithDifference {
    public static void main(String[] args) {
        int[] arr = {1, 5, 3, 4, 2};
        int diff = 2;

        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }

        System.out.println("Pairs with difference " + diff + ":");
        for (int num : set) {
            if (set.contains(num + diff)) {
                System.out.println("(" + num + ", " + (num + diff) + ")");
            }
        }
    }
}`
      },
      {
        id: "cj-col-24",
        topicId: "collections",
        number: 24,
        title: "Find the character with the highest frequency in a String",
        isCoding: true,
        difficulty: "Hard",
        question: "Find the character that appears the maximum number of times in a string using a HashMap and iterating via entrySet().",
        input: "String str = \"successes\";",
        output: "Character with highest frequency: 's' (Occurrences: 4)",
        explanation: "Count each character's occurrences with HashMap. Iterate over entrySet() to locate the entry with the highest value in O(N) time.",
        code: `import java.util.HashMap;
import java.util.Map;

public class HighestFrequencyChar {
    public static void main(String[] args) {
        String str = "successes";
        Map<Character, Integer> charMap = new HashMap<>();

        for (char ch : str.toCharArray()) {
            charMap.put(ch, charMap.getOrDefault(ch, 0) + 1);
        }

        char maxChar = ' ';
        int maxCount = 0;

        // Iterate through entrySet()
        for (Map.Entry<Character, Integer> entry : charMap.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                maxChar = entry.getKey();
            }
        }

        System.out.println("Character with highest frequency: '" + maxChar + "' (Occurrences: " + maxCount + ")");
    }
}`
      },
      {
        id: "cj-col-25",
        topicId: "collections",
        number: 25,
        title: "Check whether parentheses are balanced",
        isCoding: true,
        difficulty: "Hard",
        question: "Given a string containing brackets '(', ')', '{', '}', '[' and ']', determine if the brackets are balanced using ArrayDeque as a LIFO Stack from the Java Collections Framework.",
        input: "String s1 = \"{[()]()}\", String s2 = \"{[(])}\";",
        output: "{[()]()} -> Balanced\\n{[(])} -> Not Balanced",
        explanation: "ArrayDeque provides an unsynchronized, highly performant LIFO Stack in the Java Collections Framework. Push opening brackets; pop and match on closing brackets.",
        code: `import java.util.ArrayDeque;
import java.util.Deque;

public class BalancedParentheses {
    public static boolean isBalanced(String s) {
        // In modern Java, Deque (ArrayDeque) is preferred over legacy java.util.Stack
        Deque<Character> stack = new ArrayDeque<>();

        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else if (ch == ')' || ch == '}' || ch == ']') {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((ch == ')' && top != '(') ||
                    (ch == '}' && top != '{') ||
                    (ch == ']' && top != '[')) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {
        String test1 = "{[()]()}";
        String test2 = "{[(])}";

        System.out.println(test1 + " -> " + (isBalanced(test1) ? "Balanced" : "Not Balanced"));
        System.out.println(test2 + " -> " + (isBalanced(test2) ? "Balanced" : "Not Balanced"));
    }
}`
      }
    ]
  },

  // ----------------------------------------------------
  // TOPIC: EXCEPTION HANDLING (5 Questions)
  // ----------------------------------------------------
  {
    id: 'exceptions',
    title: 'Exception Handling',
    questionCount: 5,
    description: "5 essential Exception Handling interview coding programs covering try-catch, multiple catch blocks, custom exceptions, propagation, and finally block.",
    questions: [
      {
        id: "cj-ex-1",
        topicId: "exceptions",
        number: 1,
        title: "Handle ArithmeticException Using try-catch",
        isCoding: true,
        difficulty: "Easy",
        question: "Write a Java program to handle ArithmeticException using try-catch.",
        input: "int a = 10, b = 0;",
        output: "Cannot divide by zero: / by zero\nProgram execution continues normally.",
        explanation: "Division by zero throws an ArithmeticException at runtime. Enclosing the division in a try block and handling it with a catch block prevents program termination.",
        code: `public class ArithmeticExceptionDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }

        System.out.println("Program execution continues normally.");
    }
}`
      },
      {
        id: "cj-ex-2",
        topicId: "exceptions",
        number: 2,
        title: "Handle Multiple Exceptions Using Multiple Catch Blocks",
        isCoding: true,
        difficulty: "Easy",
        question: "Write a Java program to handle multiple exceptions using multiple catch blocks.",
        input: "int[] numbers = new int[5]; int a = 10, b = 2; numbers[10] = 50;",
        output: "Division: 5\nArray index out of bounds: Index 10 out of bounds for length 5\nExecution finished safely.",
        explanation: "Multiple catch blocks allow specific handling for each exception type. Subclasses must be caught before parent Exception classes to avoid unreachable code compile errors.",
        code: `public class MultipleCatchDemo {
    public static void main(String[] args) {
        try {
            int[] numbers = new int[5];
            int a = 10;
            int b = 2;
            int div = a / b;
            System.out.println("Division: " + div);

            // Accessing invalid index throws ArrayIndexOutOfBoundsException
            numbers[10] = 50;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception caught: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General Exception caught: " + e.getMessage());
        }

        System.out.println("Execution finished safely.");
    }
}`
      },
      {
        id: "cj-ex-3",
        topicId: "exceptions",
        number: 3,
        title: "Create and Handle Custom Exception (InvalidAgeException)",
        isCoding: true,
        difficulty: "Medium",
        question: "Write a Java program to create and handle a custom exception called InvalidAgeException.",
        input: "int age = 15;",
        output: "Caught Custom Exception: Invalid age: 15. Must be 18 or above to vote.",
        explanation: "Custom exceptions extend Exception (checked) or RuntimeException (unchecked). Throw the instance using 'throw new InvalidAgeException(...)' and catch it with try-catch.",
        code: `// Custom Exception class
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Invalid age: " + age + ". Must be 18 or above to vote.");
        }
        System.out.println("Age is valid. Eligible to vote!");
    }

    public static void main(String[] args) {
        int age = 15;
        try {
            validateAge(age);
        } catch (InvalidAgeException e) {
            System.out.println("Caught Custom Exception: " + e.getMessage());
        }
    }
}`
      },
      {
        id: "cj-ex-4",
        topicId: "exceptions",
        number: 4,
        title: "Demonstrate Exception Propagation Using throws",
        isCoding: true,
        difficulty: "Medium",
        question: "Write a Java program to demonstrate exception propagation using throws.",
        input: "Call methodA() -> methodB() -> methodC() with 50 / 0",
        output: "Exception caught in main: / by zero\nProgram terminated gracefully.",
        explanation: "When an exception occurs, JVM walks up the call stack looking for a matching catch block. If not caught, it propagates to the caller method until caught or handled by JVM.",
        code: `public class ExceptionPropagationDemo {
    // Exception originates in methodC and propagates up the call stack
    static void methodC() {
        int result = 50 / 0; // Unchecked ArithmeticException
    }

    static void methodB() {
        methodC();
    }

    static void methodA() {
        methodB();
    }

    public static void main(String[] args) {
        try {
            methodA();
        } catch (ArithmeticException e) {
            System.out.println("Exception caught in main: " + e.getMessage());
        }

        System.out.println("Program terminated gracefully.");
    }
}`
      },
      {
        id: "cj-ex-5",
        topicId: "exceptions",
        number: 5,
        title: "Demonstrate Execution of the finally Block",
        isCoding: true,
        difficulty: "Easy",
        question: "Write a Java program to demonstrate the execution of the finally block in exception handling.",
        input: "int data = 25 / 0;",
        output: "Inside try block (divide by zero)\nInside catch block: / by zero\nInside finally block: Cleanup executed!\nProgram continues after try-catch-finally.",
        explanation: "The finally block always executes whether an exception occurs, is caught, or does not occur at all. It is primarily used to close file streams and database connections.",
        code: `public class FinallyBlockDemo {
    public static void main(String[] args) {
        try {
            System.out.println("Inside try block (divide by zero)");
            int data = 25 / 0;
            System.out.println("Result: " + data);
        } catch (ArithmeticException e) {
            System.out.println("Inside catch block: " + e.getMessage());
        } finally {
            System.out.println("Inside finally block: Cleanup executed!");
        }

        System.out.println("Program continues after try-catch-finally.");
    }
}`
      }
    ]
  },

  // ----------------------------------------------------
  // TOPIC: MULTITHREADING (5 Questions)
  // ----------------------------------------------------
  {
    id: 'multithreading',
    title: 'Multithreading',
    questionCount: 5,
    description: "5 essential Multithreading interview coding programs covering Thread class, Runnable interface, synchronized keyword, wait/notify, and sleep/join/priority.",
    questions: [
      {
        id: "cj-mt-1",
        topicId: "multithreading",
        number: 1,
        title: "Create a Thread by Extending Thread Class",
        isCoding: true,
        difficulty: "Easy",
        question: "Write a Java program to create a thread by extending the Thread class.",
        input: "MyThread t1 = new MyThread(); t1.start();",
        output: "Main thread running: main\nWorker thread running: Thread-0\nThread-0 -> Count: 1\nThread-0 -> Count: 2\nThread-0 -> Count: 3",
        explanation: "Extending Thread requires overriding run(). Calling start() initiates a new thread of execution in JVM.",
        code: `class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Worker thread running: " + Thread.currentThread().getName());
        for (int i = 1; i <= 3; i++) {
            System.out.println(Thread.currentThread().getName() + " -> Count: " + i);
        }
    }
}

public class ThreadClassDemo {
    public static void main(String[] args) {
        System.out.println("Main thread running: " + Thread.currentThread().getName());
        MyThread t1 = new MyThread();
        t1.start(); // Spawns new thread and invokes run() asynchronously
    }
}`
      },
      {
        id: "cj-mt-2",
        topicId: "multithreading",
        number: 2,
        title: "Create a Thread by Implementing Runnable Interface",
        isCoding: true,
        difficulty: "Easy",
        question: "Write a Java program to create a thread by implementing the Runnable interface.",
        input: "Thread t = new Thread(new MyRunnableTask()); t.start();",
        output: "Runnable task executing on thread: Thread-0\nTask iteration: 1\nTask iteration: 2\nTask iteration: 3",
        explanation: "Implementing Runnable is preferred because Java only supports single class inheritance. The class remains open to extend another base class.",
        code: `class MyRunnableTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable task executing on thread: " + Thread.currentThread().getName());
        for (int i = 1; i <= 3; i++) {
            System.out.println("Task iteration: " + i);
        }
    }
}

public class RunnableInterfaceDemo {
    public static void main(String[] args) {
        MyRunnableTask task = new MyRunnableTask();
        Thread thread = new Thread(task);
        thread.start();
    }
}`
      },
      {
        id: "cj-mt-3",
        topicId: "multithreading",
        number: 3,
        title: "Demonstrate Thread Synchronization Using synchronized",
        isCoding: true,
        difficulty: "Medium",
        question: "Write a Java program to demonstrate thread synchronization using the synchronized keyword.",
        input: "2 threads incrementing a shared counter 1,000 times each",
        output: "Final synchronized counter value: 2000 (Consistent & Thread-Safe)",
        explanation: "synchronized ensures that only one thread executes increment() at a time on the counter instance, preventing race conditions and lost updates.",
        code: `class Counter {
    private int count = 0;

    // synchronized keyword prevents race conditions
    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizationDemo {
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

        System.out.println("Final synchronized counter value: " + counter.getCount());
    }
}`
      },
      {
        id: "cj-mt-4",
        topicId: "multithreading",
        number: 4,
        title: "Demonstrate Inter-Thread Communication Using wait() and notify()",
        isCoding: true,
        difficulty: "Hard",
        question: "Write a Java program to demonstrate inter-thread communication using wait(), notify(), and notifyAll().",
        input: "withdrawThread attempts to withdraw 15000 -> waits; depositThread deposits 20000 -> notifies",
        output: "Withdrawing 15000...\nInsufficient balance (10000). Waiting for deposit...\nDepositing 20000...\nDeposit completed. Notifying waiting threads...\nWithdrawal of 15000 completed! Remaining balance: 15000",
        explanation: "wait() releases the monitor lock and suspends the thread. notify() wakes up a waiting thread once state changes (e.g., funds deposited).",
        code: `class BankAccount {
    private int balance = 10000;

    public synchronized void withdraw(int amount) {
        System.out.println("Withdrawing " + amount + "...");
        while (balance < amount) {
            System.out.println("Insufficient balance (" + balance + "). Waiting for deposit...");
            try {
                wait(); // Releases lock and pauses until notified
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        balance -= amount;
        System.out.println("Withdrawal of " + amount + " completed! Remaining balance: " + balance);
    }

    public synchronized void deposit(int amount) {
        System.out.println("Depositing " + amount + "...");
        balance += amount;
        System.out.println("Deposit completed. Notifying waiting threads...");
        notify(); // Wakes up one thread waiting on this object monitor
    }
}

public class InterThreadCommunicationDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        Thread withdrawThread = new Thread(() -> account.withdraw(15000));
        Thread depositThread = new Thread(() -> {
            try {
                Thread.sleep(1000); // 1-second delay before depositing
            } catch (InterruptedException e) {}
            account.deposit(20000);
        });

        withdrawThread.start();
        depositThread.start();
    }
}`
      },
      {
        id: "cj-mt-5",
        topicId: "multithreading",
        number: 5,
        title: "Demonstrate Thread Execution Using sleep(), join(), and Priorities",
        isCoding: true,
        difficulty: "Medium",
        question: "Write a Java program to demonstrate thread execution using sleep(), join(), and thread priorities.",
        input: "t1 (priority 1) sleeps 500ms; t2 (priority 10) runs; main calls t1.join() and t2.join()",
        output: "Worker-1 Priority: 1\nWorker-2 Priority: 10\nThread 2 executing immediately.\nThread 1 executing (sleeping 500ms)...\nThread 1 completed.\nMain resumed after join(). All threads finished.",
        explanation: "sleep() pauses execution without losing locks. join() makes the calling thread wait for completion. Priorities give execution hints to the thread scheduler.",
        code: `public class ThreadLifecycleDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            try {
                System.out.println("Thread 1 executing (sleeping 500ms)...");
                Thread.sleep(500); // Pauses thread for 500ms
                System.out.println("Thread 1 completed.");
            } catch (InterruptedException e) {
                System.out.println("Thread 1 interrupted");
            }
        }, "Worker-1");

        Thread t2 = new Thread(() -> {
            System.out.println("Thread 2 executing immediately.");
        }, "Worker-2");

        // Thread Priorities (1 to 10)
        t1.setPriority(Thread.MIN_PRIORITY); // 1
        t2.setPriority(Thread.MAX_PRIORITY); // 10

        System.out.println(t1.getName() + " Priority: " + t1.getPriority());
        System.out.println(t2.getName() + " Priority: " + t2.getPriority());

        t1.start();
        t2.start();

        // join() halts current thread until the target thread finishes execution
        t1.join();
        t2.join();

        System.out.println("Main resumed after join(). All threads finished.");
    }
}`
      }
    ]
  }
];
