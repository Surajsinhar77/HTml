// var element  = document.querySelector('#onlyDiv');
//     console.log(" i am running")
//         var btn = document.querySelector('.btn');

//         btn.addEventListener('mouseover', function doTask(){
//             element.classList.toggle('box');
//         }
//         )


let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let para = document.querySelector('.para');

// console.log(para);
para.textContent = " i am  a paragraph ";

div1.addEventListener('click', ()=>{
    div2.classList.toggle('red');
})

div2.addEventListener('click', ()=>{
    div1.classList.toggle('blue');
})



