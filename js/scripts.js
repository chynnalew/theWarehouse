$(document).ready(function() {
  $(".enter").on("click", function() {
    $("#page0").fadeOut(4000);
    $("#page1").delay(4000).fadeIn(3000);
  });
  $(".button2").on("click", function() {
    $("#page1").fadeOut(2000);
    $("#page2").delay(3000).fadeIn(3000);
  });
  $(".button3").on("click", function() {
    $("#page1").fadeOut(2000);
    $("#page3").delay(3000).fadeIn(3000);
  });
  $(".button4").on("click", function() {
    $("#page3").fadeOut(2000);
    $("#page4").delay(3000).fadeIn(3000);
  });
  $(".button5").on("click", function() {
    $("#page2, #page12").fadeOut(2000);
    $("#page5").delay(3000).fadeIn(3000);
  });
  $(".button6").on("click", function() {
    $("#page8, #page9, #page5").fadeOut(2000);
    $("#page6").delay(3000).fadeIn(3000);
  });
  $(".button7").on("click", function() {
    $("#page6").fadeOut(2000);
    $("#page7").delay(3000).fadeIn(3000);
  });
  $(".button8").on("click", function() {
    $("#page2, #page6, #page7, #page12").fadeOut(2000);
    $("#page8").delay(3000).fadeIn(3000);
  });
  $(".button9").on("click", function() {
    $("#page2, #page5, #page12, #page8").fadeOut(2000);
    $("#page9").delay(3000).fadeIn(3000);
  });
  $(".button10").on("click", function() {
    $("#page9").fadeOut(2000);
    $("#page10").delay(3000).fadeIn(3000);
  });
  $(".button11").on("click", function() {
    $("#page10, #page13, #page16").fadeOut(2000);
    $("#page11").delay(3000).fadeIn(3000);
  });
  $(".button12").on("click", function() {
    $("#page3").fadeOut(2000);
    $("#page12").delay(3000).fadeIn(3000);
  });
  $(".button13").on("click", function() {
    $("#page7").fadeOut(2000);
    $("#page13").delay(3000).fadeIn(3000);
  });
  $(".button14").on("click", function() {
    $("#page7, #page13, #page6").fadeOut(2000);
    $("#page14").delay(3000).fadeIn(3000);
  });
  $(".button15").on("click", function() {
    $("#page14").fadeOut(2000);
    $("#page15").delay(3000).fadeIn(3000);
  });
  $(".button16").on("click", function() {
    $("#page15").fadeOut(2000);
    $("#page16").delay(3000).fadeIn(3000);
  });
  $(".button17").on("click", function() {
    $("#page15").fadeOut(2000);
    $("#page17").delay(3000).fadeIn(3000);
  });
  $(".button18").on("click", function() {
    $("#page14").fadeOut(2000);
    $("#page18").delay(3000).fadeIn(3000);
  });
  $(".button19").on("click", function() {
    $("#page18").fadeOut(2000);
    $("#page19").delay(3000).fadeIn(3000);
  });
  $(".button20").on("click", function() {
    $("#page19, #page18").fadeOut(2000);
    $("#page20").delay(3000).fadeIn(3000);
  });
})