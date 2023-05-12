export const codeExamples = {
  constant: `const array = [1,2,3,4,5,6]
    console.log("Third position: ", array[3]) // Third position:  4`,
  logarithmic: `function binarySearch(array: number[], target: number): number {
        let left = 0;
        let right = array.length - 1;
      
        while (left <= right) {
          const middle = Math.floor((left + right) / 2);
          const value = array[middle];
      
          if (value === target) {
            return middle;
          } else if (value < target) {
            left = middle + 1;
          } else {
            right = middle - 1;
          }
        }
      
        return -1; // target not found
      }`,
  linear: `function linearSearch(arr: number[], target: number): number {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            return i; // Return index of target if found
          }
        }
        return -1; // Target not found
      }`,
  logLinear: `function linearSearch(arr: number[], target: number): number {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            return i; // Return index of target if found
          }
        }
        return -1; // Target not found
      }`,
  quadratic: `function bubbleSort(arr: number[]): number[] {
        const n = arr.length;
      
        for (let i = 0; i < n; i++) {
          // Last i elements are already in place
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j+1]
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
          }
        }
      
        return arr;
      }`,
  exponential: `interface City {
        x: number;
        y: number;
      }
      
      function distance(city1: City, city2: City): number {
        const dx = city1.x - city2.x;
        const dy = city1.y - city2.y;
        return Math.sqrt(dx*dx + dy*dy);
      }
      
      function tsp(cities: City[]): [number[], number] {
        const n = cities.length;
        const shortestTour: number[] = [];
        let shortestLength = Infinity;
      
        function visitCities(tour: number[], visited: boolean[]) {
          if (tour.length === n) {
            const tourLength = tour.reduce((total, city, i) =>
              total + distance(cities[city], cities[tour[(i+1)%n]]), 0);
            if (tourLength < shortestLength) {
              shortestTour.splice(0, shortestTour.length, ...tour);
              shortestLength = tourLength;
            }
          } else {
            for (let i = 0; i < n; i++) {
              if (!visited[i]) {
                tour.push(i);
                visited[i] = true;
                visitCities(tour, visited);
                visited[i] = false;
                tour.pop();
              }
            }
          }
        }
      
        visitCities([], Array(n).fill(false));
      
        return [shortestTour, shortestLength];
      }`,
  factorial: `function travelingSalesmanProblem(graph: number[][], startVertex: number): number[] {
        const n = graph.length;
        const vertices = [];
        for (let i = 0; i < n; i++) {
          if (i !== startVertex) {
            vertices.push(i);
          }
        }
      
        let minDistance = Infinity;
        let minPath: number[] = [];
      
        function permute(arr: number[], l: number, r: number) {
          if (l === r) {
            let currentDistance = graph[startVertex][arr[0]];
            for (let i = 0; i < arr.length - 1; i++) {
              currentDistance += graph[arr[i]][arr[i + 1]];
            }
            currentDistance += graph[arr[arr.length - 1]][startVertex];
            if (currentDistance < minDistance) {
              minDistance = currentDistance;
              minPath = [startVertex, ...arr, startVertex];
            }
          } else {
            for (let i = l; i <= r; i++) {
              [arr[l], arr[i]] = [arr[i], arr[l]];
              permute(arr, l + 1, r);
              [arr[l], arr[i]] = [arr[i], arr[l]];
            }
          }
        }
      
        permute(vertices, 0, n - 2);
      
        return minPath;
      }`
}
