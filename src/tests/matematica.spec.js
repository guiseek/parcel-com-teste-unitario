import { soma, subtrai, multiplica, divide } from '../matematica.js'
import { test } from './test.js'

test('testando a soma', soma(1,1) == 2)
test('testando a subtração', subtrai(10, 2) == 8)
test('testando a multiplicação', multiplica(5,5) == 25)
test('testando a divisão', divide(10,2) == 5)