// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  toggleCount: 0,
  // ifToggle: true,
  buttonText: 'Add Friend',
  _data: ['dennis', 'Dora'],

  toggleStatus: function() {
    //

    // $username = $('.username');

    Friends.toggleCount++;
    console.log('toggleCount is ', Friends.toggleCount);
    (Friends.toggleCount % 2 === 0) ? Friends.buttonText = 'Add Friend' : Friends.buttonText = 'Unfriend';
    console.log('buttonText says: ', Friends.buttonText);
    //inject html to write out buttonText

    $('.username').text(username + 'friends')

    //if toggleStatus = true -> have the button say Add Friend
    // click toggleStatus = false - > have button say "unfriend"
  }
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};