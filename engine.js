let X_or_0 = 1, objectPlayer = "X", matrix = [], n = 0, x = 0, y = 0;

function initMatrix() {
  for(var i = 0; i <= 3; ++i) {
    matrix[i] = [];
    for(var j = 1; j <= 3; ++j) {
      matrix[i][j] = undefined;
    }
  }
}

function verifyWinner() {
  let dis = document.getElementById("displayWinner");
  for(let i = 1; i <= 3; ++i) {
      if(matrix[i][1] == matrix[i][2] && matrix[i][2] == matrix[i][3]) {
        if(matrix[i][1] == 1) {
          y = 3;
        }else if(matrix[i][1] == 0) {
          x = 3;
        }
      }
      if(matrix[1][i] == matrix[2][i] && matrix[2][i] == matrix[3][i]) {
        if(matrix[1][i] == 1) {
          y = 3;
        }else if(matrix[1][i] == 0) {
          x = 3;
        }
      }
      if(matrix[1][1] == matrix[2][2] && matrix[2][2] == matrix[3][3]) {
        if(matrix[1][1] == 1) {
          y = 3;
        }else if(matrix[1][1] == 0) {
          x = 3;
        }
      }
      if(matrix[1][3] == matrix[2][2] && matrix[2][2] == matrix[3][1]) {
        if(matrix[1][3] == 1) {
          y = 3;
        }else if(matrix[1][3] == 0) {
          x = 3;
        }
     }
  }

  if(x == 3) {
    dis.innerHTML = "0 is a Winner";
  }else if (y == 3) {
    dis.innerHTML = "X is a Winner";
  }else if(n == 9){
    dis.innerHTML = "Draw between players";
  }
}

function handleMouseOver(x, y, number) { 
  if(n == 0) {
    initMatrix();
  }
  var id = "matrixElement_";
  if(matrix[x][y] != 1 && matrix[x][y] != 0) {
    id = id + number;
    display = document.getElementById(id);
    matrix[x][y] = X_or_0;
    display.innerHTML = objectPlayer;
    ++n;
  } 
    if (X_or_0 == 1) {
      objectPlayer = "0"
      X_or_0 = 0;
    } else if(X_or_0 == 0) {
      objectPlayer = "X";
      X_or_0 = 1;
    }
    verifyWinner();
}
  
function isPressed(x, y, number) {
    handleMouseOver(x, y, number);
  }
