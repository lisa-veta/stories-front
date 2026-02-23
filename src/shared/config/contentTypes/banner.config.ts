import type {ContentTypeConfig} from "@shared/config/types.ts";

export const bannerConfig: ContentTypeConfig = {
  createTab: [
    {
      title: "Обложка",
      items: [
        {
          title: "Заголовок",
          name: "cover.title",
          component: "Input",
          required: true,
          placeholder: "Введите заголовок баннера"
        },
        {
          title: "Текст баннера",
          name: "cover.text",
          component: "Input",
          placeholder: "Введите текст баннера"
        },
        {
          title: "Цвет текста и кнопок в баннере",
          name: "cover.colorScheme",
          component: "Select",
          options: [
            { value: "black", label: "Черный" },
            { value: "white", label: "Белый" }
          ],
          defaultValue: "black"
        }
      ],
      buttonText: "Загрузить фон баннера"
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