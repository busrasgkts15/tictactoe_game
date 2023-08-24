import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';

  isShowX = true
  isShowO = false
  isShow = false
  winner: string | undefined
  nextGamer: string | undefined;
  text: string = "X";
  gamesSquare: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]

  newGameAgain() {
    for (let i = 0; i < this.gamesSquare.length; i++) {
      this.gamesSquare[i] = ""
      this.text = "X"
      this.nextGamers("")
      this.isShow = false
      this.isShowX = true
      this.isShowO = false
    }
  }

  getXorO(index: number) {

    if (this.text == "X") {
      this.isShowO = true
      this.gamesSquare[index] = this.text
      this.isShowX = false

      this.text = "O"
    } else {
      this.isShowO = false
      this.isShowX = true

      this.gamesSquare[index] = this.text


      this.text = "X"
    }
    this.nextGamers(this.text)
    // this.winnerGame()
  }

  nextGamers(games: string) {
    this.nextGamer = games

  }


}