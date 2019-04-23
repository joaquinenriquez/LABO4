import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Primer paso importamos el tipo Routes y el modulo del sistema de Routiing RouterModule
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    // Importamamos RouterModule
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


