import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistComponent } from './components/artist/artist.component';

const appRoutes: Routes = [

    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'album/:id',
        component: AlbumsComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);