if (Meteor.isClient) {
  Session.set('str', "Welcome to HelloWorld");
  var pos = {x:20, y:30}

  Template.hello.greeting = function(){
    return Session.get('str');
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
      Session.set('str', "Hello Button-Clicker");
      console.log(Session.get('str'));
      var canvas = document.getElementById("c");
      var ctx = canvas.getContext("2d");
      canvas.width = canvas.width;
      ctx.fillRect(pos.x++, pos.y++, 150, 100);
      
    }
  });

  Meteor.methods({
    'test' : function(){
      console.log('a')
    }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
