import type { FC, SVGProps } from 'react';
import {
  BannerIcon, BasketIcon,
  BottomSheetIcon, DocIcon,
  OnboardingStoryIcon,
  RunningLineIcon, SettingsIcon,
  StockIcon,
  StoryIcon, UsersIcon,
} from '@shared/ui/Icons';

export interface SidebarItem {
  value: string;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  path: string;
}

export const SIDEBAR_CONTENT_ITEMS: SidebarItem[] = [
  {
    value: 'banners',
    label: 'Баннеры',
    icon: BannerIcon,
    path: '/account',
  },
  {
    value: 'onboarding-stories',
    label: 'Сторис-онбординги',
    icon: OnboardingStoryIcon,
    path: '/account',
  },
  {
    value: 'running-lines',
    label: 'Бегущие строки',
    icon: RunningLineIcon,
    path: '/account',
  },
  {
    value: 'stocks',
    label: 'Акции',
    icon: StockIcon,
    path: '/account',
  },
  {
    value: 'stories',
    label: 'Истории',
    icon: StoryIcon,
    path: '/account',
  },
  {
    value: 'bottom-sheet',
    label: 'Bottom Sheet',
    icon: BottomSheetIcon,
    path: '/account',
  },
] as const;

export const SIDEBAR_CONTROL_ITEMS: SidebarItem[] = [
  {
    value: 'documentation',
    label: 'Документация',
    icon: DocIcon,
    path: '/account',
  },
  {
    value: 'basket',
    label: 'Корзина',
    icon: BasketIcon,
    path: '/account',
  },
] as const;

export const SIDEBAR_SETTINGS_ITEMS: SidebarItem[] = [
  {
    value: 'users',
    label: 'Пользователи',
    icon: UsersIcon,
    path: '/account',
  },
  {
    value: 'settings',
    label: 'Настройки',
    icon: SettingsIcon,
    path: '/account',
  },
] as const;



