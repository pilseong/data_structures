const { Queue } = require('../queue/Queue');

const graph = [
  [0,1,1,0,0,0,0],
  [1,0,0,1,0,0,0],
  [1,0,0,1,1,1,0],
  [0,1,1,0,0,0,0],
  [0,0,1,0,0,0,0],
  [0,0,1,0,0,0,1],
  [0,0,0,0,0,1,0]
]

function BFS(graph, startV) {
  const queue = new Queue();
  const visited = [0,0,0,0,0,0,0];

  queue.enqueue(startV);
  visited[startV] = 1;

  while (queue.size !== 0) {
    const v = queue.dequeue();
    console.log(v);
    for (let i=0; i < graph[v].length; i++) {
      if (graph[v][i] === 1 && visited[i] === 0) {
        queue.enqueue(i);
        visited[i] = 1;
      }
    }
  }
}

BFS(graph, 0);
