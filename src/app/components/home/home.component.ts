import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  constructor(private router: Router, private apiservice: ApiService) {}

  ngOnInit(): void {
    console.log(this.loginForm);
  }
  onClick() {
    if (!this.loginForm.valid) return;
    console.log(this.loginForm.controls['mobileNumber'].value)
    const mobileNumber = this.loginForm.controls['mobileNumber'].value;
    this.apiservice.postApi("login", parseInt(mobileNumber))
    .subscribe(
      (res) => {
        console.log(res);
        if (res.userRoleDto.role === 'ADMIN') {
          this.router.navigate(['/portal']);
        } else if (res.userRoleDto.role === 'USER') {
          this.router.navigate(['/category']);
        }
      }
    )
  }

  getCompanyDescription() {
    return "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.";
  }
}
