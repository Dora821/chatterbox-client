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

