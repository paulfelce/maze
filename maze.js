var row = 1
var col = 1

$(function() {
  
  fill_squares()
  set_square(1, 1, 'XX');
  hide_buttons();
})

function move(direction) {
  set_square(row, col, '');
  switch (direction) {
    case 'right':
      col++;
      break;
    case 'left':
      col--;
      break;
    case 'up':
      row--;
      break;
    case 'down':
      row++;
      break;

  }
  set_square(row, col, 'XX');
  hide_buttons();
}

//function to put text in a grid ref
function set_square(tr, tc, td) {
  $('#maze tr:eq(' + tr + ') td:eq(' + tc + ')').text(td)
 }

//function to colour in a grid ref
function colour_square(tr,tc){
  $('#maze tr:eq(' + tr + ') td:eq(' + tc + ')').css('background','blue')
  
}
//fill centre of the buttons in blue
//so we have something to compare
function colour_button_square(){
  $('#buttons tr:eq(1) td:eq(1)').css('background','blue')
  
}


//show only buttons that make legal moves
function hide_buttons(){
  
  $('#up').hide();
  $('#down').hide();
  $('#left').hide();
  $('#right').hide();
  
  if($('#maze tr:eq(' + row + ') td:eq(' + (col+1) + ')').css('background')!=$('#buttons tr:eq(1) td:eq(1)').css('background')&&col<9)
    $('#right').show()
  
  //compare with a known blue square
  if($('#maze tr:eq(' + row + ') td:eq(' + (col-1) + ')').css('background')!=$('#buttons tr:eq(1) td:eq(1)').css('background')&&col>0)
    $('#left').show()
  
  if($('#maze tr:eq(' + (row-1) + ') td:eq(' + col + ')').css('background')!=$('#buttons tr:eq(1) td:eq(1)').css('background')&&row>0)
    $('#up').show()
  
    if($('#maze tr:eq(' + (row+1) + ') td:eq(' + col + ')').css('background')!=$('#buttons tr:eq(1) td:eq(1)').css('background')&&row<9)
    $('#down').show()
  
  
  
}

//fill in squares to make the maze
function fill_squares(){
  
      colour_square(2,1)
      colour_square(2,2)
      colour_square(2,3)
      colour_square(2,5)
      colour_square(2,6)
      colour_square(2,7)
      
      colour_square(3,5)
      colour_square(4,5)
      
      colour_square(4,4)
      colour_square(4,3)
      colour_square(4,2)
  
      //css colour to compare
      colour_button_square()
      //set target squaer
        $('#maze tr:eq(5) td:eq(5)').css('background','red')
      
    
      
  
}