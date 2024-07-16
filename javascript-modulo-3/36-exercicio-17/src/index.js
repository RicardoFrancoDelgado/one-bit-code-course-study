import dayjs from 'dayjs'
import './styles/index.css'

const data = `Data: ${dayjs().format("DD/MM/YYYY")}`

const result = document.getElementById('result')

result.innerText = data
