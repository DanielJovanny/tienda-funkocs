import {Component} from '@angular/core';
import { UserHttpServiceService } from 'src/app/user-http-service.service';


@Component({
    selector:'app-banner',
    templateUrl:'./banner.component.html',
    styleUrls: ['./banner.component.scss'],

})
export class BannerComponent{

constructor(private service:UserHttpServiceService){}

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

}

}

