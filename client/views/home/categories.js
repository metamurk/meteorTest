Template.categories.helpers({
    categories: function() {
      return Categories.find();
    }
});

Template.categories.events({
    'lala': function(){
        console.log("You clicked something");
    }
});