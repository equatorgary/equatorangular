import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { MessagingTermsComponent } from './pages/messaging-terms/messaging-terms.component';
import { ShippingReturnsComponent } from './pages/shipping-returns/shipping-returns.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { DealerComponent } from './pages/dealer/dealer.component';
import { WarrantyComponent } from './pages/warranty/warranty.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { MediaComponent } from './pages/media/media.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'contact-us', component: ContactusComponent },
    { path: 'category', component: CategoryComponent},
    { path: 'privacy-policy', component: PrivacyComponent},
    { path: 'messaging-terms', component: MessagingTermsComponent},
    { path: 'shipping-and-return', component: ShippingReturnsComponent},
    { path: 'reviews', component: ReviewsComponent},
    { path: 'dealer', component: DealerComponent},
    { path: 'warranty', component: WarrantyComponent},
    { path: 'media', component: MediaComponent}
];
