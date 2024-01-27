import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand.model';
import { BrandRequestDto } from '../model/add-brand-request.model';
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class BrandsService {
    constructor(private httpClient: HttpClient) { }

    public add(model: BrandRequestDto): Observable<void> {
        return this.httpClient.post<void>(`${environment.apiBaseUrl}/brand`, model);
    }

    // pageNumber, searchKeyword: string = ""
    public getAll(): Observable<Brand[]> {
        return this.httpClient.get<Brand[]>(`${environment.apiBaseUrl}/brand`);
    }

    public get(): Observable<Brand> {
        return this.httpClient.get<Brand>(`${environment.apiBaseUrl}/brand`);
    }

    getById(id: string): Observable<Brand> {
        return this.httpClient.get<Brand>(`${environment.apiBaseUrl}/brand/${id}`);
    }

    public update(id: string, model: Brand): Observable<Brand> {
        return this.httpClient.put<Brand>(`${environment.apiBaseUrl}/brand/${id}`, model);
    }

    public delete(id: string): Observable<Brand> {
        return this.httpClient.delete<Brand>(`${environment.apiBaseUrl}/brand/${id}`);
    }
}