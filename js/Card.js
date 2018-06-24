function Card(id, name) {
  var self = this;

  this.id = id;
  this.name = name || "Nie podano nazwy!";
  this.$element = createCard();

  function createCard() {
    var $card = $("<li>").addClass("card");
    var $cardDeleteBtn = $("<button>")
      .addClass("btn-delete btn")
      .text("x");
    var $cardDescription = $("<p>")
      .addClass("card-description")
      .text(self.name);

    $cardDeleteBtn.click(function() {
      self.removeCard(); //Removecard?
    });

    $card.append($cardDeleteBtn);
    $cardDescription.text(self.name);
    $card.append($cardDescription);
    return $card;
  }
}
Card.prototype = {
  removeCard: function() {
    var self = this;
    $.ajax({
      url: baseUrl + "/card/" + self.id,
      method: "DELETE",
      success: function() {
        self.$element.remove();
      }
    });
  }
};
