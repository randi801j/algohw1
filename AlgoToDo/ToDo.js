function pushFront(arr,val){
    for(let i = arr.length; i>=0;i--){
        arr[i]= arr[i-1]
    }
    arr[0]=val
    return arr
}
console.log(pushFront([5,7,2,3],8))

function popFront (arr){
    let front = arr[0]
    for (let i = 0 ; i<arr.length; i++){
        arr[i]= arr[i+1]
    }
    arr.length = arr.length- 1
    console.log(arr)
    return front
}
console.log(popFront([0,5,10,15]))

function insertAt (arr,index,value ){
    for(let i = arr.length; i >=index;i--){
        arr[i]= arr[i-1]
    }
    arr[index]= value 
    return arr
}
console.log(insertAt([100,200,5],5,311))
