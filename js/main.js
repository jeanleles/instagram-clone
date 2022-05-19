const username = document.getElementById('username')
const password = document.getElementById('password')

username.addEventListener('input', () => {
    if(username.value.length != '' & password.value.length > 5) {
        document.getElementsByClassName('button-login').classList.add('button-enabled')
    } else {
        document.getElementById('login').classList.remove('button-enabled') 
    }
})

password.addEventListener('input', () => {
    if(username.value.length != '' & password.value.length > 5) {
        document.getElementById('login').classList.add('button-enabled')
    } else {
        document.getElementById('login').classList.remove('button-enabled') 
    }
})