let countNumber = 0;
document.getElementById("button1").addEventListener("click", function() {
    countNumber = countNumber+1;
    $('h2').text(`${countNumber}`);
      });
document.getElementById("button2").addEventListener("click", function() {
        countNumber = countNumber-1;
        $('h2').text(`${countNumber}`);
          });