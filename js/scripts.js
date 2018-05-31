$(document).ready(function() {
  $("#name").submit(function(event) {
    var firstName = $("input#name1").val();
    var lastName = $("input#name2").val();
    var userName = firstName + " " + lastName;
    var streetAdress = $("input#street-address").val();
    var city = $("input#city").val();
    var state = $("input#state").val().toUpperCase();
    var zipcode = $("input#zip-code").val();
    var userAddress = streetAdress + "<br>" + city + ", " + state + " " + zipcode;


    $("#user-name").text(userName);
    $("#user-street").html(userAddress);
    // $("#user-city").text(city);
    // $("#user-state").text(state);
    // $("#user-zipcode").text(zipcode);

    event.preventDefault();
    $("#collected-data").show();
  });

});
