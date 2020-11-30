import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dati } from 'src/app/model/dati';
import { Province } from 'src/app/model/province';
import { Regioni } from 'src/app/model/regioni';
import { DatiService } from 'src/app/shared/dati.service';

@Component({
  selector: 'app-reg-detail',
  templateUrl: './reg-detail.component.html',
  styleUrls: ['./reg-detail.component.css']
})
export class RegDetailComponent implements OnInit {
id: string;
reg: Regioni[];

  constructor(private datiService: DatiService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getDetailReg();
  }

  getDetailReg(){
    this.id= this.route.snapshot.paramMap.get('id');
    this.datiService.dettagliReg(this.id).subscribe(
      res => this.reg= res.filter(t => t.denominazione_regione === this.id)
      );

  }

}
