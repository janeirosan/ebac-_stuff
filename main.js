const pokeForm = document.getElementById('poke-form');
const trainerName = document.getElementById('name');
const trainerAge = document.getElementById('age');
const trainerShirt = document.getElementById('shirtnum');
const btnSend = document.getElementById('btn-send');
const noticeSuccess = document.getElementById('notice-scss');
const noticeFalse = document.getElementById('notice-false');

function numValidate() {
    if (parseInt(trainerShirt.value, 10) > parseInt(trainerAge.value, 10)) {
        return true
    }
    return false
}
trainerShirt.addEventListener('input', ()=>{
    if (numValidate()) {
        noticeFalse.style.display = 'none';
        btnSend.disabled = false;
    } else {
        noticeFalse.style.display = 'block';
        btnSend.disabled = true;
    }
})

pokeForm.addEventListener('submit', function(e) {
    let formValid = false;
    e.preventDefault();
    
    formValid = numValidate(trainerAge)
    if (formValid) {
        noticeSuccess.style.display = 'block';
        noticeSuccess.innerText = `Thanks, ${trainerName.value}! We'll see you at the challenge ;)`;
    }
})