import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service'
import { from } from 'rxjs';
import { HttpService } from '../../service/http-service'
import { MatDialog } from '@angular/material';
import { NoteeditComponent } from '../noteedit/noteedit.component';
@Component({
  selector: 'app-searchnote',
  templateUrl: './searchnote.component.html',
  styleUrls: ['./searchnote.component.scss']
})
export class SearchnoteComponent implements OnInit {
  searchValue;
  allNotes = [];
  searchedNoteCards = [];
  path: String = "http://localhost:8080/user/note/notes";
  constructor(private dataService: DataserviceService, private httpService: HttpService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllNote();
    this.searchedNoteCards = [];
    this.dataService.searchNoteWord.subscribe(data => {
      console.log(" data listobn ", data['data']);

      this.searchValue = data['data']
      console.log(" search value");

      this.searchedNoteCards = this.findNoteCard(this.allNotes, this.searchValue);
      console.log(" searcged notes ", this.searchedNoteCards);

    })
  }


  findNoteCard = function (allNote, searchChar) {
    console.log(" all kotes in finde card ", allNote);
    console.log(" character in find card ", searchChar);


    var card = allNote.filter(item => {
      return item.title.toLowerCase().startsWith(searchChar.toLowerCase());

    })
    return card;
  }

  getAllNote() {
  this.allNotes = [];
  
    this.httpService.getNotes(this.path).subscribe((res: any) => {
      console.log('get all notes response', res);
      this.allNotes = res
      console.log(" this.notes", this.allNotes);


    });

    // this.noteservice.getAllnote().si


  }


  ////

  getcolor :string;
  receiveColor(color){
    this.getcolor = color;
    this.getAllNote()

  }
  changedColor(color){
    this.getcolor = color;
    this.getAllNote();
  }

  changedArchive(){
    this.getAllNote();
  }

  onPin(note){
    console.log(note)
    var url="note/pin?noteId="+note.noteId
    this.httpService.pinUnpin(url,note).subscribe((response:any)=>{
      this.getAllNote();
      
      console.log(response);
   });
  }

  

  onRefresh(){
    window.location.reload();
  }


  onEdit(data){
    console.log(data);
    alert(data);
    
    const dialogRef = this.dialog.open(NoteeditComponent,
      {
        
        panelClass:'update-dialog',
         width: '50%',
         height:'fit-content',
         
        data:{
          noteId:data.noteId,
          color:data.colour,
          title:data.title,
          description:data.description
        }
      });
  
      dialogRef.afterClosed().subscribe(
        (data2:any) =>
        {
          if(data2!=null)
          { 
            console.log(data2)
            this.httpService.editnote('note/update?noteId='+data.noteId,data2).subscribe(
            value =>
            {
              console.log(value);
              this.onRefresh();
            
            }
          );
          }
    })
    
  }

}
