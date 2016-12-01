import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>
      {{ item }}
      <button>X</button>
    </li>
  `,  
})
export class ItemComponent {
  @Input() item: string;
}
