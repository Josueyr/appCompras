import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import { Archivo } from './../file.modal';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  uploads: Observable<any[]>;

  constructor(private loadfileService: LoadfileService) { }

  ngOnInit() {
    this.uploads = this.loadfileService.getUploads();
  }

}
