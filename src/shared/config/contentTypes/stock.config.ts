import type { ContentTypeConfig } from '../types';

export const stockConfig: ContentTypeConfig = {
  createTab: [
    {
      title: "Основное",
      items: [
        {
          title: "Название",
          name: "main.name",
          component: "Input",
          required: true,
          placeholder: "Введите название акции"
        },
        {
          title: "Короткое описание акции",
          name: "main.shortDescription",
          component: "Input",
          placeholder: "Введите короткое описание"
        },
        {
          title: "Скрывать текст на карточке акции",
          name: "main.hideCardText",
          component: "Checkbox",
          defaultValue: false
        },
        {
          title: "Описание акции при открытии ботом шита",
          name: "main.bottomSheetDescription",
          component: "Input",
          placeholder: "Введите описание для ботом шита"
        }
      ],
      buttonText: "Сохранить основные настройки"
    },
    {
      title: "Кнопка",
      items: [
        {
          title: "Текст кнопки",
          name: "button.text",
          component: "Input",
          placeholder: "Введите текст кнопки"
        },
        {
          title: "Ссылка для перехода",
          name: "button.link",
          component: "Input",
          placeholder: "https://example.com"
        },
        {
          title: "Целевое действие кнопки",
          name: "button.targetAction",
          component: "Input",
          placeholder: "Укажите целевое действие"
        }
      ],
      buttonText: "Добавить кнопку"
    }
  ]
};