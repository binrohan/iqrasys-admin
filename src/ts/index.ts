import '../css/index.css';
import user from '../images/user.svg';
import { isAuthenticated } from './auth';

isAuthenticated();



const userIcon = document.querySelector('img#user-icon')! as HTMLImageElement;
userIcon.src = user;


