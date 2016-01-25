$(document).ready(function() {

  function inputQTY(){
    // Take integer value entered into field
    $('.item').each(function(item, element){
      var price = parseFloat($(this).find(".price").text());
      console.log(price);
      var quantity = $(this).find('.quantity').val();
      var subtotal = quantity*price;
      // Price must be in dollars
      // Price must evaluate to .toFixed(2)
      subtotal = Number(itemPrice).toFixed(2);
      $(this).find('.item-subtotal').text('$'+subtotal);
    });
  }


  function calcPrice(){
    var total;
    $('.item-subtotal').each(function(item, element){
      var subtotal = parseFloat($(this).find(".price").text());
      total = total + subtotal;
    });
    total = Number(itemPrice).toFixed(2);
    $('#total-price').text('$'+total);
  }

  function deleteRecord(){
    removeElement('parent');
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

  }

  $('#new-item-create').click(addRecord);

  $('.cancel').click(deleteRecord);

  $('#calc-prices-button').click(calcPrice);

  $('.quantity').blur(inputQTY);

});
