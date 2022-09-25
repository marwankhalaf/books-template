let photo = document.getElementById("photo");
let bollts = document.querySelectorAll(".bollts span");
console.log(photo);
console.log(bollts);

bollts.forEach((spn)=>{
 spn.addEventListener("click" , (e)=>{
   photo.src = spn.dataset.target;
 })
})

let all = document.getElementById("all");
let close = document.getElementById("close");
let user = document.getElementById("user");

user.addEventListener ("click" , ()=>{
all.style.display = "block"
})

close.addEventListener ("click" , ()=>{
    all.style.display = "none"
    })

  
let yes = document.getElementById("yes");  
let srch = document.getElementById("srch"); 
let lock = document.getElementById("lock"); 


yes.addEventListener("click" , ()=>{
  srch.style.display = "block"
})

lock.addEventListener("click" , ()=>{
  srch.style.display = "none"
})

let bar = document.getElementById("bar");
let nav = document.getElementById("nav");
let barx = document.getElementById("barx");

bar.addEventListener("click" , ()=>{
  nav.style.display = "block"
  
  
})

let scrol = document.getElementById("scroll");
console.log(scrol)

window.addEventListener("scroll", ()=>{
  if(scrollY > 300){
    scrol.style.display = "block"
  }else{
    scrol.style.display = "none"
  }
  
})

scrol.addEventListener("click" , ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})




