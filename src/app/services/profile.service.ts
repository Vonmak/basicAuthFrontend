import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getData(id:number): Observable<Profile>{
    return this.http.get<Profile>(`${this.url}profile/`+id).pipe(
      map((profile: any) => {
        console.log(profile)
        return profile;
      })
    );
  }
}
