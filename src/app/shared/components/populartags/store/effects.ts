import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularService } from '../services/popularservice.service';
import { popularTagsActions } from './action';
import { PopularTagType } from '../types/popularTag.type';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class PopularTagsEffects {

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() =>
        this.popularService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            console.log(popularTags);
            
            return popularTagsActions.getPopularTagsSuccess({ popularTags });
          }),
          catchError(() =>
            of(popularTagsActions.getPopularTagsFailure())
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private popularService: PopularService
  ) {}
}
