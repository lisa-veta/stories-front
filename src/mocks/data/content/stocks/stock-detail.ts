import type { Stock } from '@shared/api';
import { mockStocks } from '@mocks/data';

export const mockStocksDetail: Stock[] = [
  {
    ...mockStocks[0], // "Скидка 30% на все услуги"
    // Дополняем поля из Stock интерфейса
    bottom_sheet_description: 'Получите скидку 30% на все услуги компании до конца месяца. Акция действует для всех новых и постоянных клиентов. Успейте воспользоваться выгодным предложением!',
    hide_text_on_card: false,

    button_text: 'Получить скидку',
    button_url: 'app://promo/30-discount',
    button_target_action: 'deeplink',

    backgroundImage: '/images/stocks/background/discount-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/discount-full.png',

    filter: {
      id: 1,
      content_category: 'discount',
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
    ...mockStocks[1], // Вторая акция
    bottom_sheet_description: 'Ограниченное предложение со скидкой 30%. Действует только для зарегистрированных пользователей.',
    hide_text_on_card: true,

    button_text: 'Узнать условия',
    button_url: 'https://example.com/promo/30-discount',
    button_target_action: 'link',

    backgroundImage: '/images/stocks/background/special-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/special-full.png',

    filter: {
      id: 2,
      content_category: 'special',
      target_users_group: 'registered',
      has_isbox: false,
      has_no_isbox: true,
      has_beward: false,
      has_intercom: true,
      has_no_intercom: false,
      has_ktv: false,
      has_no_ktv: true,
    },
  },
  // Добавим еще детальные записи
  {
    id: 3,
    title: 'Бесплатная доставка',
    status: 'active',
    published: true,
    description: 'Бесплатная доставка при заказе от 5000 рублей',
    icon: '/images/stocks/delivery.png',
    created_at: '2024-01-10T11:30:00Z',
    updated_at: '2024-01-10T11:30:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-15T00:00:00Z',
    unpublish_at: '2024-02-15T23:59:59Z',

    bottom_sheet_description: 'Закажите товаров на сумму от 5000 рублей и получите бесплатную доставку в любую точку города. Акция действует для всех клиентов.',
    hide_text_on_card: false,

    button_text: 'Сделать заказ',
    button_url: 'app://catalog',
    button_target_action: 'deeplink',

    backgroundImage: '/images/stocks/background/delivery-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/delivery-full.png',

    filter: {
      id: 3,
      content_category: 'delivery',
      target_users_group: 'all_users',
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
    id: 4,
    title: 'Черновик акции',
    status: 'draft',
    published: false,
    description: 'Новая акция к весеннему сезону',
    icon: '/images/stocks/spring.png',
    created_at: '2024-01-12T09:15:00Z',
    updated_at: '2024-01-12T09:15:00Z',
    created_by: { id: 2, username: 'user2' },
    publish_at: '2024-03-01T00:00:00Z',
    unpublish_at: '2024-04-01T23:59:59Z',

    bottom_sheet_description: 'Готовьтесь к весне вместе с нами! Скоро стартует новая акция с большими скидками.',
    hide_text_on_card: false,

    button_text: 'Узнать первым',
    button_url: 'https://example.com/coming-soon',
    button_target_action: 'link',

    backgroundImage: '/images/stocks/background/spring-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/spring-full.png',

    filter: {
      id: 4,
      content_category: 'seasonal',
      target_users_group: 'subscribed',
      has_isbox: false,
      has_no_isbox: true,
      has_beward: true,
      has_intercom: false,
      has_no_intercom: true,
      has_ktv: false,
      has_no_ktv: true,
    },
  },
  {
    id: 5,
    title: 'Архивная акция',
    status: 'archived',
    published: true,
    description: 'Новогодние скидки 2023',
    icon: '/images/stocks/new-year.png',
    created_at: '2023-12-01T10:00:00Z',
    updated_at: '2023-12-01T10:00:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2023-12-15T00:00:00Z',
    unpublish_at: '2024-01-15T23:59:59Z',

    bottom_sheet_description: 'Новогодние скидки прошлого года. Акция уже завершена.',
    hide_text_on_card: true,

    button_text: 'Посмотреть архив',
    button_url: 'https://example.com/archive/new-year-2023',
    button_target_action: 'link',

    backgroundImage: '/images/stocks/background/new-year-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/new-year-full.png',

    filter: {
      id: 5,
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
    id: 6,
    title: 'Акция для бизнеса',
    status: 'active',
    published: true,
    description: 'Специальные условия для корпоративных клиентов',
    icon: '/images/stocks/business.png',
    created_at: '2024-01-08T16:45:00Z',
    updated_at: '2024-01-08T16:45:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-10T00:00:00Z',
    unpublish_at: '2024-12-31T23:59:59Z',

    bottom_sheet_description: 'Для корпоративных клиентов специальные условия сотрудничества и индивидуальные скидки. Свяжитесь с нашим менеджером для получения персонального предложения.',
    hide_text_on_card: false,

    button_text: 'Связаться',
    button_url: 'mailto:sales@example.com',
    button_target_action: 'link',

    backgroundImage: '/images/stocks/background/business-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/business-full.png',

    filter: {
      id: 6,
      content_category: 'business',
      target_users_group: 'corporate',
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
    id: 7,
    title: 'Бонусная программа',
    status: 'active',
    published: true,
    description: 'Накопительные бонусы за покупки',
    icon: '/images/stocks/bonus.png',
    created_at: '2024-01-03T13:20:00Z',
    updated_at: '2024-01-03T13:20:00Z',
    created_by: { id: 2, username: 'user2' },
    publish_at: '2024-01-05T00:00:00Z',
    unpublish_at: '2024-12-31T23:59:59Z',

    bottom_sheet_description: 'Станьте участником бонусной программы и получайте до 10% от суммы каждой покупки на бонусный счет. Накопленные бонусы можно тратить на последующие покупки.',
    hide_text_on_card: false,

    button_text: 'Вступить в программу',
    button_url: 'app://bonus/join',
    button_target_action: 'deeplink',

    backgroundImage: '/images/stocks/background/bonus-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/bonus-full.png',

    filter: {
      id: 7,
      content_category: 'loyalty',
      target_users_group: 'registered',
      has_isbox: false,
      has_no_isbox: true,
      has_beward: true,
      has_intercom: false,
      has_no_intercom: true,
      has_ktv: false,
      has_no_ktv: true,
    },
  },
  {
    id: 8,
    title: 'Скидка на первую покупку',
    status: 'active',
    published: true,
    description: '20% скидка для новых клиентов',
    icon: '/images/stocks/first-purchase.png',
    created_at: '2024-01-07T15:10:00Z',
    updated_at: '2024-01-07T15:10:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-10T00:00:00Z',
    unpublish_at: '2024-06-30T23:59:59Z',

    bottom_sheet_description: 'Для всех новых клиентов специальное предложение - 20% скидка на первую покупку. Зарегистрируйтесь и воспользуйтесь выгодным предложением.',
    hide_text_on_card: true,

    button_text: 'Зарегистрироваться',
    button_url: 'app://auth/register',
    button_target_action: 'deeplink',

    backgroundImage: '/images/stocks/background/first-purchase-bg.png',
    bottomSheetImage: '/images/stocks/bottom-sheet/first-purchase-full.png',

    filter: {
      id: 8,
      content_category: 'new_client',
      target_users_group: 'new_users',
      has_isbox: true,
      has_no_isbox: true,
      has_beward: true,
      has_intercom: true,
      has_no_intercom: true,
      has_ktv: true,
      has_no_ktv: true,
    },
  },
];
