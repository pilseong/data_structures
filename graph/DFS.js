const graph = [
  [0, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0]
]

const visited = [0, 0, 0, 0, 0, 0, 0];

function DFS(graph, v) {
  if (visited[v] === 0) {
    console.log(v)
    visited[v] = 1;
    for (let i = 0; i < graph[v].length; i++) {
      if (graph[v][i] === 1) {
        DFS(graph, i);
      }
    }
  }

}

DFS(graph, 5);
