import {Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appBordCards]'
})
export class BordCardsDirective {

  constructor( private el : ElementRef) {
    this.setBorderHeight(180);
    this.setBorderColor('#f5f5f5');

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColor('#009688');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColor('#f5f5f5')
  }


  private setBorderColor( color : string){
    this.el.nativeElement.style.border=`solid 4px ${color}`

  }
  private setBorderHeight(height : number){
    this.el.nativeElement.height=`${height}px`

  }

}
