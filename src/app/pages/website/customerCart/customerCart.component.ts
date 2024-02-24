import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customerCart.component.html',
  styleUrl: './customerCart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomerCartComponent { }
