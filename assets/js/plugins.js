// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
  (function() {
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = {};
    while (length--) {
      console[methods[length]] = noop;
    }
  }());
}


// Place any jQuery/helper plugins in here.
$(function(){
  $.breakpoint({
    condition: function () {
      return window.matchMedia('screen and (max-width:768px)').matches;
    },
    first_enter: function () {
      
    },
    enter: function () {
      $("#trending").insertBefore($("#fb-activity"));
    },
    exit: function () {
      
    }
  });

  $.breakpoint({
    condition: function () {
      return window.matchMedia('screen and (max-width:480px)').matches;
    },
    first_enter: function () {
      
    },
    enter: function () {
      // hide nav buttons
      var $mainNav = $(".main-nav");
      $mainNav.find(".watchlist button").text('Watchlist');
      $mainNav.find(".search input").hide();
      $mainNav.find(".search a").removeClass("hide");

      // change feature icons
      var $featured = $(".featured");
      $featured.find(".actions .favourite").removeClass("btn btn-small").addClass("icon-search").text("");
      $featured.find(".actions .schedule").removeClass("btn btn-small").addClass("icon-time").text("");
      $featured.find(".actions .add-to").removeClass("btn btn-small").addClass("icon-plus").text("");
    },
    exit: function () {
      
    }
  });
});