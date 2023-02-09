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
      htmlToImage.toPng(el).then(function (dataUrl) {});

      /*
      const link = document.createElement('a');
      link.setAttribute('download', 'startrek_avatar.png');
      link.setAttribute(
        'href',
        printCanvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream')
      );
      link.click();
      */
    }
  }
}
