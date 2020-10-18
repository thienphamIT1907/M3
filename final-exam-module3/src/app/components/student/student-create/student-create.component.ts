import { StudentService } from './../../../services/student.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  createStudentForm: FormGroup;
  newStudent: Student;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.createStudentForm = this.fb.group({
      ten_sinh_vien: ['', [Validators.required]],
      ten_nhom: ['', [Validators.required]],
      ten_de_tai: ['', [Validators.required]],
      giao_vien_huong_dan: ['', [Validators.required]],
      email: ['', [Validators.required]],
      so_dien_thoai: ['', [Validators.required]],
    });
  }

  onCreateStudent(): void {
    this.newStudent = Object.assign({}, this.createStudentForm.value);
    this.subscription = this.studentService.postStudent(this.createStudentForm.value).subscribe({
      next: () => this.studentService.getAllStudent().subscribe(),
      error: err => console.log(err),
      complete: () => this.router.navigateByUrl('student-list')
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
