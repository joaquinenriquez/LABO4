import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrillaComponent } from './components/grilla/grilla.component';

// Importamos HttpModule
import { HttpClientModule } from '@angular/common/http';
import { MiHTTPService } from './services/mi-http.service';
import { UsuarioService } from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MiHTTPService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
