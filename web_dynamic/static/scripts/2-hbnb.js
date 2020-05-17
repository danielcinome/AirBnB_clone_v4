$(document).ready(function () {
  const dictAmenities = {};
  let amenityNames = [];
  let outPut = '';

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    console.log(data.status);
  });
  /*if (response.statusCode === 200) {
    $('header#api_status').removeclass('circle');
    $('header#api_status').addClass('available');
  } else {
    $('header#api_status').removeclass('available');
    $('header#api_status').addClass('circle');
  }*/

  $('[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      dictAmenities[$(this).data().id] = $(this).data().name;
    } else {
      delete dictAmenities[$(this).data().id];
    }

    amenityNames = [];

    Object.values(dictAmenities).forEach((value) => amenityNames.push(value));
    outPut = amenityNames.join(', ');
    $('.amenities h4').text(outPut);
  });
});
