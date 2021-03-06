/***
 * This function map and append a non nested json string to a html block.
 * A new html block is created and then appended to the the last block of the list.
 * You can use this function for post list or user list...
 * 
 */
function appendToHTMLBlock(jsonStr, block) {
  var jsonObj = JSON.parse(jsonStr);
  // Loop through each JSON object
  $.each(jsonObj, function(key, value){
    // Create a new HTML block to append
    var new_block = $('[' + block + ']').last().clone();
    // Loop through each key, value pair for a JSON object
    $.each(value, function(key, value){
      // Map value to HTML data-key  
      $( new_block ).find('[data-' + key + ']').text(value);
      // console.log(key, value);
    }); // each value
    // append new HTML block
    new_block.insertAfter($('[' + block + ']').last());
    
  }) // each json
} // appendToHTMLBlock

function importToHTMLBlock(jsonStr, block) {
  appendToHTMLBlock(jsonStr, block);
  $('[' + block + ']').first().remove();
 } // importToHTMLBlock

function appendToUL(jsonStr, li, data_tag) {
  var jsonArray = JSON.parse(jsonStr);
  console.log(jsonArray);
  $.each(jsonArray, function(index, value){
    // Create a new li to append
    var new_li = $('[' + li + ']').last().clone();
    $( new_li ).find('[' + data_tag + ']').text(value);
    new_li.insertAfter($('[' + li + ']').last());
  }); // each value
} // importToli

function importToUL(jsonStr, li, data_tag) {
  var jsonArray = JSON.parse(jsonStr);
  console.log(jsonArray);
  $.each(jsonArray, function(index, value){
    // Create a new li to append
    var new_li = $('[' + li + ']').last().clone();
    $( new_li ).find('[' + data_tag + ']').text(value);
    new_li.insertAfter($('[' + li + ']').last());
  }); // each value
  $('[' + li + ']').first().remove();
} // importToli

function appendToHTMLBlockBykeys() { }
function importToHTMLBlockBykeys() { }

function mapToHTMLByKeys(jsonStr, arrayDataTags) { }
