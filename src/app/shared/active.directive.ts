import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
  @HostBinding('class.open')
  isOpen = false;

  
@HostListener('click')
toggleOpen(){
this.isOpen = !this.isOpen;
}
  constructor() { }

}
