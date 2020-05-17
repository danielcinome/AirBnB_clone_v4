$(document).ready(function () {
  const dictAmenities = {};
  let amenityNames = [];
  let outPut = '';

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
      console.log('im here')
    $.get('http://0.0.0.0:5001/api/v1/status/', (data, success) => {
      console.log('now here')
      if (success === 'success') {
        $('#api_status').addClass('available');
        console.log('red');
      }
    })
 });
