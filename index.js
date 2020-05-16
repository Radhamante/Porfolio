// lazy-Load

const lazyLoadEl = document.querySelectorAll('.lazy-load')

for(const element of lazyLoadEl)
{
    if(element.complete)
    {
        console.log("dans le cache")
        window.setTimeout(() => {
            element.classList.add('loaded')
        },Math.random() * 500)
    }

    element.onload = () => 
    {
        console.log("loaded")
        window.setTimeout(() => {
            element.classList.add('loaded')
        },Math.random() * 500)
    }
}

/* Contact Menu */


const contact = document.getElementsByClassName("contact")[0]
let contactDisplay = false

const displayContact = () =>{
    if (contactDisplay == false) {
        contact.style.height = "50px"
        contactDisplay = true
    }else if(contactDisplay){
        contact.style.height = "0px"
        contactDisplay = false
    }
}

let email = document.getElementById("email");

function copyEmail() {
    email.style.display = "flex"
    email.select();
    email.setSelectionRange(0, 99999)
    document.execCommand("copy");
    showMessage(28,0)
    email.style.display = "none"
}

const contactMessage = document.getElementsByClassName("contactMessage")[0];

function showMessage(top,left) {
    contactMessage.style.display = "flex"
    contactMessage.style.top = top + "px"
    contactMessage.style.left = left + "px"
    setTimeout(()=>{
        contactMessage.style.display = "none"
    },3000)
}


/* scroll */

const body = document.querySelector('body')

window.onscroll = e => {
    console.log(e)
    let oldScroll = 0
    console.log(e.oldScroll > e.scrollY);
    oldScroll = e.scrollY;
}
