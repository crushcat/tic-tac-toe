class TicTacToe {
    constructor() {
      this._board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this._currPlayer = 'x';
      this._noMoreTurns = false;
      this._winner = null;

    }

    getCurrentPlayerSymbol() {
      return this._currPlayer;
    }

    changePlayerSymbol(){
      this._currPlayer = this._currPlayer === 'x'? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
      //check valid indxs
      if (0>rowIndex>2 || 0>rowIndex>2){
        return null;
      }
      //check not-epmty cell
      if (this._board[rowIndex][columnIndex]){
        return null;
      }
      this._board[rowIndex][columnIndex] = this._currPlayer;


      //check rows
      for (var i = 0; i < 3; i++) {
        if (this._board[i].every(cell=>cell==this._currPlayer)){
          this._winner = this._currPlayer;
        }
      }
      //check columns
      for (var j= 0; j < 3; j++) {
        if(
              this._board[0][j] == this._currPlayer
          &&  this._board[1][j] == this._currPlayer
          &&  this._board[2][j] == this._currPlayer
        ){
          this._winner = this._currPlayer;
        }
      }
      //check diagonals
      if(this._board[1][1] == this._currPlayer){
        if((this._board[0][0] == this._currPlayer && this._board[2][2] == this._currPlayer) || (this._board[0][2] ==this._currPlayer && this._board[2][0] == this._currPlayer)){

          this._winner = this._currPlayer;
        }
      }

      this.changePlayerSymbol();

    }

    isFinished() {
      return this._winner!=null || this.isDraw();
    }

    getWinner() {
      return this._winner;
    }

    noMoreTurns() {
      let emptyCells = false;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if(!this._board[i][j]){
            emptyCells = true;
          }
        }
      }
      this._noMoreTurns = !emptyCells
      return this._noMoreTurns;
    }

    isDraw() {
      return this.noMoreTurns() && !this._winner;

    }

    getFieldValue(rowIndex, colIndex) {
      return this._board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
