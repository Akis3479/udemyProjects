import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    return this.apiService.get<any>(url, {
      params,
      responseType: 'json',
    });
  }

  addProduts = (url: string, body: any): Observable<any> => {
    return this.apiService.post<any>(url, body, {
    });
  }

  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.put<any>(url, body, {
    });
  }

  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.delete<any>(url, {});
  }

}
