import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customerOrders.component.html',
  styleUrl: './customerOrders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomerOrdersComponent { }
