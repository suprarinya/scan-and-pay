import { Routes } from '@angular/router';
import { LandingComponent } from './store/landing/landing.component';
import { MenuComponent } from './store/menu/menu.component';
import { CartComponent } from './store/cart/cart.component';
import { PaymentComponent } from './store/payment/payment.component';
import { QueueComponent } from './store/queue/queue.component';
import { MenuItemComponent } from './store/menu-item/menu-item.component';

export const routes: Routes = [
    { path: 'store/:storeId/landing', component: LandingComponent },
    { path: 'store/:storeId/menu', component: MenuComponent },
    { path: 'store/:storeId/menu/:itemId', component: MenuItemComponent },
    { path: 'store/:storeId/cart/:cartId', component: CartComponent },
    { path: 'store/:storeId/payment/:orderId', component: PaymentComponent },
    { path: 'store/:storeId/queue/:orderId', component: QueueComponent },
    { path: '', redirectTo: '/store/1/landing', pathMatch: 'full' }, 
    // { path: '**', component: NotFoundComponent }
];
