export interface ApiResponse<T> {
  data: T;
}

export interface ListResponse<T> {
  data: T[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  role: string;
}

export interface User {
  id: number;
  username: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface ContentPreview {
  id: number;
  title: string;
  short_title?: string;
  status: 'draft' | 'active' | 'archived';
  published: boolean;
  created_at: string;
  updated_at: string;
  created_by: Pick<User, 'id' | 'username'>;
  publish_at: string;
  unpublish_at: string;
  preview_url?: string;
}

export interface StoryPreview extends ContentPreview {
  slides_count: number;
  tag?: Tag;
}

export interface Story extends Omit<StoryPreview, 'slides_count'> {
  title_position?: 'top' | 'middle' | 'bottom';
  title_class?: string;
  subTitle?: string;

  cta_text?: string;
  cta_url?: string;
  cta_class?: string;
  show_cta_on_cover?: boolean;

  action: 'absent' | 'link' | 'story' | 'deeplink';
  previewUrl?: string;

  effect_id?: number;
  filter_id?: number;

  slides: Slide[];
}

export interface Slide {
  id: number;
  story_id: number;
  sort: number;

  text?: string;
  textPosition?: 'top' | 'middle' | 'bottom';
  textClass?: string;

  isCtaVisible: boolean;
  isCallTaskVisible: boolean;

  useVideo: boolean;

  image_url?: string;
  video_url?: string;
}

export interface CreateStoryData extends Omit<Story,
  'id' | 'created_at' | 'updated_at' | 'created_by' | 'slides_count' | 'slides'
> {
  slides?: CreateSlideData[];
}

export interface UpdateStoryData extends Partial<CreateStoryData> {}

export interface CreateSlideData extends Omit<Slide, 'id' | 'story_id'> {}

export interface UpdateSlideData extends Partial<CreateSlideData> {}

export interface OnboardingStoryPreview extends ContentPreview {
  slides_count: number;
  tag?: Tag;
}

export interface BannerPreview extends ContentPreview {
  actionText?: string;
  url?: string;
  color?: string;
  preview_url: string;
}

export interface RunningLinePreview extends ContentPreview {
  text: string;
  show_btn: boolean;
}

export interface StockPreview extends ContentPreview {
  description: string;
  icon?: string;
}

export interface BottomSheetPreview extends ContentPreview {
  description: string;
  button_text?: string;
}

export interface OnboardingStory extends Omit<OnboardingStoryPreview, 'slides_count'> {
  title_position?: 'top' | 'middle' | 'bottom';
  title_class?: string;
  subTitle?: string;
  cta_text?: string;
  cta_url?: string;
  cta_class?: string;
  show_cta_on_cover?: boolean;
  action: 'absent' | 'link' | 'story' | 'deeplink';
  previewUrl?: string;
  effect_id?: number;
  filter_id?: number;
  slides: Slide[];
}

export interface Banner extends BannerPreview {
  text: string;
  color: string;
  image_path?: string;
  show_promotion_end: boolean;
  canClose: boolean;
  expire: number;
  displayTime: number;
  simplified: boolean;
  simplifiedImage?: string;
  tag_id?: number;
  filter?: Filter;
}

export interface RunningLine extends RunningLinePreview {
  filter?: Filter;
  button?: {
    text: string;
    action: string;
    url: string;
  };
}

export interface Stock extends StockPreview {
  bottom_sheet_description?: string;
  hide_text_on_card: boolean;
  button_text?: string;
  button_url?: string;
  button_target_action?: string;
  backgroundImage?: string;
  bottomSheetImage?: string;
  filter?: Filter;
}

export interface BottomSheet extends BottomSheetPreview {
  button_target_action?: string;
  button_url?: string;
  image?: string;
  filter?: Filter;
}

export interface Filter {
  id: number;
  has_isbox: boolean;
  has_no_isbox: boolean;
  has_beward: boolean;
  // ...
}
