(function () {

  var global = global || this;

  var nx = global.nx || require('next-js-core2');
  var NxRoute = nx.declare('nx.Route', {
    statics:{
      to: function(inUrl){
        return global.location.href = inUrl;
      },
      go: function(inIndex){
        global.history.go(inIndex);
      },
      replace: function(inUrl){
        global.location.replace(inUrl)
      },
      back: function(){
        global.history.back();
      },
      reload: function(inValue){
        global.location.reload(inValue);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRoute;
  }

}());
