import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './pages/avatar/avatar.component';

const routes: Routes = [
  {
    path: '',
    component: AvatarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
