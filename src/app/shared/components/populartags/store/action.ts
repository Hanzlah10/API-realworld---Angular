import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PopularTagType } from '../types/popularTag.type';

export const popularTagsActions = createActionGroup({
  source: 'popularTags',
  events: {
    'Get Popular Tags': emptyProps(),

    'Get Popular Tags success': props<{ popularTags:PopularTagType[] }>(),
    'Get Popular Tags failure': emptyProps(),
  },
});
