var selectionButton = document.querySelector('.message-button');
var receiveButton = document.querySelector('.receive-button')
var messageArea = document.querySelector('#message-box')
var deleteButton = document.querySelector('.delete-button')

var currentMessage;

receiveButton.addEventListener('click', receiveMessage)
deleteButton.addEventListener('click', deleteMessage)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };


function receiveMessage(event) {
    event.preventDefault()
    if (selectionButton.checked === true) {
        var randomAffirmation = getRandomIndex(affirmations)
        currentMessage = affirmations[randomAffirmation]
    } else if (selectionButton.checked === false) {
        var randomMantra = getRandomIndex(mantras)
        currentMessage = mantras[randomMantra]   
    }
    messageArea.innerHTML = `<p>${currentMessage}</p>`
    deleteButton.classList.remove('hidden')
}

function deleteMessage() {
    var affirmationIndex = affirmations.indexOf(currentMessage)
    var mantraIndex = mantras.indexOf(currentMessage)
    console.log(affirmationIndex)
    console.log(mantraIndex)
    if (affirmationIndex > -1) {
        affirmations.splice(affirmationIndex, 1)
    }
    if (mantraIndex > -1) {
        mantras.splice(mantraIndex, 1)
    }
    messageArea.innerText = `Message deleted!`
    alert('Your message will be deleted. You may receive another.')    
    deleteButton.classList.add('hidden')
}





