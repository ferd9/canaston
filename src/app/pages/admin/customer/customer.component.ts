import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomerComponent { }
