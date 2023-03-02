var tabs = document.getElementsByClassName("tab")

for(var tab of tabs){
    tab.style.display = "none"
}
function showTab(name){

    for(var tab of tabs){
    tab.style.display = "none"
}
document.getElementById(name).style.display = "block"
}
showTab("pirmas")


const burger = document.getElementById("burger")
const links = document.querySelector(".links")

burger.addEventListener("click",function(){
    this.classList.toggle("rotate")
links.classList.toggle("open")
})