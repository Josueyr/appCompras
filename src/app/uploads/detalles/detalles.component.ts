import { Component, OnInit, Input } from '@angular/core';
import { Archivo } from './../file.modal';
import { LoadfileService } from '../../servicios/loadfile.service';
import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database-types';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() upload:Archivo;

  name: String;
  url: String;
  data: DataSnapshot

  constructor(private loadfileService: LoadfileService) { }

  ngOnInit() {
    this.name = this.upload.payload.val().name;
    this.url = this.upload.payload.val().url;
  }

  deleteUpload(upload){
    this.loadfileService.deleteUpload(this.upload);
  }

}
