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

    let labelName = document.querySelector(`label[for="${name.id}"]`);
    let labelSurname = document.querySelector(`label[for="${surname.id}"]`);
    let labelEmail = document.querySelector(`label[for="${email.id}"]`);
    let labelPhone = document.querySelector(`label[for="${phone.id}"]`);
    let labelObject = document.querySelector(`label[for="${object.id}"]`);
    let labelMessage = document.querySelector(`label[for="${message.id}"]`);
    let labelSubject = document.querySelector(`label[for="${infoSubject.id}"]`);

    /* name messages */
    name.addEventListener('focus', function(){
        hideErrorMessage(errorName);
        showInfoMessage(infoName, 'Name length between 2 and 50 characters.');
        name.style.marginBottom = '0px';
        name.classList.remove('error-input');
        labelName.classList.remove('error-label');
        name.classList.add('selected');
    });
    name.addEventListener('blur', function(){
        name.classList.remove('selected');
        if (!validations.validateLength(name.value, 2, 50)){
            showErrorMessage(errorName, 'Your name must be between 2 and 50 characters long.');
            name.classList.add('error-input');
            labelName.classList.add('error-label');
        } else {
            name.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoName);
    });

    /* surname message */
    surname.addEventListener('focus', function(){
        hideErrorMessage(errorSurname);
        showInfoMessage(infoSurname, 'Surname length between 2 and 50 characters.');
        surname.style.marginBottom = '0px';
        surname.classList.remove('error-input');
        labelSurname.classList.remove('error-label');
        surname.classList.add('selected');
    });
    surname.addEventListener('blur', function(){
        if (!validations.validateLength(surname.value, 2, 50)){
            showErrorMessage(errorSurname, 'Your surname must be between 2 and 50 characters long.');
            surname.classList.add('error-input');
            labelSurname.classList.add('error-label');
        } else {
            surname.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoSurname);
        surname.classList.remove('selected');
    });

    /* email messages */
    email.addEventListener('focus', function(){
        hideErrorMessage(errorEmail);
        email.style.marginBottom = '5vh';
        email.classList.remove('error-input');
        labelEmail.classList.remove('error-label');
        email.classList.add('selected');
    });
    email.addEventListener('blur', function(){
        if (!validations.validateEmail(email.value)){
            showErrorMessage(errorEmail, 'Please enter a valid email address.');
            email.style.marginBottom = '0px';
            email.classList.add('error-input');
            labelEmail.classList.add('error-label');
        }
        email.classList.remove('selected');
    });

    /* phone messages */
    phone.addEventListener('focus', function(){
        hideErrorMessage(errorPhone);
        phone.style.marginBottom = '5vh';
        phone.classList.remove('error-input');
        labelPhone.classList.remove('error-label');
        phone.classList.add('selected');
    });
    phone.addEventListener('blur', function(){
        if (!validations.validatePhone(phone.value) && validations.validateIsNotNull(phone.value)){
            showErrorMessage(errorPhone, 'Invalid phone number.');
            phone.style.marginBottom = '0px';
            phone.classList.add('error-input');
            labelPhone.classList.add('error-label');
        }
        phone.classList.remove('selected');
    });

    /* object messages */
    object.addEventListener('focus', function(){
        hideErrorMessage(errorObject);
        showInfoMessage(infoObject, 'Object length between 2 and 100 characters.');
        object.style.marginBottom = '0px';
        object.classList.remove('error-input');
        labelObject.classList.remove('error-label');
        object.classList.add('selected');
    });
    object.addEventListener('blur', function(){
        if (!validations.validateLength(object.value, 2, 100)){
            showErrorMessage(errorObject, 'The object must be between 2 and 100 characters long.');
            object.classList.add('error-input');
            labelObject.classList.add('error-label');
        } else {
            object.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoObject);
        object.classList.remove('selected');
    });

    /* message messages */
    message.addEventListener('focus', function(){
        hideErrorMessage(errorMessage);
        showInfoMessage(infoMessage, 'Message length between 50 and 1000 characters.        Actually: ' + message.value.length + ' / 1000');
        message.style.marginBottom = '0px';
        message.classList.remove('error-input');
        labelMessage.classList.remove('error-label');
        message.classList.add('selected');
    });
    message.addEventListener('blur', function(){
        if (!validations.validateLength(message.value, 50, 1000)){
            showErrorMessage(errorMessage, 'The message must be between 50 and 1000 characters long.');
            message.classList.add('error-input');
            labelMessage.classList.add('error-label');
        } else {
            message.style.marginBottom = '5vh';
        }
        hideInfoMessage(infoMessage);
        message.classList.remove('selected');
    });
    message.addEventListener('keyup', function(){
        showInfoMessage(infoMessage, 'Message length between 50 and 1000 characters.        Actually: ' + message.value.length + ' / 1000');
    });

    /* subject messages */
    infoSubject.addEventListener('change', function(){
        const selectedOption = infoSubject.options[infoSubject.selectedIndex].value;
        if (validations.validateIsNotNull(selectedOption)){
            hideErrorMessage(errorSubject);
            labelSubject.classList.remove('error-label');
            infoSubject.classList.remove('error-input');
            infoSubject.classList.remove('not-select');
            infoSubject.style.marginBottom = '5vh';
        } else {
            infoSubject.style.marginBottom = '0px';
            showErrorMessage(errorSubject, 'Please select a subject.');
            labelSubject.classList.add('error-label');
            infoSubject.classList.add('error-input');
            infoSubject.classList.add('not-select');
        }
    });
}
