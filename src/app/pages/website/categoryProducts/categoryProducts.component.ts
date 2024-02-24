import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './categoryProducts.component.html',
  styleUrl: './categoryProducts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoryProductsComponent { }
