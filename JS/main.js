var input = document.getElementById('text_input');

function Search() {
    location.href = 'https://www.google.com/search?q='+input.value;
};

function Lucky(){
    location.href = 'https://www.google.co.uk/search?q='+input.value+"&btnI";

};

input.addEventListener("keyup", function(event) {
    
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      Search();
    }
});



    

