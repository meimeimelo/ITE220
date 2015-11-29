// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "";
var dayInMonth = 31;
var count = 0;

for ( var i = 1; i <= dayInMonth; i++) {
  if( count === 0 ) {
      stringHTML += "<tr>";
      count++
  }
  if( count === 8 ) {
    stringHTML += "<td>" + i + "</td></tr>";
    count = 0;
  }
  else {
    stringHTML += "<td>" + i + "</td>";
    count++;
  }

}
// stringHTML = "<tr><td>1</td><td>2</td></tr>";
hotelTable.innerHTML += stringHTML;
