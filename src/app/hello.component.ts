import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() val: string;
  @Output() out = new EventEmitter<number>();

  emit() {
    this.out.emit(1);
  }
}
