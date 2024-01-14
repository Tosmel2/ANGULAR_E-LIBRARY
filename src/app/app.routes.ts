import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component"
import {AwardWinningBooksComponent} from "./award-winning-books/award-winning-books.component";
import {BestSellingBooksComponent} from "./best-selling-books/best-selling-books.component"
import {TeensChildrenCategoryComponent} from "./teens-children-category/teens-children-category.component"
import {PricingComponent} from "./pricing/pricing.component";


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'award-winning-books', component: AwardWinningBooksComponent },
  { path: 'best-selling-books', component: BestSellingBooksComponent },
  { path: 'teens-children-category', component: TeensChildrenCategoryComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
