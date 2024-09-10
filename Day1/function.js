// function myFunction(){
//     console.log("Hello Duniya");
// }
// myFunction();
// myFunction();

// function myFunction(msg){//parameter
//     console.log("Hello ",msg)
// }
// myFunction("Raksha");//argument


// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let res=sum(3,2);
// console.log(res);


// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(2,4);
// const mul=(a,b)=>{
//     return a*b;
// }
// let value= mul(3,4);
// console.log(value);
// const printHello=()=>{
//     console.log("Hello");
// }
// printHello();


// const vowelCount=(str,vowels)=>{
//     let len=0;
//     for(let i of str){
//         for(let j of vowels){
//             if(i==j){
//             len++;
//             }
//         }
//     }
//     return len;
// }
// let vowels='aeiou';
// let str=prompt("Enter a string:");
// let res=vowelCount(str,vowels);
// console.log("Length of a string=",res);


// let arr=[1,2,3,4,5,6];
// arr.forEach(function printval(val){
//     console.log(val);
// })

// let arr=["Harion","lalbandi","Nawalpur"];
// arr.forEach((val,idx)=>{
//     console.log(val.toUpperCase(),idx);
// })

// let arr=["Harion","lalbandi","Nawalpur"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })


// let arr=[2,34,4,56,7];
// arr.forEach((val)=>{
//     console.log(val**2);
// })


// let arr=[2,34,4,56,7];
// let calculate=(val)=>{
//     console.log(val**2);
// }
// arr.forEach(calculate);


// let arr=[2,34,4,56,7];
// let newarr=arr.map((val)=>{
//     return (val*val);
// })
// console.log(newarr);


// let a=[1,2,3,4,5,6,7,8,9];
// let even=a.filter((val)=>{
//     return val%2===0;
// })
// console.log(even);


// let arr=[1,2,6,7,3,4];
// let calculate=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(calculate);
// let largest=arr.reduce((pre,curr)=>{
//     return pre>curr?pre:curr;
// })
// console.log(largest);


// let marks=[23,56,93,82,95];
// let filterMarks=marks.filter((val)=>{
//     return val>90;
// })
// console.log(filterMarks);


// let n=prompt("Enter the value of n:");
// let arr=[];
// for(i=0;i<n;i++){
//     arr[i]=i+1;
//     // arr[i]=prompt("Enter numbers")
// }
// console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sum);
// let mul=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(mul);
