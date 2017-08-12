  var winsDiv = $(".wins");
  var lossesDiv = $(".losses");
  var totalScoreDiv = $(".total-score");
  var scoreDiv = $(".score");
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var jupiter;
  var earth;
  var saturn;
  var pluto;


  function randomNumber() {
    var x = Math.floor(Math.random() * 200 + 70);
    score = x;
    scoreDiv.html(score);
    // console.log(score);
  }

  function randomPlanets() {
    var a = Math.round(score * 0.20 * 10) / 10;
    var b = Math.round(score * 0.70 * 10) / 10;
    var c = Math.round(score * 0.30 * 10) / 10;
    var d = Math.round(score * 0.50 * 10) /10;
    jupiter = a;
    earth = b;
    saturn = c;
    pluto = d;
    // console.log(jupiter);
    // console.log(earth);
    // console.log(saturn);
    // console.log(pluto);
    }

    function updateDisplay() {
      totalScoreDiv.html(totalScore);
      winsDiv.html(wins);
      lossesDiv.html(losses);

      if (score === totalScore) {
        totalScoreDiv.html(totalScore);
        wins++;
        winsDiv.html(wins);
        alert("Mission accomplished!");
        reset();
      }

      else if (score < totalScore) {
        totalScoreDiv.html(totalScore);
        losses++;
        lossesDiv.html(losses);
        alert("Houston, we have a problem.");
        reset();
      }
    };

  function reset() {
    totalScore = 0;
    totalScoreDiv.html(totalScore);
    randomNumber();
    randomPlanets();
  };

  $(".jupiter").click(function() {
    totalScore = totalScore + jupiter;
    totalScoreDiv.html(totalScore);
    updateDisplay();
  });

  $(".earth").click(function() {
    totalScore = totalScore + earth;
    totalScoreDiv.html(totalScore);
    updateDisplay();
  });

  $(".saturn").click(function() {
    totalScore = totalScore + saturn;
    totalScoreDiv.html(totalScore);
    updateDisplay();
  });

  $(".pluto").click(function() {
    totalScore = totalScore + pluto;
    totalScoreDiv.html(totalScore);
    updateDisplay();
  });


  $(document).ready(randomNumber());
  $(document).ready(randomPlanets());
  $(document).ready(updateDisplay());
