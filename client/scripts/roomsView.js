// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // RoomsView.$select.attr(attribute, 'selectedRooms')

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    //when you initialize the app, populate the dropdown menu with the name of all the rooms, in the messages.js or data, find all unique rooms, store them in an array, then go through and put them into the umenu.

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // <option value ="superLobby"> "superLobby" </option>
    var newMessage = Rooms.render({key: roomname});
    console.log(newMessage);
    console.log('here');
    RoomsView.$select.append(newMessage);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
