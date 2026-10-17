import type { CodingQuestion } from '../../types/codingQuestion';

export const searchSortQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q43',
    number: 43,
    title: 'Linear Search',
    category: 'Searching & Sorting',
    difficulty: 'Easy',
    problem: 'Search for a target value by traversing an array element by element from index 0 to n-1.',
    input: 'arr = [4, 2, 7, 1, 9], target = 7',
    output: 'Element 7 found at index 2',
    javaSolution: `public class Main {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1; // Not found
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 7, 1, 9};
        int target = 7;

        int index = linearSearch(arr, target);

        if (index != -1) {
            System.out.println("Element " + target + " found at index " + index);
        } else {
            System.out.println("Element " + target + " not found.");
        }
    }
}`,
    timeComplexity: 'O(n) worst case, O(1) best case',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q44',
    number: 44,
    title: 'Binary Search',
    category: 'Searching & Sorting',
    difficulty: 'Easy',
    problem: 'Search for a target in a sorted array by repeatedly dividing the search interval in half.',
    input: 'arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], target = 23',
    output: 'Element 23 found at index 5',
    javaSolution: `public class Main {
    public static int binarySearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            // Avoid integer overflow with (low + high) / 2
            int mid = low + (high - low) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1; // Search right half
            } else {
                high = mid - 1; // Search left half
            }
        }
        return -1; // Target not in array
    }

    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        int target = 23;

        int result = binarySearch(arr, target);

        if (result != -1) {
            System.out.println("Element " + target + " found at index " + result);
        } else {
            System.out.println("Element " + target + " not found");
        }
    }
}`,
    dryRun: 'arr=[2, 5, 8, 12, 16, 23, 38, 56, 72, 91], target=23. low=0, high=9. Step 1: mid = 4, arr[4] = 16. 16 < 23 -> low = 5. Step 2: mid = 5 + (9-5)/2 = 7, arr[7] = 56. 56 > 23 -> high = 6. Step 3: mid = 5 + (6-5)/2 = 5, arr[5] = 23. Match found! Return index 5.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1) iterative approach',
  },
  {
    id: 'dsa-q45',
    number: 45,
    title: 'Bubble Sort',
    category: 'Searching & Sorting',
    difficulty: 'Easy',
    problem: 'Sort an array by repeatedly swapping adjacent elements if they are in the wrong order. Include optimization flag to terminate early if array is already sorted.',
    input: '[64, 34, 25, 12, 22, 11, 90]',
    output: '[11, 12, 22, 25, 34, 64, 90]',
    javaSolution: `import java.util.Arrays;

public class Main {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            // Last i elements are already in place
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no two elements were swapped in inner loop, array is sorted
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
    timeComplexity: 'O(n²) worst/average, O(n) best case when already sorted',
    spaceComplexity: 'O(1) in-place',
  },
  {
    id: 'dsa-q46',
    number: 46,
    title: 'Selection Sort',
    category: 'Searching & Sorting',
    difficulty: 'Easy',
    problem: 'Sort an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.',
    input: '[29, 10, 14, 37, 13]',
    output: '[10, 13, 14, 29, 37]',
    javaSolution: `import java.util.Arrays;

public class Main {
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;

            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }

            // Swap minimum found with current position i
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};
        selectionSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
    timeComplexity: 'O(n²) in all cases',
    spaceComplexity: 'O(1) in-place',
  },
  {
    id: 'dsa-q47',
    number: 47,
    title: 'Insertion Sort',
    category: 'Searching & Sorting',
    difficulty: 'Medium',
    problem: 'Build the sorted array one item at a time by picking the next element and inserting it into its correct position among previously sorted elements.',
    input: '[12, 11, 13, 5, 6]',
    output: '[5, 6, 11, 12, 13]',
    javaSolution: `import java.util.Arrays;

public class Main {
    public static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements greater than key one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
    timeComplexity: 'O(n²) worst/average, O(n) best case (almost sorted array)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q48',
    number: 48,
    title: 'Merge Sort',
    category: 'Searching & Sorting',
    difficulty: 'Hard',
    problem: 'Implement Merge Sort using Divide-and-Conquer: divide array into halves, recursively sort them, and merge the sorted halves.',
    input: '[38, 27, 43, 3, 9, 82, 10]',
    output: '[3, 9, 10, 27, 38, 43, 82]',
    javaSolution: `import java.util.Arrays;

public class Main {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
    dryRun: 'Divide [38, 27, 43, 3, 9, 82, 10] into [38, 27, 43, 3] and [9, 82, 10]. Subdivide until single elements. Merge [38] & [27] -> [27, 38]. Merge [43] & [3] -> [3, 43]. Merge [27, 38] & [3, 43] -> [3, 27, 38, 43]. Merge left and right halves into final sorted array.',
    timeComplexity: 'O(n log n) in all cases (best, average, worst)',
    spaceComplexity: 'O(n) auxiliary space for temp arrays',
  },
];
