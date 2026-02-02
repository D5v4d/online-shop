Запуск проекта: 
 - npm i
 - npm run dev

Собрать - docker build -t online-shop .
Запуск - docker run -d -p 3000:3000 --name online-shop-container online-shop
 Обновление контейнера

Сначала остановим и удалим старый контейнер:
docker stop online-shop-container
docker rm online-shop-container

Пересобираем образ:
с кешом  - docker build -t online-shop .
без кеша - docker build --no-cache -t online-shop .

Запускаем контейнер заново:
docker run -d -p 3000:3000 --name online-shop-container online-shop
