import { Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Album} from '../../Album';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

    id:string;
    album:Album[];

     constructor(private _spotifyService: SpotifyService,
        private _route: ActivatedRoute){

     }

     ngOnInit(){

        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                        // console.log(album + " Id:" + id);
                    })
            })
     }
}
