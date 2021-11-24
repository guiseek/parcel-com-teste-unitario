function validaNumeros(...numeros) {
  if (numeros.some(n => typeof n !== 'number')) {
    throw new Error('Não é um número')
  }
}

export function soma(x, y) {
  validaNumeros(x, y)

  return x + y
}

export function subtrai(x, y) {
  validaNumeros(x, y)
  return x + y
}

export function multiplica(x, y) {
  validaNumeros(x, y)
  return x * y
}

export function divide(x, y) {
  validaNumeros(x, y)
  return x / y
}