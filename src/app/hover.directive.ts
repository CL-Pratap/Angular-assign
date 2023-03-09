import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { 

  }
  

  @HostBinding('style.backgroundColor') background: string = 'rgb(34, 90, 90)';
  @HostBinding('style.border') border: string = '2px solid rgb(111, 111, 253)';

   @HostListener('mouseenter') onmousehover(){
    
    // this.background = 'pink';
    // this.border = 'red 2px solid';
    this.renderer.setStyle(this.element.nativeElement, 'background','pink');
    this.renderer.setStyle(this.element.nativeElement, 'border','red 2px solid');
   this.renderer.setStyle(this.element.nativeElement, 'margin','30px 30px');
   this.renderer.setStyle(this.element.nativeElement, 'padding','5px 10px');
   this.renderer.setStyle(this.element.nativeElement, 'transition','0.5s');
  }
   

  
  @HostListener('mouseleave') onmouseout(){
    // this.background = 'rgb(34, 90, 90)';
    // this.border = '2px solid rgb(111, 111, 253)';
    this.renderer.setStyle(this.element.nativeElement, 'background','rgb(34, 90, 90)');
    this.renderer.setStyle(this.element.nativeElement, 'border','2px solid rgb(111, 111, 253)');
    this.renderer.setStyle(this.element.nativeElement, 'margin','10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding','20px');
    this.renderer.setStyle(this.element.nativeElement, 'transition','0.5s');
   }
}
