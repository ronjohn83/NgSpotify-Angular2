import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

    searchStr: string;
    artists: any;
    id = '3an1itS304ZJ7TKTGkm3Mn';

    constructor(private _spotifyService: SpotifyService){
    
    }

    searchArtist(){
        
        this._spotifyService.searchArtist(this.searchStr)
            .subscribe( res => {
               this.artists = res.artists.items;
            //    this.id = res.artists.items[0].id;
            //    console.log(res.artists);
     
            })
    }
}
