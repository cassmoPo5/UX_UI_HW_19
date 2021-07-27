{
  $('.card').appendTo('.hidden');
  $('.hidden').contents().appendTo('#card').hide().show('slow');
  $('.card:not(.' + filter + ')').appendTo('.hidden').hide('slow');
  $( "#filter button" ).removeClass('active');
  $(this).addClass('active');
  $("#filter button").attr("disabled", false);
  $(this).attr("disabled", true);
}