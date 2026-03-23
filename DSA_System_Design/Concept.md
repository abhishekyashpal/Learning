Graph+DP+Greedy+Array+String
BT+stack+queue+linked list+searching+sorting
Heap+Bitmasking+Trie
Hashtable+Recursion+Backtracking


🔷 What Is a Graph?
A graph is a data structure that consists of:
Vertices (nodes): These are the individual elements.
Edges (connections): These are the links between the nodes.
Think of a graph as a network — like a map of cities (nodes) connected by roads (edges).

🔷 Types of Graphs
Directed Graph (Digraph):
Edges have directions.
Undirected Graph:
Edges have no direction.
Weighted Graph:
Edges carry a weight or cost.
Unweighted Graph:
No weights on edges.
Cyclic and Acyclic Graphs:
Cyclic: Contains at least one cycle 
Acyclic: No cycles. A special form is DAG (Directed Acyclic Graph), used in scheduling tasks.
Connected vs Disconnected Graph:
Connected: There is a path between every pair of nodes.
Disconnected: Some nodes are isolated.

🔷 Graph Representation
Adjacency Matrix:
2D array of size V x V.
Easy to check edge presence, but takes more space.
Adjacency List:
Array or map of lists.
More space-efficient and commonly used.

🔷 Graph Traversal Algorithms
Breadth-First Search (BFS):
Uses a queue.
Explores neighbors level by level.
Depth-First Search (DFS):
Uses a stack (or recursion).
Explores as far as possible before backtracking.

🔷 Applications of Graphs
Google Maps (finding shortest path)
Social networks (friend suggestions)
Web crawling
Scheduling (DAGs in compilers)
Network routing

✅ Example (Adjacency List):
Graph:
A — B
|   |
C — D

Adjacency List:
A: B, C
B: A, D
C: A, D
D: B, C

What Is Dynamic Programming (DP)?
Dynamic Programming is an optimization technique used to solve problems by breaking them into overlapping subproblems, storing results (memoization/tabulation), and reusing them. 

What Is a Greedy Algorithm?
A Greedy algorithm builds up a solution piece by piece, always choosing the next best (local optimum) with the hope that this leads to a global optimum.


Binary Tree:
A Binary Tree is a tree data structure in which each node has at most two children, called the left child and right child.

A Binary Search Tree is a binary tree where:
Left subtree contains values less than the node
Right subtree contains values greater than the node

An AVL Tree is a type of Binary Search Tree that maintains a balance factor for each node:
balanceFactor = height(left subtree) - height(right subtree)
Valid range: -1, 0, +1

Heap:
A Heap is a complete binary tree that satisfies the heap property:
Max-Heap: Parent node is always greater than or equal to its children.
Min-Heap: Parent node is always less than or equal to its children.


What is Bitmasking?
Bitmasking uses bits of integers (0s and 1s) to represent subsets or states. Commonly used in:
Subset generation
Dynamic Programming on subsets
Optimization problems (e.g. Travelling Salesman)
Basic Bit Operations-----
# Set ith bit (1-based index)
# Clear ith bit
# Toggle ith bit
# Check ith bit
# Count set bits (Brian Kernighan's Algorithm)

Trie: 
A Trie (prefix tree) is a tree-like data structure used for storing strings. Each node represents a character of the string.

Hashtable:
HashMap (Python dict)
HashSet (Python set)

---------------------------------------------------
Top DSA Problem List for Interview
