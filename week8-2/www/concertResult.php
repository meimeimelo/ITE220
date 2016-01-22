<html>
<head>
  <title>ConcertResult</title>
  <link rel="stylesheet" href="css/foundation.css">
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
<div class="container">
  <div class="resultcontainer">
    <div class="large-6 columns phantasia">
        <img src="image/phantasiabgj.jpg">
    </div>
    <div class="large-6 columns mainresult">
  <?php
    //$_POST to keep every values that sent from POST method
    //print_r($_POST["seats"]);
    echo "<h3>Thank you for your purchaing</h3>";

    $selectedSeats = $_POST["seats"];

    echo "You have bought" . "  " . count($selectedSeats) . "   ". "seat(s)." . "<br>" ;

    $totalPrice = 0; //declare total price
    $luckySeat = "A-4 ";
    foreach ($selectedSeats as $selectedSeat) {
      $price = 0;
      echo $selectedSeat."  ";

      if($selectedSeat[0] == "A"){
        $price = 3000;

      }
      elseif ($selectedSeat[0] == "B") {
        $price = 2000;
      }
      else{
        $price = 1000;
      }


      //echo the price
      if($selectedSeat == $luckySeat) {
        $price /= 2;
        echo $price." THB Congratulations! 50% off for this ticket!  </br>";
      }
      else {
        echo $price."THB"."<br>";
      }

      //calculate the total price
      $totalPrice += $price; // calculate total price
    }

    echo "Total Price is : ". $totalPrice ." THB"."</br>";
    ?>
    </div>
  </div>
</div>

<script src="js/jquery.min.js"></script>
<script src="js/foundation.js"></script>
<script src="js/jquery.flip.js"></script>
<script src="js/app.js"></script>
<script>
    $(document).foundation();
</script>
</body>
</html>
