// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.body.getElementsByClassName('like-glyph')
for(let button of likeButtons) {
  button.addEventListener('click', handleClick)
}

const modal = document.getElementById('modal')

function handleClick(event) {
  mimicServerCall()
  .then(response => {
    if(response === 'Pretend remote server notified of action!') {
      changeHeart(event)
    }
  })
  .catch(displayError)
}

function changeHeart(event) {
  if(event.target.textContent === EMPTY_HEART) {
    event.target.innerText = FULL_HEART
    event.target.className = 'activated-heart'
  } else {
    event.target.innerText = EMPTY_HEART
    event.target.className = ''
  }
}

function displayError() {
  modal.className = ''
  window.setTimeout(() => modal.className = 'hidden', 3000)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
