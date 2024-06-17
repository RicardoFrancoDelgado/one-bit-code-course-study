function addContacts() {
  const contactList = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  const ul = document.createElement('ul')

  // campo de nome
  const nameLi = document.createElement('li')
  nameLi.innerText = 'Name: '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameInput.id = 'name'
  nameInput.placeholder = 'Enter your full name'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  // campo de telefone
  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Phone number: '
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneInput.id = 'phone-number'
  phoneInput.placeholder = "Enter your phone number"
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  // campo de endereço
  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Address: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressInput.placeholder = "Enter your address location"
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  // campo de email
  const emailLi = document.createElement('li')
  emailLi.innerHTML = '<label for="email">E-mail: </label>'
  const emailInput = document.createElement('input')
  emailInput.type = 'email'
  emailInput.name = 'email'
  emailInput.id = 'email'
  emailInput.placeholder = "Enter your e-mail"
  emailLi.appendChild(emailInput)
  ul.appendChild(emailLi)
  ul.appendChild(document.createElement('br'))

  contactList.append(h3, ul)
}

function removeContacts() {
  const contactList = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactList.removeChild(titles[titles.length - 1])
  contactList.removeChild(contacts[titles.length - 1])
}
