const form=document.querySelector('form')
const input=document.querySelector('input')
const ul=document.querySelector('ul')
const Container=document.querySelector('.container')


const saveTodo=(e) =>{
    container.style.backgroundColor=`rgb(${clientY},${clientX},123)`
    e.preventDefault()
    let li=document.createElement('li')
    li.innerText=input.value
    li.className="list-group-item rounded-0"
    let dltbtn=document.createElement('button')
    dltbtn.innerText="Delete"
    dltbtn.className="btn btn-sm btn-danger rounded-0 float-end"
    li.appendChild(dltbtn)
    ul.appendChild(li)
    console.log(li)
}
form.addEventListener("click",saveTodo)

// form.addEventListener('submit',saveTodo)
// const form=document.querySelector('form')
// const input=document.querySelector('input')
// const ul=document.querySelector('ul')
// console.log(form)
// console.log(input)
// console.log(ul)
// c

// const saveTodo=(e) =>{
//   let li=document.createElement('li')
//   console.log(li)
