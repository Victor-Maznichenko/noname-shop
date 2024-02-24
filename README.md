# Noname Shop 🛍️🏷️

## ⚙️ Технологии

<table width='100%'>
  <tr>
      <td align="center" width="110" height="90">
         <img src="https://i.ibb.co/MB4fxFC/react.png" width="36" height="36" alt="React" />
         <br>React
      </td>
      <td align="center" width="110" height="90">
         <img src="https://i.ibb.co/sPC44D6/redux.png" width="36" height="36" alt="RTK Query" />
         <br>
         Redux Toolkit
    </td>
      <td align="center" width="110" height="90">
         <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg" width="36" height="36" alt="Tailwind" />
         <br>Tailwind
      </td>
      <td align="center" width="110" height="90">
         <img src="https://swiperjs.com/images/swiper-logo.svg" width="36" height="36" alt="Swiper" />
         <br>
         Swiper
      </td>
      <td align="center" width="110" height="90">
         <img src="https://brandeps.com/icon-download/E/Eslint-icon-vector-02.svg" width="36" height="36" alt="eslint" />
         <br>
         ESLint
      </td>
      <td align="center" width="110" height="90">
         <img src="https://brandeps.com/icon-download/P/Prettier-icon-vector-02.svg" width="36" height="36" alt="prettier" />
         <br>
         Prettier
      </td>
      <td align="center" width="110" height="90">
         <div style="font-size: 36px;">🐶</div>
         <div">Husky</div>
      </td>
   </tr> 
</table>

#### Обоснование выбора таких технологий:

-  Я решил писать без Next.js на чистом React, хотя для интернет-магазинов SEO важеная состовляющая, он под капотом оптимизирует шрифты изображения и скрипты. Но я не использовал Next.js, поскольку я еще не настолько умен, я могу не уложиться в сроки.
-  Redux Toolkit для создания централизованного хранилища состояния доступного из любого компонента.
-  Redux Persist для упрощения работы с localstorage
-  TailwindCSS для ускорения разработки и чтобы показать что я знаю эту технологию =).
-  React Loading Skeleton чтобы упростить создание загрузочных прелоадеров.
-  Swiper для реализации слайдера в карточках товаров и списке категорий.
-  Eslint, Prettier используются для проверки качества кода и поддержания его в чистоте.
-  Husky и Lint-staged: Чтобы не дать 💩 проскользнуть в кодовую базу :D

## ✧˖°. Установка проекта:

1. Клонировать репозиторий

   ```bash
   git clone https://github.com/Victor-Maznichenko/noname-shop.git
   cd noname-shop
   ```

2. Установить зависимости
   ```shell
   npm install
   ```

### Компиляция и горячая загрузка для разработки

```
npm run dev
```

### Компиляция и минификация для продакшена

```
npm run build
```

### Форматировать код

```
npm run format
```

### Найти синтаксические ошибки в коде

```
npm run lint
```
