Auctions = new Meteor.Collection( 'auctions' );

var AuctionsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title of the auction"
  },
  "subtitle": {
    type: String,
    label: "Subtitle of the auction"
  },
  "category": {
    type: String,
    autoform: {
      options: function () {
         return Categories.find().map(function (c) {
            return {label: c.name, value: c.name};
         });
       }
    }
  },
  "ownerId": {
    type: String,
    label: "Auctions Owner's User ID",
    optional: true
  },
  "picture": {
    type: String,
     autoform: {
         afFieldInput: {
            type: 'fileUpload',
            collection: 'Images'
               }
          } 
  }
});

Auctions.attachSchema( AuctionsSchema );

if(Meteor.isServer){

    Meteor.publish('auctions', function () {
        return Auctions.find();
    });

}else{
    Meteor.subscribe('auctions');
}



