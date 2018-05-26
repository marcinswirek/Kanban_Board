var baseUrl = "https://kodilla.com/pl/bootcamp-api";
var myHeaders = {
  "X-Client-Id": "3130",
  "X-Auth-Token": "ecfbbd2de8eb44da2a3739e244fb7e23"
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
