$(document).ready(function(){
  //front end
  $("#date").submit(function(event){
    var meal = parseInt($("input:radio[name=mealChoice]:checked").val());
    var night = parseInt($("input:radio[name=nightChoice]:checked").val());
    var joke = parseInt($("input:radio[name=jokeChoice]:checked").val());
    var warming = parseInt($("input:radio[name=warmingChoice]:checked").val());
    var pika = parseInt($("input:radio[name=pikaChoice]:checked").val());
    var match = meal + night + joke + warming + pika;

    if (match <= 6) {
      $("#mccain-showing").show()
    } else if (match <= 8) {
      $("#gore-showing").show()
    } else {
      $("#supreme-showing").show()
    }

    event.preventDefault();
  });
});
