import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getImage() {
    return this.http.get('http://localhost:1337/api/galleries?populate=image');
  }

  getOneImage(id:number) {    
    return this.http.get(`http://localhost:1337/api/galleries/${id}?populate=image`);
  }
}
