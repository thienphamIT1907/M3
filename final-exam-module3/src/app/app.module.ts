import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// THIRD-PARTY LIBRARY //
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './components/home/home.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
