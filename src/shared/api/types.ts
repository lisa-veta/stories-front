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

export interface ContentPreview {
  id: number;
  title: string;
  short_title?: string;
  status: 'draft' | 'active' | 'archived';
  published: boolean;
  preview_url?: string;
  created_at: string;
  updated_at: string;
  created_by: Pick<User, 'id' | 'username'>;
  publish_at?: string;
  unpublish_at?: string;
}

export interface StoryPreview extends ContentPreview {
  slides_count: number;
  tag?: {
    id: number;
    name: string;
  };
}

export interface BannerPreview extends ContentPreview {
  button_text?: string;
  button_url?: string;
  color?: string;
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

export interface Story extends StoryPreview {
  cta_text?: string;
  cta_url?: string;
  cta_class?: string;
  show_cta_on_cover: boolean;
  title_position?: string;
  title_class?: string;
  filter_id?: number;
  tag_id?: number;
  slides: Slide[];
  filter?: Filter;
}

export interface Banner extends BannerPreview {
  text: string;
  color: string;
  image_path?: string;
  published: boolean;
  publish_at?: string;
  unpublish_at?: string;
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

export interface Slide {
  id: number;
  story_id: number;
  sort: number;
  html_content: string;
  css_styles?: string;
  is_cta_visible: boolean;
  is_calltask_visible: boolean;
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Filter {
  id: number;
  has_isbox: boolean;
  has_no_isbox: boolean;
  has_beward: boolean;
  // ...
}
