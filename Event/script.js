// let btn=document.querySelector(".btn");
// let a=45;
// // btn.onclick=()=>{
// //     console.log("Button was clicked!");
// //     a++;
// //     console.log(a);
// // }
// // btn.onclick=()=>{  //This overrides the above code
// //     console.log("clicked!!!!");
// // }

// // btn.onclick=(e)=>{
// //     console.log(e);
// //     console.log(e.type);
// //     console.log(e.target);
// //     console.log(e.clientX,e.clientY);
// // }


// btn.addEventListener("click",()=>{
//     console.log("button was clicked-handler 1");
// })
// btn.addEventListener("click",()=>{
//     console.log("button was clicked-handler 2");
// })
// const clickEvent=()=>{
//     console.log("button was clicked-handler 3");
// }
// btn.addEventListener("click",clickEvent);
// btn.addEventListener("click",()=>{
//     console.log("button was clicked-handler 4");
// })
// btn.removeEventListener("click",clickEvent);

// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("You are on div");
// }


//Creating a toggle button for our website
let btn=document.querySelector("#mode");
let body=document.querySelector("body");
let mode="light";
btn.addEventListener("click",()=>{
    if(mode=="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
})