import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: 'globalstream',
    loadChildren: () => import('src/app/globalStream/globalStream.routes').then((m) => m.globalRoutes),
  },
  {
    path: 'stream',
    loadChildren: () => import('src/app/yourStream/component/yourStream.routes').then((m) => m.yourRoutes),
  },
  {
    path: 'tags/:slug',
    loadChildren: () => import('src/app/tagStream/components/tagStream/tagStream.routes').then((m) => m.tagStreamRoutes),
  },
  {
    path: 'articles/new',
    loadChildren: () => import('src/app/createArticle/components/create-article/createArticle.routes').then((m) => m.routes),
  },
  {
    path: 'articles/:slug',
    loadChildren: () => import('src/app/article/article.routes').then((m) => m.articleRoutes),
  },
  {
    path: 'articles/:slug/edit',
    loadChildren: () => import('src/app/editArticle/components/editArticles/editArticles.routes').then((m) => m.routes),
  },
];
