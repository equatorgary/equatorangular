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
 //this.get();
this.pospostdtt();
//this.login();
}

//test call api
get() {
this.httpService.getAll(RequestConfig.Equator.USERS.GET_USERS).subscribe(res => {
this.users = res;
console.log(this.users)
})
}


//test call api
pospostdtt() {
  debugger
  var obj = {
    subscription_id: 0,
    first_name: 'rishu',
    last_name: 'bhargav',
    email: 'guru@gmail.com',
    password: 'asd@123A',
    gender: 'male',
    phone: '5461545154154'
  }
  this.httpService.postData(RequestConfig.Equator.USERS.CREATE_USERS,obj).subscribe(res => {
    console.log(res)
  })
}

//test call api
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
