$(document).ready(function() {
    var count=1;
    $(".btn").click(function() {
      var text = $(".form-control").val();
      localStorage.setItem("sd", text);
      $(".card").append("<ol start='" + count +  "'><li class='dv'>" + text + "</li></ol>");
      $(".card").append("<button class='c'>❌</button>");
      $(".form-control").val("");
      count++;
    });
  
    $(".card").on("click", ".c", function() {
      $(this).prev().remove(); 
      $(this).remove();
    });
  });
  


  
  