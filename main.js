let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }

  function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();

let number1=document.getElementById("number1");
let counte1r=0;
let intervalId1=setInterval(()=>{
    if(counter==90){
        clearInterval(intervalId1);
    }
    else{
        counter +=1;
        number.innerHTML=counter+"%";
    }
},30)

let number2=document.getElementById("number2");
let counte2r=0;
let intervalId2=setInterval(()=>{
    if(counter==65){
        clearInterval(intervalId2);
    }
    else{
        counter +=1;
        number.innerHTML=counter+"%";
    }
},30)

let number3=document.getElementById("number3");
let counter3=0;
let intervalId3=setInterval(()=>{
    if(counter==30){
        clearInterval(intervalId3);
    }
    else{
        counter +=1;
        number.innerHTML=counter+"%";
    }
},30)