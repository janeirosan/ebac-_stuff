document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rng-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let randomNum = Math.random() * maxNumber;
        randomNum = Math.floor(randomNum + 1);
        
        document.getElementById('result-value').innerText = randomNum;
        document.querySelector('.results').style.display = 'block';
    })
})