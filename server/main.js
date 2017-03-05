import { Meteor } from 'meteor/meteor';
import { messagesCollection } from '../imports/messages.js';





Meteor.startup(() => {
  console.log('server started !');
    messagesCollection.insert({'message':'this message is inserted from the server !'});
});
