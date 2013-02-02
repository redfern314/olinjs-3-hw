$(function () {
  $('.orderform').on('submit', function () {
    $.post("/order", {_id:this.id});
    $('.'+this.id).html("");
    return false;
  });
});