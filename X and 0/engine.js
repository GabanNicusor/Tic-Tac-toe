let pos_1 = document.getElementById("matrixElement_1");
let pos_2 = document.getElementById("matrixElement_2");
let pos_3 = document.getElementById("matrixElement_3");
let pos_4 = document.getElementById("matrixElement_4");
let pos_5 = document.getElementById("matrixElement_5");
let pos_6 = document.getElementById("matrixElement_6");
let pos_7 = document.getElementById("matrixElement_7");
let pos_8 = document.getElementById("matrixElement_8");
let pos_9 = document.getElementById("matrixElement_9");
let X_or_0 = 1, objectPlayer = "X", matrix = [], n = 1;
let x = 0, y = 0;

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

  if(matrix[1][1] == 0) {
    if(matrix[1][1] == matrix[1][2] && matrix[1][2] == matrix[1][3]) {
        x = 3;
    }
  }else if(matrix[2][1] == 0) {
    if(matrix[2][1] == matrix[2][2] && matrix[2][2] == matrix[2][3]) {
      x = 3;
    }
  }else if(matrix[3][1] == 0) {
    if(matrix[3][1] == matrix[3][2] && matrix[3][2] == matrix[3][3]) {
      x = 3;
    }
  } 

  if(matrix[1][1] == 0) {
    if(matrix[1][1] == matrix[2][1] && matrix[2][1] == matrix[3][1]) {
      x = 3;
    }
  }else if(matrix[1][2] == 0) {
    if(matrix[1][2] == matrix[2][2] && matrix[2][2] == matrix[3][2]) {
      x = 3;
    }
  }else if(matrix[1][3] == 0) {
    if(matrix[1][3] == matrix[2][3] && matrix[2][3] == matrix[3][3]) {
      x = 3;
    }
  }

  if(matrix[1][1] == 1) {
    if(matrix[1][1] == matrix[1][2] && matrix[1][2] == matrix[1][3]) {
        y = 3;
    }
  }else if(matrix[2][1] == 1) {
    if(matrix[2][1] == matrix[2][2] && matrix[2][2] == matrix[2][3]) {
      y = 3;
    }
  }else if(matrix[3][1] == 1) {
    if(matrix[3][1] == matrix[3][2] && matrix[3][2] == matrix[3][3]) {
      y = 3;
    }
  } 

  if(matrix[1][1] == 1) {
    if(matrix[1][1] == matrix[2][1] && matrix[2][1] == matrix[3][1]) {
      y = 3;
    }
  }else if(matrix[1][2] == 1) {
    if(matrix[1][2] == matrix[2][2] && matrix[2][2] == matrix[3][2]) {
      y = 3;
    }
  }else if(matrix[1][3] == 1) {
    if(matrix[1][3] == matrix[2][3] && matrix[2][3] == matrix[3][3]) {
      y = 3;
    }
  }
 
  if(matrix[1][1] == 0) {
    if(matrix[1][1] == matrix[2][2] && matrix[2][2] == matrix[3][3]) {
        x = 3;
    }
  }else if(matrix[1][1] == 1) {
    if(matrix[1][1] == matrix[2][2] && matrix[2][2] == matrix[3][3]) {
      y = 3;
  }
  }
  if(matrix[1][3] == 0) {
    if(matrix[1][3] == matrix[2][2] && matrix[2][2] == matrix[3][1]) {
       x = 3;
    }
  }else if(matrix[1][3] == 1) {
    if(matrix[1][3] == matrix[2][2] && matrix[2][2] == matrix[3][1]) {
      y = 3;
   }
  }
  if(x == 3) {
    dis.innerHTML = "0 is a Winner";
  }else if (y == 3) {
    dis.innerHTML = "X is a Winner";
  }
}


function handleMouseOver(number) { 
  if(n == 1) {
    initMatrix();
    n = 0;
  }
    if (number == 1) {
      pos_1.innerHTML = objectPlayer;
      matrix[1][1] = X_or_0;
    }else if(number == 2) {
      pos_2.innerHTML = objectPlayer;
      matrix[1][2] = X_or_0;
    }else if(number == 3) {
      pos_3.innerHTML = objectPlayer;
      matrix[1][3] = X_or_0;
    }else if(number == 4) {
      pos_4.innerHTML = objectPlayer;
      matrix[2][1] = X_or_0;
    }else if(number == 5) {
      pos_5.innerHTML = objectPlayer;
      matrix[2][2] = X_or_0;
    }else if(number == 6) {
      pos_6.innerHTML = objectPlayer;
      matrix[2][3] = X_or_0;
    }else if(number == 7) {
      pos_7.innerHTML = objectPlayer;
      matrix[3][1] = X_or_0;
    }else if(number == 8) {
      pos_8.innerHTML = objectPlayer;
      matrix[3][2] = X_or_0;
    }else if(number == 9) {
      pos_9.innerHTML = objectPlayer;
      matrix[3][3] = X_or_0;
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