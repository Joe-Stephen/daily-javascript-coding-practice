//graph - undirected
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (const vertex of this.adjacencyList) {
      console.log(vertex, "-->", [...this.adjacencyList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  deleteEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  deleteVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    }
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.deleteEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  //graph traversal-BFS

  bfs(startVertex) {
    const visited = {};
    const queue = [];
    queue.push(startVertex);
    visited[startVertex] = true;
    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }

  //graph traversal-DFS

  dfs(startVertex) {
    const visited = {};
    const dfsHelper = (vertex) => {
      console.log(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    };
    dfsHelper(startVertex);
  }
}
