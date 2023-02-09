import { Component } from '@angular/core';
import { bodyPart, race } from 'src/app/interfaces/uploadInterfaces';
import { NotificationService } from 'src/app/services/notification.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  constructor(
    private store: StoreService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.races = this.store.getRaces();
  }

  /** Array of allready stored Races */
  races: race[] = [{
    name: 'human',
    value: 'human'
  }];

  bodyParts: bodyPart[] = [{
    name: 'head', value: 'head'
  }]

  selectedGenders: string[] = [];

  /** Array of the selected Races */
  selectedRaces: race[] = [];
  selectedBodyPart: bodyPart = {name: 'head', value: 'head'};

  newRaces: string = '';
  newBodyPart:  string = '';
  file: File | undefined = undefined;

  uploadImage($event: any) {
    console.log($event.files)
    this.file = $event.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    console.log(fileReader.readAsText($event.files[0]));
  }

  convertNewRaces(inputString: string): race[] {
    if(inputString != '') {
      let dividedString: string[] = inputString.split(';');
      let generatedRaces: race[] = [];
      dividedString.forEach((s: string) => {
        let newRace: race = {
          name: s,
          value: s
        }
        generatedRaces.push(newRace)
      })
      return this.store.addRace(generatedRaces)
    }
    return this.races;    
  }

  addImage() {
    this.store.saveToLocalStorage('races', JSON.stringify(this.races));
    this.store.saveToLocalStorage('bodyParts', JSON.stringify(this.bodyParts));
    this.races = this.convertNewRaces(this.newRaces);
    this.notification.addMessage('success', 'Test', 'TestTest')
  }


}
