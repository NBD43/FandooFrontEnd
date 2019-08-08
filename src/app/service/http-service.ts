
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

    /**
     * @description    NOTES OPERATIONS
     */
    public createNote(url :any,data:any,token:any):any{
      return this.http.post(this.baseurl+ url,data,{
        headers:{
          'token':localStorage.getItem('token')
        }
      });
    }

    public getNotes(url){
      return this.http.get(url,{
        headers:{
          "token":localStorage.getItem('token')
        }
      });
    }

    public getNotesArchive(url){
      return this.http.get(url,{
        headers:{
          "token":localStorage.getItem('token')
        }
      });
    }

    public noteColorChanger(url,data){
      console.log(url,data);
      
      return this.http.put(this.baseurl+url,data,{
        headers:{
          "token":localStorage.getItem('token')
        }
      });
    }

    public editnote(url,data){
      return this.http.put(this.baseurl+url,data,{
        headers:{
          'token':localStorage.getItem('token')
        }
      });

    }

    public archiveUnarchivenote(url,note){
      console.log(url);
      
      return this.http.put(this.baseurl+url,note,{
       headers:{
        'token':localStorage.getItem('token')
      }
      });
    }

    public deleteNote(url){
      console.log(url);
      
      return this.http.delete(this.baseurl+url,{
       headers:{
        'token':localStorage.getItem('token')
      }
      });
    }

    public pinUnpin(url,note){
      console.log(url);
      
      return this.http.put(this.baseurl+url,note,{
       headers:{
        'token':localStorage.getItem('token')
        
      }
      });
    }

    //###label function services

    public createLabel(url,data){
      return this.http.post(this.baseurl+url,data,{
        headers:{
         'token':localStorage.getItem('token')
         
       }
       });

    }

    public deleteLabel(url){
      return this.http.delete(this.baseurl+url,{
        headers:{
         'token':localStorage.getItem('token')
         
       }
       });

   

    }

    public updateLabel(url,data){
      return this.http.put(this.baseurl+ url,data,{
        headers:{
          'token':localStorage.getItem('token')
        }
      });

    }

    public addLabelToNote(url,data){
      return this.http.put(this.baseurl+ url,data,{
        headers:{
          'token':localStorage.getItem('token')
        }
      });

    }

    public removeLabelToNote(url,data){
      return this.http.put(this.baseurl+ url,data,{
        headers:{
          'token':localStorage.getItem('token')
        }
      });

    }
  
    
}