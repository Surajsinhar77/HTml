

const outerSpan = document.querySelector('.outerSpan');
const innnerSpan = document.querySelector('.innerSpan');

const firstNote = document.querySelector('.notes ');

const secondNote = document.querySelector('.secondNote');

let theNote = `  
    <div class="content">
    <div class="note1">
        <textarea class='writingPart'></textarea>
        <button class="deleteDtn"> D </button>
    </div>
    </div>
`

secondNote.classList.remove('hidden');


outerSpan.addEventListener('click', ()=>{
    firstNote.insertAdjacentHTML('afterbegin', theNote);
});


innnerSpan.addEventListener('click', ()=>{
    firstNote.insertAdjacentHTML('afterbegin', theNote);
})

