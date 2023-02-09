import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  /** Add a notification
   * @param severity :string = styleType
   * @param summary :string short message
   * @param detail :string long message
   */
  addMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}
}
