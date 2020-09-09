import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EmpresaModule } from './empresa/empresa.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    EmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
