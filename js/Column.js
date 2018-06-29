function Column(id, name) {
  var self = this;

  this.id = id;
  this.name = name || "No name given!";
  this.$element = createColumn();

  function createColumn() {
    var $column = $("<div>").addClass("column");
    var $columnTitle = $("<h2>")
      .addClass("column-title")
      .text(self.name);
    var $columnCardList = $("<ul>").addClass("card-list");
    var $columnDeleteBtn = $("<button>")
      .addClass("btn-delete-column")
      .text("X");
    var $columnAddCard = $("<button>")
      .addClass("column-add-card")
      .text("Add new ticket...");

    $columnDeleteBtn.click(function() {
      self.removeColumn();
    });

    $columnAddCard.click(function(event) {
      var cardName = prompt("Enter card name");
      event.preventDefault();
      $.ajax({
        url: baseUrl + "/card",
        method: "POST",
        data: {
          name: cardName,
          bootcamp_kanban_column_id: self.id
        },
        success: function(response) {
          var card = new Card(response.id, cardName);
          self.createCard(card);
        }
      });
    });

    $column
      .append($columnDeleteBtn)
      .append($columnTitle)
      .append($columnCardList)
      .append($columnAddCard);
    return $column;
  }
}

Column.prototype = {
  createCard: function(card) {
    this.$element.children("ul").append(card.$element);
  },
  removeColumn: function() {
    var self = this;
    $.ajax({
      url: baseUrl + "/column/" + self.id,
      method: "DELETE",
      success: function() {
        self.$element.remove();
      }
    });
  }
};
