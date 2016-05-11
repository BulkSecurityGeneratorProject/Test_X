//set All points
var pointsNumber = 1000;
var minDistancePow = 2 * Math.pow(pointsNumber, 2);
var pointFirstX, pointFirstY, pointSecondX, pointSecondY;
var x = new Array();
var y = new Array();

function sortNumber(a,b) {
  return a - b;
}

function createNumber() {
  x = [];
  y = [];
  for(var i = 0; i < pointsNumber; i++) {
    var pointX = parseInt((Math.random() * 10000));
    x.push(pointX);
    var pointY = parseInt((Math.random() * 10000));
    y.push(pointY);
  }
  x.sort(sortNumber);
}

//Violence Act
function pointViolence() {
  for(var i = 0; i < x.length; i++) {
    for(var j = 0; j < x.length; j++) {
      if(i != j) {
        var distancePow = Math.abs(Math.pow(x[i] - x[j], 2) + Math.pow(y[i] - y[j], 2));
        if(distancePow < minDistancePow) {
          minDistancePow = distancePow;
          pointFirstX = x[i];
          pointFirstY = y[i];
          pointSecondX = x[j];
          pointSecondY = y[j];
        }
      }
    }
  }
  console.log("minDistance", Math.sqrt(minDistancePow));
  console.log("pointFirstX", pointFirstX, "pointFirstY", pointFirstY);
  console.log("pointSecondX", pointSecondX, "pointSecondY", pointSecondY);
}

//Divide and Conquer
function pointDivide(x, y) {
  
}
