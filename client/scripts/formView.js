// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  //when form gets submitted this is our controller
  handleSubmit: function(event) {
    event.preventDefault();// Stop the browser from submitting the form


    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.




    let userText = document.getElementById('message').value;
    console.log(userText);


    var selectedRoom = document.getElementById('selectedRoom').value;
    console.log(selectedRoom);
    // var selectValue = select.options[select.selectedIndex].value;
    // console.log(value); // en

    // create the message
    let message = {
      username: App.username,
      text: userText,
      roomname: selectedRoom || 'lobby',
    };

    Parse.create(message);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};