let newbtn=document.createElement("button");
newbtn.innerText="click me";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);

//Adding the new css property of newpara class without overriding the previous property
let cls=document.querySelector(".para");
cls.classList.add("newpara");