import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class CategoriesService {
    constructor(private httpClient: HttpClient) { }

    public add(brand: FormData) {
        return this.httpClient.post<Category>(`${environment.apiBaseUrl}/category`, brand);
    }

    // pageNumber, searchKeyword: string = ""
    getAll(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(`${environment.apiBaseUrl}/category`);
    }

    get(): Observable<Category> {
        return this.httpClient.get<Category>(`${environment.apiBaseUrl}/category`);
    }

    getById(id: string): Observable<Category> {
        return this.httpClient.get<Category>(`${environment.apiBaseUrl}/category/${id}`);
    }

    public update(id: string, model: Category): Observable<Category> {
        return this.httpClient.put<Category>(`${environment.apiBaseUrl}/category/${id}`, model);
    }

    public delete(id: string): Observable<Category> {
        return this.httpClient.delete<Category>(`${environment.apiBaseUrl}/category/${id}`);
    }
}