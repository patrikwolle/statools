import { Injectable } from '@angular/core';
import html2canvas, { Options } from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class PrintService {
  async downLoadAvatar(el: HTMLElement) {
    if (el) {
      console.log("saving img");

      html2canvas(el).then(canvas => {
        console.log(canvas);
        const imgWidth = 1122.52;
        const imgHeight = 793.7;
        
        const link = document.createElement('a');
        link.download = 'startrek_avatar.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  }
}
