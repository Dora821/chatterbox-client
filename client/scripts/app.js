// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'), //loads spinner
  username: 'dragonboi69',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // console.log(App.$spinner);
    // console.log(App.username);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 5000); //fetch every 3 seconds
  },

  fetch: function(callback = ()=>{}) {
    // console.log('fetching');
    Parse.readAll((data) => {
      Messages.update(data);
      // console.log(data);
    });
  },

  // // console.log(data);
  // Messages.storage.push(data);

  // App.fetch should call Messages.update(data), which should update your messages “state” (in this case Messages._data). When you change state, by calling update or add or whatever, that’s when you want to re-render by calling MessagesView.render().



  // TODO: Use the data to update Messages and Rooms
  // and re-render the corresponding views.


  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
