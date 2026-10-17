import type { CodingQuestion } from '../../types/codingQuestion';

export const arrayQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q23',
    number: 23,
    title: 'Find Largest Element',
    category: 'Arrays',
    difficulty: 'Easy',
    problem: 'Find the maximum value in an integer array by scanning through the elements once.',
    input: '[15, 8, 92, 43, 67]',
    output: 'Largest element: 92',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println("Largest element: " + max);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q24',
    number: 24,
    title: 'Find Second Largest Distinct Element',
    category: 'Arrays',
    difficulty: 'Easy',
    problem: 'Find the second largest unique element in an integer array in a single traversal without sorting.',
    input: '[10, 5, 20, 8, 20]',
    output: 'Second largest distinct element: 10',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            if (arr[i] > first) {
                second = first;
                first = arr[i];
            } else if (arr[i] > second && arr[i] != first) {
                second = arr[i];
            }
        }

        if (second == Integer.MIN_VALUE) {
            System.out.println("No second largest distinct element found.");
        } else {
            System.out.println("Second largest distinct element: " + second);
        }
    }
}`,
    dryRun: 'Array: [10, 5, 20, 8, 20]. Initial: first=MIN, second=MIN. 1) arr[0]=10: second=MIN, first=10. 2) arr[1]=5: arr[1] > second and != first -> second=5. 3) arr[2]=20: second=10, first=20. 4) arr[3]=8: 8 < 10, no change. 5) arr[4]=20: 20 == first, ignored. Result: second = 10.',
    timeComplexity: 'O(n) single pass',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q25',
    number: 25,
    title: 'Reverse an Array',
    category: 'Arrays',
    difficulty: 'Easy',
    problem: 'Reverse an array in-place without using extra array memory using two pointers.',
    input: '[1, 2, 3, 4, 5]',
    output: '[5, 4, 3, 2, 1]',
    javaSolution: `import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int left = 0;
        int right = n - 1;

        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) in-place',
  },
  {
    id: 'dsa-q26',
    number: 26,
    title: 'Find Smallest Element',
    category: 'Arrays',
    difficulty: 'Easy',
    problem: 'Find the minimum value in an integer array in linear time.',
    input: '[34, 15, 88, 2, 45]',
    output: 'Smallest element: 2',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int min = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Smallest element: " + min);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q27',
    number: 27,
    title: 'Find Sum and Average of Array Elements',
    category: 'Arrays',
    difficulty: 'Easy',
    problem: 'Calculate the total sum and arithmetic average of all numbers in an integer array.',
    input: '[10, 20, 30, 40, 50]',
    output: 'Sum = 150, Average = 30.0',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        int sum = 0;

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }

        double average = (double) sum / n;

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q28',
    number: 28,
    title: 'Remove Duplicates from a Sorted Array',
    category: 'Arrays',
    difficulty: 'Medium',
    problem: 'Given a sorted array, remove duplicates in-place such that each unique element appears once. Return the new length.',
    input: '[1, 1, 2, 2, 3, 4, 4]',
    output: 'Unique elements: [1, 2, 3, 4], length = 4',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter sorted array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " sorted elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        if (n == 0) {
            System.out.println("Array is empty.");
            return;
        }

        // Two-pointer approach
        int uniqueIdx = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i] != arr[uniqueIdx]) {
                uniqueIdx++;
                arr[uniqueIdx] = arr[i];
            }
        }

        int uniqueCount = uniqueIdx + 1;
        System.out.print("Unique elements: ");
        for (int i = 0; i < uniqueCount; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("\\nNew length: " + uniqueCount);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) in-place',
  },
  {
    id: 'dsa-q29',
    number: 29,
    title: 'Move All Zeros to the End',
    category: 'Arrays',
    difficulty: 'Easy',
    problem: 'Move all zero values in an array to the end while maintaining the relative order of non-zero elements in-place.',
    input: '[0, 1, 0, 3, 12]',
    output: '[1, 3, 12, 0, 0]',
    javaSolution: `import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int nonZeroIdx = 0;

        // Shift non-zeros to the front
        for (int i = 0; i < n; i++) {
            if (arr[i] != 0) {
                arr[nonZeroIdx] = arr[i];
                nonZeroIdx++;
            }
        }

        // Fill remaining positions with zeros
        while (nonZeroIdx < n) {
            arr[nonZeroIdx] = 0;
            nonZeroIdx++;
        }

        System.out.println("Array after moving zeros: " + Arrays.toString(arr));
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q30',
    number: 30,
    title: 'Find Missing Number',
    category: 'Arrays',
    difficulty: 'Medium',
    problem: 'An array of size n contains distinct numbers from 1 to n+1. Find the single missing number using the mathematical formula n*(n+1)/2.',
    input: '[1, 2, 4, 5, 6] (range 1 to 6)',
    output: 'Missing number: 3',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        long actualSum = 0;

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            actualSum += arr[i];
        }

        // Total range size is N = n + 1
        long totalNumbers = n + 1;
        long expectedSum = totalNumbers * (totalNumbers + 1) / 2;
        long missingNumber = expectedSum - actualSum;

        System.out.println("Missing number: " + missingNumber);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q31',
    number: 31,
    title: 'Find Duplicate Elements',
    category: 'Arrays',
    difficulty: 'Medium',
    problem: 'Find and print all elements that appear more than once in an integer array.',
    input: '[2, 4, 7, 2, 9, 7, 1]',
    output: 'Duplicates: 2, 7',
    javaSolution: `import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int num : arr) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }

        System.out.println("Duplicate elements: " + duplicates);
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q32',
    number: 32,
    title: 'Rotate Array by K Positions',
    category: 'Arrays',
    difficulty: 'Medium',
    problem: 'Rotate an array to the right by k positions in O(1) extra space using the 3-step reversal algorithm.',
    input: 'arr = [1, 2, 3, 4, 5, 6, 7], k = 3',
    output: '[5, 6, 7, 1, 2, 3, 4]',
    javaSolution: `import java.util.Arrays;
import java.util.Scanner;

public class Main {
    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.print("Enter k: ");
        int k = sc.nextInt();
        k = k % n; // In case k > n

        // Step 1: Reverse entire array
        reverse(arr, 0, n - 1);
        // Step 2: Reverse first k elements
        reverse(arr, 0, k - 1);
        // Step 3: Reverse remaining n - k elements
        reverse(arr, k, n - 1);

        System.out.println("Rotated array: " + Arrays.toString(arr));
    }
}`,
    dryRun: 'arr = [1,2,3,4,5,6,7], k = 3. 1) Reverse all: [7,6,5,4,3,2,1]. 2) Reverse first 3: [5,6,7, 4,3,2,1]. 3) Reverse rest from idx 3 to 6: [5,6,7, 1,2,3,4]. Correct!',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) auxiliary space',
  },
  {
    id: 'dsa-q33',
    number: 33,
    title: 'Merge Two Sorted Arrays',
    category: 'Arrays',
    difficulty: 'Medium',
    problem: 'Merge two sorted arrays into a single sorted array using the two-pointer merging technique from Merge Sort.',
    input: 'a = [1, 3, 5], b = [2, 4, 6]',
    output: '[1, 2, 3, 4, 5, 6]',
    javaSolution: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] a = {1, 3, 5, 7};
        int[] b = {2, 4, 6, 8, 10};

        int n1 = a.length, n2 = b.length;
        int[] merged = new int[n1 + n2];

        int i = 0, j = 0, k = 0;

        while (i < n1 && j < n2) {
            if (a[i] <= b[j]) {
                merged[k++] = a[i++];
            } else {
                merged[k++] = b[j++];
            }
        }

        // Copy remaining elements
        while (i < n1) merged[k++] = a[i++];
        while (j < n2) merged[k++] = b[j++];

        System.out.println("Merged sorted array: " + Arrays.toString(merged));
    }
}`,
    timeComplexity: 'O(n1 + n2)',
    spaceComplexity: 'O(n1 + n2) for merged array',
  },
  {
    id: 'dsa-q34',
    number: 34,
    title: 'Maximum Subarray Sum',
    category: 'Arrays',
    difficulty: 'Medium',
    problem: 'Find the contiguous subarray with the largest sum using Kadane\'s Algorithm.',
    input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]',
    output: 'Maximum contiguous sum is 6 (subarray [4, -1, 2, 1])',
    javaSolution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int maxSoFar = arr[0];
        int currentMax = arr[0];

        for (int i = 1; i < n; i++) {
            currentMax = Math.max(arr[i], currentMax + arr[i]);
            maxSoFar = Math.max(maxSoFar, currentMax);
        }

        System.out.println("Maximum subarray sum: " + maxSoFar);
    }
}`,
    dryRun: 'arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4]. Init: cur=-2, max=-2. i=1(1): cur=max(1, -1)=1, max=1. i=2(-3): cur=-2, max=1. i=3(4): cur=4, max=4. i=4(-1): cur=3, max=4. i=5(2): cur=5, max=5. i=6(1): cur=6, max=6. Result: 6.',
    timeComplexity: 'O(n) linear scan',
    spaceComplexity: 'O(1)',
  },
];
