import { Injectable } from '@angular/core';
import { ColorConversionService } from './color-converter.service';

/**
 * Service that handels loading hairColors and managing hairColors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class skinColorService {
  constructor(private colorConverter: ColorConversionService) {}
}
