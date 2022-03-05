// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    //filter Messages._data to just include text and userName
    // console.log(Messages._data);
    // console.log('in render function data', data);
    for (const message of data) {
      // console.log(message);
      let msgText = message.text;
      let msgUserName = message.username;
      let msgRoomName = message.roomname;

      MessagesView.renderMessage({
        username: msgUserName,
        text: msgText,
        roomname: msgRoomName
      });


      // console.log(text,userName);

    }
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message) {
    console.log('in MessagesView.renderMessage');

    var newMessage = MessageView.render({key: `<p class = message> ${message.text} <p>`, username: message.username});
    // console.log(newMessage);
    MessagesView.$chats.append(newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};