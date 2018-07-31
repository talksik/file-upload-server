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
        console.log(obj);

        insertOrders(obj);
        getOrders(addToDOM);
    }

    addToDOM = (orders) => {
      orders.map((order) => {
        $('#table').append("<div class='flexBasicRow'><p class='col'>" + order.customer_id + "</p><p class='col'>" + order.order_no + "</p><p class='col'>" + order.part_id + "</p><p class='col'>" + order.parent_part + "</p><p class='col'>" + order.price + "</p><p class='col'>" + order.qty + "</p></p><p class='col'>" + order.paid + "</p></div>").fadeIn();
      });
    }

    insertOrders = (orders) => {
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/insertorders",
        data: orders,
        success: function (data) {
          alert("Success");
        },
        dataType: "json",
        error : function(request, error) {
            console.log("Request: " + JSON.stringify(request));
        }
      });
    }

    getOrders = (callback) => {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/getorders",
        data: {},
        success: function (res) {
          orders = res.result;

          callback(orders);
        },
        dataType: "json",
        error : function(request, error) {
            console.log("Request: " + JSON.stringify(request));
        }
      });
    }
});
