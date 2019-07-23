
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    baseurl = environment.baseUrl;
  
    constructor(private http: HttpClient) { }
    
    public postRequest(url :any, data: any ):any{
      return this.http.post(this.baseurl + url,data);
    }
    public putRequest(url :any, data: any ):any{
      return this.http.put(this.baseurl + url,data);
    }
    public deleteRequest(url :any):any{
      return this.http.delete(this.baseurl + url);
    }
    public getRequest(url :any):any{
  return this.http.get(this.baseurl + url);
    }
    public forgetRequest(url : any,data:any) : any{
      return this.http.get(this.baseurl + url);
    }

    public uploadImage(url :any,token:any,data:any):any{
      return this.http.put(this.baseurl+ url,token,data);
    }

    public uploadProfileImage(url,file: File):any
    {
      let formdata: FormData = new FormData();
      formdata.append('File',file);
      return this.http.put(this.baseurl+url,formdata,{
            headers:new HttpHeaders().set("token",localStorage.getItem("token")), 
                        observe:'response'});
    }

  
    
}