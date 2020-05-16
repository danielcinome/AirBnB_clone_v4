$( document ).ready(function() {
  const dict_amts = {};
  $('[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      dict_amts[$(this).data().id] = $(this).data().name;
      console.log('Add');
      console.log(dict_amts);
    } else {
      delete dict_amts[$(this).data().id];
      console.log('Deleted');
      console.log(dict_amts);
    }
  });
});
