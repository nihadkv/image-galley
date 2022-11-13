import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  courseId!: any;
  image!: any;
  env = environment.url;
  constructor(private route: ActivatedRoute, private service: GalleryService) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.courseId = id;

    this.service.getOneImage(id).subscribe((res: any) => {
      console.log(res);
      this.image = res.data;
    });
  }
}
