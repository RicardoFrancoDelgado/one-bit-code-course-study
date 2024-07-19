import dayjs from 'dayjs'
import './styles/index.css'

const result = document.getElementById('result')

const data = `Data: ${dayjs().format("DD/MM/YYYY")}`

result.innerText = data
