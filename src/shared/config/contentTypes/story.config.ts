import type { ContentTypeConfig } from '../types';

export const storyConfig: ContentTypeConfig = {
  createTab: [
    {
      title: "Карусель",
      items: [
        {
          title: "Короткий заголовок",
          name: "cover.shortTitle",
          component: "Input",
          required: true,
          placeholder: "Введите короткий заголовок"
        }
      ],
      buttonText: "Загрузить превью"
    },
    {
      title: "Обложка",
      items: [
        {
          title: "Визуальный эффект",
          name: "cover.visualEffect",
          component: "Select",
          options: [
            { value: "none", label: "Без эффекта" },
            { value: "with", label: "С эффектом" }
          ],
          defaultValue: "none"
        }
      ],
      buttonText: "Загрузить изображение"
    },
    {
      title: "Заголовок",
      items: [
        {
          title: "Позиция текста",
          name: "cover.title.position",
          component: "Select",
          options: [
            { value: "top", label: "Сверху" },
            { value: "center", label: "По середине" },
            { value: "bottom", label: "Снизу" },
            { value: "custom", label: "Кастомная" }
          ],
          defaultValue: "center"
        },
        {
          title: "Стиль текста",
          name: "cover.title.style",
          component: "Select",
          options: [
            { value: "custom", label: "Кастомный" },
            { value: "default", label: "Не кастомный" }
          ],
          defaultValue: "default"
        },
        {
          title: "Цвет текста",
          name: "cover.title.textColor",
          component: "ColorPicker",
          defaultValue: "#000000"
        },
        {
          title: "Цвет фона",
          name: "cover.title.backgroundColor",
          component: "ColorPicker",
          defaultValue: "#FFFFFF"
        },
        {
          title: "Визуальный эффект",
          name: "cover.title.visualEffect",
          component: "Select",
          options: [
            { value: "with", label: "С эффектом" },
            { value: "without", label: "Без эффекта" }
          ],
          defaultValue: "without"
        }
      ],
      buttonText: "Добавить"
    },
    {
      title: "Кнопка действия",
      items: [
        {
          title: "Ссылка для перехода",
          name: "cover.actionButton.link",
          component: "Input",
          placeholder: "https://example.com"
        },
        {
          title: "Стиль отображения",
          name: "cover.actionButton.style",
          component: "Select",
          options: [
            { value: "custom", label: "Кастомный" },
            { value: "default", label: "Не кастомный" }
          ],
          defaultValue: "default"
        },
        {
          title: "Цвет текста",
          name: "cover.actionButton.textColor",
          component: "ColorPicker",
          defaultValue: "#FFFFFF"
        },
        {
          title: "Цвет фона",
          name: "cover.actionButton.backgroundColor",
          component: "ColorPicker",
          defaultValue: "#007BFF"
        },
        {
          title: "Скругление",
          name: "cover.actionButton.borderRadius",
          component: "Input",
          type: "number",
          placeholder: "0"
        }
      ],
      buttonText: "Добавить кнопку"
    },
    {
      title: "Кнопка для звонка",
      items: [
        {
          title: "Тип обзвона",
          name: "cover.callButton.callType",
          component: "Select",
          options: [
            { value: "assigned", label: "Задан" },
            { value: "notAssigned", label: "Не задан" }
          ],
          defaultValue: "notAssigned"
        },
        {
          title: "Стиль отображения",
          name: "cover.callButton.style",
          component: "Select",
          options: [
            { value: "custom", label: "Кастомный" },
            { value: "default", label: "Не кастомный" }
          ],
          defaultValue: "default"
        },
        {
          title: "Цвет текста",
          name: "cover.callButton.textColor",
          component: "ColorPicker",
          defaultValue: "#FFFFFF"
        },
        {
          title: "Цвет фона",
          name: "cover.callButton.backgroundColor",
          component: "ColorPicker",
          defaultValue: "#28A745"
        },
        {
          title: "Скругление",
          name: "cover.callButton.borderRadius",
          component: "Input",
          type: "number",
          placeholder: "0"
        }
      ],
      buttonText: "Добавить кнопку"
    },

    // === СЛАЙД ===
    {
      title: "Текст",
      items: [
        {
          title: "Позиция текста",
          name: "slide.text.position",
          component: "Select",
          options: [
            { value: "top", label: "Сверху" },
            { value: "center", label: "По середине" },
            { value: "bottom", label: "Снизу" },
            { value: "custom", label: "Кастомная" }
          ],
          defaultValue: "center"
        },
        {
          title: "Стиль текста",
          name: "slide.text.style",
          component: "Select",
          options: [
            { value: "custom", label: "Кастомный" },
            { value: "default", label: "Не кастомный" }
          ],
          defaultValue: "default"
        },
        {
          title: "Цвет текста",
          name: "slide.text.textColor",
          component: "ColorPicker",
          defaultValue: "#000000"
        },
        {
          title: "Цвет фона",
          name: "slide.text.backgroundColor",
          component: "ColorPicker",
          defaultValue: "#FFFFFF"
        },
        {
          title: "Визуальный эффект",
          name: "slide.text.visualEffect",
          component: "Select",
          options: [
            { value: "with", label: "С эффектом" },
            { value: "without", label: "Без эффекта" }
          ],
          defaultValue: "without"
        }
      ],
      buttonText: "Добавить"
    },
    {
      title: "Кнопка действия",
      items: [
        {
          title: "Ссылка для перехода",
          name: "slide.actionButton.link",
          component: "Input",
          placeholder: "https://example.com"
        },
        {
          title: "Стиль отображения",
          name: "slide.actionButton.style",
          component: "Select",
          options: [
            { value: "custom", label: "Кастомный" },
            { value: "default", label: "Не кастомный" }
          ],
          defaultValue: "default"
        },
        {
          title: "Цвет текста",
          name: "slide.actionButton.textColor",
          component: "ColorPicker",
          defaultValue: "#FFFFFF"
        },
        {
          title: "Цвет фона",
          name: "slide.actionButton.backgroundColor",
          component: "ColorPicker",
          defaultValue: "#007BFF"
        },
        {
          title: "Скругление",
          name: "slide.actionButton.borderRadius",
          component: "Input",
          type: "number",
          placeholder: "0"
        }
      ],
      buttonText: "Добавить кнопку"
    },
    {
      title: "Кнопка для звонка",
      items: [
        {
          title: "Тип обзвона",
          name: "slide.callButton.callType",
          component: "Select",
          options: [
            { value: "assigned", label: "Задан" },
            { value: "notAssigned", label: "Не задан" }
          ],
          defaultValue: "notAssigned"
        },
        {
          title: "Стиль отображения",
          name: "slide.callButton.style",
          component: "Select",
          options: [
            { value: "custom", label: "Кастомный" },
            { value: "default", label: "Не кастомный" }
          ],
          defaultValue: "default"
        },
        {
          title: "Цвет текста",
          name: "slide.callButton.textColor",
          component: "ColorPicker",
          defaultValue: "#FFFFFF"
        },
        {
          title: "Цвет фона",
          name: "slide.callButton.backgroundColor",
          component: "ColorPicker",
          defaultValue: "#28A745"
        },
        {
          title: "Скругление",
          name: "slide.callButton.borderRadius",
          component: "Input",
          type: "number",
          placeholder: "0"
        }
      ],
      buttonText: "Добавить кнопку"
    }
  ],
};