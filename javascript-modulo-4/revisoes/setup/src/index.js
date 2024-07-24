const Computer = require('../Computer')
const Keyboard = require('../Keyboard')
const Monitor = require('../Monitor')
const Mouse = require('../Mouse')

const setup = () => {
  const computer = new Computer(
    'AMD Ryzen 5 5600G',
    '16G HyperX DDR4',
    'SSD Sata 500G',
    'Gigabyte B550M',
    'GTX 4060',
    'WaterCooler',
    'Mancer Goblin'
  )

  const monitor = new Monitor('34 Polegadas', 'LG', '144hz')
  monitor.chooseVGA()

  const keyboard = new Keyboard('Logitech', 'Bluetooth', 'K380')
  const mouse = new Mouse('Logitech', 'wireless', 'G220')

  return { computer, monitor, keyboard, mouse }
}

console.log(setup())
