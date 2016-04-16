Categories = new Meteor.Collection( 'categories' );

if(Meteor.isServer){

    Meteor.publish('categories', function () {
        return Categories.find();
    });

}else{
    Meteor.subscribe('categories');
}


