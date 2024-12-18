# SOA
Запустите PostgreSQL и создайте бд <br>
В файле create.txt есть запросы


# Настройка зависимостей
Прописываем cd project\back

# Настройка JS части
Вы находитесь в папке project\back
cd js

npm ci

Заходим в файл db.js и меняем на свои данные подключние в базе данных

# Настройка Python части 
Вы находитесь в папке project\back

Если в папке project\back\js 

Пропишите cd ..

Если в VIsual Studio Code <br>
Пишем python -m pip install -r requirements.txt

Если другая Python IDE <br>
pip install -r requirements.txt

Заходим в файл db.py и меняем на свои данные подключние в базе данных

# Запуск front части
В папке project прописываем npm ci

node server.js
