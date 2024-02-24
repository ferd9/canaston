import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {

  private fb = inject(FormBuilder);
  public myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  login(){
    console.log("logiiin.....");
  }
 }
