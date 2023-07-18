//typage générique
function fusion<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}
let c = fusion(['a', 'b', 'c'], ['d', 'e']);
console.log(c);

class Queue {
    constructor(name: number) {
        this.name: string,
    }
}
let queue = new Queue()

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue.pop());
