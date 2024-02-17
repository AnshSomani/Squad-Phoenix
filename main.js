

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();
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

  let daysElement = document.getElementById("dt");
let hrsElement = document.getElementById("hrs");
let minElement = document.getElementById("min");
let secElement = document.getElementById("sec");

// Define your custom date
var customDate = new Date("Mar 15, 2024 00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    var now = new Date().getTime();
    var distance = customDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the countdown values
    daysElement.innerHTML = days;
    hrsElement.innerHTML = hours;
    minElement.innerHTML = minutes;
    secElement.innerHTML = seconds;

    // If the countdown is finished, clear the interval
    if (distance < 0) {
        clearInterval(x);
    }
}

// Initial call to update the countdown immediately
updateCountdown();

// Update the countdown every second
var x = setInterval(updateCountdown, 1000);


  
