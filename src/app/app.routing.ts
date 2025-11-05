import { HomeComponent } from "../components/home.component/home.component";
import { MusicaComponent } from "../components/musica.component/musica.component";
import { CineComponent } from "../components/cine.component/cine.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "../components/notfound.component/notfound.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'musica', component: MusicaComponent },
    { path: 'cine', component: CineComponent },
    { path: '**', component: NotfoundComponent }
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);