let modal=document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

const openModal=()=>{
    console.log("Model ois open");
    modal.classList.add("active");
    modal.classList.add("overlayactive");
};

const closeModal=()=>{
    console.log("Model os open");
    modal.classList.remove("active");
    modal.classList.remove("overlayactive");
};