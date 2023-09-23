const markAll = document.querySelector("a"),
      number = document.getElementById("notification-number"),
      notifications = document.querySelectorAll(".notification-content > div");  

markAll.addEventListener("click", ()=>{
    number.innerText = 0;
    notifications.forEach(e =>{
        if(e.classList.contains("unread")){
            e.classList.remove("unread");
        }
    })
})      

notifications.forEach(e => {
    e.addEventListener("click", ()=>{
        if(e.classList.contains("unread")){
            e.classList.remove("unread");
            number.innerText = number.innerText - 1; 
        }
    })
})