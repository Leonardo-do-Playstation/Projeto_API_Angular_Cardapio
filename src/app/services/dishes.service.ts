import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dishe } from '../interfaces/Dishe';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

   private apiUrl = 'http://localhost:3000/pratos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Dishe[]> {
    return this.http.get<Dishe[]>(this.apiUrl);
  }

  getById(id: string): Observable<Dishe> {
    return this.http.get<Dishe>(`${this.apiUrl}/${id}`);
  }

  create(dishe: Dishe): Observable<Dishe> {
    return this.http.post<Dishe>(this.apiUrl, dishe);
  }

  update(id: string, dishe: Dishe): Observable<Dishe> {
    return this.http.put<Dishe>(`${this.apiUrl}/${id}`, dishe);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
