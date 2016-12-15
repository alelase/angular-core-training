import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[marker]'
})
export class MarkerDirective {

  private element: ElementRef;
  private renderer: Renderer;

  constructor(element: ElementRef, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
  }

  @HostListener('mouseover')
  setMarker(){    
    this.renderer.setElementStyle(
      this.element.nativeElement,
      'background-color',
      'yellow')
  }

  @HostListener('mouseout')
  removeMarker(){    
    this.renderer.setElementStyle(
      this.element.nativeElement,
      'background-color',
      '')
  }
}
