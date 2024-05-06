import { Component, OnInit } from '@angular/core';
import { StreamComponent } from 'src/app/shared/components/stream/stream.component';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ErrorMessage } from 'src/app/shared/components/messages/errormessages.component';
import { PopulartagsComponent } from 'src/app/shared/components/populartags/populartags.component';
import { StreamtogglerComponent } from 'src/app/shared/components/streamtoggler/streamtoggler.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'mc-tag-stream',
    standalone: true,
    templateUrl: './tagStream.component.html',
    imports: [StreamComponent, BannerComponent,StreamtogglerComponent,ErrorMessage,PopulartagsComponent]
})
export class TagStreamComponent implements OnInit {
apiUrl:string = ''
tagName:string=''
constructor(private route:ActivatedRoute){}
ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
        this.tagName = params['slug']
        this.apiUrl =`/articles?tag=${this.tagName}`
    })
    
}
}
