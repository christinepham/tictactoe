$(document).ready(function() {
  var turn = 0;
  var x = 'x',
      o = 'o',
      EMPTY = '';
    
  $('.gameboard').find('td').on('click', function() {
    // Even turns are 'x' and Odd turns are 'o'
    showMessage('Keep Playing!', 'blue');
    if($(this).text() === EMPTY) {
      if (turn%2 === 0) {
        $(this).text(x);
      } else {
        $(this).text(o);
      }   
      isGameOver();
      turn++;
    } else {
      showMessage('ALREADY SELECTED', 'red');
    }     
  });   
    
  $('#restart').on('click', function() {
      $('.square').text('');
      showMessage('Keep Playing!', 'blue');
  });

  var showMessage = function(message, color) {
    $('#message').css('color', color).html(message);
  };

  var isGameOver = function() {
    if($.trim($('#r1c1').text()) != EMPTY &&
    $.trim($('#r1c2').text()) != EMPTY &&
    $.trim($('#r1c3').text()) != EMPTY &&
    $.trim($('#r2c1').text()) != EMPTY &&
    $.trim($('#r2c2').text()) != EMPTY &&
    $.trim($('#r2c3').text()) != EMPTY &&
    $.trim($('#r3c1').text()) != EMPTY &&
    $.trim($('#r3c2').text()) != EMPTY &&
    $.trim($('#r3c3').text()) != EMPTY) {
      showMessage('GAME OVER', 'green');
      return true;
    }
    return false;
  };

});