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

  $('body').css('background-color', 'rgba(84, 123, 213, 0.61)');
  $('.table').css('margin-top', '10%');
  $('thead').css('background-color', 'rgba(138, 36, 200, 0.36');
  $('.navbar').css('height', '130px').css('background', 'repeating-radial-gradient(black, rgba(138, 36, 200, 0.36) 15px, white 20px,rgba(138, 36, 200, 0.36) 20px').css('color', 'rgba(213, 211, 18, 0.72)');
  $('h1').css('text-align', 'center').css('color', 'rgba(66, 11, 11, 0.84)').css('font-weight', 'bolder');
  $('h1').load(function(){
    $(this).fadeIn('2000')});
  $('img').load(function(){
    $(this).animate({
      marginLeft: "6.0in"
    },2000)
  });
  $('p').css('marginLeft', '10px').css('color', 'white');

});//document ready
