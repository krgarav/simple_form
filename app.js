// const names = document.getElementById("name")
// const email = document.getElementById("email")
// const phone = document.getElementById("phone")
let i=1
function onsubmitform(event){
    const names = document.getElementById("name").value
const email = document.getElementById("email").value
const phone = document.getElementById("phone").value
event.preventDefault()
const obj= {
    "names":names,
    "email":email,
    "phone":phone
}
const serialised= JSON.stringify(obj)
localStorage.setItem(`obj${i}`,serialised)

const deserialised=JSON.parse( localStorage.getItem(`obj${i}`))
const newName = deserialised.names
const newPhone = deserialised.phone
const newEmail=deserialised.email
const items =document.getElementById("items")
const newli = document.createElement("li")
const newtext = document.createTextNode(`name:${newName} - Email:${newEmail} - Phone No:${newPhone}`)
newli.appendChild(newtext)
items.appendChild(newli)
console.log(newli)
i=i+1
}