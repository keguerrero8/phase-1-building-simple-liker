// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph")

likeButtons.forEach((el) => {
  el.addEventListener("click", () => {
    mimicServerCall()
    .then((data) => {
      if (el.textContent === FULL_HEART) {
        el.textContent = EMPTY_HEART
        el.classList.remove("activated-heart")
      }
      else {
        el.textContent = FULL_HEART
        el.classList.add("activated-heart")       
      }
      
    })
    .catch((err) => {
      console.log(err)
      document.querySelector("#modal").classList.remove("hidden")
      document.querySelector("#modal h2").textContent = err
      setTimeout(() => {
        document.querySelector("#modal").className = "hidden"
      }, 3000)   
    }) //this close catch
  }) //this closes event listener
})


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
