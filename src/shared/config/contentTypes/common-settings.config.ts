export const commonSettingsConfig = {
  settingsTab: {
    general: [
      {
        title: 'Настройки публикации',
        items: [
          {
            title: 'Дата начала публикации',
            name: 'publishSettings.startDate',
            component: 'Select',
            options: [
              { value: 'immediately', label: 'Сразу' },
              { value: 'scheduled', label: 'По расписанию' },
              { value: 'manual', label: 'Вручную' },
            ],
            defaultValue: 'immediately',
          },
          {
            title: 'Дата конца публикации',
            name: 'publishSettings.endDate',
            component: 'Select',
            options: [
              { value: 'never', label: 'Никогда' },
              { value: 'scheduled', label: 'По расписанию' },
              { value: 'manual', label: 'Вручную' },
            ],
            defaultValue: 'never',
          },
          {
            title: 'Категория контента',
            name: 'publishSettings.category',
            component: 'Select',
            options: [
              { value: 'promo', label: 'Промо' },
              { value: 'info', label: 'Информационный' },
              { value: 'news', label: 'Новости' },
              { value: 'event', label: 'Событие' },
            ],
            defaultValue: 'info',
          },
        ],
      },
    ],

    filters: [
      {
        title: 'Часто используемые фильтры',
        items: [
          {
            title: 'Пользователи для таргетирования',
            name: 'filters.common.targetUsers',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все пользователи' },
              { value: 'premium', label: 'Премиум пользователи' },
              { value: 'new', label: 'Новые пользователи' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Тарифные планы',
            name: 'filters.common.tariffPlans',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все тарифы' },
              { value: 'basic', label: 'Базовый' },
              { value: 'advanced', label: 'Продвинутый' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Целевая группа пользователей',
            name: 'filters.common.targetGroup',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все группы' },
              { value: 'family', label: 'Семья' },
              { value: 'business', label: 'Бизнес' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Города и районы',
            name: 'filters.common.cities',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все города' },
              { value: 'moscow', label: 'Москва' },
              { value: 'spb', label: 'Санкт-Петербург' },
            ],
            defaultValue: 'all',
          },
        ],
      },
      {
        title: 'Остальные фильтры',
        items: [
          {
            title: 'Тип должника',
            name: 'filters.other.debtorType',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все' },
              { value: 'individual', label: 'Физическое лицо' },
              { value: 'legal', label: 'Юридическое лицо' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Тип физического подключения',
            name: 'filters.other.connectionType',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все' },
              { value: 'fiber', label: 'Оптика' },
              { value: 'adsl', label: 'ADSL' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Группы пользователей',
            name: 'filters.other.userGroups',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все группы' },
              { value: 'test', label: 'Тестовая' },
              { value: 'vip', label: 'VIP' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Версия МП начиная с которой контент будет доступен',
            name: 'filters.other.minAppVersion',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все версии' },
              { value: '2.0', label: '2.0+' },
              { value: '3.0', label: '3.0+' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Тема',
            name: 'filters.other.theme',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все темы' },
              { value: 'dark', label: 'Темная' },
              { value: 'light', label: 'Светлая' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Тарифы Умного Домофона (по абонентской плате)',
            name: 'filters.other.intercomTariffs',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все тарифы' },
              { value: 'basic', label: 'Базовый' },
              { value: 'pro', label: 'Про' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Типы оборудования у пользователей',
            name: 'filters.other.equipmentTypes',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все типы' },
              { value: 'router', label: 'Роутер' },
              { value: 'tv', label: 'ТВ-приставка' },
            ],
            defaultValue: 'all',
          },
          {
            title: 'Версия МП до которой будет доступен',
            name: 'filters.other.maxAppVersion',
            component: 'Select',
            options: [
              { value: 'all', label: 'Все версии' },
              { value: '4.0', label: 'До 4.0' },
              { value: '5.0', label: 'До 5.0' },
            ],
            defaultValue: 'all',
          },
        ],
      },
    ],

    flags: [
      {
        title: 'Основные флаги',
        items: [
          {
            title: 'Опубликована',
            name: 'flags.main.published',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Черновик',
            name: 'flags.main.draft',
            component: 'Checkbox',
            defaultValue: true,
          },
          {
            title: 'Принудительный показ',
            name: 'flags.main.forceShow',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Для показа на iOS',
            name: 'flags.main.showOnIOS',
            component: 'Checkbox',
            defaultValue: true,
          },
          {
            title: 'Для показа на Android',
            name: 'flags.main.showOnAndroid',
            component: 'Checkbox',
            defaultValue: true,
          },
        ],
      },
      {
        title: 'Не часто используемые флаги',
        items: [
          {
            title: 'Наличие IsBox',
            name: 'flags.other.hasIsBox',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Нет IsBox',
            name: 'flags.other.noIsBox',
            component: 'Checkbox',
            defaultValue: true,
          },
          {
            title: 'Наличие КТВ',
            name: 'flags.other.hasCTV',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Нет КТВ',
            name: 'flags.other.noCTV',
            component: 'Checkbox',
            defaultValue: true,
          },
          {
            title: 'Есть умный домофон',
            name: 'flags.other.hasSmartIntercom',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Есть наклейка',
            name: 'flags.other.hasSticker',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Нет домофона',
            name: 'flags.other.noIntercom',
            component: 'Checkbox',
            defaultValue: true,
          },
          {
            title: 'Покупка',
            name: 'flags.other.equipmentPurchase',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Аренда',
            name: 'flags.other.equipmentRent',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Подарок',
            name: 'flags.other.equipmentGift',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Нет оборудования',
            name: 'flags.other.noEquipment',
            component: 'Checkbox',
            defaultValue: true,
          },
          {
            title: 'Домашнее видеонаблюдение',
            name: 'flags.other.homeCCTV',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'МКД видеонаблюдение',
            name: 'flags.other.apartmentCCTV',
            component: 'Checkbox',
            defaultValue: false,
          },
          {
            title: 'Отсутствует видеонаблюдение',
            name: 'flags.other.noCCTV',
            component: 'Checkbox',
            defaultValue: true,
          },
        ],
      },
    ],
  },
};
