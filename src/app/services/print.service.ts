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
      html2canvas(el).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'startrek_avatar.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  }
}
