import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {  selectError, selectIsLoading, selectPopularTagData, } from './store/reducer';
import { popularTagsActions } from './store/action';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorMessage } from '../messages/errormessages.component';

@Component({
  selector: 'mc-popular-tags',
  standalone: true,
  imports: [CommonModule,RouterLink,LoadingComponent,ErrorMessage],
  templateUrl: './populartags.component.html',
  styleUrl: './populartags.component.css',
})
export class PopulartagsComponent implements OnInit {
  constructor(private store: Store) {}
  data$ = combineLatest({ 
    popularTags: this.store.select(selectPopularTagData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError)
   });
  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags())
    this.data$.subscribe(res => console.log(`popular Tags :${res.popularTags}`)
    )
  }
} 
