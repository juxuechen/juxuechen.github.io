("*").each(function () { 
   if ($(this).children().length == 0) {
      var newHTML = $(this).html().replace('(f)','<img src = "../images/fanadir.in.png" />');
      $(this).html(newHTML);
   } 
});
