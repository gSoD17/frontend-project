/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    
    constructor(private _user: UserService) { }
    
    favoritedMovies: any 

    ngOnInit() {
    }
    
    showFavorites() {
        this._user.displayFavoritedMovies()
        .subscribe( favorites => {
            this.favoritedMovies = favorites
            console.log(favorites)
        })
    }

}
