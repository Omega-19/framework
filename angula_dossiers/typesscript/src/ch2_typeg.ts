//typage générique
function fusion<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}
let c = fusion(['a', 'b', 'c'], ['d', 'e']);
console.log(c);

class Queue<T>{
    tab : T[] = [];
    i: number =0
    push(A: T): T[]{
        this.tab[this.i]=A; 
        this.i++;
        return this.tab;
    }
    pop(){
        return this.tab[0];
    }
}
let queue = new Queue<number>()

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue.pop());
/**************************** */
class QueueArray<T>{
    tab : T[]  = [];
    i: number =0
    push(A: T): T[]{
        this.tab[this.i]=A; 
        this.i++;
        return this.tab;
    }
    pop(){
        return this.tab[0];
    }
}
let queueArray = new Queue<Array<number>>()

queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
console.log(queueArray.pop());
