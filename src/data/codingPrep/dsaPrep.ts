// ========================================================
// DSA & CODING PREPARATION DATA
// 10 Categories | Exactly 30 Curated Interview Problems
// ========================================================

export interface DsaProblem {
  id: string;
  category: 'Arrays' | 'Strings' | 'Hashing' | 'Two Pointers' | 'Sliding Window' | 'Searching & Sorting' | 'Linked List' | 'Stack & Queue' | 'Recursion' | 'Basic Math';
  number: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  problemStatement: string;
  input: string;
  output: string;
  code: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export const dsaProblems: DsaProblem[] = [
  // ----------------------------------------------------
  // ARRAYS
  // ----------------------------------------------------
  {
    id: 'dsa-1',
    category: 'Arrays',
    number: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    problemStatement: 'Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.',
    input: 'int[] nums = {2, 7, 11, 15}; int target = 9;',
    output: '[0, 1]',
    code: `import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        System.out.println("Indices: " + Arrays.toString(twoSum(nums, target)));
    }
}`,
    explanation: 'Store each visited number and its index in a HashMap. For each new number, check if its complement (target - num) exists in O(1) time.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-2',
    category: 'Arrays',
    number: 2,
    title: 'Second Largest Element',
    difficulty: 'Easy',
    problemStatement: 'Given an array of integers, find the second largest distinct element in a single pass without sorting.',
    input: 'int[] arr = {12, 35, 1, 10, 34, 1};',
    output: '34',
    code: `public class SecondLargestElement {
    public static int findSecondLargest(int[] arr) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return (second == Integer.MIN_VALUE) ? -1 : second;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println("Second Largest: " + findSecondLargest(arr));
    }
}`,
    explanation: 'Track the largest and second largest elements simultaneously in one linear pass.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-3',
    category: 'Arrays',
    number: 3,
    title: 'Move Zeros to the End',
    difficulty: 'Easy',
    problemStatement: 'Given an integer array, move all 0s to the end of it while maintaining the relative order of the non-zero elements in-place.',
    input: 'int[] nums = {0, 1, 0, 3, 12};',
    output: '[1, 3, 12, 0, 0]',
    code: `import java.util.Arrays;

public class MoveZerosEnd {
    public static void moveZeroes(int[] nums) {
        int insertPos = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[insertPos++] = num;
            }
        }
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }

    public static void main(String[] args) {
        int[] nums = {0, 1, 0, 3, 12};
        moveZeroes(nums);
        System.out.println(Arrays.toString(nums));
    }
}`,
    explanation: 'Copy all non-zero numbers to the front using an insertion pointer, then pad the rest with zeroes.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-4',
    category: 'Arrays',
    number: 4,
    title: 'Remove Duplicates from a Sorted Array',
    difficulty: 'Easy',
    problemStatement: 'Given an integer array sorted in non-decreasing order, remove duplicates in-place such that each unique element appears only once.',
    input: 'int[] nums = {1, 1, 2, 2, 3, 4, 4};',
    output: 'k = 4, nums = [1, 2, 3, 4]',
    code: `public class RemoveDuplicatesSortedArray {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }

    public static void main(String[] args) {
        int[] nums = {1, 1, 2, 2, 3, 4, 4};
        int k = removeDuplicates(nums);
        System.out.print("k = " + k + ", unique elements: ");
        for (int idx = 0; idx < k; idx++) System.out.print(nums[idx] + " ");
        System.out.println();
    }
}`,
    explanation: 'Use a slow pointer i and fast pointer j. Whenever a new unique value is found at j, increment i and copy.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-5',
    category: 'Arrays',
    number: 5,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    problemStatement: 'Find the maximum profit you can achieve by picking one day to buy and a future day to sell.',
    input: 'int[] prices = {7, 1, 5, 3, 6, 4};',
    output: 'Max Profit: 5',
    code: `public class StockBuySell {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println("Max Profit: " + maxProfit(prices));
    }
}`,
    explanation: 'Keep track of the minimum purchase price seen so far and calculate potential profit on each day.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-6',
    category: 'Arrays',
    number: 6,
    title: 'Maximum Subarray Sum (Kadane’s Algorithm)',
    difficulty: 'Medium',
    problemStatement: 'Given an integer array, find the subarray with the largest sum and return its sum.',
    input: 'int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};',
    output: '6 (Subarray: [4, -1, 2, 1])',
    code: `public class KadanesMaxSubarray {
    public static int maxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum Subarray Sum: " + maxSubArray(nums));
    }
}`,
    explanation: 'At every position, decide whether to append current element to previous sum or start fresh from current element.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-7',
    category: 'Arrays',
    number: 7,
    title: 'Missing Number in Array',
    difficulty: 'Easy',
    problemStatement: 'Given an array containing n distinct numbers in the range [0, n], return the only number in the range that is missing.',
    input: 'int[] nums = {3, 0, 1};',
    output: '2',
    code: `public class MissingNumberDsa {
    public static int missingNumber(int[] nums) {
        int n = nums.length;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : nums) actualSum += num;
        return expectedSum - actualSum;
    }

    public static void main(String[] args) {
        int[] nums = {3, 0, 1};
        System.out.println("Missing number: " + missingNumber(nums));
    }
}`,
    explanation: 'Sum of first n integers is n*(n+1)/2. Subtract array elements to find the missing number.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-8',
    category: 'Arrays',
    number: 8,
    title: 'Majority Element (Boyer-Moore Voting)',
    difficulty: 'Easy',
    problemStatement: 'Given an array of size n, find the majority element that appears more than ⌊n / 2⌋ times.',
    input: 'int[] nums = {2, 2, 1, 1, 1, 2, 2};',
    output: '2',
    code: `public class MajorityElement {
    public static int majorityElement(int[] nums) {
        int candidate = nums[0], count = 0;
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }

    public static void main(String[] args) {
        int[] nums = {2, 2, 1, 1, 1, 2, 2};
        System.out.println("Majority Element: " + majorityElement(nums));
    }
}`,
    explanation: 'Boyer-Moore Voting Algorithm cancels out different elements, leaving the majority element candidate standing.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },

  // ----------------------------------------------------
  // STRINGS
  // ----------------------------------------------------
  {
    id: 'dsa-9',
    category: 'Strings',
    number: 9,
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    problemStatement: 'Given a string, determine if it is a palindrome considering only alphanumeric characters and ignoring cases.',
    input: 'String s = "A man, a plan, a canal: Panama";',
    output: 'true',
    code: `public class ValidPalindrome {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        String s = "A man, a plan, a canal: Panama";
        System.out.println("Is Palindrome: " + isPalindrome(s));
    }
}`,
    explanation: 'Two pointers skip non-alphanumeric symbols and compare characters case-insensitively.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-10',
    category: 'Strings',
    number: 10,
    title: 'Valid Anagram',
    difficulty: 'Easy',
    problemStatement: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    input: 'String s = "anagram", t = "nagaram";',
    output: 'true',
    code: `public class ValidAnagram {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] counts = new int[26];
        for (int i = 0; i < s.length(); i++) {
            counts[s.charAt(i) - 'a']++;
            counts[t.charAt(i) - 'a']--;
        }
        for (int c : counts) {
            if (c != 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        String s = "anagram", t = "nagaram";
        System.out.println("Is Anagram: " + isAnagram(s, t));
    }
}`,
    explanation: 'Use a single 26-element array: increment for chars in s and decrement for chars in t. All counts must be 0.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-11',
    category: 'Strings',
    number: 11,
    title: 'First Non-Repeating Character in a String',
    difficulty: 'Easy',
    problemStatement: 'Find the index of the first non-repeating character in a string. Return -1 if it does not exist.',
    input: 'String s = "leetcode";',
    output: 'Index: 0 (Character: \'l\')',
    code: `public class FirstUniqueChar {
    public static int firstUniqChar(String s) {
        int[] freq = new int[26];
        for (char c : s.toCharArray()) freq[c - 'a']++;
        for (int i = 0; i < s.length(); i++) {
            if (freq[s.charAt(i) - 'a'] == 1) return i;
        }
        return -1;
    }

    public static void main(String[] args) {
        String s = "leetcode";
        int idx = firstUniqChar(s);
        System.out.println("First non-repeating index: " + idx);
    }
}`,
    explanation: 'First pass counts frequencies; second pass checks which character has frequency 1.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-12',
    category: 'Strings',
    number: 12,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    problemStatement: 'Given a string, find the length of the longest substring without duplicate characters.',
    input: 'String s = "abcabcbb";',
    output: '3 ("abc")',
    code: `import java.util.HashSet;
import java.util.Set;

public class LongestUniqueSubstr {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> window = new HashSet<>();
        int left = 0, maxLength = 0;
        for (int right = 0; right < s.length(); right++) {
            while (window.contains(s.charAt(right))) {
                window.remove(s.charAt(left));
                left++;
            }
            window.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        String s = "abcabcbb";
        System.out.println("Length: " + lengthOfLongestSubstring(s));
    }
}`,
    explanation: 'Sliding window technique using a Set to maintain characters of the current substring.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-13',
    category: 'Strings',
    number: 13,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    problemStatement: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    input: 'String s = "()[]{}";',
    output: 'true',
    code: `import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        String s = "()[]{}";
        System.out.println("Is Valid: " + isValid(s));
    }
}`,
    explanation: 'Push expected closing parentheses onto a Stack. For closing symbols, pop and match.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-14',
    category: 'Strings',
    number: 14,
    title: 'Reverse Words in a String',
    difficulty: 'Medium',
    problemStatement: 'Given an input string s, reverse the order of the words while eliminating extra whitespace.',
    input: 'String s = "the sky is blue";',
    output: '"blue is sky the"',
    code: `public class ReverseWordsString {
    public static String reverseWords(String s) {
        String[] parts = s.trim().split("\\\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = parts.length - 1; i >= 0; i--) {
            sb.append(parts[i]);
            if (i > 0) sb.append(" ");
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        String s = "the sky is blue";
        System.out.println("Reversed: " + reverseWords(s));
    }
}`,
    explanation: 'Split by regex whitespace \\\\s+, loop backwards, and concatenate with single spaces.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },

  // ----------------------------------------------------
  // HASHING
  // ----------------------------------------------------
  {
    id: 'dsa-15',
    category: 'Hashing',
    number: 15,
    title: 'Character Frequency Using HashMap',
    difficulty: 'Easy',
    problemStatement: 'Count the frequency of each character in a given string using HashMap.',
    input: 'String str = "banana";',
    output: '{b=1, a=3, n=2}',
    code: `import java.util.LinkedHashMap;
import java.util.Map;

public class CharFreqDsa {
    public static void main(String[] args) {
        String str = "banana";
        Map<Character, Integer> freq = new LinkedHashMap<>();
        for (char c : str.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        System.out.println(freq);
    }
}`,
    explanation: 'Traverse string, update count with getOrDefault(c, 0) + 1.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k)'
  },
  {
    id: 'dsa-16',
    category: 'Hashing',
    number: 16,
    title: 'Find Duplicate Elements in Array',
    difficulty: 'Easy',
    problemStatement: 'Find all duplicate numbers in an integer array using a HashSet.',
    input: 'int[] arr = {4, 3, 2, 7, 8, 2, 3, 1};',
    output: 'Duplicates: [2, 3]',
    code: `import java.util.HashSet;
import java.util.Set;

public class FindDuplicatesDsa {
    public static void main(String[] args) {
        int[] arr = {4, 3, 2, 7, 8, 2, 3, 1};
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int num : arr) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        System.out.println("Duplicates: " + duplicates);
    }
}`,
    explanation: 'seen.add() returns false when an item already exists in the set.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-17',
    category: 'Hashing',
    number: 17,
    title: 'Find the Most Frequent Element',
    difficulty: 'Easy',
    problemStatement: 'Find the element that appears the most times in an array.',
    input: 'int[] arr = {1, 3, 2, 1, 4, 1};',
    output: 'Most frequent: 1 (Frequency: 3)',
    code: `import java.util.HashMap;
import java.util.Map;

public class MostFrequentDsa {
    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 1, 4, 1};
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : arr) map.put(num, map.getOrDefault(num, 0) + 1);

        int maxElem = arr[0], maxCount = 0;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                maxElem = entry.getKey();
            }
        }
        System.out.println("Most frequent: " + maxElem + " (Frequency: " + maxCount + ")");
    }
}`,
    explanation: 'Count elements into a map, then scan entries to find the maximum count.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },

  // ----------------------------------------------------
  // TWO POINTERS
  // ----------------------------------------------------
  {
    id: 'dsa-18',
    category: 'Two Pointers',
    number: 18,
    title: 'Two Sum in a Sorted Array',
    difficulty: 'Easy',
    problemStatement: 'Given a 1-indexed array of integers that is already sorted in non-decreasing order, find two numbers that add up to target.',
    input: 'int[] numbers = {2, 7, 11, 15}; int target = 9;',
    output: '[1, 2]',
    code: `import java.util.Arrays;

public class TwoSumSorted {
    public static int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1}; // 1-indexed
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] numbers = {2, 7, 11, 15};
        System.out.println(Arrays.toString(twoSum(numbers, 9)));
    }
}`,
    explanation: 'Left pointer at start, right at end. If sum < target, increment left; if sum > target, decrement right.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-19',
    category: 'Two Pointers',
    number: 19,
    title: 'Remove Duplicates from Sorted Array (Two Pointers)',
    difficulty: 'Easy',
    problemStatement: 'Remove duplicates from a sorted array in O(1) extra space using two pointers.',
    input: 'int[] nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};',
    output: 'k = 5, elements: [0, 1, 2, 3, 4]',
    code: `public class RemoveDuplicatesTwoPointer {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                nums[++i] = nums[j];
            }
        }
        return i + 1;
    }

    public static void main(String[] args) {
        int[] nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
        int k = removeDuplicates(nums);
        System.out.println("Length: " + k);
    }
}`,
    explanation: 'Slow pointer marks boundary of unique elements; fast pointer scans ahead.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },

  // ----------------------------------------------------
  // SLIDING WINDOW
  // ----------------------------------------------------
  {
    id: 'dsa-20',
    category: 'Sliding Window',
    number: 20,
    title: 'Maximum Sum Subarray of Size K',
    difficulty: 'Medium',
    problemStatement: 'Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.',
    input: 'int[] arr = {2, 1, 5, 1, 3, 2}; int k = 3;',
    output: 'Max Sum: 9 (Subarray: [5, 1, 3])',
    code: `public class MaxSubarraySizeK {
    public static int maxSubarraySumK(int[] arr, int k) {
        if (arr.length < k) return -1;
        int windowSum = 0;
        for (int i = 0; i < k; i++) windowSum += arr[i];

        int maxSum = windowSum;
        for (int i = k; i < arr.length; i++) {
            windowSum += arr[i] - arr[i - k]; // Slide window: add next, remove old
            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {2, 1, 5, 1, 3, 2};
        System.out.println("Max Sum: " + maxSubarraySumK(arr, 3));
    }
}`,
    explanation: 'Compute sum of first k elements. Then slide window one element at a time in O(1) per step.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-21',
    category: 'Sliding Window',
    number: 21,
    title: 'Longest Substring with At Most K Distinct Characters',
    difficulty: 'Medium',
    problemStatement: 'Given a string, find the length of the longest substring that contains at most k distinct characters.',
    input: 'String s = "eceba"; int k = 2;',
    output: '3 ("ece")',
    code: `import java.util.HashMap;
import java.util.Map;

public class LongestSubstringKDistinct {
    public static int lengthOfLongestSubstringKDistinct(String s, int k) {
        if (s == null || s.length() == 0 || k == 0) return 0;
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            map.put(c, map.getOrDefault(c, 0) + 1);

            while (map.size() > k) {
                char leftChar = s.charAt(left);
                map.put(leftChar, map.get(leftChar) - 1);
                if (map.get(leftChar) == 0) map.remove(leftChar);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        System.out.println("Length: " + lengthOfLongestSubstringKDistinct("eceba", 2));
    }
}`,
    explanation: 'Sliding window expands with right pointer. When distinct keys in map > k, shrink from left.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k)'
  },

  // ----------------------------------------------------
  // SEARCHING AND SORTING
  // ----------------------------------------------------
  {
    id: 'dsa-22',
    category: 'Searching & Sorting',
    number: 22,
    title: 'Binary Search',
    difficulty: 'Easy',
    problemStatement: 'Given a sorted integer array and a target value, return the index if found, or -1 if not found.',
    input: 'int[] nums = {-1, 0, 3, 5, 9, 12}; int target = 9;',
    output: 'Index: 4',
    code: `public class BinarySearchDsa {
    public static int search(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] nums = {-1, 0, 3, 5, 9, 12};
        System.out.println("Index: " + search(nums, 9));
    }
}`,
    explanation: 'Divide search interval in half each step: compare target with mid.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-23',
    category: 'Searching & Sorting',
    number: 23,
    title: 'First and Last Position of an Element in Sorted Array',
    difficulty: 'Medium',
    problemStatement: 'Given a sorted array of integers, find the starting and ending position of a given target value.',
    input: 'int[] nums = {5, 7, 7, 8, 8, 10}; int target = 8;',
    output: '[3, 4]',
    code: `import java.util.Arrays;

public class FirstAndLastPosition {
    public static int findBound(int[] nums, int target, boolean isFirst) {
        int low = 0, high = nums.length - 1, ans = -1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                ans = mid;
                if (isFirst) high = mid - 1; // look left
                else low = mid + 1;          // look right
            } else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = {5, 7, 7, 8, 8, 10};
        int target = 8;
        int first = findBound(nums, target, true);
        int last = findBound(nums, target, false);
        System.out.println(Arrays.toString(new int[]{first, last}));
    }
}`,
    explanation: 'Run binary search twice: once biasing left to find first occurrence, once biasing right for last.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-24',
    category: 'Searching & Sorting',
    number: 24,
    title: 'Implement Bubble Sort',
    difficulty: 'Easy',
    problemStatement: 'Write a program to implement Bubble Sort algorithm to sort an array in ascending order.',
    input: 'int[] arr = {64, 34, 25, 12, 22, 11, 90};',
    output: '[11, 12, 22, 25, 34, 64, 90]',
    code: `import java.util.Arrays;

public class BubbleSortDemo {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`,
    explanation: 'Repeatedly swap adjacent elements that are out of order. Optimized with swapped flag.',
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)'
  },

  // ----------------------------------------------------
  // LINKED LIST
  // ----------------------------------------------------
  {
    id: 'dsa-25',
    category: 'Linked List',
    number: 25,
    title: 'Reverse a Linked List',
    difficulty: 'Easy',
    problemStatement: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    input: '1 -> 2 -> 3 -> 4 -> 5 -> null',
    output: '5 -> 4 -> 3 -> 2 -> 1 -> null',
    code: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null, current = head;
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);

        ListNode rev = reverseList(head);
        while (rev != null) {
            System.out.print(rev.val + " -> ");
            rev = rev.next;
        }
        System.out.println("null");
    }
}`,
    explanation: 'Iteratively reverse pointers: maintain prev, current, and nextTemp nodes.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-26',
    category: 'Linked List',
    number: 26,
    title: 'Find the Middle of a Linked List',
    difficulty: 'Easy',
    problemStatement: 'Given the head of a singly linked list, return the middle node of the linked list.',
    input: '1 -> 2 -> 3 -> 4 -> 5 -> null',
    output: 'Middle node value: 3',
    code: `public class MiddleNodeList {
    public static ListNode middleNode(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.println("Middle value: " + middleNode(head).val);
    }
}`,
    explanation: 'Tortoise and Hare approach: slow moves 1 step while fast moves 2 steps. When fast reaches end, slow is at the middle.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },

  // ----------------------------------------------------
  // STACK AND QUEUE
  // ----------------------------------------------------
  {
    id: 'dsa-27',
    category: 'Stack & Queue',
    number: 27,
    title: 'Implement a Stack Using Array',
    difficulty: 'Easy',
    problemStatement: 'Implement a Last-In-First-Out (LIFO) stack using a fixed-size array with push, pop, peek, and isEmpty methods.',
    input: 'push(10), push(20), pop(), peek()',
    output: 'Popped: 20, Peek: 10',
    code: `public class ArrayStack {
    private int[] arr;
    private int top;
    private int capacity;

    public ArrayStack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    public void push(int x) {
        if (top == capacity - 1) throw new RuntimeException("Stack Overflow");
        arr[++top] = x;
    }

    public int pop() {
        if (top == -1) throw new RuntimeException("Stack Underflow");
        return arr[top--];
    }

    public int peek() {
        return arr[top];
    }

    public static void main(String[] args) {
        ArrayStack stack = new ArrayStack(5);
        stack.push(10);
        stack.push(20);
        System.out.println("Popped: " + stack.pop());
        System.out.println("Peek: " + stack.peek());
    }
}`,
    explanation: 'Maintain a top pointer initialized to -1. push() increments top; pop() decrements top.',
    timeComplexity: 'O(1) for all operations',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-28',
    category: 'Stack & Queue',
    number: 28,
    title: 'Implement a Queue Using Array',
    difficulty: 'Easy',
    problemStatement: 'Implement a First-In-First-Out (FIFO) circular queue using an array.',
    input: 'enqueue(10), enqueue(20), dequeue(), peek()',
    output: 'Dequeued: 10, Peek: 20',
    code: `public class ArrayQueue {
    private int[] arr;
    private int front, rear, size, capacity;

    public ArrayQueue(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    public void enqueue(int item) {
        if (size == capacity) throw new RuntimeException("Queue Overflow");
        rear = (rear + 1) % capacity;
        arr[rear] = item;
        size++;
    }

    public int dequeue() {
        if (size == 0) throw new RuntimeException("Queue Underflow");
        int item = arr[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }

    public static void main(String[] args) {
        ArrayQueue q = new ArrayQueue(5);
        q.enqueue(10);
        q.enqueue(20);
        System.out.println("Dequeued: " + q.dequeue());
        System.out.println("Next: " + q.dequeue());
    }
}`,
    explanation: 'Circular array implementation using modulo operator to wrap front and rear indices.',
    timeComplexity: 'O(1) for enqueue and dequeue',
    spaceComplexity: 'O(n)'
  },

  // ----------------------------------------------------
  // RECURSION
  // ----------------------------------------------------
  {
    id: 'dsa-29',
    category: 'Recursion',
    number: 29,
    title: 'Factorial Using Recursion',
    difficulty: 'Easy',
    problemStatement: 'Calculate the factorial of a non-negative integer n using recursion.',
    input: 'int n = 5;',
    output: '120',
    code: `public class FactorialRecursion {
    public static long factorial(int n) {
        if (n <= 1) return 1; // Base case
        return n * factorial(n - 1); // Recursive case
    }

    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));
    }
}`,
    explanation: 'Base case: n <= 1 returns 1. Recursive case: n * factorial(n - 1).',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) call stack'
  },
  {
    id: 'dsa-30',
    category: 'Recursion',
    number: 30,
    title: 'Fibonacci Using Recursion & Memoization',
    difficulty: 'Easy',
    problemStatement: 'Compute the nth Fibonacci number efficiently using recursion with memoization.',
    input: 'int n = 10;',
    output: '55',
    code: `public class FibonacciMemoization {
    public static int fib(int n, int[] memo) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    }

    public static void main(String[] args) {
        int n = 10;
        int[] memo = new int[n + 1];
        System.out.println("Fib(" + n + ") = " + fib(n, memo));
    }
}`,
    explanation: 'Store calculated subproblems in a memo array to reduce O(2^n) exponential time to O(n) linear time.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  }
];
