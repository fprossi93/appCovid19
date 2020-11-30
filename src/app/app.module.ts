import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { OrdinePipe } from './pipe/ordine.pipe';
import { SpinnerComponent } from './features/spinner/spinner.component';
import { RegDetailComponent } from './features/reg-detail/reg-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    OrdinePipe,
    SpinnerComponent,
    RegDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
