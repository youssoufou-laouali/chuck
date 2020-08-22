const text = document.querySelector('.text');
const button = document.querySelector('button');
const icon = document.querySelector('.icon');
const img = document.querySelector('img')
button.addEventListener('click', generer);
document.addEventListener('DOMContentLoaded', generer)

function generer() {
    fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                'Accept': 'Application/json'
            }
        }).then(issi => issi.json())
        .then(a => {
            text.textContent = a.value

        })

}