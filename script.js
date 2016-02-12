var thisRadio;

$('#glowTabs > label').on('mouseover', function() {
	thisRadio = $(this).children('input[type=radio]');
  if(thisRadio.is(':checked')) {

  } else {
  		// background color
      $(this).css('background-color', '#ebebeb');
      // shift text right
      $(this).children('span').css('margin-left', '14px');
  }
});
$('#glowTabs > label').on('mouseout', function() {
	thisRadio = $(this).children('input[type=radio]');
  if(thisRadio.is(':checked')) {

  } else {
  		// background color
      $(this).css('background-color', '#303030');
      // move text back
      $(this).children('span').css('margin-left', '0px');
  }
});

$('#glowTabs > label > input[type=radio]').on('click', function() {
  $(this).parent('label').css('background-color', 'white').siblings().css('background-color', '#303030');
});
