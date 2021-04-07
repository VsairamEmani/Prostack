var arr=[10,65,44,"scan"];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("using for of");
for(num of arr)
{
    console.log(num);
}
//"last index"
console.log(arr[arr.length-1]);



//using push");
arr.push(89);
console.log(arr);


//using pop
arr.pop();
console.log(arr);


//using shift
arr.shift();
console.log(arr);


//using unshift");
arr.unshift(765);
console.log(arr);

//using reverse
arr.reverse();
console.log(arr);