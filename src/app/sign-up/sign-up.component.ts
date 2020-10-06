import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loadershow: boolean = false;
  signUpForm: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ["Dinesh Kasale", [Validators.required]],
      email: ["dineshkasle1@gmail.com", [Validators.required]],
      phone: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]]
    });
  }

  get f() { return this.signUpForm.controls; }

  signUpUser() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.loadershow = true;
    var params = {
      name: this.f.name.value,
      email: this.f.email.value,
      notes: this.f.phone.value
    }
    setTimeout(() => {
      this.router.navigate(['/thankYou']);

      // post request with API
      // this.apiService.signUp(params).subscribe(
      //   data => {
      //     this.loadershow = true;
      //     this.router.navigate(['/thankYou']);
      //     this.toastr.info("Sign Up successfully.", 'Success!!!',{
      //       disableTimeOut: true,
      //       tapToDismiss: true,
      //       closeButton: true
      //     });
      //   },
      //   (error) => {
      //     this.loadershow = true;
      //     this.toastr.error("Something went wrong. Please try again", 'Error!!!',{
      //       disableTimeOut: true,
      //       tapToDismiss: true,
      //       closeButton: true
      //     });
      //   }
      // );
    }, 3000)
  }

}
