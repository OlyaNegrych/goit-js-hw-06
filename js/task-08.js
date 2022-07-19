const formRef = document.querySelector('.login-form');
const inputEmailRef = document.querySelector('[type="email"]');
const inputPasswordRef = document.querySelector('[type="password"]');
const btnSubmitRef = document.querySelector('[type="submit"]');

const OnFormSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const alertMessage = 'Всі поля вводу повинні бути заповнені!';

    if (inputEmailRef.value.length === 0 || inputPasswordRef.value.length === 0) {
      alert(alertMessage);
    }

    const dataSet = { 
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value
    };

    console.log(dataSet);

    inputEmailRef.value = '';
    inputPasswordRef.value = '';

};

formRef.addEventListener('submit', OnFormSubmit);

