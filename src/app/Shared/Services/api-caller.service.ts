import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  public serverAddress : string = "";
  public serviceName : string = "assets/data.json";

  constructor(private httpService: HttpClient) { }

  
  public callGetService(servicename : string){
    return this.httpService.get(this.serverAddress + this.serviceName).pipe(
      map(resp =>{
        if( !('type' in resp)){
          resp['type'] = 'response';
        }
      })
    );
  }

}
