import { List2Component } from './list2/list2.component';
import { List1Component } from './list1/list1.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'list1', component: List1Component},
  { path: 'list2', component: List2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
