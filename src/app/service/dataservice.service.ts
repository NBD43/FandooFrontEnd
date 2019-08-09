import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource=new BehaviorSubject('default message');
  currentMessage=this.messageSource.asObservable();
  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message)
}


private searchNote=new BehaviorSubject([]);
  searchNoteWord=this.searchNote.asObservable();


  changeNoteSearch(message:any){
    this.searchNote.next(message)
}
}
