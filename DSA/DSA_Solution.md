DSA::Solution::Tree-BT/BST/AVL/Heap/Trie


Binary Tree:
1. In Order Traversal
Left → Root → Right
Run the dfs on root first and then loop through left and right both and append the root value in result 

2. Pre Order Traversal
Root → Left → Right

3. Post Order Traversal
Left → Right → Root

4. Level Order Traversal
Create a queue and push the root node into it. 
Now loop through queue till it is empty
Popleft from the queue and it will be the node this node need to be pushed inthe level.
This level needs to be pushed in the result. 
Also check if node has left and right then push the left and right node in the queue.

5. Maximum depth of Binary Tree
DFS- 1+the max depth between the left and right node 
BFS- with evey iteration add a counter to get the depth

6. Diameter of the Tree
Post-order DFS (Bottom-up)
The diameter of a binary tree is the length of the longest path between any two nodes in the tree.
We calculate the height of the left and right subtree of each node, and at each node.
We update the maximum diameter seen so far and return the height to parent.

7. Balanced Binary Tree
A binary tree is balanced if:
For every node, the height difference between its left and right subtree is at most 1.
We recursively compute the height of left and right subtrees. At each node:
If the subtree is not balanced → return -1 early
Else → return height


8. Symmetric Tree:
We define a helper function isMirror(left, right) that checks:
left.val == right.val
left.left with right.right
left.right with right.left


9. Path Sum
At each node, subtract its value from the target and continue to its children.
When you reach a leaf node, check if the remaining sum equals the node's value.

10. Flatten Binary Tree to Linked List
The tree should be flattened in the same order as a pre-order traversal (root → left → right).
Recursive Post-order Approach (Right → Left → Root)
We process the right subtree first, then the left, and keep track of the prev node.

11. Serialize and Deserialize a Binary Tree
Use preorder traversal to:
Serialize: Turn the tree into a string.
Deserialize: Read the string left-to-right, rebuild recursively.

12. Right View of the BT
Do the BFS level Order Traversal
Push the righmost node from the queu into the result

13. Subtree of another Tree
Step 1: Traverse root tree
We want to examine every node in root. At each node:
If its value matches subRoot's root,
Check if the trees are identical (structure and values).
Otherwise:
Recursively check the left and right subtrees.
Step 2: Check if two trees are identical
Use a helper function to recursively compare:
Both nodes are null → return true
One is null, the other isn’t → return false
Values are different → return false
Otherwise, recursively check left and right subtrees.

14. Cameras
Use post-order DFS traversal
Each node can be in 1 of 3 states:
0 → Needs camera
1 → Has camera
2 → Covered

15. Left view of BT
Do the BFS and take the first node from the queue.
Use a queue to do BFS.
For each level:
Get the number of nodes at this level (size).
Traverse all nodes at that level.
Record the first node (leftmost) at each level.

16. Bottom view of BT
Use a queue to do level-order traversal. Each item in queue is a pair: (node, HD)
Use a map to keep track of the latest node seen at each HD.
After traversal, the map will contain the bottom view.
Return values in sorted order of HDs.

17. Top view of BT
Use a queue to do BFS traversal: (node, HD)
Maintain a hd_map dictionary to store the first node encountered at each HD
Traverse the tree level by level
After traversal, return the values in sorted order of HD

Binary Search Tree:
1. Validate BST
valid BST is defined as:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be BSTs.
Every node satisfies the condition: min_val < node.val < max_val
We update this range as we go down the tree:
For the left subtree → update max_val = node.val
For the right subtree → update min_val = node.val

2. Lowest Common Ancestor 
If both p and q are smaller than root, LCA lies in left subtree.
If both p and q are greater than root, LCA lies in right subtree.
If one is on the left and the other is on the right, or one is equal to the current node → current node is the LCA.

