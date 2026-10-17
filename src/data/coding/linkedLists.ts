import type { CodingQuestion } from '../../types/codingQuestion';

export const linkedListQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q58',
    number: 58,
    title: 'Reverse a Singly Linked List',
    category: 'Linked Lists & Advanced',
    difficulty: 'Medium',
    problem: 'Reverse a singly linked list iteratively by manipulating prev, curr, and next pointers in a single pass.',
    input: '1 -> 2 -> 3 -> 4 -> 5 -> null',
    output: '5 -> 4 -> 3 -> 2 -> 1 -> null',
    javaSolution: `class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
}

public class Main {
    public static Node reverseList(Node head) {
        Node prev = null;
        Node curr = head;

        while (curr != null) {
            Node nextTemp = curr.next; // Save next node
            curr.next = prev;          // Reverse pointer
            prev = curr;               // Advance prev
            curr = nextTemp;           // Advance curr
        }
        return prev; // New head
    }

    public static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + (temp.next != null ? " -> " : ""));
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        System.out.print("Original list: ");
        printList(head);

        Node reversedHead = reverseList(head);

        System.out.print("Reversed list: ");
        printList(reversedHead);
    }
}`,
    dryRun: 'Node 1: nextTemp=2, 1.next=null, prev=1, curr=2. Node 2: nextTemp=3, 2.next=1, prev=2, curr=3. Node 3: nextTemp=4, 3.next=2, prev=3, curr=4... Finally curr=null, return prev (Node 5).',
    timeComplexity: 'O(n) single traversal',
    spaceComplexity: 'O(1) in-place pointers',
  },
  {
    id: 'dsa-q59',
    number: 59,
    title: 'Find the Middle of a Linked List',
    category: 'Linked Lists & Advanced',
    difficulty: 'Medium',
    problem: 'Find the middle node of a singly linked list in a single pass using the Tortoise and Hare (slow & fast pointer) technique.',
    input: '1 -> 2 -> 3 -> 4 -> 5',
    output: 'Middle node data: 3',
    javaSolution: `class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
}

public class Main {
    public static Node findMiddle(Node head) {
        if (head == null) return null;

        Node slow = head;
        Node fast = head;

        // Fast moves 2 steps, slow moves 1 step
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow; // Points to middle
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        Node mid = findMiddle(head);
        System.out.println("Middle element: " + (mid != null ? mid.data : "null"));
    }
}`,
    timeComplexity: 'O(n) single pass',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q60',
    number: 60,
    title: 'Detect a Cycle in a Linked List',
    category: 'Linked Lists & Advanced',
    difficulty: 'Medium',
    problem: 'Determine if a linked list contains a cycle using Floyd\'s Cycle-Finding Algorithm (slow and fast pointers).',
    input: '1 -> 2 -> 3 -> 4 -> (points back to 2)',
    output: 'Cycle detected: true',
    javaSolution: `class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
}

public class Main {
    public static boolean hasCycle(Node head) {
        if (head == null || head.next == null) return false;

        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            // Pointers meet if there is a loop
            if (slow == fast) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        // Create loop: 4 -> 2
        head.next.next.next.next = head.next;

        System.out.println("Has cycle? " + hasCycle(head));
    }
}`,
    dryRun: 'Slow moves 1 step, Fast moves 2 steps. Inside cycle of length C, the relative speed difference is 1 step per iteration, so fast pointer catches up to slow in at most C steps. When slow == fast, loop detected.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  {
    id: 'dsa-q61',
    number: 61,
    title: 'Merge Two Sorted Linked Lists',
    category: 'Linked Lists & Advanced',
    difficulty: 'Medium',
    problem: 'Merge two sorted linked lists into one sorted linked list using a dummy node.',
    input: 'l1: 1 -> 3 -> 5, l2: 2 -> 4 -> 6',
    output: 'Merged: 1 -> 2 -> 3 -> 4 -> 5 -> 6',
    javaSolution: `class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
}

public class Main {
    public static Node mergeTwoLists(Node l1, Node l2) {
        Node dummy = new Node(0);
        Node current = dummy;

        while (l1 != null && l2 != null) {
            if (l1.data <= l2.data) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        // Attach remaining nodes
        if (l1 != null) current.next = l1;
        if (l2 != null) current.next = l2;

        return dummy.next;
    }

    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + (head.next != null ? " -> " : ""));
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node l1 = new Node(1);
        l1.next = new Node(3);
        l1.next.next = new Node(5);

        Node l2 = new Node(2);
        l2.next = new Node(4);
        l2.next.next = new Node(6);

        Node merged = mergeTwoLists(l1, l2);
        System.out.print("Merged sorted list: ");
        printList(merged);
    }
}`,
    timeComplexity: 'O(n + m) where n and m are lengths of lists',
    spaceComplexity: 'O(1) pointer manipulation',
  },
  {
    id: 'dsa-q62',
    number: 62,
    title: 'Find the Longest Increasing Subsequence',
    category: 'Linked Lists & Advanced',
    difficulty: 'Hard',
    problem: 'Find the length of the longest strictly increasing subsequence in an integer array using Dynamic Programming.',
    input: '[10, 9, 2, 5, 3, 7, 101, 18]',
    output: 'Length of LIS: 4 (subsequence: [2, 3, 7, 101] or [2, 3, 7, 18])',
    javaSolution: `import java.util.Arrays;

public class Main {
    public static int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1); // Each element is an LIS of length 1

        int maxLIS = 1;

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLIS = Math.max(maxLIS, dp[i]);
        }

        return maxLIS;
    }

    public static void main(String[] args) {
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Longest Increasing Subsequence length: " + lengthOfLIS(nums));
    }
}`,
    dryRun: 'nums = [10, 9, 2, 5, 3, 7, 101, 18]. dp array stores LIS ending at index i. For 5 (after 2): dp[3]=2. For 7 (after 3, 5): dp[5]=3. For 101 (after 7): dp[6]=4. Max LIS length = 4.',
    timeComplexity: 'O(n²) with DP (or O(n log n) with binary search tails)',
    spaceComplexity: 'O(n) for dp array',
  },
];
