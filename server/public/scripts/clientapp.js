var num1 = '';
var num2 = '';
var operator = '';

$(document).ready(function() {

  // number button event listener
  $('.number').on('click', function() {
    event.preventDefault();
    if($('.operator').hasClass('clicked')) {
      num2 += $(this).data('number');
      console.log(num2);
      $('.display').text(num2);
    }
    else {
    num1 += $(this).data('number');
    console.log(num1);
    $('.display').text(num1);
  }
  });

//decimal button event listener
  $('.decimal').on('click', function() {
    event.preventDefault();
    if($('.operator').hasClass('clicked')) {
      num2 += $(this).data('decimal');
      console.log(num2);
      $('.display').text(num2);
    }
    else {
    num1 += $(this).data('decimal');
    console.log(num1);
    $('.display').text(num1);
  }
  });

//operator button event listener
  $('.operator').on('click', function() {
    event.preventDefault();
    $(this).addClass('clicked');
    operator = $(this).data('operator');
    console.log(operator);
  });

//equals button event listener
  $('.equals').on('click', function() {
      var newObject = {};
        newObject.x = num1;
        newObject.y = num2;
        newObject.type = operator;
        console.log(newObject);
        postCalc(newObject);
    });

//clear button event listener
  $('.clear').on('click', function() {
    $('.display').empty();
     num1 = '';
     num2 = '';
     type = 'default';
    $('.operator').removeClass('clicked');
  });

//router posts (dependent on operator type)
function postCalc(object) {
    $.ajax({
      type: 'POST',
      url: '/calculator/' + operator,
      data: object,
      success: function(answer) {
      $('.display').text(answer);
      }
    });
  }

});
