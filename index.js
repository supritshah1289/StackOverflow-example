$(document).ready(function(){
    console.log("ready");
    $("#products li").draggable({
        appendTo: "body",
        helper: "clone"
      });
      $("#shoppingCart1 ol").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ".credit",
        drop: function(event, ui) {
          var self = $(this);
          self.find(".placeholder").remove();
          var productid = ui.draggable.attr("data-id");
          if (self.find("[data-id=" + productid + "]").length) return;
          $("<li></li>", {
            "text": ui.draggable.text(),
            "data-id": productid
          }).appendTo(this);
          // To remove item from other shopping cart do this
          var cartid = self.closest('.shoppingCart').attr('id');
          $(".shoppingCart:not(#" + cartid + ") [data-id=" + productid + "]").remove();
        }
      }).sortable({
        items: "li:not(.placeholder)",
        sort: function() {
          $(this).removeClass("ui-state-default");
        }
      });
      $("#shoppingCart2 ol").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ".debit",
        drop: function(event, ui) {
          var self = $(this);
          self.find(".placeholder").remove();
          var productid = ui.draggable.attr("data-id");
          if (self.find("[data-id=" + productid + "]").length) return;
          $("<li></li>", {
            "text": ui.draggable.text(),
            "data-id": productid
          }).appendTo(this);
          // To remove item from other shopping chart do this
          var cartid = self.closest('.shoppingCart').attr('id');
          $(".shoppingCart:not(#" + cartid + ") [data-id=" + productid + "]").remove();
        }
      }).sortable({
        items: "li:not(.placeholder)",
        sort: function() {
          $(this).removeClass("ui-state-default");
        }
      });
});