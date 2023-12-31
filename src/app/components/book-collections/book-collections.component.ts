import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-book-collections',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './book-collections.component.html',
  styleUrl: './book-collections.component.css'
})
export class BookCollectionsComponent {

}
