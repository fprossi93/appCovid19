import { Component, OnInit } from '@angular/core';
import { Dati } from 'src/app/model/dati';
import { Province } from 'src/app/model/province';
import { Regioni } from 'src/app/model/regioni';
import { DatiService } from 'src/app/shared/dati.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dati: Dati[];
  regione: Regioni[];
  province: Province[];
  
    constructor(private datiService: DatiService) { }
  
    // TRAMITE SUBSCRIBE SONO IN ASCOLTO DEI DATI NAZIONALI TRAMITE SERVICE
    getDati(){
      this.datiService.getDati()
      .subscribe( res=> {
        this.dati= res;
        console.log(this.dati);
      })
    }

        // TRAMITE SUBSCRIBE SONO IN ASCOLTO DEI DATI REGIONALI TRAMITE SERVICE
        getDatiReg(){
          this.datiService.getDatiReg()
          .subscribe(res=> {
            this.regione= res;
            console.log(this.regione);
          })
        }

    // TRAMITE SUBSCRIBE SONO IN ASCOLTO DEI DATI PROVINCIALI TRAMITE SERVICE
    getDatiProv(){
      this.datiService.getDatiProv()
      .subscribe( res=> {
        this.province= res;
        console.log(this.province);
      })
    }
  
    ngOnInit(): void {
      this.getDati();
      this.getDatiReg();
      this.getDatiProv();
    }
  }
