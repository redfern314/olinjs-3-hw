$(function () {
  $('#orderform').on('submit', function () {
    $.post("/order/new", $('#orderform').serialize());
    $("#main").html("<p>Added successfully!</p>");
    return false;
  });
});