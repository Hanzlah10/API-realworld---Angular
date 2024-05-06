import { Route } from "@angular/router";
import { ArticleComponent } from "./article/article.component";
import { provideEffects } from "@ngrx/effects";
import  {ArticleEffects} from './store/effects'
import { provideState } from "@ngrx/store";
import { articleFeatureKey, articleReducer } from "./store/reducer";
import { ArticleService } from "./service/article.service";
export const articleRoutes:Route[]=[
    {
        path:'',
        component:ArticleComponent,
        providers:[
            provideEffects(ArticleEffects),
            provideState(articleFeatureKey,articleReducer),
            ArticleService

        ],
    }
]