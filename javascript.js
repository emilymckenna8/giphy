
var foodGiphs = ["hamburger","pasta","pizza","brownies","avocado"];

    function renderButtons() {

        // Deleting the container prior to adding new  buttons

        $("#button-container").empty();

        // Looping through the array of foods
        for (var i = 0; i < foodGiphs.length; i++) {
            console.log(foodGiphs[i]);

          var a = $("<button>");

          a.addClass("food");
          // Adding a data-attribute with a value of the food at index i
          a.attr("data-name", foodGiphs[i]);
          // Providing the button's text with a value of the food at index i
          a.text(foodGiphs[i]);
          // Adding the button to the HTML
          $("#button-container").append(a);
        }
      };







   // This function creates a new button for the user's input
   $("#add-food").on("click", function(event) {
    event.preventDefault();
    var newFood = $("#food-input").val().trim();
    foodGiphs.push(newFood);
    console.log(foodGiphs);
    renderButtons();
  });



    function produceGifs() {
    
        $("#gifs-appear-here").empty();
    var buttonFood = $(this).attr("data-name");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      buttonFood + "&api_key=vNowYrq79LBsGF4SvqYVhGXRozOqIC2F";

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {

        var results = response.data;


        for (var j = 0; j < 10; j++) {

          if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
            var gifDiv = $("<div class='item'>");
            var rating = results[j].rating;
            var p = $("<p>").text("Rating: " + rating);
            var foodImage = $("<img>");
            foodImage.attr("src", results[j].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(foodImage);
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      });

  };
       renderButtons();

      $(document).on("click", ".food", produceGifs);