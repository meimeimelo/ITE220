var hotel = {
  name: 'Meimei',
  room: 3000,
  booked: 2000,

  checkAvailability: function(){
    return this.room - this.booked;
  }
}

var hotelName = document.getElementById('hotelName');
hotelName.textContent = hotel.name;
