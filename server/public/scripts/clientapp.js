var num1 = 0;
var num2 = 0;
var operator = 0;

$(document).ready(function() {
  // event listeners
  $('.operator').on('click', function() {
    event.preventDefault();
    operator = $(this).data('operator');
    console.log(operator);
  });

  $('#equals').on('click', function() {
    event.preventDefault();//remove on final product
      var values = {};
      $.each($('#inputForm').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      var newObject = {};
        newObject.x = values.num1;
        newObject.y = values.num2;
        newObject.type = operator;
        console.log(newObject);
        postCalc(newObject);
      });
    });

function postCalc(object) {
    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: object,
      success: function(answer) {
      $('.display').text(answer);
      }
    });
  }

$('.clear').on('click', clearFields);
function clearFields () {
  $('.display').empty();
   num1 = '';
   num2 = '';
   type = 'default';
}

});
