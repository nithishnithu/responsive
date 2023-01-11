const BurgerMenu = document.querySelector('.burger-menu');
const Close = document.querySelector(".close");
const List = document.querySelector(".list-cont");
const Navbar = document.querySelector(".navbar");

BurgerMenu.addEventListener("click",() =>{
    Navbar.style.display = "block";
    Close.style.display = "block";
    BurgerMenu.style.display = "none";
    
});

Close.addEventListener("click",() =>{
    Navbar.style.display = "none";
    Close.style.display = "none";
    BurgerMenu.style.display = "block";
    
});
