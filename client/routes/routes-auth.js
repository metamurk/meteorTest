
Router.route( 'CreateAuction', {
  path: '/Create',
  template: 'createAuction',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'sell' );
    this.next();
  }
});

Router.route( 'Messages', {
  path: '/Messages',
  template: 'messages',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'messages' );
    this.next();
  }
});

Router.route( 'Profile', {
  path: '/Profile',
  template: 'profile',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'profile' );
    this.next();
  }
});

