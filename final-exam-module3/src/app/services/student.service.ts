import { Student } from './../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API_URL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.API_URL}/${id}`);
  }

  postStudent(student: Student): Observable<void> {
    return this.http.post<void>(this.API_URL, student);
  }

  patchStudent(student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.API_URL}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.API_URL}/${id}`);
  }
}
