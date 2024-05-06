import { Route } from '@angular/router';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleService } from '../../services/createArticle.service';
import { createArticleEffects } from '../../store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  createArticleFeatureKey,
  createArticleReducer,
} from '../../store/reducer';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      CreateArticleService,
      provideEffects(createArticleEffects),
      provideState(createArticleFeatureKey, createArticleReducer),
    ],
  },
];
