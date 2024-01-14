import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}

