<html>
<head><title>Concert</title>
  <link rel="stylesheet" href="css/foundation.css">
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
<center>
<div class="head">
  <img src="image/presenttext.png"></br>
  <img src="image/girlgen.png">
</div>
<div class="row ">
  <div class="frame">
      <?php
      echo "Select your seat of choices!"."<br>";

      $seats = ['A-1 ','A-2 ','A-3 ','A-4 ','A-5 ',
            'B-1 ','B-2 ','B-3 ','B-4 ','B-5 ',
            'C-1 ','C-2 ','C-3 ','C-4 ','C-5 '];
            $counter = 1;

            //create form to make the 'submit button' works and set the data '$seats' to concertResult
            //method POST to hide the data from url bar
      echo "<form action='concertResult.php' method='POST'>";

      //create checkbox and if statement to count the seat line
      foreach ($seats as $seat) {
        echo "<input type='checkbox' name='seats[]'     value='".$seat."'></input>";
        echo ($seat);
        if($counter % 5 == 0){
        echo "<br>";
      }
      ++$counter;
      }
      //buy now button
      echo"<input type='submit' value='Buynow' style='color: #fff; background: #f8b5cb'/></form>"."<br>";

      ?>
  </div>
  <div class="information">
      <h4>Welcome to <span style="color: #f8b5cd">Girl's Generation</span> 4th Tour Concert in Bangkok</h4></br>
      <h7>on Saturday and Sunday 30 - 31 January 2016 at Impact Arena Muangthong Thani. </h7>
  </div>
</div>
</center>
<script src="js/jquery.min.js"></script>
<script src="js/foundation.js"></script>
<script src="js/jquery.flip.js"></script>
<script src="js/app.js"></script>
<script>
    $(document).foundation();
</script>
</body>
</html>
