// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $chat: $('.chat'),

  initialize: function() {
    // TODO: Perform any work which needs to be done when this view loads.
    // MessagesView.$chats.on('click', MessagesView.$chat, MessagesView.handleClick);
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);

    // console.log('MessagesView.$chat' + MessagesView.$chat);
  },

  render: function(data) {
    //filter Messages._data to just include text and userName
    // console.log(Messages._data);
    // console.log('in render function data', data);

    MessagesView.$chats.html(''); //clear the screen

    for (const message of data) {
      // console.log(message);
      //if the text has '<script>' as its first characters, then msgText = '' otherwise
      let msgText = '';
      if (message.text && message.text.includes('<script>')) {
        //do nothing
        console.log('found script');
        continue; //skip this message
      } else {
        msgText = message.text;
        var msgUserName = message.username;
        var msgRoomName = message.roomname;
      }

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
    // console.log('in MessagesView.renderMessage');
    var newMessage = MessageView.render({key: message.text, username: message.username});
    // console.log(newMessage);
    MessagesView.$chats.append(newMessage);
  },

  // <div id = "chats">


  handleClick: function(event) {
    console.log('clicked');
    // let userName = $(event.target).text();
    let userName = event.currentTarget.textContent;
    //grab username when clicked
    // console.log('username is', userName);
    // console.log(event.currentTarget.nextSibling);
    console.log(event.currentTarget.nextSibling.nextSibling);
    $(event.currentTarget.nextSibling.nextSibling).css('background-color', 'yellow');
    // console.log(event.currentTarget.lastChild);

    console.log($(`${userName}`));
    // console.log('Friends._data is', Friends._data);
  }

  // TODO: handle a user clicking on a message
  // (this should add the sender to the user's friend list).
  //if class chat is clicked then we want to get the
  //grab the value inside class username
  //send that to friends.js - > storage array


};