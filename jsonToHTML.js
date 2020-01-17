function appendToHTMLBlock(jsonStr, block) {
 var jsonObj = JSON.parse(jsonStr);

 $.each(jsonObj, function(key, value){
    //var new_block = $('[data-' + block + ']').last().clone();
    var new_block = $('[' + block + ']').last().clone();
    
    $.each(value, function(key, value){
        
        $( new_block ).find('[data-' + key + ']').text(value);
        console.log(key, value);

    });
    
    new_block.insertAfter($('[' + block + ']').last());
    
     })
}

function importToHTMLBlock() { }

function appendToHTMLBlockBykeys() { }
function importToHTMLBlockBykeys() { }

function mapToHTMLByKeys(jsonStr, arrayDataTags) { }
