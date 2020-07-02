import { fire, data } from './index';

// logic
export function enterDigit({ target: { classList, id } }) {
  const { state } = data();
  if (classList.contains('digit') && !classList.contains('equals')) {
    if (state === 'calculated') fire({ type: 'NEW_OPERATION', digit: id });
    else fire({ type: 'ENTER_DIGIT', digit: id });
  }
}

export function calculate({ target, target: { classList } }) {
  const { state } = data();
  if (classList.contains('operator') || classList.contains('equals')) {
    if (state === 'idle' || state === 'calculated')
      fire({ type: 'REGISTER_N1', operator: target.id });
    else if (state === 'calculating') fire({ type: 'CALCULATE' });
  }
}

export function reset({ target: { classList } }) {
  document
    .querySelectorAll('.highlighted')
    .forEach((el) => el.classList.remove('highlighted'));
  if (classList.contains('reset')) {
    fire({ type: 'RESET' });
    return;
  }
}

export function removeOperators(screen) {
  screen = screen.filter(
    (char) => !(char === '/' || char === '*' || char === '+' || char === '-')
  );
  return screen;
}

// ui
export function scaleDown({ target: { classList, style } }) {
  if (classList.contains('pressable')) {
    style.transform = 'scale(1)';
  }
}

export function scaleUp({ target: { classList, style } }) {
  if (classList.contains('pressable')) {
    style.transform = 'scale(1.1)';
  }
}

export function highlightOperatorKey({ target: { classList } }) {
  const { state, operator } = data();
  if (classList.contains('operator')) {
    const operatorEl = document.getElementById(operator);
    if (operator) {
      if (state === 'calculating') {
        operatorEl.classList.add('highlighted');
      } else operatorEl.classList.remove('highlighted');
    }
  }
}

export function copyToClipboard({ target, target: { id } }) {
  if (id === 'screen')
    navigator.clipboard.writeText(target.innerText).then(
      function () {
        target.innerText = 'COPIED!';
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
}
