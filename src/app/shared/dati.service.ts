import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Dati } from '../model/dati';
import { Province } from '../model/province';
import { Regioni } from '../model/regioni';

const API = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json';

const APIREG= 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

const APIPROV='https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json';

const APIREGall = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json';


@Injectable({
  providedIn: 'root'
})
export class DatiService {
dati: Dati[];

  constructor(private http: HttpClient) { }
// LETTURA DEI DATI NAZIONALI 
  getDati(): Observable<Dati[]>{
    return this.http.get<Dati[]>(API);
  }

  // LETTURA DEI DATI REGIONALI 
  getDatiReg(): Observable<Regioni[]>{
    return this.http.get<Regioni[]>(APIREG);
  }

  // LETTURA DEI DATI PROVINCIALI 
  getDatiProv(): Observable<Province[]>{
    return this.http.get<Province[]>(APIPROV);
  }

  //DETTAGLI DATI REGIONALI
  dettagliReg(id): Observable<Regioni[]>{
    return this.http.get<Regioni[]>(`${APIREGall}?id=${id}` )
  }
    
  
}
