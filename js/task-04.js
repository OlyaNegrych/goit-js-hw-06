let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueCounterRef = document.querySelector('#value');

const decrementFn = () => {
    valueCounterRef.textContent = counterValue;
    counterValue -= 1;
    return counterValue;
};

const incrementFn = () => {
    valueCounterRef.textContent = counterValue;
    counterValue += 1;
    return counterValue;
};

decrementBtnRef.addEventListener('click', decrementFn);
incrementBtnRef.addEventListener('click', incrementFn);