3. Kth Smallest Number
Inorder traversal of a BST gives nodes in sorted (ascending) order.
So the k-th node visited during an inorder traversal is the answer.
Do an inorder traversal (left → root → right).
Maintain a counter count.
When count == k, store the current node value.

4. Range Sun of BST
Since it's a BST, we can prune subtrees:
If node.val < low, discard the left subtree.
If node.val > high, discard the right subtree.
Otherwise, include node.val and explore both children.

5. Insert into a BST
Start from the root.
If val < node.val, go left.
If val > node.val, go right.
When a None position is found, insert the new node there.
Return the original root.

6. Delete node in BST
There are 3 possible cases when deleting a node:
Node to delete has no child (a leaf):
Just remove the node.
Node has one child:
Replace the node with its child.
Node has two children:
Replace it with inorder successor (smallest node in right subtree), then delete the successor node.
Traverse the tree recursively:
If key < root.val, go left.
If key > root.val, go right.
Else (node to delete found):
Handle one of the three deletion cases.
Return the modified subtree to reconnect properly.
If there is no left child, we can just replace this node with its right child.
This also covers the case where the node is a leaf node: root.right will be None, effectively deleting the node.
Similarly, if there’s no right child, we replace the node with its left child.
No left child-Return right child (delete node)
No right child-Return left child (delete node)
Two children-Replace with inorder successor(lowest in right subtree)
Inorder successor-Minimum value in right subtree

7. Search in BST
If the root is None, return None (base case).
If root.val == val, we've found the node → return it.
If val < root.val, the target must lie in the left subtree → recursively search left.
If val > root.val, search in the right subtree.

8. Convert greater tree to BST
Greater Tree where every node’s value is replaced by the sum of all values greater than or equal to that node’s value.
This is essentially reverse in-order traversal:
In-order traversal (L → Root → R) gives values in ascending order.
Reverse in-order (R → Root → L) gives values in descending order.
While traversing, we keep a running sum and update each node’s value:
Traverse right subtree.
Update current node with the running sum.
Traverse left subtree.

9. Recover BST(when 2 nodes got swapped by mistake)
In-order traversal of a BST should produce a sorted list.
When two nodes are swapped, the in-order sequence is disturbed.
During in-order traversal, we keep track of:
prev: the previous visited node
first: first misplaced node
second: second misplaced node
If prev.val > curr.val, then we found an inversion.

10. Convert sorted array into BST
Since the array is sorted, the middle element should become the root. This ensures balance.
Logic:
Pick the middle element of the array as the root.
Recursively do the same for:
Left half → Left subtree
Right half → Right subtree

11. Construct BST from PreOrder Traversal
In a preorder traversal, the first element is always the root. For BSTs:
Left subtree nodes < root
Right subtree nodes > root
We use this principle to reconstruct the tree.
Start from the first element in preorder array → this is the root.
Recursively:
Insert elements less than root into left subtree.
Insert elements greater than root into right subtree.
Keep track of a bound so you know when to stop going left or right.


AVL Tree:
AVL Tree is a self-balancing Binary Search Tree.
For every node, the balance factor = height(left) - height(right) must be in [-1, 0, 1].
If any node becomes unbalanced after insertion, perform rotations to rebalance.
Left-Left - Right Rotation
Right-Right - Left Rotation
Left-Right - Left on left child, then Right
Right-Left - Right on right child, then Left

Left-Left (LL)
balance > 1 and key < root.left.key
Right Rotate

Right-Right (RR)
balance < -1 and key > root.right.key
Left Rotate

Left-Right (LR)
balance > 1 and key > root.left.key
Left Rotate on left child, then Right Rotate on root

Right-Left (RL)
balance < -1 and key < root.right.key
Right Rotate on right child, then Left Rotate on root


1. Tree Insertion
Insert the node like a normal BST.
Update the height of the node while going back up.
Calculate balance factor = height(left) - height(right).
If balance is not in [-1, 0, 1], perform the necessary rotation(s).

