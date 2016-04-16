Likes = new Meteor.Collection( 'likes' );

if(Meteor.isServer){

    Meteor.publish('likes', function () {
        return Likes.find();
    });

}else{
    Meteor.subscribe('likes');
}


