

const outerSpan = document.querySelector('.outerSpan');
const innnerSpan = document.querySelector('.innerSpan');

const firstNote = document.querySelector('.notes ');

const secondNote = document.querySelector('.secondNote');

let i = 0;

let theNote = `  
    <div class="content con${i}">
    <div class="note1">
        <textarea class='writingPart'></textarea>
        <button class="deleteDtn btnn${i}"> D </button>
    </div>
    </div>
`

secondNote.classList.remove('hidden');

const notestext = document.querySelectorAll('.content');
console.log(notestext);

outerSpan.addEventListener('click', ()=>{
    i++;
    console.log(i);
    firstNote.insertAdjacentHTML('afterbegin', theNote);
});


innnerSpan.addEventListener('click', ()=>{
    i++;
    console.log(i);

    firstNote.insertAdjacentHTML('afterbegin', theNote);
})

// const content = document.querySelectorAll('.content');
// let btn = content.querySelector('.deleteDtn');

let a  = document.querySelector(`.btnn${i}`);

let b = document.querySelector(`con${i}`);


a.addEventListener('click', ()=>{
    b.remove();
})
