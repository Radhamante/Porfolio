const HomePage = document.getElementsByClassName("homePage")[0]
const Proj1 = document.getElementsByClassName("project1")[0]
const Proj2 = document.getElementsByClassName("project2")[0]
const Proj3 = document.getElementsByClassName("project3")[0]
const Proj4 = document.getElementsByClassName("project4")[0]
const contact = document.getElementsByClassName("contact")[0]

const transition = document.getElementsByClassName("transition")[0]

const contactMessage = document.getElementsByClassName("contactMessage")[0];

let contactDisplay = false

const changePageTop = (from,to) =>{

    let i = 100
    transition.style.top = "100%";
    transition.style.height = "100%";

    const test = setInterval(() => {
        i = i - 5
        transition.style.top = i + "%"
        console.log(i)
    }, 1);
    if ( i < 0) {
        document.getElementsByClassName(from)[0].style.display = "none"
        document.getElementsByClassName(to)[0].style.display = "flex"
    }
    if (i < -100) {
        clearInterval(test)
        console.log("chuibo")
    }
    console.log("index")

}


const moveToProj1 = () =>{
    HomePage.style.display = "none"
    Proj1.style.display = "flex"
    Proj2.style.display = "none"
}
const moveToProj2 = () =>{
    Proj1.style.display = "none"
    Proj2.style.display = "flex"
    Proj3.style.display = "none"
}
const moveToProj3 = () =>{
    Proj2.style.display = "none"
    Proj3.style.display = "flex"
    Proj4.style.display = "none"
}

const moveToProj4 = () =>{
    Proj3.style.display = "none"
    Proj4.style.display = "flex"
}

const moveToHomePage = () =>{
    HomePage.style.display = "flex"
    Proj1.style.display = "none"
}

const displayContact = () =>{
    if (contactDisplay == false) {
        contact.style.height = "85px"
        contactDisplay = true
    }else if(contactDisplay){
        contact.style.height = "0px"
        contactDisplay = false
    }
}
function copyPass() {
    let password = document.getElementById("password");
    password.select();
    password.setSelectionRange(0, 99999)
    document.execCommand("copy");
    showMessage(71,0)
}
function copyEmail() {
    let email = document.getElementById("email");
    email.select();
    email.setSelectionRange(0, 99999)
    document.execCommand("copy");
    showMessage(28,0)

}
function showMessage(top,left) {
    contactMessage.style.display = "flex"
    contactMessage.style.top = top + "px"
    contactMessage.style.left = left + "px"
    setTimeout(()=>{
        contactMessage.style.display = "none"
    },3000)
}
