import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  users:any
  constructor(private userData:UsersDataService){
    this.userData.users().subscribe((data:any)=>{
      this.users=data.data;
    });
  }
}