2. Tree deletion
After deleting a node, you must:
Perform standard BST deletion.
Recalculate height of nodes up the tree.
Apply AVL rotations if any node becomes unbalanced.

3. Search
Just as BST

4. Design an Ordered Key-Value Store using AVL Tree
Design a data structure that stores key-value pairs in sorted key order, and supports:
insert(key, value)
delete(key)
get(key)
get_min(), get_max()
get_range(low_key, high_key) → get all keys in a range, in sorted order

Range - in order Traversal between low and high

5. Use AVL Tree for Interval Search or Database Indexing
You can insert intervals.
You can delete intervals (optional at first).
Most importantly, given an interval [low, high], you can quickly find if it overlaps with any stored interval.
Each node = [start, end]

class IntervalNode:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.max_end = end    # important
        self.left = None
        self.right = None
        self.height = 1

This max_end value is the key optimization that lets us prune the search space when looking for overlapping intervals.

Overlap Check
Given two intervals [a1, a2] and [b1, b2], they overlap if:
a1 <= b2 and b1 <= a2
Overlap Query Logic
When you're searching for whether an interval overlaps with any stored interval, the logic goes:
Start at the root:
If the current node’s interval overlaps, return it.
Else:
If the left child exists and left.max_end >= interval.start, we might have overlap on the left side → go left.
Otherwise → go right.
Because if all intervals on the left have their end < interval.start, then no interval on the left can overlap, so we skip that part entirely.
All standard AVL operations (insert, rotate left/right, balance factor, etc.) are used — just ensure to update max_end after every rotation and insertion.
Store intervals as nodes: start, end
Maintain max_end in each node (maximum of all ends in the subtree rooted at that node)
For overlapping interval check:
Check current node
Recurse left if low <= node.left.max_end
Recurse right otherwise

Heap:
A Heap is a complete binary tree that satisfies the heap property:
Min-Heap: Parent is smaller than children 👉 The root is the minimum element.
Max-Heap: Parent is greater than children 👉 The root is the maximum element.
Complete Binary Tree: All levels are completely filled except possibly the last.
Heap Property: For a Min-Heap, parent <= children; for a Max-Heap, parent >= children.
Efficient Insert/Delete:
Insert: O(log n)
Delete min/max: O(log n)
Access min/max: O(1)
Python has a heapq module — it only provides a Min-Heap.
To simulate a Max-Heap, we can insert negative values.
import heapq

# Min-Heap
min_heap = []
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 1)
heapq.heappush(min_heap, 5)
print(heapq.heappop(min_heap))  # 1 (smallest)

# Max-Heap (simulate by negating values)
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
heapq.heappush(max_heap, -5)
print(-heapq.heappop(max_heap))  # 5 (largest)

1. Kth Largest element
We use a min-heap of size k to keep track of the k largest elements.
Logic:
Create a min-heap and push elements from the array.
Keep the size of the heap ≤ k by popping the smallest if it exceeds k.
After processing all elements, the root of the min-heap is the k-th largest element.

2. Top K frequent elements 
We want the top K frequent elements, so we:
Count frequency of each number using Counter.
Use a min-heap to maintain top K elements based on frequency.
Why min-heap? Because if the heap exceeds size K, we pop the least frequent element.
Return the elements in the heap (they are the K most frequent).

3. Merge k sorted Lists
Use a min-heap (priority queue) to always extract the smallest current node among all lists.
Initially, push the head of each list into the heap.
While the heap is not empty:
Pop the smallest node.
Append it to the result list.
If the popped node has a next, push it into the heap.

