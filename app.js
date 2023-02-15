// const names = document.getElementById("name")
// const email = document.getElementById("email")
// const phone = document.getElementById("phone")

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
localStorage.setItem(email,serialised)

const deserialised=JSON.parse( localStorage.getItem(email))
const newName = deserialised.names
const newPhone = deserialised.phone
const newEmail=deserialised.email
const items =document.getElementById("items")
const newli = document.createElement("li")
//create delete button
const deleteBtn = document.createElement("input")
deleteBtn.type="button"
deleteBtn.value= "Delete"
deleteBtn.setAttribute('onclick','deleteli(event)')
//create edit button
const editBtn = document.createElement("input")
editBtn.type="button"
editBtn.value ="edit"
editBtn.setAttribute('onclick','editbtn(event)')

const newtext = document.createTextNode(`name:${newName}-Email:${newEmail}-Phone No:${newPhone}`)
newli.appendChild(newtext)
newli.appendChild(deleteBtn)
newli.appendChild(editBtn)
items.appendChild(newli)
}


function deleteli(event){
    event.target.parentNode.style.display="none"
    // localStorage.removeItem(event.target.parentNode)
    const key=event.target.parentNode.textContent.split("-")[1].split(":")[1].toString()
    console.log(key.length)
    localStorage.removeItem(key)
   }

 function editbtn(event){

    event.target.parentNode.style.display="none"
    const liName=event.target.parentNode.textContent.split("-")[0].split(":")[1].toString()
    const liEmail=event.target.parentNode.textContent.split("-")[1].split(":")[1].toString()
    const liPhone = event.target.parentNode.textContent.split("-")[2].split(":")[1].toString()
    console.log(liName)
    console.log(liEmail)
    console.log(liPhone)
     document.getElementById("name").value=liName
     document.getElementById("email").value = liEmail
     document.getElementById("phone").value=liPhone
    localStorage.removeItem(liEmail)
 }  
 
