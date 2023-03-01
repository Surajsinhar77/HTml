const addBtn = document.querySelector('.addNotes');
const containNotes = document.querySelector('.containNotes');


const addHTML = `
    <div class="firstNote content">
        <div class="note1">
            <textarea class='writingPart'></textarea>
            <button class="deleteDtn"> D </button>
        </div>
    </div>
`

function addNotesInPage(){

    const notes = document.createElement('div');
    notes.classList.add('notes');

    notes.insertAdjacentHTML('afterbegin', addHTML );

    const dltBtm = notes.querySelector('.deleteDtn');
    containNotes.appendChild(notes);

    dltBtm.addEventListener('click', ()=> { notes.remove() });
}

addBtn.addEventListener('click', addNotesInPage);