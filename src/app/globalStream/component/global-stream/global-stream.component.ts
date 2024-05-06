import { Component, OnInit } from '@angular/core';
import { StreamComponent } from 'src/app/shared/components/stream/stream.component';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ErrorMessage } from 'src/app/shared/components/messages/errormessages.component';
import { PopulartagsComponent } from 'src/app/shared/components/populartags/populartags.component';
import { StreamtogglerComponent } from 'src/app/shared/components/streamtoggler/streamtoggler.component';

@Component({
    selector: 'https://api.realworld.io/api',
    standalone: true,
    templateUrl: './global-stream.component.html',
    styleUrl: './global-stream.component.css',
    imports: [StreamComponent, BannerComponent,StreamtogglerComponent,ErrorMessage,PopulartagsComponent]
})
export class GlobalStreamComponent implements OnInit {
apiUrl = '/articles'
ngOnInit(): void {
    console.log(this.apiUrl);
    
}
}
