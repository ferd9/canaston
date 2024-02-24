import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/canaston.interfaces';


interface Estado {
  productos: Product[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent implements OnInit{

  public isSidePanelVisible: boolean =  false;


  /*private serviceProduct = inject(ProductService)

  #estado = signal<Estado>({
    productos: []
  });

  public products = computed(() => this.#estado().productos);
*/

  public products: Product[] = [];
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.listProduct();
  }

  onChangeVisibility(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  listProduct(){
    this.productService.getAllProducts().subscribe(
      resp => {
        this.products =  resp;
      //  this.#estado.set({
      //   productos: resp
      //  });
       console.log(this.products);
      }
    );
  }
}
