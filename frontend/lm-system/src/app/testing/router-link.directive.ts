import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[routerLink]',
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick(): void {
    if (Array.isArray(this.linkParams)) {
      this.linkParams = this.linkParams.join('/');
    }
    this.navigatedTo = this.linkParams;
  }
}
