import { Component } from '@angular/core';
import { HttpService, PageHeaderComponent, RequestConfig } from '../../../../../shared/src/public-api';
import { ContainerComponent } from '../../../../../ui/src/public-api';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
users: any;
constructor(private httpService: HttpService) {

}

ngOnInit() {
// this.get();
//this.pospostdtt();
this.login();
}


get() {
this.httpService.getAll(RequestConfig.Equator.USERS.GET_USERS).subscribe(res => {
this.users = res;
console.log(this.users)
})
}

pospostdtt() {
  debugger
  var obj = {
    subscription_id: 1,
    first_name: 'rishu',
    last_name: 'bhargav',
    email: 'rs@gmail.com',
    password: 'asd@123A',
    gender: 'male',
    phone: '5461545154154'
  }
  this.httpService.registerUser(obj).subscribe(res => {
    console.log(res)
  })
}

login() {
  var obj = {
   email: "rs@gmail.com",
   password: "asd@123A"
  }
  this.httpService.login(obj).subscribe(res => {
    console.log(res,"res")
  })
}

}
