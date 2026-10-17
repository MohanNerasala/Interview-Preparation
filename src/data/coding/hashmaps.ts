import type { CodingQuestion } from '../../types/codingQuestion';

export const hashmapQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q35',
    number: 35,
    title: 'Count Character Frequency Using HashMap',
    category: 'Arrays & HashMaps',
    difficulty: 'Easy',
    problem: 'Count how many times each character appears in a string using Java HashMap (handling any Unicode or case characters).',
    input: '"developer"',
    output: '{d=1, e=3, v=1, l=1, o=1, p=1, r=1}',
    javaSolution: `import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        Map<Character, Integer> freqMap = new HashMap<>();

        for (char ch : str.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }

        System.out.println("Character Frequencies: " + freqMap);
    }
}`,
    dryRun: 'For "developer": \'d\' -> map={d:1}. \'e\' -> map={d:1, e:1}. \'v\' -> map={d:1, e:1, v:1}. \'e\' -> map.getOrDefault(\'e\', 0)+1 = 2 -> map={d:1, e:2, v:1}... Final e=3.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k) where k is distinct characters',
  },
  {
    id: 'dsa-q36',
    number: 36,
    title: 'Count Word Frequency Using HashMap',
    category: 'Arrays & HashMaps',
    difficulty: 'Easy',
    problem: 'Count the occurrences of each word in a paragraph or sentence using HashMap.',
    input: '"hello world hello java world"',
    output: '{world=2, java=1, hello=2}',
    javaSolution: `import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine().trim();

        if (text.isEmpty()) {
            System.out.println("Empty string.");
            return;
        }

        String[] words = text.split("\\\\s+");
        Map<String, Integer> wordMap = new HashMap<>();

        for (String w : words) {
            String cleanWord = w.toLowerCase();
            wordMap.put(cleanWord, wordMap.getOrDefault(cleanWord, 0) + 1);
        }

        System.out.println("Word Frequencies: " + wordMap);
    }
}`,
    timeComplexity: 'O(n) where n is total characters',
    spaceComplexity: 'O(w) where w is number of unique words',
  },
  {
    id: 'dsa-q37',
    number: 37,
    title: 'Find Duplicate Elements Using HashSet',
    category: 'Arrays & HashMaps',
    difficulty: 'Easy',
    problem: 'Detect and print all duplicate numbers from an array using HashSet in O(n) time.',
    input: '[4, 3, 2, 7, 8, 2, 3, 1]',
    output: 'Duplicates found: [2, 3]',
    javaSolution: `import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        int[] arr = {4, 3, 2, 7, 8, 2, 3, 1};

        Set<Integer> unique = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int num : arr) {
            // add() returns false if element is already present
            if (!unique.add(num)) {
                duplicates.add(num);
            }
        }

        System.out.println("Duplicates found: " + duplicates);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q38',
    number: 38,
    title: 'Find Two Numbers That Add Up to a Target',
    category: 'Arrays & HashMaps',
    difficulty: 'Medium',
    problem: 'Given an array of integers and a target sum, return indices of two numbers such that they add up to target (Two Sum).',
    input: 'nums = [2, 7, 11, 15], target = 9',
    output: 'Indices: [0, 1] (nums[0] + nums[1] = 2 + 7 = 9)',
    javaSolution: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        Map<Integer, Integer> map = new HashMap<>();
        int[] result = new int[2];
        boolean found = false;

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                result[0] = map.get(complement);
                result[1] = i;
                found = true;
                break;
            }
            map.put(nums[i], i);
        }

        if (found) {
            System.out.println("Pair found at indices: [" + result[0] + ", " + result[1] + "]");
            System.out.println("Values: " + nums[result[0]] + " + " + nums[result[1]] + " = " + target);
        } else {
            System.out.println("No pair sums to target.");
        }
    }
}`,
    dryRun: 'nums=[2, 7, 11, 15], target=9. i=0: num=2, complement=7. map is empty. map.put(2, 0). i=1: num=7, complement=2. map contains 2 at index 0! Return [0, 1]. Total time O(n).',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q39',
    number: 39,
    title: 'Find the First Unique Character',
    category: 'Arrays & HashMaps',
    difficulty: 'Medium',
    problem: 'Given a string, find the index of the first non-repeating character using HashMap. Return -1 if all characters repeat.',
    input: '"loveleetcode"',
    output: 'First unique character index: 2 (\'v\')',
    javaSolution: `import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter string: ");
        String s = sc.nextLine();

        Map<Character, Integer> counts = new HashMap<>();

        // First pass: Build frequency map
        for (char c : s.toCharArray()) {
            counts.put(c, counts.getOrDefault(c, 0) + 1);
        }

        // Second pass: Find first character with count == 1
        int uniqueIdx = -1;
        for (int i = 0; i < s.length(); i++) {
            if (counts.get(s.charAt(i)) == 1) {
                uniqueIdx = i;
                break;
            }
        }

        if (uniqueIdx != -1) {
            System.out.println("First unique character: '" + s.charAt(uniqueIdx) + "' at index " + uniqueIdx);
        } else {
            System.out.println("No unique character found (-1)");
        }
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) - max 26 lowercase English letters in map',
  },
  {
    id: 'dsa-q40',
    number: 40,
    title: 'Find Common Elements in Two Arrays',
    category: 'Arrays & HashMaps',
    difficulty: 'Medium',
    problem: 'Find the intersection (common elements) of two unsorted integer arrays using a HashSet.',
    input: 'a = [1, 2, 2, 1], b = [2, 2, 3]',
    output: 'Common elements: [2]',
    javaSolution: `import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 2, 1, 5, 8};
        int[] b = {2, 2, 3, 5, 9};

        Set<Integer> setA = new HashSet<>();
        for (int num : a) {
            setA.add(num);
        }

        Set<Integer> common = new HashSet<>();
        for (int num : b) {
            if (setA.contains(num)) {
                common.add(num);
            }
        }

        System.out.println("Common elements: " + common);
    }
}`,
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(n) where n is size of first array',
  },
  {
    id: 'dsa-q41',
    number: 41,
    title: 'Find the Majority Element',
    category: 'Arrays & HashMaps',
    difficulty: 'Medium',
    problem: 'Find the element that appears more than n/2 times in an array using Boyer-Moore Voting Algorithm or HashMap.',
    input: '[2, 2, 1, 1, 1, 2, 2]',
    output: 'Majority element: 2 (appears 4 times in array of size 7)',
    javaSolution: `public class Main {
    // Boyer-Moore Voting Algorithm: O(n) time, O(1) space
    public static void main(String[] args) {
        int[] nums = {2, 2, 1, 1, 1, 2, 2};

        int candidate = nums[0];
        int count = 1;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
                if (count == 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }

        // Verify candidate appears > n/2 times
        int actualCount = 0;
        for (int num : nums) {
            if (num == candidate) actualCount++;
        }

        if (actualCount > nums.length / 2) {
            System.out.println("Majority element: " + candidate + " (count: " + actualCount + ")");
        } else {
            System.out.println("No majority element found.");
        }
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q42',
    number: 42,
    title: 'Group Anagrams',
    category: 'Arrays & HashMaps',
    difficulty: 'Hard',
    problem: 'Given an array of strings, group the anagrams together using HashMap with sorted string keys.',
    input: '["eat", "tea", "tan", "ate", "nat", "bat"]',
    output: '[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]',
    javaSolution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};

        Map<String, List<String>> map = new HashMap<>();

        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String sortedKey = new String(chars);

            if (!map.containsKey(sortedKey)) {
                map.put(sortedKey, new ArrayList<>());
            }
            map.get(sortedKey).add(word);
        }

        List<List<String>> result = new ArrayList<>(map.values());
        System.out.println("Grouped Anagrams:");
        for (List<String> group : result) {
            System.out.println(group);
        }
    }
}`,
    timeComplexity: 'O(n * k log k) where n is number of words and k is max word length',
    spaceComplexity: 'O(n * k) for storing strings in hash map',
  },
];
