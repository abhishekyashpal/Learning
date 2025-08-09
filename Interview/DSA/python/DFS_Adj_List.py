def dfs_recursive(graph, node, visited, dfs_result):
    
    visited[node] = True
    dfs_result.append(node)
    
    for neighbour in graph[node]:
        if not visited[neighbour]:
            dfs_recursive(graph, neighbour, visited, dfs_result)
            
def dfs_traversal(graph, starting_node):
    visited = { node: False for node in graph}
    dfs_result = []
    dfs_recursive(graph, starting_node, visited, dfs_result)
    
    return dfs_result
 
adj_list = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
    
print('dfs_traversal', dfs_traversal(adj_list, 'A'))    