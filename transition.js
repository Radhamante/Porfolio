const HomePage = document.getElementsByClassName("homePage")[0]
const Proj1 = document.getElementsByClassName("project1")[0]
const Proj2 = document.getElementsByClassName("project2")[0]
const Proj3 = document.getElementsByClassName("project3")[0]
const Proj4 = document.getElementsByClassName("project4")[0]
const Proj5 = document.getElementsByClassName("project5")[0]

const moveToProj1 = () =>{
    console.log(Proj1)
    HomePage.classList.add("displayNone")
    Proj1.classList.remove("displayNone")
    Proj2.classList.add("displayNone")
}

const moveToProj2 = () =>{
    Proj1.classList.add("displayNone")
    Proj2.classList.remove("displayNone")
    Proj3.classList.add("displayNone")
}

const moveToProj3 = () =>{
    Proj2.classList.add("displayNone")
    Proj3.classList.remove("displayNone")
    Proj4.classList.add("displayNone")
}

const moveToProj4 = () =>{
    Proj3.classList.add("displayNone")
    Proj4.classList.remove("displayNone")
    Proj5.classList.add("displayNone")
}

const moveToProj5 = () =>{
    Proj4.classList.add("displayNone")
    Proj5.classList.remove("displayNone")
}

const moveToHomePage = () =>{
    HomePage.classList.remove("displayNone")
    Proj1.classList.add("displayNone")
}