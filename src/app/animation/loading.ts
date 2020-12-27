import {animate, style, transition, trigger} from '@angular/animations';


export const loadingAnime = [
  trigger('loading', [
    transition(':enter', [
      style({
        opacity: '0%'
      }),
      animate('100ms ease-in-out',  style({
        opacity: '100%'
      }))
    ]),
    transition(':leave', [
      style({
        opacity: '100%'
      }),
      animate('100ms ease-in-out',  style({
        opacity: '0%'
      }))
    ])
  ])
];
