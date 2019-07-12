import { Component } from '@angular/core';
import { fade, slide ,bounceOutLeftAnimation,bounceInRightAnimation} from '../../animations';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    trigger('todoAnimation',[
      transition(':enter',[
        style({opacity:0}),
        animate(2000),
        useAnimation(bounceInRightAnimation)
      ]),
      transition(':leave',[
        style({ backgroundColor:'red' }),
        animate(500),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})

export class TodosComponent {
  items: any[] = [
    'Hello', 
    'hello 2', 
    'hello 3'
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
