import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  constructor(private http: HttpClient) { }
  public async login(data: any) {
    try {
      const httpRequest = await this.http.post('http://localhost:3000/api/log-in', data).toPromise();
      if (httpRequest) {
        return { ok: true,  httpRequest }

      } else {
        return { ok: false, data: null }
      }

    } catch (e) {
      return { ok: false, data: null }
    }
  }

  public async getUsers(data: any) {
    try {
      const httpRequest = await this.http.post('http://localhost:3000/api/users', data).toPromise();
      if (httpRequest) {
        return { ok: true,  httpRequest }

      } else {
        return { ok: false, data: null }
      }

    } catch (e) {
      return { ok: false, data: null }
    }
  }


}


