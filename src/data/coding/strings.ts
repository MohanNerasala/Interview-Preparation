import type { CodingQuestion } from '../../types/codingQuestion';

export const stringQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q11',
    number: 11,
    title: 'Reverse a String',
    category: 'Strings',
    difficulty: 'Easy',
    problem: 'Write a Java program to reverse a given string using a two-pointer character array approach without built-in reverse functions.',
    input: '"interview"',
    output: '"weivretni"',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        char[] arr = str.toCharArray();
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        String reversed = new String(arr);
        System.out.println("Reversed string: " + reversed);
    }
}`,
    dryRun: 'left=0 (\'i\'), right=8 (\'w\'). Swap: arr becomes "we...i". Increment left=1, decrement right=7. Continue swapping inwards until left >= right.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) for char array',
  },
  {
    id: 'dsa-q12',
    number: 12,
    title: 'Check Palindrome String',
    category: 'Strings',
    difficulty: 'Easy',
    problem: 'Check whether a string reads the same forwards and backwards (case-insensitive and ignoring non-alphanumeric characters or standard two-pointer check).',
    input: '"madam"',
    output: '"madam" is a Palindrome',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine().toLowerCase();

        int left = 0;
        int right = str.length() - 1;
        boolean isPalindrome = true;

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
            System.out.println(str + " is Not a Palindrome");
        }
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q13',
    number: 13,
    title: 'Count Vowels and Consonants',
    category: 'Strings',
    difficulty: 'Easy',
    problem: 'Count the total number of vowels (a, e, i, o, u) and consonants in a given English string.',
    input: '"Java Developer"',
    output: 'Vowels: 5, Consonants: 8',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine().toLowerCase();

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

        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q14',
    number: 14,
    title: 'Count Character Frequency',
    category: 'Strings',
    difficulty: 'Easy',
    problem: 'Count the occurrence of each character in a string using an integer frequency array for lowercase/ASCII characters.',
    input: '"apple"',
    output: 'a: 1, e: 1, l: 1, p: 2',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        int[] freq = new int[256]; // ASCII array

        for (int i = 0; i < str.length(); i++) {
            freq[str.charAt(i)]++;
        }

        System.out.println("Character Frequencies:");
        for (int i = 0; i < 256; i++) {
            if (freq[i] > 0) {
                System.out.println((char) i + ": " + freq[i]);
            }
        }
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) - fixed 256-element array',
  },
  {
    id: 'dsa-q15',
    number: 15,
    title: 'Find Duplicate Characters',
    category: 'Strings',
    difficulty: 'Easy',
    problem: 'Find and print all characters that appear more than once in a given string.',
    input: '"programming"',
    output: 'Duplicate characters: g, m, r',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        int[] count = new int[256];

        for (int i = 0; i < str.length(); i++) {
            count[str.charAt(i)]++;
        }

        System.out.println("Duplicate characters:");
        for (int i = 0; i < 256; i++) {
            if (count[i] > 1 && (char) i != ' ') {
                System.out.println((char) i + " (count: " + count[i] + ")");
            }
        }
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q16',
    number: 16,
    title: 'Check Anagram Strings',
    category: 'Strings',
    difficulty: 'Medium',
    problem: 'Two strings are anagrams if they contain the exact same characters with the exact same frequencies in any order (e.g., "listen" and "silent").',
    input: 's1 = "listen", s2 = "silent"',
    output: 'Strings are Anagrams',
    javaSolution: `import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String s1 = sc.nextLine().replaceAll("\\\\s", "").toLowerCase();
        System.out.print("Enter second string: ");
        String s2 = sc.nextLine().replaceAll("\\\\s", "").toLowerCase();

        if (s1.length() != s2.length()) {
            System.out.println("Strings are Not Anagrams");
            return;
        }

        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();

        Arrays.sort(a1);
        Arrays.sort(a2);

        if (Arrays.equals(a1, a2)) {
            System.out.println("Strings are Anagrams");
        } else {
            System.out.println("Strings are Not Anagrams");
        }
    }
}`,
    timeComplexity: 'O(n log n) due to sorting (or O(n) with frequency array)',
    spaceComplexity: 'O(n) for char arrays',
  },
  {
    id: 'dsa-q17',
    number: 17,
    title: 'Remove Duplicate Characters',
    category: 'Strings',
    difficulty: 'Medium',
    problem: 'Remove duplicate characters from a string, retaining only the first occurrence of each character while preserving order.',
    input: '"banana"',
    output: '"ban"',
    javaSolution: `import java.util.Scanner;
