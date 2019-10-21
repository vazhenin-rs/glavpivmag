function CustomValidation() {
   this.invalidities = [];
}

CustomValidation.prototype = {
   addInvalidity: function(message) {
      this.invalidities.push(message);
   },
   getInvalidities: function() {
      return this.invalidities.join('. \n');
   },
   checkValidity: function(input) {
      if (input.value.length < 2) {
         
         this.addInvalidity('Слишком короткое имя');

         var element = document.querySelector('.username-requirements li:nth-child(1)');

         element.classList.add('invalid');
         element.classList.remove('valid');
      } else {

         var element = document.querySelector('.username-requirements li:nth-child(1)');

         element.classList.remove('invalid');
         element.classList.add('valid');         
      }
   }
};


var usernameInput = document.getElementById('username'),
    submitButton  = document.getElementById('submit-button');

usernameInput.CustomValidation = new CustomValidation();

submitButton.addEventListener('click', function () {

   usernameInput.CustomValidation.checkValidity(usernameInput);

})

submitButton.addEventListener('click', function() {

   usernameInput.CustomValidation.checkValidity(usernameInput);

})
