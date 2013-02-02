$(function () {
  $('#ingredientform').on('submit', function () {
    $.post("/ingredient/new", $('#ingredientform').serialize());
    $("#main").html("<p>Added successfully!</p>");
    return false;
  });
  
});