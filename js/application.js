var debug;
$(document).ready(function() {

  function inputQTY(){
    var parent = $(this).closest('.item');
    // Take integer value entered into field
    var price = parseFloat(parent.find(".item-price").text().substring(1));
    var quantity = $(this).val();
    var subtotal = quantity*price;
    // Price must be in dollars
    // Price must evaluate to .toFixed(2)
    subtotal = Number(subtotal).toFixed(2);
    parent.find('.item-subtotal').text('$'+subtotal);
  }


  function calcPrice(){
    var total = 0;
    debug;
    $('.item').each(function(item, element){
      var subtotal = parseFloat($(this).find(".item-subtotal").text().substring(1));
      console.log(subtotal);
      total = total + subtotal;
      console.log(total);
    });
    total = Number(total).toFixed(2);
    $('#total-price').text('$'+total);
  }

  function deleteRecord(){
    console.log('test');
    console.log($(this));
    console.log($(this).closest('.item'));
    debug;
    $(this).closest('.item').remove();
  }

  function addRecord() {
    var itemName = $('#new-item-name').val();
    var itemPrice = $('#new-item-price').val();
    var ready = false;
    // var $newRecord = $('<div>').attr('id', 'item row').prepend($('#items-list'));

    // This bit was all me, except for a change from when I couldn't figure out why numObj wasn't working for the itemPrice decimal inserter.  'Number' works much better.
    if (itemName == ''){
      alert('Item name cannot be empty');
    } else if ($.isNumeric(itemPrice) == false){
      alert('Unit price must be a number');
    } else {
      itemPrice = Number(itemPrice).toFixed(2);
      ready = true;
    }

    // Okay, this bit is copied direct, but it's just so much better than what I had (although I think I was on the right track).  I commented out what's left of my answer.
    var newItem = '' +
      '<div class="item row">' +
        '<div class="item-name col-xs-4">'+ itemName + '</div>' +
        '<div class="item-price col-xs-3">'+ '$' + itemPrice + '</div>' +
        '<div class="item-qty col-xs-3">' +
          '<label>QTY</label>' +
          '<input class="quantity" value="0">' +
          '<button class="cancel">Cancel</button>' +
        '</div>' +
        '<div class="item-subtotal col-xs-2"> $0.00 </div>' +
      '</div>';

      if (ready === true) {
        $('#items-list').prepend(newItem).slideDown('slow');
      }

    $('.cancel').off().on('click', function(){
      console.log('delete test');
      deleteRecord();
    });

    $('.quantity').on('blur', inputQTY);
  }

  $('#new-item-create').on('click', function(){
    console.log('add test');
    addRecord();
  });


  $('#calc-prices-button').on('click', function(){
    calcPrice();
  });


});
