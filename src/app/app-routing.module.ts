import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarringDetailComponent } from './earring-detail/earring-detail.component';
import { EarringListComponent } from './earring-list/earring-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaskDetailComponent } from './mask-detail/mask-detail.component';
import { MaskListComponent } from './mask-list/mask-list.component';
import { SunglassesDetailComponent } from './sunglasses-detail/sunglasses-detail.component';
import { SunglassesListComponent } from './sunglasses-list/sunglasses-list.component';

const routes: Routes = [
  {path:'sunglasses',component:SunglassesListComponent},
  {path:"masks", component:MaskListComponent},
  {path:"earrings", component: EarringListComponent},
  {path:"mask-detail/:id", component: MaskDetailComponent},
  {path:"earring-detail/:id", component: EarringDetailComponent},
  {path:"sunglasses-detail/:id", component: SunglassesDetailComponent},
  {path:"login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SunglassesListComponent,MaskListComponent,EarringListComponent,MaskDetailComponent, EarringDetailComponent,SunglassesDetailComponent, LoginPageComponent]