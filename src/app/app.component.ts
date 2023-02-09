import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'STA-Tools';

  constructor(
    private store: StoreService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.setRaces(JSON.parse(localStorage.getItem('races') || '{}'));
  }

  
  
  
}
