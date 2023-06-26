let pos_1 = document.getElementById("matrixElement_1");
let pos_2 = document.getElementById("matrixElement_2");
let pos_3 = document.getElementById("matrixElement_3");
let pos_4 = document.getElementById("matrixElement_4");
let pos_5 = document.getElementById("matrixElement_5");
let pos_6 = document.getElementById("matrixElement_6");
let pos_7 = document.getElementById("matrixElement_7");
let pos_8 = document.getElementById("matrixElement_8");
let pos_9 = document.getElementById("matrixElement_9");
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

function handleMouseOver(number) { 
  if(n == 0) {
    initMatrix();
  }
    if (number == 1 && matrix[1][1] != 0 && matrix[1][1] != 1) {
      pos_1.innerHTML = objectPlayer;
      matrix[1][1] = X_or_0;
      ++n;
    }else if(number == 2 && matrix[1][2] != 0 && matrix[1][2] != 1) {
      pos_2.innerHTML = objectPlayer;
      matrix[1][2] = X_or_0;
      ++n;
    }else if(number == 3 && matrix[1][3] != 0 && matrix[1][3] != 1) {
      pos_3.innerHTML = objectPlayer;
      matrix[1][3] = X_or_0;
      ++n;
    }else if(number == 4 && matrix[2][1] != 0 && matrix[2][1] != 1) {
      pos_4.innerHTML = objectPlayer;
      matrix[2][1] = X_or_0;
      ++n;
    }else if(number == 5 && matrix[2][2] != 0 && matrix[2][2] != 1) {
      pos_5.innerHTML = objectPlayer;
      matrix[2][2] = X_or_0;
      ++n;
    }else if(number == 6 && matrix[2][3] != 0 && matrix[2][3] != 1) {
      pos_6.innerHTML = objectPlayer;
      matrix[2][3] = X_or_0;
      ++n;
    }else if(number == 7 && matrix[3][1] != 0 && matrix[3][1] != 1) {
      pos_7.innerHTML = objectPlayer;
      matrix[3][1] = X_or_0;
      ++n;
    }else if(number == 8 && matrix[3][2] != 0 && matrix[3][2] != 1) {
      pos_8.innerHTML = objectPlayer;
      matrix[3][2] = X_or_0;
      ++n;
    }else if(number == 9 && matrix[3][3] != 0 && matrix[3][3] != 1) {
      pos_9.innerHTML = objectPlayer;
      matrix[3][3] = X_or_0;
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
  
function isPressed(number) {
    handleMouseOver(number);
  }
