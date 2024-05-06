import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { streamActions } from './store/action';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectStreamData,
} from './store/reducer';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { ErrorMessage } from '../messages/errormessages.component';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import queryString from 'query-string';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'mc-stream',
  standalone: true,
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css',
  imports: [
    CommonModule,
    RouterLink,
    ErrorMessage,
    LoadingComponent,
    PaginationComponent,
    TagListComponent
  ],
})
export class StreamComponent implements OnInit,OnChanges{
  @Input() apiUrl: string = '';
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    stream: this.store.select(selectStreamData),
  });
  limit: number = 20;
  baseUrl = this.router.url.split('?')[0];
  currentPage: number = 0;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  fetchStream(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(streamActions.getStream({ url: apiWithParams }));
  }
  ngOnInit(): void {
    this.store.dispatch(streamActions.getStream({ url: this.apiUrl }));
    console.log(this.data$);

    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchStream();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes['apiUrl'].firstChange && changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue
    if(isApiUrlChanged)
    {
      this.fetchStream()
    }
  }
}
