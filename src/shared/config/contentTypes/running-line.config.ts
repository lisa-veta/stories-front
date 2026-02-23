import type { ContentTypeConfig } from '../types';

export const runningLineConfig: ContentTypeConfig = {
  createTab: [
    {
      title: 'Строка',
      items: [
        {
          title: 'Текст строки',
          name: 'runningLine.text',
          component: 'Input',
          required: true,
          placeholder: 'Введите текст бегущей строки',
        },
      ],
      buttonText: 'Сохранить текст',
    },
    {
      title: 'Кнопка действия',
      items: [
        {
          title: 'Показывать ли кнопку',
          name: 'actionButton.show',
          component: 'Checkbox',
          defaultValue: false,
        },
      ],
      buttonText: 'Настроить кнопку',
    },
  ],
};
