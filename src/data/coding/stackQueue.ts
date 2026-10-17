import type { CodingQuestion } from '../../types/codingQuestion';

export const stackQueueQuestions: CodingQuestion[] = [
  {
    id: 'dsa-q49',
    number: 49,
    title: 'Valid Parentheses',
    category: 'Stack & Queue',
    difficulty: 'Medium',
    problem: 'Given a string containing only \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if brackets are properly closed and nested in correct order.',
    input: '"()[]{}"',
    output: 'Valid: true',
    javaSolution: `import java.util.Stack;
import java.util.Scanner;

public class Main {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(')');
            } else if (c == '{') {
                stack.push('}');
            } else if (c == '[') {
                stack.push(']');
            } else {
                // If closing bracket encountered but stack empty or top doesn't match
                if (stack.isEmpty() || stack.pop() != c) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter brackets string: ");
        String s = sc.nextLine();

        System.out.println("Is valid parentheses? " + isValid(s));
    }
}`,
    dryRun: 's = "{[()]}". 1) \'{\' -> push \'}\'. 2) \'[\' -> push \']\'. 3) \'(\' -> push \')\'. Stack is [\'}\', \']\', \')\']. 4) \')\' -> pop() == \')\' (match). 5) \']\' -> pop() == \']\' (match). 6) \'}\' -> pop() == \'}\' (match). Stack empty -> true.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) for stack',
  },
  {
    id: 'dsa-q50',
    number: 50,
    title: 'Implement Stack Using an Array',
    category: 'Stack & Queue',
    difficulty: 'Medium',
    problem: 'Implement a Last-In-First-Out (LIFO) Stack using a fixed-size array with push(), pop(), peek(), and isEmpty() operations.',
    input: 'push(10), push(20), pop(), peek()',
    output: 'Popped: 20, Top element: 10',
    javaSolution: `class MyStack {
    private int maxSize;
    private int[] stackArray;
    private int top;

    public MyStack(int size) {
        this.maxSize = size;
        this.stackArray = new int[maxSize];
        this.top = -1;
    }

    public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack Overflow!");
            return;
        }
        stackArray[++top] = value;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow!");
            return -1;
        }
        return stackArray[top--];
    }

    public int peek() {
        if (isEmpty()) return -1;
        return stackArray[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}

public class Main {
    public static void main(String[] args) {
        MyStack stack = new MyStack(5);
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Popped: " + stack.pop());
        System.out.println("Top element: " + stack.peek());
        System.out.println("Is empty? " + stack.isEmpty());
    }
}`,
    timeComplexity: 'O(1) for push, pop, peek, isEmpty',
    spaceComplexity: 'O(n) where n is capacity',
  },
  {
    id: 'dsa-q51',
    number: 51,
    title: 'Implement Queue Using an Array',
    category: 'Stack & Queue',
    difficulty: 'Medium',
    problem: 'Implement a First-In-First-Out (FIFO) Linear Queue using an array with enqueue(), dequeue(), peek(), and isEmpty() operations.',
    input: 'enqueue(5), enqueue(15), dequeue(), peek()',
    output: 'Dequeued: 5, Front element: 15',
    javaSolution: `class MyQueue {
    private int[] arr;
    private int front;
    private int rear;
    private int capacity;
    private int count;

    public MyQueue(int size) {
        this.capacity = size;
        this.arr = new int[size];
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }

    public void enqueue(int item) {
        if (count == capacity) {
            System.out.println("Queue Overflow!");
            return;
        }
        rear = (rear + 1) % capacity;
        arr[rear] = item;
        count++;
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow!");
            return -1;
        }
        int item = arr[front];
        front = (front + 1) % capacity;
        count--;
        return item;
    }

    public int peek() {
        if (isEmpty()) return -1;
        return arr[front];
    }

    public boolean isEmpty() {
        return count == 0;
    }
}

public class Main {
    public static void main(String[] args) {
        MyQueue queue = new MyQueue(5);
        queue.enqueue(5);
        queue.enqueue(15);
        queue.enqueue(25);

        System.out.println("Dequeued: " + queue.dequeue());
        System.out.println("Front element: " + queue.peek());
    }
}`,
    timeComplexity: 'O(1) for all operations',
    spaceComplexity: 'O(n)',
  },
  {
    id: 'dsa-q52',
    number: 52,
    title: 'Reverse a String Using Stack',
    category: 'Stack & Queue',
    difficulty: 'Easy',
    problem: 'Push all characters of a string into a Stack and pop them one by one to produce the reversed string.',
    input: '"Hello World"',
    output: '"dlroW olleH"',
    javaSolution: `import java.util.Stack;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        Stack<Character> stack = new Stack<>();

        // Push all characters to stack
        for (char c : str.toCharArray()) {
            stack.push(c);
        }

        // Pop characters to reverse
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }

        System.out.println("Reversed string: " + reversed.toString());
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) for stack',
  },
  {
    id: 'dsa-q53',
    number: 53,
    title: 'Implement Queue Using Two Stacks',
    category: 'Stack & Queue',
    difficulty: 'Hard',
    problem: 'Implement a FIFO Queue using two LIFO Stacks (stack1 for enqueue, stack2 for dequeue).',
    input: 'enqueue(10), enqueue(20), dequeue(), enqueue(30), dequeue()',
    output: 'Dequeued: 10, Dequeued: 20',
    javaSolution: `import java.util.Stack;

class QueueWithTwoStacks {
    private Stack<Integer> inStack = new Stack<>();
    private Stack<Integer> outStack = new Stack<>();

    public void enqueue(int x) {
        inStack.push(x);
    }

    public int dequeue() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }
        if (outStack.isEmpty()) {
            System.out.println("Queue is Empty!");
            return -1;
        }
        return outStack.pop();
    }

    public int peek() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }
        return outStack.isEmpty() ? -1 : outStack.peek();
    }

    public boolean isEmpty() {
        return inStack.isEmpty() && outStack.isEmpty();
    }
}

public class Main {
    public static void main(String[] args) {
        QueueWithTwoStacks q = new QueueWithTwoStacks();
        q.enqueue(10);
        q.enqueue(20);
        System.out.println("Dequeued: " + q.dequeue());
        q.enqueue(30);
        System.out.println("Dequeued: " + q.dequeue());
        System.out.println("Peek: " + q.peek());
    }
}`,
    timeComplexity: 'Enqueue: O(1), Dequeue: Amortized O(1)',
    spaceComplexity: 'O(n)',
  },
];
