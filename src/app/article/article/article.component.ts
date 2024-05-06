import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { articleActions } from '../store/action';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, filter, map } from 'rxjs';
import {
  selectArticleData,
  selectError,
  selectIsLoading,
} from '../store/reducer';
import { selectCurrentUser } from 'src/app/auth/store/reducer';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { ErrorMessage } from 'src/app/shared/components/messages/errormessages.component';

@Component({
  selector: 'mc-article',
  standalone: true,
  imports: [CommonModule,RouterLink,LoadingComponent,TagListComponent,ErrorMessage],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({ article, currentUser }) => {
      if (!article || !currentUser) {
        return false;
      }
      return article.author.username ===currentUser.username
    })
  );
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    isAuthor:this.isAuthor$,
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
  });
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({ slug: this.slug }));
  }
  deleteArticle():void{
    this.store.dispatch(articleActions.deleteArticle({slug:this.slug}))
  }
}
