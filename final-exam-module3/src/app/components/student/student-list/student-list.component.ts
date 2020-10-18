import { StudentService } from './../../../services/student.service';
import { Subscription } from 'rxjs';
import { Student } from './../../../models/student.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  students: Student[];

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getStudentList(): void {
    this.subscription = this.studentService.getAllStudent().subscribe({
      next: data => this.students = data,
      error: err => console.log(err)
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Xác nhận xoá thông tin này ?')) {
      this.subscription = this.studentService.deleteStudent(id).subscribe({
        next: () => this.getStudentList(),
        error: err => console.log(err),
        complete: () => this.router.navigateByUrl('/student-list')
      });
    }
  }
}
