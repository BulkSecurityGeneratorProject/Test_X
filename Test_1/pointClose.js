//set All points
var minDistance = 1000000;
var minX_1, minY_1, minX_2, minY_2;
var x = new Array();
var y = new Array();

for(var i = 0; i < 1000; i++) {
  var pointX = parseInt((Math.random() * 10000));
  x.push(pointX);
  var pointY = parseInt((Math.random() * 10000));
  y.push(pointY);
}

//Violence Act
function pointViolence() {
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < y.length; j++) {
      if(i != j) {
        var distance = Math.abs(Math.pow((x[i] - y[i]), 2) + Math.pow((x[j] - y[j]), 2))
        if((distance < minDistance)) {
          minDistance = distance;
          minX_1 = x[i];
          minY_1 = y[i];
          minX_2 = x[j];
          minY_2 = y[j];
        }
      }
    }
  }
  console.log("minDistance",Math.sqrt(minDistance));
  console.log("X1", minX_1, "Y1", minX_2);
  console.log("X2", minY_1, "Y2", minY_2);
}

//Divide and Conquer
function pointDivide(x, y) {
  var addX = 0, addY = 0;
  for(var i = 0; i < x.length; i++) {
    addX = addX + x[i];
    addY = addY + y[i];
  }
  var midX = addX/x.length, midY = addY/y.length;
  console.log(midX, midY);
}
