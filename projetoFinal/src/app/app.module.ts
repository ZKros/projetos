import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParceiroModule } from './parceiro';
import { SiteParceirosComponent } from './parceiro';
import { FundoComponent } from './parceiro';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SiteParceirosComponent, FundoComponent],
  imports: [BrowserModule, AppRoutingModule, ParceiroModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
