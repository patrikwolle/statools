import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {AvatarService} from "../../services/avatar.service";
import {avatarList} from "../../interfaces/avatar.interface";
import {HttpClient} from "@angular/common/http";
import {image} from "html2canvas/dist/types/css/types/image";

@Component({
  selector: 'app-sta-select-button',
  templateUrl: './sta-select-button.component.html',
  styleUrls: ['./sta-select-button.component.scss']
})
export class StaSelectButtonComponent implements OnInit{

  @Input('svgPath') pathToSvg: string = '';
  @Input('imagePart') imagePart: string ="";
  @Input('height') heightValue: string = '300px';
  @Input('width') widthValue: string = '300px';


  svgInput: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {
  }


  changeSizeOfSVG(width: string, height: string, input: string): void {
    this.http.get(
      input,
      {
        responseType: 'text',
      }
    ).subscribe((res) => {
        let image = `${
          res.split('width')[0]
        }width="${width}px" height="${height}px" viewbox${
          res.split(/viewBox(.*)/s)[1]
        }`
        this.svgInput =
          this.sanitizer.bypassSecurityTrustHtml(image         );

  })}

  ngOnInit(): void {
    this.changeSizeOfSVG('250', '250', `assets/avatar/${this.imagePart.toLowerCase()}/${this.pathToSvg}`)
  }



}