import java.util.LinkedHashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        // LinkedHashSet maintains insertion order while ensuring uniqueness
        Set<Character> seen = new LinkedHashSet<>();
        for (char c : str.toCharArray()) {
            seen.add(c);
        }

        StringBuilder sb = new StringBuilder();
        for (char c : seen) {
            sb.append(c);
        }

        System.out.println("After removing duplicates: " + sb.toString());
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q18',
    number: 18,
    title: 'Find First Non-Repeating Character',
    category: 'Strings',
    difficulty: 'Medium',
    problem: 'Find the first character in a string that occurs only once. If none exists, report no unique character found.',
    input: '"swiss"',
    output: 'First non-repeating character is: w',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        int[] count = new int[256];

        // Step 1: Count frequency of each character
        for (int i = 0; i < str.length(); i++) {
            count[str.charAt(i)]++;
        }

        // Step 2: Find first character with count == 1
        char result = 0;
        for (int i = 0; i < str.length(); i++) {
            if (count[str.charAt(i)] == 1) {
                result = str.charAt(i);
                break;
            }
        }

        if (result != 0) {
            System.out.println("First non-repeating character is: " + result);
        } else {
            System.out.println("No non-repeating character found.");
        }
    }
}`,
    timeComplexity: 'O(n) - two linear passes',
    spaceComplexity: 'O(1) - fixed 256 array',
  },
  {
    id: 'dsa-q19',
    number: 19,
    title: 'Find First Repeating Character',
    category: 'Strings',
    difficulty: 'Medium',
    problem: 'Find the first character that repeats in a string when reading left to right.',
    input: '"geeksforgeeks"',
    output: 'First repeating character is: e',
    javaSolution: `import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        Set<Character> seen = new HashSet<>();
        char firstRepeating = 0;

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (seen.contains(c)) {
                firstRepeating = c;
                break;
            }
            seen.add(c);
        }

        if (firstRepeating != 0) {
            System.out.println("First repeating character is: " + firstRepeating);
        } else {
            System.out.println("No repeating characters found.");
        }
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q20',
    number: 20,
    title: 'Count Words in a String',
    category: 'Strings',
    difficulty: 'Easy',
    problem: 'Count the total number of words separated by whitespace in a sentence, properly ignoring leading, trailing, and multiple consecutive spaces.',
    input: '"  Java   Full  Stack Developer  "',
    output: 'Total words: 4',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String str = sc.nextLine().trim();

        if (str.isEmpty()) {
            System.out.println("Total words: 0");
            return;
        }

        // Split by one or more whitespace characters
        String[] words = str.split("\\\\s+");
        System.out.println("Total words: " + words.length);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) for words array',
  },
  {
    id: 'dsa-q21',
    number: 21,
    title: 'Reverse Words in a Sentence',
    category: 'Strings',
    difficulty: 'Medium',
    problem: 'Reverse the order of words in a sentence while keeping individual word spellings intact (e.g. "I love Java" -> "Java love I").',
    input: '"I love Java"',
    output: '"Java love I"',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine().trim();

        String[] words = sentence.split("\\\\s+");
        StringBuilder sb = new StringBuilder();

        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]);
            if (i > 0) {
                sb.append(" ");
            }
        }

        System.out.println("Reversed sentence: " + sb.toString());
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q22',
    number: 22,
    title: 'Longest Substring Without Repeating Characters',
    category: 'Strings',
    difficulty: 'Hard',
    problem: 'Given a string, find the length of the longest contiguous substring that contains no duplicate characters (Sliding Window technique).',
    input: '"abcabcbb"',
    output: 'Length: 3 ("abc")',
    javaSolution: `import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s = sc.nextLine();

        Map<Character, Integer> lastSeen = new HashMap<>();
        int maxLength = 0;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);

            // If character seen within current window, slide left pointer
            if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) {
                left = lastSeen.get(c) + 1;
            }

            lastSeen.put(c, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        System.out.println("Longest substring without repeating characters length: " + maxLength);
    }
}`,
    dryRun: 's = "abcabcbb". right=0(\'a\'): left=0, len=1. right=1(\'b\'): len=2. right=2(\'c\'): len=3. right=3(\'a\'): \'a\' seen at 0 >= left(0) -> left = 1. Window now "bca", len=3. Continue sliding window. Max length remains 3.',
    timeComplexity: 'O(n) - each character visited at most twice',
    spaceComplexity: 'O(min(n, 26)) - hash map storing character positions',
  },
];
