import { Template } from 'meteor/templating';
import { messagesCollection } from '../imports/messages.js';

import './main.html';

Template.messages.onCreated(function helloOnCreated() {
  //called on init !
    //we remove old messages from the collection on init
    //messagesCollection.remove({});
    //lets insert some messages for fun !! :)
    messagesCollection.insert({'message':'Hello This message Is inserted on client init !'});
  console.log('client started !');

});


Template.messages.helpers({
  //get all messages
  messages:function(){
    let messagesList = messagesCollection.find({}).fetch();
    console.log(messagesList);
      return messagesList;
  }
});

Template.body.events({
  'click button'(event, instance) {
    // submit a new message
      let content= $('.messagesInput input').val();
      console.log(content);
      $('.messagesInput input').val('');
      messagesCollection.insert({'message':content});
  },
});
