(() => {
   const btnBurger = document.querySelector(".header__menu--buger");
   const header = document.querySelector(".header");
   const link = document.querySelectorAll(".header__menu--link a");

   btnBurger.addEventListener("click",() => {
       if(header.classList.contains("open")){
           header.classList.remove("open");
       }
       else{
        header.classList.add("open");
       }
   })

   link.forEach((item) => {
        item.addEventListener("click", () => {
            header.classList.remove("open");
        })
   })
   
})()