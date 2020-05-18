$(document).ready(function () {
  const dictAmenities = {};
  let amenityNames = [];
  let outPut = '';
  let article = document.createElement('article');
  let place = {};
  let i = 0;

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
    if (success === 'success') {
      $('#api_status').addClass('available');
    }
  }).fail((data, success) => {
    if (success === 'error') {
      $('#api_status').removeClass('available');
    }
  });
  $.ajax({
    type: "post",
    url: "http://0.0.0.0:5001/api/v1/places_search",
    data: "{}",
    dataType: "JSON",
    success: function (response) {
      while (i < length(data)) {
        place =  response[i];
        article = `
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest } Guest{% if place.max_guest != 1 %}s{% endif %}</div>
            <div class="number_rooms">${place.number_rooms } Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
            <div class="number_bathrooms">${place.number_bathrooms } Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
          </div>
          <div class="user">
            <b>Owner:</b> ${place.user.first_name} ${place.user.last_name }
          </div>
          <div class="description">
            ${place.description | safe }
          </div>
        `;
        $('section.places').append(article);
        i++;
      }
    }
  });
 });
