// lazy-Load

const lazyLoadEl = document.querySelectorAll('.lazy-load')

for(const element of lazyLoadEl)
{
    if(element.complete)
    {
        window.setTimeout(() => {
            element.classList.add('loaded')
        },Math.random() * 500)
    }

    element.onload = () => 
    {
        window.setTimeout(() => {
            element.classList.add('loaded')
        },Math.random() * 500)
    }
}

/* Contact Menu */


const copyEmail = document.querySelector(".copyMail")
const contactMessage = document.querySelector(".contactMessage");
const email = document.querySelector("#email");

copyEmail.addEventListener("click", () => {
    email.classList.remove("displayNone")
    email.select();
    email.setSelectionRange(0, 999)
    document.execCommand("copy");
    contactMessage.classList.remove("displayNone")
    email.classList.add("displayNone")
    setTimeout(() => {
        contactMessage.classList.add("displayNone")
    },5000)
})







/* scroll */


const menu = document.querySelector('#menu_label')
const menuCheckbox = document.getElementById('menu_checkbox')



const HomePage = document.getElementsByClassName("homePage")[0]
const Proj1 = document.getElementsByClassName("project1")[0]
const Proj2 = document.getElementsByClassName("project2")[0]
const Proj3 = document.getElementsByClassName("project3")[0]
const Proj4 = document.getElementsByClassName("project4")[0]
const Proj5 = document.getElementsByClassName("project5")[0]

const allPages = ["homePage","project1","project2","project3","project4","project5"]

let currentPage = "homePage"

let scrolling = false

window.addEventListener('wheel', (e) => {
    scrollPage(e.deltaY)
})

const scrollPage = (e) =>{
    if(scrolling == false){
        if(e > 0) // decente
        { 
            
            if (currentPage != "project5") {

                const nextPage = allPages[allPages.indexOf(currentPage)+1]

                if (nextPage != "homePage") {
                    menu.style.display = "flex"
                    setTimeout(()=>{menu.style.opacity = "100%"},200)
                }

                const currentPageHtml = document.getElementsByClassName(currentPage)[0]
                const nextPageHtml = document.getElementsByClassName(nextPage)[0]
                scrolling = true
                
                currentPageHtml.classList.add("fadeOutUpBig")
                nextPageHtml.classList.remove("displayNone")
                
                window.setTimeout(() => {
                    currentPageHtml.classList.add("displayNone")
                    nextPageHtml.classList.add("fadeInUpBig")
                },200)
                
                window.setTimeout(() => {
                    scrolling = false
                    nextPageHtml.classList.remove("fadeInUpBig")
                    currentPageHtml.classList.remove("fadeOutUpBig")
                    currentPage = nextPage
                },1000)
            }
        }
        else // monté
        { 
            if (currentPage != "homePage") {
                const nextPage = allPages[allPages.indexOf(currentPage)-1]

                if (nextPage == "homePage") {
                    menuCheckbox.checked = false
                    menu.style.opacity = "0%"
                    setTimeout(()=>{
                        menu.style.display = "none"
                    },400)
                }

                const currentPageHtml = document.getElementsByClassName(currentPage)[0]
                const nextPageHtml = document.getElementsByClassName(nextPage)[0]
                scrolling = true

                currentPageHtml.classList.add("fadeOutDownBig")
                nextPageHtml.style.position = "absolute"
                nextPageHtml.style.top = "100%"
                nextPageHtml.classList.remove("displayNone")
                
                window.setTimeout(() => {
                    nextPageHtml.style.position = "relative"
                    nextPageHtml.style.top = "0%"
                    currentPageHtml.classList.add("displayNone")
                    nextPageHtml.classList.add("fadeInDownBig")
                },200)
                
                window.setTimeout(() => {
                    scrolling = false
                    currentPageHtml.classList.remove("fadeOutDownBig")
                    nextPageHtml.classList.remove("fadeInDownBig")
                    currentPage = nextPage
                    
                },1000)
            }
        }
    }
    
}

const toTop = document.querySelectorAll(".toTop")
const toBot= document.querySelectorAll(".toBot")

toTop.forEach((e) => {
    e.addEventListener("click", () => {scrollPage(-1)})
})

toBot.forEach((e) => {
    e.addEventListener("click", () => {scrollPage(1)})
})