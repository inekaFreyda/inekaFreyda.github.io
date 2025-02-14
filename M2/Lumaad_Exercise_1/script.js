const button = document.getElementById('changeTextBtn')
const para1 = document.getElementById('para1')

button.addEventListener('click', function() {
    para1.textContent = 'You clicked the button!'
})