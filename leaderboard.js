const countries = [
    {name : "India", flag: "IN"},
    {name : "Australia", flag: "AUS"},
    {name : "Afghanistan", flag: "AFG"},
    {name : "Bangladesh", flag: "BAN"},
    {name : "Ireland", flag: "IRE"},
    {name : "New Zealand", flag: "NZ"},
    {name : "Pakistan", flag: "PAK"},
]

const headerNames = ["sno", "Name", "Flag", "Country", "Score", "Modify Score", "Delete"]

const form = document.querySelector("form")
const tables = document.querySelector("table")
const select = document.querySelector("form select")
const fnameInput = document.querySelector("#fname")
const lnameInput = document.querySelector("#lname")
const scoreInput  = document.querySelector("#score")
let counter = 1;

countries.forEach((country)=>{
    const option = document.createElement("option")
    option.innerHTML = country.name;
    Option.value = country.name;
    select.append(option)
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const tr = document.createElement("tr")

    //serial no.
    const sno = document.createElement("td")
    sno.innerHTML = counter++;
    tr.append(sno);

    //Name
    const name = document.createElement("td")
    name.innerHTML = fnameInput.value + "" + lnameInput.value;
    tr.append(name)

    //Flag
    const flag = document.createElement("td")
    flag.innerHTML = getflag(select.value)
    tr.append(flag);

    //country
    const country = document.createElement("td")
    country.innerHTML = select.value;
    tr.append(country)

    //score
    const score = document.createElement("td")
    score.innerHTML = scoreInput.value;
    tr.append(score);

    //Plus5
    const plus5 = document.createElement("td")
    plus5.classList.add("circle", "green");
    plus5.innerHTML = +5;
    plus5.addEventListener("click", ()=>{
        plus5.previousElementSibling.innerHTML=Number(plus5.previousElementSibling.innerHTML) +5
    })
    tr.append(plus5)

    //Minus 5
    const minus5 = document.createElement("td")
    minus5.classList.add("cricle", "red")
    minus5.innerHTML = -5;
    minus5.addEventListener("click", ()=>{
        minus5.previousElementSibling.previousElementSibling.innerHTML -=5;
    })
    tr.append(minus5)

    //Delete Icon
    const del = document.createElement("td")
    del.innerHTML = "<i class='fa fa-trash'></i>"
    del.addEventListener("click", ()=>{
        del.parentElement.remove()
    })
    tr.append(del)

    tables.append(tr)

    //clear out the form
    fnameInput.value = ""
    lnameInput.value = ""
    scoreInput.value = ""
    select.value = ""
})

function getflag(countryName){
    let output= '';
    countries.forEach((country)=>{
        if(country.name === countryName) output = country.flag;
    })
    return output;
}
function createTH(){
    const tr = document.createElement("tr")
    for (let i= 0; i<headerNames.length; i++){
        const th = document.createElement("th")
        th.innerHTML = headerNames[i];
        tr.append(th);
    }
    tables.append(tr)
}