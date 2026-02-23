import type { ContentTypeConfig } from '../types';

export const bottomSheetConfig: ContentTypeConfig = {
  createTab: [
    {
      title: "Основное",
      items: [
        {
          title: "Заголовок",
          name: "main.title",
          component: "Input",
          required: true,
          placeholder: "Введите заголовок ботом шита"
        },
        {
          title: "Описание",
          name: "main.description",
          component: "Input",
          placeholder: "Введите описание"
        }
      ],
      buttonText: "Сохранить основные настройки"
    },
    {
      title: "Кнопка действия",
      items: [
        {
          title: "Текст кнопки",
          name: "actionButton.text",
          component: "Input",
          placeholder: "Введите текст кнопки"
        },
        {
          title: "Целевое действие кнопки",
          name: "actionButton.targetAction",
          component: "Input",
          placeholder: "Укажите целевое действие"
        },
        {
          title: "Выберите действие",
          name: "actionButton.actionType",
          component: "Select",
          options: [
            { value: "external", label: "Переход на внешний сайт" },
            { value: "webview", label: "Переход на веб вью внутри МП" },
            { value: "deeplink", label: "Переход по deeplink" }
          ],
          defaultValue: "external"
        },
        {
          title: "Ссылка кнопки",
          name: "actionButton.link",
          component: "Input",
          placeholder: "https://example.com"
        }
      ],
      buttonText: "Добавить кнопку"
    }
  ]
};