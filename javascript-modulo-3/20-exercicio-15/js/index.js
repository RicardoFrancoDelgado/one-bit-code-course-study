import { calculate, equal } from './calculate.js'
import { switchTheme } from './switchTheme.js'
import { keyPress, keyUse } from './keyPress.js'
import { copyBoard } from './copyBoard.js'
import { clearInput } from './clearInput.js'

export const main = document.querySelector('main')
export const root = document.querySelector(':root')
export const input = document.getElementById('input')
export const resultInput = document.getElementById('result')

export const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '%',
  '.',
  ' '
]

calculate()
equal()
switchTheme()
keyPress()
copyBoard()
clearInput()
keyUse()
