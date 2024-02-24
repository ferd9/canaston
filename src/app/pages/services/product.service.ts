import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/canaston.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com';

  //private http = inject(HttpClient);

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

}
