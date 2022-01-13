import '../css/index.css';
import '../images/login.jpg';

import { login } from '../services/auth-service';

const formEl = document.querySelector('#login-form') as HTMLFormElement;
const username = document.querySelector('input[name=name]') as HTMLInputElement;
const password = document.querySelector('input[name=password]') as HTMLInputElement;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = {
        username: username.value,
        password: password.value
    }

    login(payload).then((data)=>{
        window.location.replace('/index.html');
    }).catch(err => {
        console.log(err);
    });
});