4. Find Median from data stream
Max-heap (left): Stores the smaller half of numbers.
Min-heap (right): Stores the larger half of numbers.
The median is either:
The top of max-heap (odd total count), or
The average of tops of both heaps (even total count).
This sequence ensures balance and ordering in constant time:
Add to left (because we don't yet know if it should go to the left or right half).
Then move the largest of left to right to make sure ordering is proper.
If that causes imbalance, move smallest of right back to left.

5. Reorganize string
Count frequencies of each character.
Use a max-heap of (freq, char) – Python only has min-heap, so store -freq.
At each step:
Pop the top 2 characters (most frequent).
Add them to the result (they’ll be non-adjacent).
Decrease their count and push them back if they still have remaining frequency.
If one character is left, make sure it appears only once.

6. Task Scheduler
Count frequency of each task.
Use a max-heap to always pick the most frequent task first.
In each cycle of n+1 steps:
Pick up to n+1 most frequent tasks.
Decrease their count.
Push back if any still remain.
Fill the rest of the cycle with idle if needed.
Keep looping until all tasks are processed.


Trie:
Each node in the Trie represents a character.
Each path from root to a node represents a prefix or a word.
A boolean flag (is_end) at a node indicates whether the path so far forms a valid word.
Children of each node are stored using:
A dictionary (dict) in Python
An array of size 26 (for lowercase English letters)

class TrieNode:
     def __init__(self):
        self.children = {}  # or [None]*26 for only 'a' to 'z'
        self.prefix_count = 0
        self.word_count = 0
        self.is_end = False

1. 
insert(word) – Add a word to the Trie
Traverse through the word character by character.
If character not in current node’s children, create it.
Move to the child and repeat.
At the end, mark is_end = True.
Also I crease the prefix and word count

search(word) – Check if word is in the Trie
Follow the path for each character.
If character is missing, return False.
At end, return True only if is_end is True.

startsWith(prefix) – Check if any word starts with the given prefix
Traverse like search.
But don’t check is_end. If all prefix characters are found → return True.

countWordsEqualTo(word) – Returns the number of times a word has been inserted.
countWordsStartingWith(prefix) – Returns the number of words starting with the given prefix.

prefix_count: tells how many words share the current prefix
word_count: tells how many times this specific word was inserted
erase() delete and reverses this logic by decrementing both counts appropriately.

2. Word Search-2:
Use a Trie to efficiently store the dictionary.
Use DFS + backtracking from each board cell to explore valid words.
Prune the search early using the Trie prefix check.
Insert all words into a Trie.
For every cell on the board, perform DFS traversal:
Move in 4 directions (up, down, left, right).
Track visited cells (temporarily modify the board to mark visited).
Stop recursion if prefix is not in the Trie.
Store matched words in a result set to avoid duplicates.

3. Add and Search Word
Use a Trie to store all words.
While searching, if . is found, try all possible child nodes (recursion).
Use DFS during search when encountering a wildcard ..

4. Replace Word
Build a Trie using the root words.
For each word in the sentence, find the shortest root that matches the prefix.
If no root matches, keep the original word.

5. Design Search Autocomolete system
Use a Trie where each node stores:
A dictionary of children
A hashmap of sentences → frequency
During input:
Traverse Trie to node matching current prefix.
Use a min-heap to get top 3 sentences sorted by freq and lex order.

6. Longest word in dictionary 
Insert all words into a Trie, marking if a node is the end of a valid word.
Perform BFS from the root:
At each node, move only if the current path represents a complete word.
Keep track of the longest valid word seen.
This ensures:
Only words with all prefixes present are considered.
BFS ensures we find longest-length first, and in lexicographical order if needed.

7. Max XOR of two numbers in an array
Convert all numbers to binary strings of equal length (say 32-bit).
Insert all numbers into a Trie, bit by bit.
For each number, try to find in the Trie the best number to XOR with it (trying to take opposite bits at each step to maximize result).
Track the maximum XOR obtained.

8. Concatenated string
Insert all words into a Trie.
For each word, perform a DFS with memoization to check if it can be broken into ≥2 smaller words found in the Trie.
Exclude the current word itself when trying to form it.

9. Search Suggestions System
Insert all products into a Trie.
At every Trie node, maintain a list of top 3 lexicographically smallest words that reach this node.
For each character typed, traverse Trie and collect suggestions from the current node.

10. 








###############################################################
DSA::Solution::Stack/Queue/LinkedList


When we get closing brackets pop from stack and match. True/False
If stack is empty it's true. 
Time: O(n) — One pass through the string
Space: O(n) — Stack can grow up to n in the worst case

2. Min Stack-perform all the operation in O(1) TC
Create two stack stack and min_stack
Push the element to stack and push the min element to min_stack
Time: O(1) for all operations
Space: O(n) — storing values in two stacks

3. Evaluate Reverse Polish Notation
Use a stack.
For each token:
If it's a number, push it onto the stack.
If it's an operator, pop the top two elements, perform the operation, and push the result back.
Note: Division between two integers should truncate toward zero.
Time: O(n) — where n = number of tokens
Space: O(n) — stack storage

4. Daily Temperatures: Monotonic stack
We process temperatures from left to right (Day 0 to Day n-1).
We use a stack to keep track of indices of days whose warmer temperature is not yet found.
Whenever the current day is ikkkkkkkl the day on top of the stack, it means we have found the "next warmer day" for the day at the top of the stack.
Then we calculate the difference in days and fill it in the result.
Time: O(n) → each index is pushed and popped at most once.
Space: O(n) → for stack and result array.

5. Next Greater Element
Use a monotonic decreasing stack to process nums2 and find next greater elements.
Store answers in a hash map, e.g.  kmmmm mmu vbbf.b.5

next_greater_map[num] = next_greater_value
For each num in nums1, just look it up in the map.

6. Next Greater Element 2-circular array
Use a stack to store indices of elements.
Traverse the array twice (2 * n) to simulate the circular nature.
On each iteration i:
While stack is not empty and nums[i % n] > nums[stack[-1]]:
Pop from stack and set result.
Only push indices from the first pass (i < n) onto the stack (to avoid duplicates).

7. Largest rectangle in Histogram
Add a sentinel 0 at the end of the array to flush out remaining bars in stack.
Iterate through heights.
While current height is less than top of stack:
Pop the stack
Calculate area using popped height and current index
Push current index onto the stack

8. Asteroid Collision
Traverse asteroids one by one.
For each asteroid:
If it’s moving right, push onto stack.
If it’s moving left, compare it with the top of the stack:
While the top is moving right and its size < current left asteroid:
Pop it (it explodes)
If same size → both explode
If stack top is larger → current asteroid explodes
If no collision → push current asteroid
Return the stack.

9. Remove k digits
Use a monotonic increasing stack
Remove digits when the current digit is smaller than the top of the stack

10. Decode Strings
Use two stacks:
One for numbers (repeat counts)
One for string fragments
Whenever we hit '[', we push current number and string onto their stacks and reset them.
When we hit ']', we pop from stacks and build the new string by repeating.
If it is character add to result
If it is digit add update the num

11. Simplify Path
Split the path using '/' as delimiter.
Use a stack to simulate path traversal:
If the part is '..' → pop from stack (go up one directory)
If the part is '.' or empty → ignore
Else → push directory name to stack
Join the stack with '/' and prefix with '/' to get the canonical path.

12. Rainwater Trapping Water
Monotonic Decreasing Stack
Use a stack of indices to keep a decreasing sequence of heights.
When you see a bar taller than the stack top, you pop and compute trapped water using the current bar as the right boundary and the new stack top as the left boundary.
Two Pointers (Optimal)
Maintain two pointers l and r starting at the ends.
Track left_max and right_max.
Move the pointer with the lower height inward, and accumulate water by max_boundary - height.

13. Calculator-1
We need to handle:
Numbers (may be multi-digit)
Signs (+ or -)
Parentheses which change the current sign context
Use a stack to:
Save the ongoing result and sign before entering a parenthesis
Upon seeing '(', push (current_result, current_sign) and reset them
Upon seeing ')', pop the saved state and combine
Initialize:
res = 0 → current accumulated result
sign = 1 → current sign (+1 or -1)
stack = []
i = 0 → index in string
Iterate while i < len(s):
Digit → parse full number, then res += sign * number
'+' → sign = +1
'-' → sign = -1
'(' → push (res, sign) onto stack, then reset res = 0, sign = 1
')' → pop (prev_res, prev_sign), then res = prev_res + prev_sign * res
space → skip
Return res

14. Calculator-2
Algorithm:
Initialize:
stack to store intermediate results.
num to build multi-digit numbers.
sign to track the last operator (start with '+').
Traverse each character ch in the string:
If ch is a digit: build the full number.
If ch is an operator (or it's the last char in the string):
Based on the last seen sign, act:
'+': push num
'-': push -num
'*': pop and push prev * num
'/': pop and push int(prev / num) (truncates toward 0)
Update sign to current operator.
Reset num = 0
Return the sum of all values in the stack.


15. Design a stack with increment operation
Design a special stack with the following operations:
CustomStack(maxSize) – Initializes the stack with a maximum size maxSize.
push(x) – If the stack hasn’t reached maxSize, push the integer x onto the stack.
pop() – Pops and returns the top of the stack. If the stack is empty, return -1.
increment(k, val) – Increments the bottom k elements of the stack by val. If the stack has fewer than k elements, increment all of them.


Queue:

1. Implement queue using stacks
We use two stacks:
in_stack → for enqueue (push)
out_stack → for dequeue (pop, peek)
How it works:
When popping or peeking, if out_stack is empty:
Transfer all elements from in_stack to out_stack.
This reversal makes the oldest element appear on top (FIFO).
If out_stack is not empty, just use it directly for pop and peek.

2. Implement stack using queue
Implement a stack using only queues.
Implement the following operations:
push(x) – Push element x onto stack.
pop() – Removes the element on top of the stack and returns it.
top() – Get the top element.
empty() – Return whether the stack is empty.
⚠️ Only standard queue operations allowed:
append(x) (enqueue at back)
popleft() (dequeue from front)
len(queue), checking if queue is empty
Add the new element to the queue.
Rotate the queue to move the new element to the front:
This simulates stack behavior (LIFO), where the last pushed is at the front.

3. Moving Average
Use a queue to store up to k elements.
Maintain the sum of the current window for O(1) average calculation.
When the number of elements > k, remove the oldest one from the front of the queue and adjust the sum.

4. Max Sliding Window
Use a monotonic decreasing deque to store the indices of the elements, ensuring:
Elements in deque are in decreasing order of value.
The front of the deque always holds the index of the current maximum of the sliding window.
Pop:
From back if the new number is larger.
From front if it's out of the current window range.
Push in result when index is equal or more than k
Start of index would be i-k+1

5. Number of Recent calls
Use a queue to keep track of the timestamps of pings.
When a new ping comes:
Add t to the queue.
Remove all timestamps less than t - 3000 (they're outside the range).
The length of the queue now tells you how many pings are in the valid range.

6. Perfect Squares
Start from n, try subtracting perfect squares.
For each level in BFS → 1 step taken.
When we reach 0, return the number of steps taken so far.


7. Time required to buy the tickets
A person in front of or at your position (i <= k) will get at most min(tickets[i], tickets[k]) turns before you're done.
A person after your position (i > k) will get at most min(tickets[i], tickets[k]-1) turns. Why? Because after your final ticket is bought, they won’t get another turn.


Linked List:
1. Reverse a Linked List
We need to reverse the direction of all .next pointers.
Steps:
Initialize two pointers:
prev = None
curr = head
Traverse the list:
Save the next node (next_node = curr.next)
Reverse the pointer (curr.next = prev)
Move prev and curr forward.
When traversal ends, prev will point to the new head.

2. Merged two sorted List
Create a dummy node to help easily return the final merged head.
Maintain a pointer tail to track the current node in the merged list.
While both lists are not empty:
Compare values from list1 and list2
Append the smaller one to tail.next
Move forward in that list and advance tail
After loop, append any remaining nodes from list1 or list2.

3. Detect cycle in a Linked List
Floyd's Tortoise & Hare Cycle Detection
We'll use two pointers:
slow: moves one step at a time.
fast: moves two steps at a time.
If there's no cycle, fast will reach the end (None) first.
If there's a cycle, fast and slow will eventually meet (collide) inside the loop.


4. Detect cycle Linked List 2- return the node 
Floyd's Tortoise & Hare Cycle Detection
where cycle begins
Detect Cycle using slow and fast pointers.
When slow == fast, a cycle exists.
To find the starting node of the cycle:
Reset one pointer to head
Move both pointers one step at a time
They will meet at the starting node of the cycle

5. Remove the nth node from the end of the list
We use a dummy node to simplify edge cases (like removing the first node).
Initialize dummy → head
Move fast pointer n steps ahead
Move both fast and slow together until fast reaches end
slow.next is the node to delete
Bypass it: slow.next = slow.next.next

6. Reorder List
Find the Middle of the list using slow & fast pointers.
Reverse the Second Half of the list.
Merge the Two Halves alternately.
How to find the midddle-
slow moves one step at a time.
fast moves two steps at a time.
When fast reaches the end, slow will be at the middle.

7. Palindrome of a Linked List'
Find the middle of the linked list using slow/fast pointers.
Reverse the second half of the list.
Compare the first and second half node by node.
Restore the list (optional).
Return whether both halves matched.

8. Add two Numbers
Initialize a dummy node to build the result list.
Use a carry to store carry-over during addition.
Traverse both lists simultaneously:
Add digits from both nodes + carry.
Update carry = sum // 10.
Create a new node with sum % 10.
If any carry remains after the loop, add a new node with the carry.

9. Add two Numbers-2
Use two stacks to reverse the order of the digits.
Pop from the stacks to simulate right-to-left addition.
Track carry and build the output list in reverse (head insertion).

10. Copy List with Random pointer
Clone each node and interleave with original list
Assign random pointers
Separate the two lists
Detach the cloned list from the original one.

11. Intersection of two Linked List'
Use two pointers, pA and pB, starting at headA and headB. When a pointer reaches the end, redirect it to the other list’s head.
Eventually, both pointers will either:
Meet at the intersection node, or
Both reach null if there's no intersection.

12. Merge K sorted list
We push the head nodes of all lists into a min-heap.
Always extract the smallest element, and push the next node of that list into the heap.

13. Sort Lists- Merge Sort
Base Case: If head is None or only one node, return head.
Split the list in two halves using slow & fast pointer.
Recursively sort left and right parts.
Merge both halves.


14. 


























##################################################################
DSA::Solution::Graph/DP/Greedy/Array/String

Graph:
1. No of Islands
Visit all nodes
Check if 1 and not visited ++ and run dfs
If 0 and visited return and explore adjacent elements by running dfs.

2. No of distinct islands

3. Course Schedule(cycle detection in directed graph):

4. Graph Valid Tree

5. Course Schelude 2

6. Alient Dictionary

7. Network delay time(Dijkstra Algo)

8. Cheapest flights within k stops(Dijkstra Algo)

9. Reduntant Connection 

10. Satisfiability of Equality Equations

11. Critical Connections in a Network(Kosaraju's/Tarjan's Algo)

12. Minimum cost to connect all points(Prime's algo)

13. Clone graph

14. Word Ladder

15. 01 Matrix

16. Rotten Oranges

17. Walls and Gates

18. Bellman Ford

19. Reconstruct Itinerary

20. Shortest path visiting all nodes

21. Is graph bipartite


