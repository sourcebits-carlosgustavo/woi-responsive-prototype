$(document).ready(function(){
  $('.carousel').carousel();

  $('#selectLanguage').click(function(){
  	$(this).toggleClass('active');
  	$('.choose-language').fadeToggle();
  });

  $('#watchList').click(function(){
  	$(this).toggleClass('active');
  	$('.watchlist-dropdown').fadeToggle();
  });
});