import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {RegistrationComponent} from "../registration/registration.component";
import {LoginComponent} from "../login/login.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {HeroComponent} from "../components/hero/hero.component";
import {BookCollectionsComponent} from "../components/book-collections/book-collections.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    HeroComponent,
    BookCollectionsComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
