const caseStudy = document.querySelector('.case-study');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const project = document.querySelector('.project');

function toggleModal(){
    modal.classList.toggle('show-modal');
    if (event.target === modal) {
        project.classList.add('none');
    }
}

function windowOnClick(event) {
    if(event.target === modal){
        toggleModal();
    }
}

caseStudy.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);




