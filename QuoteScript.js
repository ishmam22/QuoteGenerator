var color = ['#001f3f', '#3D9970', '#3D9970', '#B10DC9', '#85144b', '#7FDBFF'];
var apiURL = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies'";
var Quote = '';
var Author = '';
var curCategory = '';

$(document).ready(function(){
            getQuote();
            $('#btn').click(function(){
            getQuote();
            });
    
                });


function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "3DyA6A9QQrmshyviEGiAHOvMEaOlp1JwxHgjsnta7E9mAXcq8h",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(data) {
        
      var d = JSON.parse(data);
      Quote = d.quote;
      Author = d.author;
        
        $('.quote').html(Quote);
        $('.author').html("-" + Author);
        $('.quote').css('display', 'none');
        $('.author').css('display', 'none');
        $('.quote').fadeIn('slow');
        $('.author').fadeIn('slow');

                            }
        });
                     }
