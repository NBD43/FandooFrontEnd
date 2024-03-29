import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpService } from 'src/app/service/http-service'
import { error } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DemoComponent } from '../demo/demo.component'
import { Note } from 'src/app/model/note';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { LabelComponent } from '../label/label.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  note: Note = new Note();
  labelArray: any[] = [];
  email: any;
  token: any;
  profile: string;
  label:string;
  fundooTitle = 'FundooNotes';
  events: string[] = [];
  matBoolean: boolean = false;
  opened: boolean;
  searchKey;
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  message: String;
  constructor(private router: Router, private snackBar: MatSnackBar, private httpService: HttpService, private dialog: MatDialog, private dataService: DataserviceService
  ) { }

  title = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);


  openDialog() {
    const dialogRef = this.dialog.open(DemoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.getAllLabels();
    this.dataService.currentMessage.subscribe(message => this.message = message)
    this.token = localStorage.getItem('token')
    this.email = localStorage.getItem('emailId')
    console.log(this.token)
    console.log(this.email)
    this.dataService.currentLabel.subscribe(label =>this.label=label)



  }

  labelNote(label){
    console.log("current label:"+label);
    this.dataService.currentlabelNote(label);
    this.router.navigate(['dashboard/labelNotes'])
    

  }


  search(event: any) {
    console.log(" search word ", event);

    this.searchKey = event.target.value
    console.log(" key ", this.searchKey);

    this.router.navigate(['dashboard/searchNote'])
    // this.dataService.changeMessage({ data: this.searchKey })
    this.dataService.changeNoteSearch({
      data: this.searchKey
    })
  }

  addNote() {
    if (this.title.value == null && this.description.value == null) {
      return false
    }
    else {
      this.note.title = this.title.value;
      this.note.description = this.description.value;
      var data = {
        "title": this.note.title,
        "description": this.note.description
      }
      var url = 'note/create';
      this.httpService.createNote(url, data, this.token).subscribe((response: any) => {

        console.log('add note response ', response);
        this.dataService.changeMessage('change');

      });
    }
  }


  selectProfile() {
    const dialogRef = this.dialog.open(DemoComponent,
      {
        width: '400px',
        height: '500px'
      });

    dialogRef.afterClosed().subscribe(
      (x: any) => {
        if (x != null) {
          console.log("file", x.file)
          this.httpService.uploadProfileImage('uploadprofile', x.file).subscribe(
            value => {
              console.log(value);
              this.dataService.changeMessage('rewq');
              // this.onRefresh();

            }
          );
        }
      })

  }


  onRefresh() {
    window.location.reload();
  }
  onlogout() {
    localStorage.clear();
    //localStorage.removeItem('token');
    //localStorage.removeItem('emailId');
    this.router.navigate(['/login']);
  }

  onNotes() {
    alert("Notes are here");
    this.router.navigate(['/dashboard'])

  }

  onReminder() {
    alert("Reminder Notes");

  }


  getAllLabels() {
    var path = "http://localhost:8080/user/label/getlabel";
    this.labelArray = []
    this.httpService.getNotes(path).subscribe((res: any) => {
      console.log('get all label response', res);
      res.forEach((card: any) => {
        this.labelArray.push(card);
      })
    });
  }

  onEditLabel() {
    const dialogRef = this.dialog.open(LabelComponent,
      {
        height: 'fit-content'
      });

  }

  onArchive() {
    alert("Archieve Notes are Here");
    this.router.navigate(['/dashboard/archive'])

  }

  onDelete() {
    alert("trash notes are here");

  }
  upload(event) {
    console.log("clicked event", event);


    this.httpService.uploadImage('uploadprofile', this.token, event).subscribe(

      (response: any) => {
        console.warn("thr response"); -
          console.log(response);

        if (!error && response.statusCode == 200) {

          localStorage.setItem('token', response.token);
          this.snackBar.open(

            "profile updated  Successfully",
            "undo",
            { duration: 2500 }

          )
          this.router.navigate(['/dashboard'])
        } else {
          console.log(response);
          this.snackBar.open(
            " Failed to upload profile",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )


  }

}
