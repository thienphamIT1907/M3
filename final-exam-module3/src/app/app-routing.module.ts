import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'student-create',
    component: StudentCreateComponent
  },
  {
    path: 'student-edit/:id',
    component: StudentEditComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
