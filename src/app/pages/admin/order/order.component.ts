import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderComponent { }
