import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.component.scss']
})
export class LoginComponent implements OnInit {
  results: string[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/supervise']);
  }
}
