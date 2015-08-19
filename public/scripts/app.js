$(document).ready(function(){

  $.ajax({
    url: '/api/albums',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.dir(data);
      var rawtemplate = $('#album').html();
      console.log(rawtemplate);
      var tempsrender = _.template(rawtemplate);
      console.log(typeof tempsrender);
      data.forEach(function(item) {
        console.log(item);
        var album_item = tempsrender(item);


        $('.songtable tbody').append(album_item);
      });
    }
  });

});//document ready
