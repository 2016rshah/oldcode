if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to QWERTY.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
    window.onDeviceMotion = function(event) {
      console.log(event.alpha, event.beta, event.gamma);
      console.log(event.accelerationX, event.accelerationY, event.accelerationZ);
    }
  });

  // Handlebars.registerHelper('jsontest',function(){
  //   return [
  //     {message: "poop",sender:"Rushi"},
  //     {message:"silly rushi", sender:"Matthew"}
  //   ];
  // })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
