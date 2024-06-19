const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
  ev.preventDefault() // prevenir o comportamento padrão do formulário

  const name = document.querySelector('input[name="name"]').value
  const address = document.querySelector('input[name="address"]').value
  const breadType = document.querySelector('select[name="breadType"]').value
  const main = document.querySelectorAll('input[name="main"]').value
  const observations = document.querySelector('textarea[name="observations"]').value

  let salad = ''
  document.querySelectorAll('input[name="salad"]').forEach(function(item) {
    salad += ` - ${item.value}\n`
  })

  console.log({
    name,
    address,
    breadType,
    main,
    observations,
    salad
  })

  alert(
    `
    Pedido aceito!
    Nome do cliente: ${name}
    Endereço de entrega: ${address}
    Tipo de pão: ${breadType}
    Tipo de Hamburguer: ${main}
    Salada: ${salad}
    Observações: ${observations}
    `
  )
})