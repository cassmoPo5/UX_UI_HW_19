$(document).ready(function(){

    var $btn = $('#btnSubmit'),
        $fields = $('.form-control');
    $btn.on('click', function(){
      
      $fields.each(function(){
        var value = $(this).val();
        if (value == '') {
          $(this).addClass('error');
          $(this).parent().find('.validation').show(1000);
        } else {
          $(this).removeClass('error');
          $(this).parent().find('.validation').hide(1000);
        }
      });
      var errorCount = $('.error').length;
      if (errorCount == 0) {
        $btn.prop('disabled', true).text('Loading...');
      }
    });
    
  });