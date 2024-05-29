import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  users: any[];
  constructor(private backendService: BackendService){}

  ngOnInit() {
    this.backendService.getItems().subscribe(users => {
      this.users = users;
      console.log(this.users)
    });
  }
}
