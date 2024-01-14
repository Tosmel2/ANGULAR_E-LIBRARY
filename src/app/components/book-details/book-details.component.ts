import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() endpoint: string = '';
  @Input() books: any[] = [];
  // @Input() books: any[] | undefined;

}
