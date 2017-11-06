import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../user.component.scss']
})
export class RegisterComponent implements OnInit {
  results: string[];

  ngOnInit(): void {
  }
}
