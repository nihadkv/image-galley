import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor(private service: GalleryService, private router: Router) {}
  images!: any;
  env = environment.url;

  ngOnInit(): void {
    this.service.getImage().subscribe((data: any) => {
      console.log(data);
      this.images = data.data;
    });
  }

  onSelect(id: number) {
    this.router.navigate(['detail', id])
  }
}
