import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  public serverAddress : string = "";

  constructor(private httpService: HttpClient) { }

  
  public callGetService(serviceName : string){
    return this.httpService.get(this.serverAddress + serviceName).pipe(
      map(resp =>{
        if( !('type' in resp)){
          resp['type'] = 'response';
        }
        return resp;
      })
    );
  }

}
