import { Component } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gracze';

  playersLOL = new Array<Player>();
  playersArchero = new Array<Player>();
  playersCS = new Array<Player>();

  name = '';
  surname = '';
  nick = '';
  game = '';

  test(): void {
    if (this.game == 'CS2')
      if (this.playersCS.length < 5)
        if (
          this.name.length > 0 &&
          this.surname.length > 0 &&
          this.nick.length > 0
        )
          this.playersCS.push(
            new Player(
              this.playersCS.length + 1,
              this.name,
              this.surname,
              this.nick
            )
          );
    if (this.game == 'Archero')
      if (this.playersArchero.length < 5)
        if (
          this.name.length > 0 &&
          this.surname.length > 0 &&
          this.nick.length > 0
        )
          this.playersArchero.push(
            new Player(
              this.playersArchero.length + 1,
              this.name,
              this.surname,
              this.nick
            )
          );
    if (this.game == 'Ligi Legend')
      if (this.playersLOL.length < 5)
        if (
          this.name.length > 0 &&
          this.surname.length > 0 &&
          this.nick.length > 0
        )
          this.playersLOL.push(
            new Player(
              this.playersLOL.length + 1,
              this.name,
              this.surname,
              this.nick
            )
          );
  }
}
