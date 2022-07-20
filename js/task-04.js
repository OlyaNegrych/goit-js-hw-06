let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueCounterRef = document.querySelector('#value');

const decrementFn = () => {
    counterValue -= 1;
    valueCounterRef.textContent = counterValue;
    return counterValue;
};

const incrementFn = () => {
    counterValue += 1;
    valueCounterRef.textContent = counterValue;
    return counterValue;
};

decrementBtnRef.addEventListener('click', decrementFn);
incrementBtnRef.addEventListener('click', incrementFn);