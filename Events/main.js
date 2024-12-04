const btn=document.querySelector('.btn-success')
const form=document.querySelector('form')
const input=document.querySelector('input')
const select=document.querySelector('select')
const card=document.querySelector('.card')
const h1=document.querySelector('h1')
console.log(btn)
console.log(select)
console.log(input)
console.log(card)


let count=0
const runTime=(e)=>{
    e.preventDefault();
//    if(count%2==0)
//    {
//     card.className='card bg-light text-dark p-5 '
//     h1.innerText="I am All right"
// }
// else{
//      card.className='card bg-dark text-light p-5 '
//      h1.innerText="I am all fine"
// }
// count++
//   console.log(e.clientX)
//   console.log(e.clientY)
console.log( e.type)
// console.log(e.altKey)
// console.log(e.shiftKey)
//   console.log(e.target.parentElement)
// console.log("Event:"+e.type)
// console.log(e.clientX,e.clientY)
// console.log(e.clientX)
// card.style.backgroundColor=`rgb(${e.clientX},${e.clientY},123)`
// input.style.color="red"
// input.style.backgroundColor="yellow"
console.log(input.value,select.value)
   };
    

// btn.addEventListener("mousedown",runTime)
// btn.addEventListener("mouseup",runTime)
// card.addEventListener("mousemove",runTime)
// input.addEventListener('input',runTime)
// input.addEventListener('change',runTime)
// input.addEventListener('cut',runTime)
// input.addEventListener('copy',runTime)
// input.addEventListener('paste',runTime)
// input.addEventListener('keydown',runTime)
// input.addEventListener('keyup',runTime)
// input.addEventListener('keypress',runTime)
form.addEventListener('submit',runTime)