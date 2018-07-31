/*
  * By: Arjun Patel
  * Date: 7/30/18
  *
  */

/*
  * jQuery function call on DOM loading
  */
$(function() {

  // Event Handlers
    $("#inputFile").change(function(e) {
      onChangeInput(e);
      $('#inputFile').css("background-color", "#0d7aa5");
    });


  // Helper Function to read/load specific file
    function onChangeInput(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

  // General function to parse JSON
    function onReaderLoad(event) {
        var obj = JSON.parse(event.target.result);
        console.log(obj.orders);
        obj.orders.map((order) => {
          console.log(order);
          $('#table').append("<div class='flexBasicRow'><p class='col'>" + order.customer_id + "</p><p class='col'>" + order.order_no + "</p><p class='col'>" + order.part_id + "</p><p class='col'>" + order.parent_part + "</p><p class='col'>" + order.price + "</p><p class='col'>" + order.qty + "</p></p><p class='col'>" + order.paid + "</p></div>").fadeIn();
        });
    }
});
