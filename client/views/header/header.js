
Template.header.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        console.log( Categories.find().count());
        Router.go("home");
    }
});

Template.header.helpers({
   categories: function(){
    Categories.find().map(function (doc) {
    	console.log(doc.name);
      return doc.name
    })
 }
});



