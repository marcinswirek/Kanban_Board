var baseUrl = "https://kodilla.com/pl/bootcamp-api";
var myHeaders = {
  "X-Client-Id": "X-Client-Id",
  "X-Auth-Token": "X-Auth-Token"
};

$.ajaxSetup({
  headers: myHeaders
});

$ajax({
  url: baseUrl + "/board",
  method: "GET",
  success: function(response) {
    setupColumns(response.columns);
  }
});

function setupColumns(columns) {
  columns.forEach(function(column) {
    var col = new Column(column.id, column.name);
    board.createColumn(col);
    setupCards(col, column.cards);
  });
}

function setupCards(col, cards) {
  cards.forEach(function(card) {
    var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    col.createCard(cardObj);
  });
}

// Creating Colums
// var todoColumn = new Column("Do zrobienia");
// var doingColumn = new Column("W trakcie");
// var doneColumn = new Column("Skończone");

// Adding columns to the board
// board.createColumn(todoColumn);
// board.createColumn(doingColumn);
// board.createColumn(doneColumn);

// Creating cards
// var card1 = new Card("Nowe zadanie");
// var card2 = new Card("stworzyć tablice kanban");

// Adding cards to columns
// todoColumn.createCard(card1);
// doingColumn.createCard(card2);
