import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

/**
 * Service that handels loading colors and managing colors
 */
@Injectable({
  providedIn: 'root',
})
export class PrintService {
  async downLoadAvatar(el: HTMLElement) {
    if (el) {
      html2canvas(el).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'startrek_avatar.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  }
}
