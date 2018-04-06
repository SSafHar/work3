import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges } from '@angular/core';
import { Animatable, Image } from '../../../common/portfolio.model';

type Direction = -1 | 0 | 1;

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  animations: [
    trigger('slide', [
      state('*', style({
        visibility: 'hidden'
      })),
      state('current', style({
        left: 0,
        visibility: 'visible'
      })),
      state('previous', style({
        left: '-100%',
        visibility: 'hidden'
      })),
      state('next', style({
        left: '100%',
        visibility: 'hidden'
      })),
      transition('* <=> *', animate('150ms ease-in'))
    ])
  ]
})
export class ImageSliderComponent implements OnChanges {
  @Input() images: Animatable<Image>[] = [];
  selectionTarget: number;
  direction: Direction = 0;
  currentInd: number;
  lastInd: number;

  ngOnChanges(changes) {
    if(!changes.images) {
      return;
    }
    this.lastInd = this.images.length - 1;
    this.selectionTarget = 0;
    this.currentInd = -1;
    this.setStates();
  }

  previousImage() {
    if(this.currentInd <= 0) {
      this.selectionTarget = this.lastInd;
    } else {
      this.selectionTarget = this.currentInd - 1;
    }
    this.setStates();
  }

  nextImage() {
    if(this.currentInd >= this.lastInd) {
      this.selectionTarget = 0;
    } else {
      this.selectionTarget = this.currentInd + 1;
    }
    this.setStates();
  }

  selectImage(index) {
    this.selectionTarget = index;
    this.setStates();
  }

  setNextSates(ev: AnimationEvent) {
    if(ev.toState !== 'current') {
      return;
    }

    this.setStates();
  }

  private setStates() {
    const {lastInd, selectionTarget} = this;
    let {currentInd, direction} = this;

    if(currentInd === selectionTarget) {
      this.direction = 0;
      return;
    }

    if(!direction) {
      this.direction = direction = currentInd < selectionTarget ? 1 : -1;
    }

    this.currentInd = currentInd = currentInd + direction;

    const current = this.images[currentInd];
    current.animationState = 'current';

    const previous = currentInd === 0 ? this.images[lastInd] : this.images[currentInd - 1];
    previous.animationState = 'previous';

    const next = currentInd === lastInd ? this.images[0] : this.images[currentInd + 1];
    next.animationState = 'next';
  }
}
