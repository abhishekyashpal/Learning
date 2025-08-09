def bfs_adj_list(graph, starting_node):
    
    visited = {}
    queue = []
    bfs_result = []
    
    for node in graph:
        visited[node] = False
        
    visited[starting_node] = True
    queue.append(starting_node)

    while queue:
        current_node = queue.pop(0)
        bfs_result.append(current_node)
        
        for neighbour in graph[current_node]:
            if not visited[neighbour]:
                visited[neighbour] = True
                queue.append(neighbour)
            
    return bfs_result 
    
adj_list = {
    'A': [ 'B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(bfs_adj_list(adj_list, 'A'))    