import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';
import {
  alienRaceList,
  avatarList,
  gender,
  imageParts,
  ranks,
  roles,
} from 'src/app/services/svgList.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ColorServicce } from 'src/app/services/colors.service';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  /** Main selections */
  allRaces: unknown[] = [];
  selectedTestRace = { name: 'human', value: 'human' };
  selectedRace: alienRaceList = alienRaceList.human;
  allGenders: unknown[] = [];
  selectedTestGender = { name: 'female', value: 'female' };
  selectedGender: gender = gender.female;
  allRoles: unknown[] = [];
  selectedTestRole = { name: 'command', value: 'command' };
  selectedRole: roles = roles.command;
  allRanks: unknown[] = [];
  selectedTestRank = { name: 'captain', value: 'captain' };
  selectedRank: ranks = ranks.captain;

  /** Arrays that hold the different Parts for the selection */
  allUniforms: avatarList[] = [];
  allHeads: avatarList[] = [];
  allEyes: avatarList[] = [];
  allEyebrows: avatarList[] = [];
  allHairs: avatarList[] = [];
  allNoses: avatarList[] = [];
  allMouths: avatarList[] = [];
  allEars: avatarList[] = [];
  allSkinColors: any[] = [];
  allHeadDeco: avatarList[] = [];

  /** Selected elements out of the arrays of the body parts */
  selectedUniform: any;
  selectedHead: any;
  selectedEyes: any;
  selectedHair: any;
  selectedNose: any;
  selectedMouth: any;
  selectedEyebrows: any;
  selectedEars: any;
  selectedSkinColor: any;
  selectedHeadDeco: any;
  selectedHeadRacial: any;

  /** Variables to hold the svg information */
  uniformSVG: SafeHtml = '';
  headSVG: SafeHtml = '';
  eyesSVG: SafeHtml = '';
  hairSVG: SafeHtml = '';
  longHairSVG: SafeHtml = '';
  noseSVG: SafeHtml = '';
  mouthSVG: SafeHtml = '';
  eyebrowsSVG: SafeHtml = '';
  earsSVG: SafeHtml = '';
  insigniaSVG: SafeHtml = '';
  headDecoSVG: SafeHtml = '';
  headRacialSVG: SafeHtml = '';

  /** Indexes for the selection of an element out of the body part Arrays */
  uniformIndex: number = 0;
  headIndex: number = 0;
  eyeIndex: number = 0;
  hairIndex: number = 0;
  noseIndex: number = 0;
  mouthIndex: number = 0;
  eyebrowIndex: number = 0;
  earsIndex: number = 0;
  skinColorIndex: number = 0;
  headDecoIndex: number = 0;

  constructor(
    public avatar: AvatarService,
    private sanitizer: DomSanitizer,
    private color: ColorServicce,
    private printService: PrintService
  ) {}

  /** Load all the informations from the arrays, because of the fact thats a sync call we can do this by simple calls directly in the onInit */
  ngOnInit(): void {
    for (const value in alienRaceList) {
      this.allRaces.push({ name: value, value: value });
    }
    for (const g in gender) {
      this.allGenders.push({ name: g, value: g });
    }
    for (const r in roles) {
      this.allRoles.push({ name: r, value: r });
    }
    for (const r in ranks) {
      this.allRanks.push({ name: r, value: r });
    }
    this.loadArrays();
  }

  loadArrays() {
    this.allUniforms = this.avatar.loadPart(
      imageParts.uniform,
      this.selectedRace,
      this.selectedGender
    );
    this.allHeads = this.avatar.loadPart(
      imageParts.head,
      this.selectedRace,
      this.selectedGender
    );
    this.allEyes = this.avatar.loadPart(
      imageParts.eyes,
      this.selectedRace,
      this.selectedGender
    );
    this.allHairs = this.avatar.loadPart(
      imageParts.hair,
      this.selectedRace,
      this.selectedGender
    );
    this.allEyebrows = this.avatar.loadPart(
      imageParts.eyebrows,
      this.selectedRace,
      this.selectedGender
    );
    this.allNoses = this.avatar.loadPart(
      imageParts.nose,
      this.selectedRace,
      this.selectedGender
    );
    this.allMouths = this.avatar.loadPart(
      imageParts.mouth,
      this.selectedRace,
      this.selectedGender
    );
    this.allEars = this.avatar.loadPart(
      imageParts.ears,
      this.selectedRace,
      this.selectedGender
    );
    this.allHeadDeco = this.avatar.loadPart(
      imageParts.headDeco,
      this.selectedRace,
      this.selectedGender
    );
    this.allSkinColors = this.avatar.loadColor(
      'skin',
      this.selectedRace,
      this.selectedGender
    );
    this.onChangePart();
  }

  changeRace(sr: string) {
    this.headDecoSVG = '';
    this.selectedRace = <alienRaceList>sr;

    this.loadArrays();
  }

  changeGender(sr: string) {
    this.selectedGender = <gender>sr;
    this.hairIndex = 0;
    this.loadArrays();
  }

  changeRole(sr: string) {
    this.selectedRole = <roles>sr;
    this.loadArrays();
  }

  changeRank(sr: string) {
    this.selectedRank = <ranks>sr;
    this.loadArrays();
  }

  onChangePart() {
    this.setSVGs();
    this.setColors();
    this.avatar.loadPartBySelection(this.selectedUniform).subscribe((res) => {
      this.uniformSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.color.setUniformColor(
          document.getElementById('uniform_right'),
          this.selectedRole
        );
        this.color.setUniformColor(
          document.getElementById('uniform_left'),
          this.selectedRole
        );
        this.changeSizeOfSVG();
      }, 1);
    });
    this.avatar.loadPartBySelection(this.selectedHead).subscribe((res) => {
      this.headSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.changeSizeOfSVG();
      }, 1);
    });
    this.avatar.loadPartBySelection(this.selectedEyes).subscribe((res) => {
      this.eyesSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.changeSizeOfSVG();
      }, 1);
    });
    this.avatar.loadPartBySelection(this.selectedEyebrows).subscribe((res) => {
      this.eyebrowsSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.changeSizeOfSVG();
      }, 1);
    });
    this.avatar.loadPartBySelection(this.selectedNose).subscribe((res) => {
      this.noseSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.changeSizeOfSVG();
      }, 1);
    });
    this.avatar.loadPartBySelection(this.selectedMouth).subscribe((res) => {
      this.mouthSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.changeSizeOfSVG();
      }, 1);
    });
    if (this.selectedHeadDeco) {
      this.avatar
        .loadPartBySelection(this.selectedHeadDeco)
        .subscribe((res) => {
          this.headDecoSVG = this.sanitizer.bypassSecurityTrustHtml(res);
          setTimeout(() => {
            this.changeSizeOfSVG();
          }, 1);
        });
    }

    this.avatar.loadPartBySelection(this.selectedEars).subscribe((res) => {
      this.earsSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.avatar.setColor('skin', this.selectedSkinColor);
        this.changeSizeOfSVG();
      }, 1);
    });
    if (Array.isArray(this.selectedHair.file)) {
      let file1 = {
        file: this.selectedHair.file[0],
        tags: {
          imagePart: imageParts.hair,
          gender: [gender.male, gender.female],
          race: [alienRaceList.human],
        },
      };

      this.avatar.loadPartBySelection(file1).subscribe((res) => {
        this.hairSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      });
      let file2 = {
        file: this.selectedHair.file[1],
        tags: {
          imagePart: imageParts.hair,
          gender: [gender.male, gender.female],
          race: [alienRaceList.human],
        },
      };

      this.avatar.loadPartBySelection(file2).subscribe((res) => {
        this.longHairSVG = this.sanitizer.bypassSecurityTrustHtml(res);
        setTimeout(() => {
          this.changeSizeOfSVG();
        }, 1);
      });
    } else {
      this.longHairSVG = '';
      this.avatar.loadPartBySelection(this.selectedHair).subscribe((res) => {
        this.hairSVG = this.sanitizer.bypassSecurityTrustHtml(res);
        setTimeout(() => {
          console.log('timeout');
          this.color.setUniformColor(
            document.getElementById('hair_band'),
            this.selectedRole
          );
          this.changeSizeOfSVG();
        }, 1);
      });
    }
    this.avatar.loadInsignia(true).subscribe((res) => {
      this.insigniaSVG = this.sanitizer.bypassSecurityTrustHtml(res);
      setTimeout(() => {
        this.color.setInsigniaColor(this.selectedRank);
      }, 1);
    });
  }

  print() {
    let el: HTMLElement | null = document.getElementById('avatar');
    if (el) {
      this.printService.downLoadAvatar(el);
    }
  }

  setSVGs(): void {
    this.selectedUniform = this.allUniforms[this.uniformIndex];
    this.selectedHead = this.allHeads[this.headIndex];
    this.selectedEyes = this.allEyes[this.eyeIndex];
    this.selectedHair = this.allHairs[this.hairIndex];
    this.selectedNose = this.allNoses[this.noseIndex];
    this.selectedMouth = this.allMouths[this.mouthIndex];
    this.selectedEyebrows = this.allEyebrows[this.eyebrowIndex];
    this.selectedEars = this.allEars[this.earsIndex];
    this.selectedHeadDeco = this.allHeadDeco[this.headDecoIndex];
  }

  setColors(): void {
    this.selectedSkinColor = this.allSkinColors[this.skinColorIndex];
  }

  nextPart(part: string, up: boolean): void {
    switch (part) {
      case 'uniform':
        if (up === true && this.uniformIndex < this.allUniforms.length - 1) {
          this.uniformIndex++;
        } else if (up === false && this.uniformIndex > 0) {
          this.uniformIndex--;
        }
        this.onChangePart();

        break;
      case 'head':
        if (up === true && this.headIndex < this.allHeads.length - 1) {
          this.headIndex++;
        } else if (up === true && this.headIndex === this.allHeads.length - 1) {
          this.headIndex = 0;
        } else if (up === false && this.headIndex > 0) {
          this.headIndex--;
        }
        this.onChangePart();
        break;
      case 'eyes':
        if (up === true && this.eyeIndex < this.allEyes.length - 1) {
          this.eyeIndex++;
        } else if (up === false && this.eyeIndex > 0) {
          this.eyeIndex--;
        }
        this.onChangePart();
        break;
      case 'hair':
        if (up === true && this.hairIndex < this.allHairs.length - 1) {
          this.hairIndex++;
        } else if (up === false && this.hairIndex > 0) {
          this.hairIndex--;
        }
        this.onChangePart();
        break;
      case 'nose':
        if (up === true && this.noseIndex < this.allNoses.length - 1) {
          this.noseIndex++;
        } else if (up === false && this.noseIndex > 0) {
          this.noseIndex--;
        }
        this.onChangePart();
        break;
      case 'mouth':
        if (up === true && this.mouthIndex < this.allMouths.length - 1) {
          this.mouthIndex++;
        } else if (up === false && this.mouthIndex > 0) {
          this.mouthIndex--;
        }
        this.onChangePart();
        break;
      case 'eyebrow':
        if (up === true && this.eyebrowIndex < this.allEyebrows.length - 1) {
          this.eyebrowIndex++;
        } else if (up === false && this.eyebrowIndex > 0) {
          this.eyebrowIndex--;
        }
        this.onChangePart();
        break;
      case 'ears':
        if (up === true && this.earsIndex < this.allEars.length - 1) {
          this.earsIndex++;
        } else if (up === false && this.earsIndex > 0) {
          this.earsIndex--;
        }
        this.onChangePart();
        break;
      case 'skinColor':
        if (
          up === true &&
          this.skinColorIndex < this.allSkinColors.length - 1
        ) {
          this.skinColorIndex++;
        } else if (up === false && this.skinColorIndex > 0) {
          this.skinColorIndex--;
        }
        this.onChangePart();
        break;
      case 'headDeco':
        if (up === true && this.headDecoIndex < this.allHeadDeco.length - 1) {
          this.headDecoIndex++;
        } else if (up === false && this.headDecoIndex > 0) {
          this.headDecoIndex--;
        }
        this.onChangePart();
        break;

      default:
        break;
    }
  }

  changeStyleColor(
    element: Element,
    styleElement: string,
    fillColor: string
  ): void {
    let oldStyle = element.getAttribute('style');
    if (oldStyle !== null && oldStyle !== undefined) {
      element.setAttribute(
        'style',
        this.replaceStyleColor(styleElement, oldStyle, fillColor)
      );
    }
  }

  changeSizeOfSVG() {
    let width = document.getElementById('avatar')?.offsetWidth;
    if (width) {
      let allSVGs = Array.from(document.getElementsByTagName('svg'));
      let height = width * 1.414;
      allSVGs.forEach((svg) => {
        svg.setAttribute('width', `${width}px`);
        svg.setAttribute('height', `${height}px`);
      });
      document
        .getElementById('avatar')
        ?.setAttribute('style', `height: ${width * 1.1}px`);
    }
  }

  replaceStyleColor(
    styleElement: string,
    originalStyle: string,
    newColor: string
  ): string {
    let fillIndex = originalStyle.indexOf(styleElement);
    let endIndex = originalStyle.indexOf(';', fillIndex);
    //if no ; is found
    if (endIndex === -1) {
      endIndex = originalStyle.length;
    }
    let finalString = originalStyle.substring(fillIndex, endIndex);
    return originalStyle.replace(finalString, styleElement + ':' + newColor);
  }
}
