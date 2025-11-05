import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProvider } from './app.routing';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from '../components/home.component/home.component';
import { MusicaComponent } from '../components/musica.component/musica.component';
import { CineComponent } from '../components/cine.component/cine.component';
import { MenuComponent } from '../components/menu.component/menu.component';
import { NotfoundComponent } from '../components/notfound.component/notfound.component';
import { NumeroDobleComponent } from '../components/numero.doble.component/numero.doble.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumeroDobleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    appRoutingProvider
  
  ],
  bootstrap: [App]
})
export class AppModule { }
