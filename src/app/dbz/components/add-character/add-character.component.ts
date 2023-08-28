import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 0
  }

  public emitCharacter():void {
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};
    console.log(this.character);
  }

}
