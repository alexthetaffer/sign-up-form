passwordFields = document.querySelectorAll('input[type="password"]');
pw = document.getElementById('pw');
pwConfirm = document.getElementById('pw_confirm');
pwValidationText = document.getElementById('pw-validation-text');

passwordFields.forEach(field => {
    field.addEventListener('change', () => {
        if (pw.value !== pwConfirm.value || pw.value === '') {
            addError();
        } else {
            removeError();
        }
    })
});

function removeError() {
    passwordFields.forEach(field => {
        field.classList.remove('error');
        pwValidationText.textContent = '';
    })

}

function addError() {
    passwordFields.forEach(field => {
        field.classList.add('error');
        pwValidationText.textContent = '*Passwords do not match';
    })
}