import { Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';

export const routes: Routes = [
  {
    path: 'inicio',
    title: 'Inicio',
    component: LandingComponent,
    children: [
      {
        path: 'category-products',
        title: 'Category Products',
        loadComponent: () => import('./pages/website/categoryProducts/categoryProducts.component')
      },
      {
        path: 'checkout',
        title: 'Checkout',
        loadComponent: () => import('./pages/website/checkout/checkout.component')
      },
      {
        path: 'custumer-cart',
        title: 'Cart',
        loadComponent: () => import('./pages/website/customerCart/customerCart.component')
      },
      {
        path: 'customer-orders',
        title: 'orders',
        loadComponent: () => import('./pages/website/customerOrders/customerOrders.component')
      },
      {path: '**', redirectTo: 'customer-orders'}
    ]
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages/admin/login/login.component')
  },
  {
    path: 'admin',
    title: 'Administration',
    loadComponent: () => import('./pages/admin/layout/layout.component'),
    children: [
      {
        path: 'cart',
        title: 'Admin Cart',
        loadComponent: () => import('./pages/admin/cart/cart.component')
      },
      {
        path: 'categories',
        title: 'Categories',
        loadComponent: () => import('./pages/admin/categories/categories.component')
      },
      {
        path: 'customer',
        title: 'Customer',
        loadComponent: () => import('./pages/admin/customer/customer.component')
      },
      {
        path: 'order',
        title: 'Order',
        loadComponent: () => import('./pages/admin/order/order.component')
      },
      {
        path: 'cart',
        title: 'Admin Cart',
        loadComponent: () => import('./pages/admin/cart/cart.component')
      },
      {
        path: 'products',
        title: 'Productos',
        loadComponent: () => import('./pages/admin/products/products.component')
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  { path: '**', redirectTo: 'inicio'}
];
