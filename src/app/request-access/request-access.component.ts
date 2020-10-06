import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSignUp(){
    this.router.navigate(['/signUp']);
  }

}
