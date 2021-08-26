import {Component} from '@angular/core';
import { UserHttpServiceService } from 'src/app/user-http-service.service';
import { OnInit } from '@angular/core';
@Component({
    selector:'app-banner',
    templateUrl:'./banner.component.html',
    styleUrls: ['./banner.component.scss'],

})
export class BannerComponent implements OnInit{

constructor(private service:UserHttpServiceService){}
users:string[]=[];
ngOnInit() {
}


public async httpRequest(){
    const query : any = await this.service.login({user:'Daniel', password:'123'});
    console.log(query);
    const token =query.httpRequest.token;
    localStorage.setItem('token',token);
    console.log(token);

}






public async httpRequestToken(){
    const query : any = await this.service.getUsers({});
    console.log(query);
    for (let i = 0; i < query.httpRequest.data.data.length; i++) {
       
        this.users.push(query.httpRequest.data.data[i].name);
       
    }
    
    console.log(this.users);

}




}

