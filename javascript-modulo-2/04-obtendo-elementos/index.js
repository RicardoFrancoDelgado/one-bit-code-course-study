function show() {

    //pegando um único elemento -> HTMLColection
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    //pegando todas as li's -> HTMLColection
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    //pegando só pela classe -> HTMLColection
    const contactsInput = document.getElementsByClassName('contact-input')
    console.log(contactsInput)

    //pegando varios elementos -> NodeList
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    //pegando um único elemento -> NodeList
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    //pegando o primeiro elemento -> NodeList
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}
