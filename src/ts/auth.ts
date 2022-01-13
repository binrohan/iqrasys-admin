import { isLoggedIn } from "../services/auth-service";

export const isAuthenticated = () => {
    isLoggedIn().then(data => {
        console.log(data);
    }, err => {
        alert(err);
        window.location.replace('/login.html');
    });
}
