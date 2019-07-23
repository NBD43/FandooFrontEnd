import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  imageChangedEvent: any = '';
    croppedImage: any = '';

    constructor(public dialogRef:MatDialogRef<DemoComponent>) { }

    ngOnInit() {
    
     
    }
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;

        console.log("change image",this.croppedImage)
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event;
        console.log("crop image",this.croppedImage)
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    setProfile(){
        if(this.croppedImage!=null){
            this.dialogRef.close(this.croppedImage);
        }
    }



}
