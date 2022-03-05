// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
// test message



var Messages = {

  // storage: [],
  // TODO: Define how you want to store your messages.
  _data: null,

  update: function (data) {
    // console.log('Messages.update called');
    Messages._data = data;
    // console.log('inside update messages._data is ', Messages._data);
    //get it show up on the screen - > re-render;
    MessagesView.render(Messages._data);
  }
  //add - just immediately goes to the dom,
  //determine if state has changed? re=render call messageView.render (just render one message);




  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};


//Send example message to server
// $.ajax({
//   // This is the url you should use to communicate with the API server.
//   url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/rfp',
//   type: 'POST',
//   data: JSON.stringify({
//   username: 'dragonboi',
//   text: 'get crazy with the cheese whiz',
//   roomname: 'superLobby'
// }),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });