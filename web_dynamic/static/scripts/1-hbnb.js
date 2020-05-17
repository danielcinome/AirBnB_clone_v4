$(document).ready(function () {
  const dictAmenites = {};
  let dictNames = [];
  let outPut = '';

  $('[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      dictAmenites[$(this).data().id] = $(this).data().name;
      console.log(dictAmenites);
    } else {
      delete dictAmenites[$(this).data().id];
      console.log(dictAmenites);
    }

    dictNames = [];

    for (const dictKey in dictAmenites) {
      dictNames.push(dictAmenites[dictKey]);
    }

    outPut = dictNames.join(', ');
    console.log(outPut);
    $('.amenities h4').text(outPut);
  });
});
