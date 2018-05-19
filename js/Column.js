function Column(name) {
  var self = this;

  this.id = randomString();
  this.name = name;
  this.element = createColumn();

  function createColumn() {
    // TWORZENIE NOWYCH WĘZŁÓW
    var column = $('<div class="column"></div>');
    var columnTitle = $('<h2 class="column-title">' + self.name + "</h2>");
    var columnCardList = $('<ul class="card-list"></ul>');
    var columnDelete = $('<button class="btn-delete">x</button>');
    var columnAddCard = $(
      '<button class="column-add-card">Dodaj kartę</button>'
    );

    // PODPINANIE ODPOWIEDNICH ZDARZEŃ POD WĘZŁY
    columnDelete.click(function() {
      self.deleteColumn();
    });

    columnAddCard.click(function(event) {
      event.preventDefault();
      self.createCard(new Card(prompt("Wpisz nazwę karty")));
    });

    // KONSTRUOWANIE ELEMENTU KOLUMNY
    column
      .append(columnTitle)
      .append(columnDelete)
      .append(columnAddCard)
      .append(columnCardList);
    return column;
  }
}
Column.prototype = {
  createCard: function(card) {
    this.element.children("ul").append(card.element);
  },
  deleteColumn: function() {
    this.element.remove();
  }
};