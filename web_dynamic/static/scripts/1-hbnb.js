$( document ).ready(function() {  
  $(':checkbox').on('click', function () {
    if ($(this).is(':checked')) {
      console.log($(this).val());
    } else {
      console.log($(this).val());
    }
  });
});
