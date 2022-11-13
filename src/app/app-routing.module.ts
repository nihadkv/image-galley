import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'detail', component: GalleryComponent },
  { path: 'detail/:id', component: DetailViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
