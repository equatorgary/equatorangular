import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { MessagingTermsComponent } from './pages/messaging-terms/messaging-terms.component';
import { ShippingReturnsComponent } from './pages/shipping-returns/shipping-returns.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'category', component: CategoryComponent},
    { path: 'privacy-policy', component: PrivacyComponent},
    { path: 'messaging-terms', component: MessagingTermsComponent},
    { path: 'shipping-and-return', component: ShippingReturnsComponent}
];
