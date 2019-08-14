import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {
  
   date1 = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());

  labelArray : any[] = [];
  colorArray : any[] = [
    "#f06292","#ce93d8","#81D4FA","#FFAB91","#a5d6a7","#bdbdbd","#FFE57F","#00BCD4"
  ]


  date : any;
  month:any;
  year :any;

months = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]
  myFilter = (d: Date): boolean => {
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    // Prevent Saturday and Sunday from being selected.
    return date >= this.date && month >= this.month && year >= this.year;
  }







  @Input() noteDetails:any;
  @Output() colorChanged : EventEmitter<any> = new EventEmitter();
  @Output() archiveChanged:EventEmitter<any> = new EventEmitter();
  constructor(private httpService:HttpService,private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.noteDetails);
    this.getAllLabels();

    //date property
    var d = new  Date();
    console.log(d.getMonth());
    this.date = d.getDate();
    this.month = d.getMonth();
    this.year = d.getFullYear();
    console.log( this.date , this.month , this.year);
    
  }

  onReminder(){
    alert("add the reminder to note");

  }

  onCollaborator(){
    //alert("collaborate notewith other user");
    //var data=this.noteDetails;
    const dialogRef = this.dialog.open(CollaboratorComponent,
      {
        width: '400px',
        height: 'fit-content',
        data: this.noteDetails
      });
  }

  deleteNote(note){

    var url="note/trash?noteId="+note.noteId
    this.httpService.archiveUnarchivenote(url,note).subscribe((response:any)=>{
      console.log(response);
      this.archiveChanged.emit();
    });

  }

  addImageToNote(){
    alert("set the note background image");
  }

  addArchive(note:any){
    //alert("add the note to trash");
  // console.log(note);
  
    var url="note/archive?noteId="+note.noteId
    this.httpService.archiveUnarchivenote(url,note).subscribe((response:any)=>{
      console.log(response);
      this.archiveChanged.emit();
    });


  }

  onColorChange(color){
    console.log(color);
  
    console.log(this.noteDetails);
    var data = {
      "color":color,
      "noteId":this.noteDetails.noteId
    }
    var url ="note/colour"
    this.httpService.noteColorChanger(url,data).subscribe((response:any)=>{
      console.log(response);
      this.colorChanged.emit(color);
      
    });
  }

  addLabel(note,label){
    console.log(note);
    console.log(label);

    var url="label/addlabeltonote?labelId="+label.labelId+"&noteId="+note.noteId;
    this.httpService.addLabelToNote(url,note).subscribe((res:any)=>{
      console.log(res);
      this.archiveChanged.emit();
    });
    
    
  }

  getAllLabels(){
    var path="http://localhost:8080/user/label/getlabel";
    this.labelArray=[]
  this.httpService.getNotes(path).subscribe((res:any)=>{
    console.log('get all label response',res);
    res.forEach((card:any)=>{
      this.labelArray.push(card);
    })
  });
  }

  today(noteDetails){
    console.log(noteDetails);
   // var url="note/reminder?noteId="+noteDetails;
    var d = new Date(); 
    // var localdate=d.toLocaleString().replace('/',':').replace('/',':').replace(',',' ')
    // console.log( d.toLocaleString().replace('/',':').replace('/',':').replace(',',' ') );
   // console.log(d.toLocaleDateString().replace('/',':').replace('/',':') + " "+"20:58:04");
    var dateTime=d.toLocaleDateString().replace('/','-').replace('/','-') + " "+"20:58:04";
    console.log(dateTime);
    var url="note/reminder?noteId="+noteDetails.noteId+"&reminderDate="+dateTime;
    this.httpService.addReminder(url,noteDetails).subscribe((response:any)=>{
      console.log(response);
    });

    }
    
 tommaro(noteDetails){

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
  //var d = new Date(1);
  var dateTime=tomorrow.toLocaleDateString().replace('/','-').replace('/','-') + " "+"08:00:04";
  console.log(dateTime);
   var url="note/reminder?noteId="+noteDetails.noteId+"&reminderDate="+dateTime;
   this.httpService.addReminder(url,noteDetails).subscribe((response:any)=>{
     console.log(response);
   });
    
  }

  nextWeek(noteDetails){
    var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+7);
  //var d = new Date(1);
  var dateTime=tomorrow.toLocaleDateString().replace('/','-').replace('/','-') + " "+"08:00:04";
  console.log(dateTime);
  var url="note/reminder?noteId="+noteDetails.noteId+"&reminderDate="+dateTime;
  this.httpService.addReminder(url,noteDetails).subscribe((response:any)=>{
    console.log(response);
  });

  }

  addReminder(noteDetails){
    console.log(noteDetails);
   // console.log(this.date1.value.toLocaleDateString().replace('/','-').replace('/','-'));

    var date=this.date1.value.toLocaleDateString().replace('/','-').replace('/','-') + " "+"08:00:04";

    console.log(date);

    var url="note/reminder?noteId="+noteDetails.noteId+"&reminderDate="+date;
  this.httpService.addReminder(url,noteDetails).subscribe((response:any)=>{
    console.log(response);
  });
    
    
     
    
  }
}
