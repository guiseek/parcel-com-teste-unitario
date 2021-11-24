import { soma } from './matematica';

const form = document.querySelector('form');
const output = document.querySelector('output');

form.onsubmit = (event) => {
  event.preventDefault()

  const data = new FormData(form);

  output.textContent = soma(
    +data.get('x'), +data.get('y')
  )
}
