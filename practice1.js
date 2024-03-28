
// bubble sort

let arr  = [21993,123,123,4,4,43543,534,2,344,425,25,535,-2];

function bubbleSort (arr){
         
    for (let i=0;i<arr.length-1;i++){
        for (let j=0;j<arr.length-1-i;j++){
            if (arr[j]>arr[j+1]){
                
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                
            }
            }
        }
    
    return arr
}

console.log(bubbleSort(arr))

// worst and average case O(n^2)

// selection sort    


let arr =  [8,56,352,678786,86,6465,424,455,656,57,86,8];
let n =arr.length;

function selectionSort (arr,n){
    
    for (let i=0;i<n-1;i++){

        let min =i;
        for (let j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        let temp = arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }

    return arr

}

console.log(selectionSort(arr,n))

// worst and average case O(n^2)


// Merge sort

let arr = [9128331,33,24245,6,67,86,869,4533,123,4,556457456,3542,42,425,3646];
function mergeSort (arr){
    if(arr.length<2){
        return arr;
    }

    const mid = Math.floor(arr.length/2);

    const leftarr = arr.slice(0,mid);
    const rightarr = arr.slice(mid);

   return merge(mergeSort(leftarr),mergeSort(rightarr));
}

function merge(leftarr,rightarr){
    const sortedarr = [];
    while(leftarr.length && rightarr.length){

        if (leftarr[0]<=rightarr[0]){
            sortedarr.push(leftarr.shift())
        }
        else{
            sortedarr.push(rightarr.shift());
        }
    }
    return [...sortedarr,...leftarr,...rightarr]
}
console.log(mergeSort(arr));

// this is the best case of sorting element O(nlogn)

// Quick sort

let arr = [32,123,45,34546,657,-1,7,68,4234,5345,645,64452,432,34,5435];

function quickSort (arr){
    if (arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1];
    let leftarr = [];
    let rightarr = [];
    
    for (let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftarr.push(arr[i]);
        }
        else{
            rightarr.push(arr[i]);
        }
    }
    return [...quickSort(leftarr), pivot,...quickSort(rightarr)]

}

console.log(quickSort(arr));

// the best case complexity O(n log n)



// stack operation
let t =-1 ;
let MAX = 10;
let a = Array(MAX).fill(0);

function isEmpty (){
	return (t<0)
}

function push (x){

	if (t>=(MAX-1)){
		console.log('stack overflow')
	}
	else {
		t+=1;
		a[t]=x;
		console.log(x)
		return x
	}


}

function pop(){
	if (t<0){
		console.log('stack underflow')
	}
	else {
		var x = a[t];
		t-=1;
		return x
	}
}

function peek (){
	if (t<0){
		console.log('stack underflow')
	}
	else{
		var x = a[t];
		return x
	}
}

function print(){
	for (let i=t;i>-1;i--){
		console.log(a[i])
	}
}

push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
push(100)
push(200)
pop()
push(555)
print()



// Queue


class queue {


    constructor (){
        this.items=[]
    }

    isEmpty(){
        
        return this.items.length==0;

    }

    enqueue(element){
        this.items.push(element);
        console.log(element);
        
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('queue is underflow');
        }
        else{
            this.items.shift();
            
        }
    }

    front(){
        if(this.isEmpty()){
            console.log('queue is underflow');
        }
        else{
            return this.items[0];
        }
    }

    rear(){
        if (this.isEmpty()){
            console.log('queue is underflow')
        }
        else{
            return this.items[this.items.length-1];
        }
    }
    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    }


}
var Queue = new queue();

Queue.enqueue(100);
Queue.enqueue(200);
Queue.enqueue(340);
Queue.enqueue(400);
Queue.enqueue(500);

// Queue.print();
Queue.dequeue();
Queue.print();

// LinkedList

class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList {
    constructor (){
        this.head=null;
        this.size=0;
    }

    // InsertFirst Node

    insertFirst(data){
       this.head=new Node(data,this.head);
       this.size++;
    }

    // insertLast
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head=node;
        }
        else{
            current=this.head;

            while(current.next){
                current=current.next;

            }

            current.next=node;

        }
        this.size++;
    }

    print(){
        let current=this.head;

        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

}

let LL = new LinkedList();
LL.insertFirst(100);
LL.insertFirst(200);
LL.insertFirst(300);
LL.insertLast(500)
LL.print()

