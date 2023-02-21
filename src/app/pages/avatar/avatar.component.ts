import { Component, OnInit } from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ColorService } from 'src/app/services/colors.service';
import { PrintService } from 'src/app/services/print.service';
import {
  alienSpeciesList,
  ranks,
  roles,
  gender,
  imageParts,
} from 'src/app/enums/avatar.enum';
import { avatarList } from 'src/app/interfaces/avatar.interface';
import { HairColor } from 'src/app/interfaces/color.interface';
import { backgrounds } from 'src/app/data/backgroundsImg';
import { SkinColorService } from 'src/app/services/skin-color.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  /** Main selections */
  allSpecies: unknown[] = [];
  selectedTestSpecies = { name: 'human', value: 'human' };
  selectedSpecies: alienSpeciesList = alienSpeciesList.human;
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
  allSpeciesSpecial: avatarList[] = [];
  allHairColors: HairColor[] = [];
  allBackgrounds: any[] = [];
  allBeards: unknown[] = [];

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
  selectedSpeciesSpecial: any;
  selectedHairColor: any;
  selectedBackground: any;
  selectedBeard: any;

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
  speciesSpecialSVG: SafeHtml = '';
  beardSVG: SafeHtml = '';

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
  hairColorIndex: number = 0;
  backgroundIndex: number = 0;
  speciesSpecialIndex: number = 0;
  beardIndex: number = 0;

  loading = true;
  constructor(
    public avatar: AvatarService,
    private sanitizer: DomSanitizer,
    private color: ColorService,
    private printService: PrintService,
    private skinColor: SkinColorService
  ) {}

  /** Load all the informations from the arrays, because of the fact thats a sync call we can do this by simple calls directly in the onInit */
  ngOnInit(): void {
    for (const value in alienSpeciesList) {
      this.allSpecies.push({ name: value, value: value });
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
      this.selectedSpecies,
      this.selectedGender
    );
    this.allHeads = this.avatar.loadPart(
      imageParts.head,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allEyes = this.avatar.loadPart(
      imageParts.eyes,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allHairs = this.avatar.loadPart(
      imageParts.hair,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allEyebrows = this.avatar.loadPart(
      imageParts.eyebrows,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allNoses = this.avatar.loadPart(
      imageParts.nose,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allMouths = this.avatar.loadPart(
      imageParts.mouth,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allEars = this.avatar.loadPart(
      imageParts.ears,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allHeadDeco = this.avatar.loadPart(
      imageParts.headDeco,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allSpeciesSpecial = this.avatar.loadPart(
      imageParts.speciesSpecial,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allBeards = this.avatar.loadPart(
      imageParts.beard,
      this.selectedSpecies,
      this.selectedGender
    );
    this.allSkinColors = this.avatar.loadSkinColor(this.selectedSpecies);

    this.allHairColors = this.avatar.loadHairColor(this.selectedSpecies);
    this.allBackgrounds = backgrounds;
    this.onChangePart();
  }

  changeSpecies(sr: string) {
    this.loading = true;
    this.headDecoSVG = '';
    this.selectedSpecies = <alienSpeciesList>sr;

    this.uniformIndex = 0;
    this.headIndex = 0;
    this.eyeIndex = 0;
    this.hairIndex = 0;
    this.noseIndex = 0;
    this.mouthIndex = 0;
    this.eyebrowIndex = 0;
    this.earsIndex = 0;
    this.skinColorIndex = 0;
    this.headDecoIndex = 0;
    this.hairColorIndex = 0;
    this.backgroundIndex = 0;
    this.speciesSpecialIndex = 0;
    this.loadArrays();
  }

  changeGender(sr: string) {
    this.loading = true;
    this.selectedGender = <gender>sr;
    this.uniformIndex = 0;
    this.headIndex = 0;
    this.eyeIndex = 0;
    this.hairIndex = 0;
    this.noseIndex = 0;
    this.mouthIndex = 0;
    this.eyebrowIndex = 0;
    this.earsIndex = 0;
    this.skinColorIndex = 0;
    this.headDecoIndex = 0;
    this.hairColorIndex = 0;
    this.backgroundIndex = 0;
    this.speciesSpecialIndex = 0;
    this.loadArrays();
  }

  changeRole(sr: string) {
    this.loading = true;
    this.selectedRole = <roles>sr;
    this.loadArrays();
  }

  changeRank(sr: string) {
    this.loading = true;
    this.selectedRank = <ranks>sr;
    this.loadArrays();
  }

  onChangePart() {
    document
      .getElementById('avatar')
      ?.setAttribute(
        'style',
        `height: ${document.getElementById('avatar')?.offsetWidth!}px`
      );
    this.setSVGs();
    this.setBackground();
    this.setColors();
    this.avatar.loadPartBySelection(this.selectedUniform).subscribe((res) => {
      this.uniformSVG = this.sanitizer.bypassSecurityTrustHtml(
        this.changeSizeOfSVG(res)
      );
      this.avatar.loadPartBySelection(this.selectedHead).subscribe((res) => {
        this.headSVG = this.sanitizer.bypassSecurityTrustHtml(
          this.changeSizeOfSVG(res)
        );
        this.avatar.loadPartBySelection(this.selectedEyes).subscribe((res) => {
          this.eyesSVG = this.sanitizer.bypassSecurityTrustHtml(
            this.changeSizeOfSVG(res)
          );
          this.avatar
            .loadPartBySelection(this.selectedEyebrows)
            .subscribe((res) => {
              this.eyebrowsSVG = this.sanitizer.bypassSecurityTrustHtml(
                this.changeSizeOfSVG(res)
              );
              this.avatar
                .loadPartBySelection(this.selectedNose)
                .subscribe((res) => {
                  this.noseSVG = this.sanitizer.bypassSecurityTrustHtml(
                    this.changeSizeOfSVG(res)
                  );
                  this.avatar
                    .loadPartBySelection(this.selectedMouth)
                    .subscribe((res) => {
                      this.mouthSVG = this.sanitizer.bypassSecurityTrustHtml(
                        this.changeSizeOfSVG(res)
                      );
                      this.avatar
                        .loadPartBySelection(this.selectedEars)
                        .subscribe((res) => {
                          this.earsSVG = this.sanitizer.bypassSecurityTrustHtml(
                            this.changeSizeOfSVG(res)
                          );
                          this.avatar
                            .loadPartBySelection(this.selectedSpeciesSpecial)
                            .subscribe((res) => {
                              this.speciesSpecialSVG =
                                this.sanitizer.bypassSecurityTrustHtml(
                                  this.changeSizeOfSVG(res)
                                );
                              this.avatar
                                .loadPartBySelection(this.selectedBeard)
                                .subscribe((res) => {
                                  this.beardSVG =
                                    this.sanitizer.bypassSecurityTrustHtml(
                                      this.changeSizeOfSVG(res)
                                    );
                                  this.avatar
                                    .loadInsignia(true)
                                    .subscribe((res) => {
                                      this.insigniaSVG =
                                        this.sanitizer.bypassSecurityTrustHtml(
                                          this.changeSizeOfSVG(res)
                                        );
                                      if (
                                        Array.isArray(this.selectedHair.file)
                                      ) {
                                        let file1 = {
                                          file: this.selectedHair.file[0],
                                          tags: {
                                            imagePart: imageParts.hair,
                                            gender: [
                                              gender.male,
                                              gender.female,
                                            ],
                                            species: [alienSpeciesList.human],
                                          },
                                        };

                                        this.avatar
                                          .loadPartBySelection(file1)
                                          .subscribe((res) => {
                                            this.hairSVG =
                                              this.sanitizer.bypassSecurityTrustHtml(
                                                this.changeSizeOfSVG(res)
                                              );
                                          });
                                        let file2 = {
                                          file: this.selectedHair.file[1],
                                          tags: {
                                            imagePart: imageParts.hair,
                                            gender: [
                                              gender.male,
                                              gender.female,
                                            ],
                                            species: [alienSpeciesList.human],
                                          },
                                        };

                                        this.avatar
                                          .loadPartBySelection(file2)
                                          .subscribe((res) => {
                                            this.longHairSVG =
                                              this.sanitizer.bypassSecurityTrustHtml(
                                                this.changeSizeOfSVG(res)
                                              );
                                            this.finalizeCharacter();
                                          });
                                      } else {
                                        this.longHairSVG = '';
                                        this.avatar
                                          .loadPartBySelection(
                                            this.selectedHair
                                          )
                                          .subscribe((res) => {
                                            this.hairSVG =
                                              this.sanitizer.bypassSecurityTrustHtml(
                                                this.changeSizeOfSVG(res)
                                              );
                                            this.finalizeCharacter();
                                          });
                                      }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
      });
    });
  }

  finalizeCharacter() {
    setTimeout(() => {
      this.color.setInsigniaColor(this.selectedRank);
      this.avatar.setColor(
        this.skinColor.generateSkinColors(
          this.selectedSkinColor,
          this.selectedSpecies
        )
      );
      this.avatar.setColor(this.selectedHairColor);
      this.color.setUniformColor(
        document.getElementById('uniform_right'),
        this.selectedRole
      );
      this.color.setUniformColor(
        document.getElementById('uniform_left'),
        this.selectedRole
      );
      this.color.setUniformColor(
        document.getElementById('hair_band'),
        this.selectedRole
      );
      this.loading = false;
    }, 1);
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
    this.selectedHairColor = this.allHairColors[this.hairColorIndex];
    this.selectedSpeciesSpecial =
      this.allSpeciesSpecial[this.speciesSpecialIndex];
    this.selectedBeard = this.allBeards[this.beardIndex];
  }

  random() {
    this.loading = true;
    this.uniformIndex = this.randomInt(this.allUniforms.length);
    this.headIndex = this.randomInt(this.allHeads.length);
    this.eyeIndex = this.randomInt(this.allEyes.length);
    this.hairIndex = this.randomInt(this.allHairs.length);
    this.noseIndex = this.randomInt(this.allNoses.length);
    this.mouthIndex = this.randomInt(this.allMouths.length);
    this.eyebrowIndex = this.randomInt(this.allEyebrows.length);
    this.earsIndex = this.randomInt(this.allEars.length);
    this.beardIndex = this.randomInt(this.allBeards.length);
    this.speciesSpecialIndex = this.randomInt(this.allSpeciesSpecial.length);
    this.selectedHeadDeco = this.randomInt(this.allHeadDeco.length);
    this.hairColorIndex = this.randomInt(this.allHairColors.length);
    this.skinColorIndex = this.randomInt(this.allSkinColors.length);
    this.backgroundIndex = this.randomInt(this.allBackgrounds.length);

    this.onChangePart();
  }

  randomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  setColors(): void {
    this.selectedSkinColor = this.allSkinColors[this.skinColorIndex];
  }

  setBackground(): void {
    this.selectedBackground = this.allBackgrounds[this.backgroundIndex];
    document
      .getElementById('background')
      ?.setAttribute('src', `${this.selectedBackground.path}`);
    document.getElementById('background')?.setAttribute(
      'style',
      `
    position: absolute;
    z-index: 1;
    width: ${document.getElementById('avatar')?.offsetWidth}px;
    height: ${
      document.getElementById('avatar')?.offsetWidth! * 1.047619047619048
    }px`
    );
  }

  nextPart(part: string, up: boolean): void {
    this.loading = true;
    switch (part) {
      case 'uniform':
        this.uniformIndex = up
          ? this.uniformIndex < this.allUniforms.length - 1
            ? this.uniformIndex + 1
            : 0
          : this.uniformIndex > 0
          ? this.uniformIndex - 1
          : this.allUniforms.length - 1;
        this.onChangePart();
        break;
      case 'head':
        this.headIndex = up
          ? this.headIndex < this.allHeads.length - 1
            ? this.headIndex + 1
            : 0
          : this.headIndex > 0
          ? this.headIndex - 1
          : this.allHeads.length - 1;
        this.onChangePart();
        break;
      case 'eyes':
        this.eyeIndex = up
          ? this.eyeIndex < this.allEyes.length - 1
            ? this.eyeIndex + 1
            : 0
          : this.eyeIndex > 0
          ? this.eyeIndex - 1
          : this.allEyes.length - 1;
        this.onChangePart();
        break;
      case 'hair':
        this.hairIndex = up
          ? this.hairIndex < this.allHairs.length - 1
            ? this.hairIndex + 1
            : 0
          : this.hairIndex > 0
          ? this.hairIndex - 1
          : this.allHairs.length - 1;
        this.onChangePart();
        break;
      case 'nose':
        this.noseIndex = up
          ? this.noseIndex < this.allNoses.length - 1
            ? this.noseIndex + 1
            : 0
          : this.noseIndex > 0
          ? this.noseIndex - 1
          : this.allNoses.length - 1;
        this.onChangePart();
        break;
      case 'mouth':
        this.mouthIndex = up
          ? this.mouthIndex < this.allMouths.length - 1
            ? this.mouthIndex + 1
            : 0
          : this.mouthIndex > 0
          ? this.mouthIndex - 1
          : this.allMouths.length - 1;
        this.onChangePart();
        break;
      case 'eyebrow':
        this.eyebrowIndex = up
          ? this.eyebrowIndex < this.allEyebrows.length - 1
            ? this.eyebrowIndex + 1
            : 0
          : this.eyebrowIndex > 0
          ? this.eyebrowIndex - 1
          : this.allEyebrows.length - 1;
        this.onChangePart();
        break;
      case 'ears':
        this.earsIndex = up
          ? this.earsIndex < this.allEars.length - 1
            ? this.earsIndex + 1
            : 0
          : this.earsIndex > 0
          ? this.earsIndex - 1
          : this.allEars.length - 1;
        this.onChangePart();
        break;
      case 'skinColor':
        this.skinColorIndex = up
          ? this.skinColorIndex < this.allSkinColors.length - 1
            ? this.skinColorIndex + 1
            : 0
          : this.skinColorIndex > 0
          ? this.skinColorIndex - 1
          : this.allSkinColors.length - 1;
        this.onChangePart();
        break;
      case 'headDeco':
        this.headDecoIndex = up
          ? this.headDecoIndex < this.allHeadDeco.length - 1
            ? this.headDecoIndex + 1
            : 0
          : this.headDecoIndex > 0
          ? this.headDecoIndex - 1
          : this.allHeadDeco.length - 1;
        this.onChangePart();
        break;
      case 'hairColor':
        this.hairColorIndex = up
          ? this.hairColorIndex < this.allHairColors.length - 1
            ? this.hairColorIndex + 1
            : 0
          : this.hairColorIndex > 0
          ? this.hairColorIndex - 1
          : this.allHairColors.length - 1;
        this.onChangePart();
        break;
      case 'background':
        this.backgroundIndex = up
          ? this.backgroundIndex < this.allBackgrounds.length - 1
            ? this.backgroundIndex + 1
            : 0
          : this.backgroundIndex > 0
          ? this.backgroundIndex - 1
          : this.allBackgrounds.length - 1;
        this.onChangePart();
        break;
      case 'speciesSpecial':
        this.speciesSpecialIndex = up
          ? this.speciesSpecialIndex < this.allSpeciesSpecial.length - 1
            ? this.speciesSpecialIndex + 1
            : 0
          : this.speciesSpecialIndex > 0
          ? this.speciesSpecialIndex - 1
          : this.allSpeciesSpecial.length - 1;
        this.onChangePart();
        break;
      case 'beard':
        this.beardIndex = up
          ? this.beardIndex < this.allBeards.length - 1
            ? this.beardIndex + 1
            : 0
          : this.beardIndex > 0
          ? this.beardIndex - 1
          : this.allBeards.length - 1;
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

  /**
   * Takes the result string of a loaded SVG, and changes the sizes before adding the svg to the innerHTML
   * @param input input string directly from http
   * @returns size corrected SVG string
   */
  changeSizeOfSVG(input?: string): string {
    let width = document.getElementById('avatar')?.offsetWidth;
    let height = 0;
    if (width) {
      height = width * 1.047619047619048;
    }
    if (input) {
      let image = `${
        input.split('width')[0]
      }width="${width}px" height="${height}px" viewbox${
        input.split(/viewBox(.*)/s)[1]
      }`;
      return image;
    }
    return '';
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
