import { Validations } from "./Utils.js";

// Declare variables for DOM elements
let validations;
let email;
let message;
let submit;
let name;
let surname;
let phone;
let infoSubject;
let object;

/* Info messages */
let infoMessage;
let infoName;
let infoSurname;
let infoObject;

/* Errore messages */
let errorName;
let errorSurname;
let errorEmail;
let errorMessage;
let errorPhone;
let errorObject;
let errorSubject;

function showInfoMessage(elt, message){
    elt.innerHTML = message;
    elt.style.display = 'block';
}

function hideInfoMessage(elt){
    elt.innerHTML = '';
    elt.style.display = 'none';
}

function showErrorMessage(elt, message){
    elt.innerHTML = message;
    elt.style.display = 'block';
}

function hideErrorMessage(elt){
    elt.innerHTML = '';
    elt.style.display = 'none';
}

// Inizializzazione delle variabili all'interno di window.onload
window.onload = function() {
    validations = new Validations();
    email = document.getElementById('email');
    message = document.getElementById('message');
    submit = document.getElementById('submit');
    name = document.getElementById('name');
    surname = document.getElementById('surname');
    phone = document.getElementById('phone');
    infoSubject = document.getElementById('info-subject');
    object = document.getElementById('object');

    /* Caricamento dei messaggi informativi dal DOM */
    infoMessage = document.getElementById('info-message');
    infoName = document.getElementById('info-name');
    infoSurname = document.getElementById('info-surname');
    infoObject = document.getElementById('info-object');

    /* Caricamento dei messaggi di errore dal DOM */
    errorName = document.getElementById('error-name');
    errorSurname = document.getElementById('error-surname');
    errorEmail = document.getElementById('error-email');
    errorMessage = document.getElementById('error-message');
    errorPhone = document.getElementById('error-phone');
    errorObject = document.getElementById('error-object');
    errorSubject = document.getElementById('error-subject');

    /* name messages */
    name.addEventListener('focus', function(){
        hideErrorMessage(errorName);
        showInfoMessage(infoName, 'Name length between 2 and 50 characters.');
        name.style.marginBottom = '0px';
        name.classList.add('selected');
        
    });
    name.addEventListener('blur', function(){
        if (!validations.validateLength(name.value, 2, 50)){
            showErrorMessage(errorName, 'Your name must be between 2 and 50 characters long.');
        } else {
            name.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoName);
        name.classList.remove('selected');

    });

    /* surname message */
    surname.addEventListener('focus', function(){
        hideErrorMessage(errorSurname);
        showInfoMessage(infoSurname, 'Surname length between 2 and 50 characters.');
        surname.style.marginBottom = '0px';
    });
    surname.addEventListener('blur', function(){
        if (!validations.validateLength(surname.value, 2, 50)){
            showErrorMessage(errorSurname, 'Your surname must be between 2 and 50 characters long.');
        } else {
            surname.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoSurname);
    });

    /* email messages */
    email.addEventListener('focus', function(){
        hideErrorMessage(errorEmail);
        email.style.marginBottom = '5vh';
    });
    email.addEventListener('blur', function(){
        if (!validations.validateEmail(email.value)){
            showErrorMessage(errorEmail, 'Please enter a valid email address.');
            email.style.marginBottom = '0px';
        }
    });

    /* phone messages */
    phone.addEventListener('focus', function(){
        hideErrorMessage(errorPhone);
        phone.style.marginBottom = '5vh';
    });
    phone.addEventListener('blur', function(){
        if (!validations.validatePhone(phone.value)){
            showErrorMessage(errorPhone, 'Invalid phone number.');
            phone.style.marginBottom = '0px';
        }
    });

    /* object messages */
    object.addEventListener('focus', function(){
        hideErrorMessage(errorObject);
        showInfoMessage(infoObject, 'Object length between 2 and 100 characters.');
        object.style.marginBottom = '0px';
    });
    object.addEventListener('blur', function(){
        if (!validations.validateLength(object.value, 2, 100)){
            showErrorMessage(errorObject, 'The object must be between 2 and 100 characters long.');
        } else {
            object.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoObject);
    });

    /* message messages */
    message.addEventListener('focus', function(){
        hideErrorMessage(errorMessage);
        showInfoMessage(infoMessage, 'Message length between 50 and 1000 characters.        Actually: ' + message.value.length + ' / 1000');
        message.style.marginBottom = '0px';
    });
    message.addEventListener('blur', function(){
        if (!validations.validateLength(message.value, 50, 1000)){
            showErrorMessage(errorMessage, 'The message must be between 50 and 1000 characters long.');
        } else {
            message.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoMessage);
    });
    message.addEventListener('keyup', function(){
        showInfoMessage(infoMessage, 'Message length between 50 and 1000 characters.        Actually: ' + message.value.length + ' / 1000');
    });
}
