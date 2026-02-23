import type { BottomSheet } from '@shared/api';
import { mockBottomSheets } from '@mocks/data';

export const mockBottomSheetsDetail: BottomSheet[] = [
  {
    ...mockBottomSheets[0], // "Новые возможности"
    // Обязательные поля в детальном интерфейсе
    button_target_action: 'deeplink',
    image: 'assets/bottom-sheets/full/new-features.png',
    button_url: 'app://features/new',
    preview_url: 'assets/bottom-sheets/preview/new-features-preview.png',

    // Дополнительные поля для детального просмотра
    screens: ['Главная страница', 'Профиль'],
    filter: {
      id: 1,
      content_category: 'app_update',
      target_users_group: 'all_users',
      has_isbox: true,
      has_no_isbox: false,
      has_beward: true,
      has_intercom: false,
      has_no_intercom: true,
      has_ktv: true,
      has_no_ktv: false,
    },
  },
  {
    ...mockBottomSheets[1], // "Черновик осенних обновлений"
    button_target_action: 'link',
    image: 'assets/bottom-sheets/full/autumn-updates.png',
    button_url: 'https://example.com/autumn-updates',
    preview_url: 'assets/bottom-sheets/preview/autumn-updates-preview.png',

    screens: ['Настройки'],
    filter: {
      id: 2,
      content_category: 'ui_update',
      target_users_group: 'beta_testers',
      has_isbox: false,
      has_no_isbox: true,
      has_beward: false,
      has_intercom: true,
      has_no_intercom: false,
      has_ktv: false,
      has_no_ktv: true,
    },
  },
  {
    ...mockBottomSheets[2], // "Специальное предложение"
    button_target_action: 'story',
    image: 'assets/bottom-sheets/full/special-offer.png',
    button_url: 'app://stories/special-offer',
    preview_url: 'assets/bottom-sheets/preview/special-offer-preview.png',

    screens: ['Главная страница', 'Каталог', 'Корзина'],
    filter: {
      id: 3,
      content_category: 'promo',
      target_users_group: 'loyal_customers',
      has_isbox: true,
      has_no_isbox: true,
      has_beward: true,
      has_intercom: true,
      has_no_intercom: false,
      has_ktv: true,
      has_no_ktv: true,
    },
  },
  {
    ...mockBottomSheets[3], // "Архив летних акций"
    button_target_action: 'link',
    image: 'assets/bottom-sheets/full/summer-archive.png',
    button_url: 'https://example.com/archive/summer',
    preview_url: 'assets/bottom-sheets/preview/summer-archive-preview.png',

    screens: ['Архив'],
    filter: {
      id: 4,
      content_category: 'archive',
      target_users_group: 'all_users',
      has_isbox: true,
      has_no_isbox: false,
      has_beward: false,
      has_intercom: false,
      has_no_intercom: true,
      has_ktv: true,
      has_no_ktv: false,
    },
  },
  {
    ...mockBottomSheets[4], // "Новогодние скидки"
    button_target_action: 'deeplink',
    image: 'assets/bottom-sheets/full/new-year-discounts.png',
    button_url: 'app://promo/new-year',
    preview_url: 'assets/bottom-sheets/preview/new-year-discounts-preview.png',

    screens: ['Главная страница', 'Акции'],
    filter: {
      id: 5,
      content_category: 'seasonal',
      target_users_group: 'all_users',
      has_isbox: false,
      has_no_isbox: true,
      has_beward: true,
      has_intercom: true,
      has_no_intercom: false,
      has_ktv: false,
      has_no_ktv: true,
    },
  },
  {
    ...mockBottomSheets[5], // "Обновление безопасности"
    button_target_action: 'absent',
    image: 'assets/bottom-sheets/full/security-update.png',
    button_url: 'https://example.com/security',
    preview_url: 'assets/bottom-sheets/preview/security-update-preview.png',

    screens: ['Все экраны'],
    filter: {
      id: 6,
      content_category: 'security',
      target_users_group: 'all_users',
      has_isbox: true,
      has_no_isbox: true,
      has_beward: true,
      has_intercom: true,
      has_no_intercom: true,
      has_ktv: true,
      has_no_ktv: true,
    },
  },
  {
    ...mockBottomSheets[6], // "Черновик октябрьских новинок"
    button_target_action: 'link',
    image: 'assets/bottom-sheets/full/october-new.png',
    button_url: 'https://example.com/coming-soon',
    preview_url: 'assets/bottom-sheets/preview/october-new-preview.png',

    screens: ['Главная страница'],
    filter: {
      id: 7,
      content_category: 'new_products',
      target_users_group: 'subscribed',
      has_isbox: false,
      has_no_isbox: true,
      has_beward: false,
      has_intercom: true,
      has_no_intercom: false,
      has_ktv: false,
      has_no_ktv: true,
    },
  },
  {
    ...mockBottomSheets[7], // "Архив сентябрьских акций"
    button_target_action: 'link',
    image: 'assets/bottom-sheets/full/september-archive.png',
    button_url: 'https://example.com/archive/september',
    preview_url: 'assets/bottom-sheets/preview/september-archive-preview.png',

    screens: ['Архив', 'Отчеты'],
    filter: {
      id: 8,
      content_category: 'archive',
      target_users_group: 'managers',
      has_isbox: true,
      has_no_isbox: false,
      has_beward: true,
      has_intercom: false,
      has_no_intercom: true,
      has_ktv: true,
      has_no_ktv: false,
    },
  },
  {
    ...mockBottomSheets[8], // "Декабрьские предложения"
    button_target_action: 'story',
    image: 'assets/bottom-sheets/full/december-offers.png',
    button_url: 'app://stories/december',
    preview_url: 'assets/bottom-sheets/preview/december-offers-preview.png',

    screens: ['Главная страница', 'Праздничная страница'],
    filter: {
      id: 9,
      content_category: 'seasonal',
      target_users_group: 'all_users',
      has_isbox: true,
      has_no_isbox: false,
      has_beward: true,
      has_intercom: true,
      has_no_intercom: false,
      has_ktv: true,
      has_no_ktv: false,
    },
  },
  {
    ...mockBottomSheets[9], // "Архивная информация"
    button_target_action: 'link',
    image: 'assets/bottom-sheets/full/old-info.png',
    button_url: 'https://example.com/old-info',
    preview_url: 'assets/bottom-sheets/preview/old-info-preview.png',

    screens: ['Архив'],
    filter: {
      id: 10,
      content_category: 'archive',
      target_users_group: 'admins',
      has_isbox: true,
      has_no_isbox: false,
      has_beward: false,
      has_intercom: false,
      has_no_intercom: true,
      has_ktv: true,
      has_no_ktv: false,
    },
  },
];
