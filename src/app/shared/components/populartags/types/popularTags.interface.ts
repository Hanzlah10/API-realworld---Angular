import { PopularTagType } from './popularTag.type';

export interface popularTagsInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
