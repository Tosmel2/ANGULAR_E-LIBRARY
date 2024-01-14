// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-book-section',
//   standalone: true,
//   imports: [],
//   templateUrl: './book-section.component.html',
//   styleUrl: './book-section.component.css'
// })
// export class BookSectionComponent {
//   sectionTitle: string | undefined;
//
// }

// book-section.component.ts
import { Component, Input } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  styleUrls: ['./book-section.component.css']
})
export class BookSectionComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() books: any[] = [];
  @Input() endpoint: string = '';
  // @Input() books: any[] | undefined;
}
