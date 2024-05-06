import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PopularTagType } from '../types/popularTag.type';
import { GetPopularTagsResponseInterface } from '../types/GetpopularTagsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  constructor(private http:HttpClient) { }
  getPopularTags():Observable<PopularTagType[]>
  {
    const fullUrl = 'https://api.realworld.io/api/tags';
return this.http.get<GetPopularTagsResponseInterface>(fullUrl).pipe(map((response) => response .tags) )
  }
}
