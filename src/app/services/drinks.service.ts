import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../interfaces/Drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private apiUrl = 'http://localhost:3000/refrigerantes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.apiUrl);
  }

  getById(id: string): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiUrl}/${id}`);
  }

  create(drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(this.apiUrl, drink);
  }

  update(id: string, drink: Drink): Observable<Drink> {
    return this.http.put<Drink>(`${this.apiUrl}/${id}`, drink);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
