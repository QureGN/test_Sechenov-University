-Клонирование репозитория => `git clone repo-url`
## Создание базы данных:
-Используется PostgreSQL
-Создать базу данных через PgAdmin
## Запуск серверного приложения:
Желательно запускать в вирутальном окружении (версия Питона 3.10.14)
- `cd server`
- в файле /server_project/settings.py
поменять DATABASES со своими user, password
 
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'test_task',
        'USER': 'postgres',
        'PASSWORD': '12345',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
- Установка зависимостей => `pip install -r requirements.txt `
- Создание миграций => `python manage.py makemigrations`
`python manage.py migrate`
- Запуск приложения => `python manage.py runserver `

Доступное API:

 [http://127.0.0.1:8000/patient/new/] - Запись пациентов в БД
 [http://127.0.0.1:8000/patient/all/] - Вывод всех пациентов из БД
 

## Запуск клиенткого приложения:
- `cd client_project`
- Установка зависимостей => `npm install`
- Запуск приложения => `npm start`

Если в базе данных нету ни одного пациента, то загружаются данные из списка из файла /src/const/const.ts 

Откройте [http://localhost:3000](http://localhost:3000) в браузере.
