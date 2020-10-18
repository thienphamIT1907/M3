import { StudentService } from './../../../services/student.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit, OnDestroy {

  editStudentForm: FormGroup;

  private subscription: Subscription;
  private studentEdit: Student;
  private idHook: number;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.subscription = this.actRoute.params.subscribe(param => {
      const id = (+param.id);
      this.subscription = this.studentService.getStudentById(id).subscribe({
        next: data => {
          this.studentEdit = data;
          this.idHook = this.studentEdit.id;
          this.editStudentForm.patchValue({
            id: this.studentEdit.id,
            ten_sinh_vien: this.studentEdit.ten_sinh_vien,
            ten_nhom: this.studentEdit.ten_nhom,
            ten_de_tai: this.studentEdit.ten_de_tai,
            giao_vien_huong_dan: this.studentEdit.giao_vien_huong_dan,
            email: this.studentEdit.email,
            so_dien_thoai: this.studentEdit.so_dien_thoai
          });
          console.log(this.editStudentForm.value);
        },
        error: err => console.log(err)
      });
    });

    this.editStudentForm = this.fb.group({
      id: '',
      ten_sinh_vien: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      ten_nhom: ['', [Validators.required]],
      ten_de_tai: ['', [Validators.required]],
      giao_vien_huong_dan: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z]+.com$')]],
      so_dien_thoai: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}')]],
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSaveEditStudent(): void {
    this.studentEdit = Object.assign({}, this.editStudentForm.value);
    this.studentEdit.id = this.idHook;
    this.subscription = this.studentService.patchStudent(this.studentEdit).subscribe({
      next: () => this.router.navigateByUrl('/student-list'),
      error: err => console.log(err),
    });
  }

  valid(field: string, errorCode: string): boolean {
    return this.editStudentForm.get(field).hasError(errorCode) && this.editStudentForm.touched;
  }
}
