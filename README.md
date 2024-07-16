-Клонирование репозитория => `git clone repo-url`
## Запуск клиенткого приложения:
- `cd client_project`
- Установка зависимостей => `npm install`
- Запуск приложения => `npm start`

Если в базе данных нету ни одного пациента, то загружаются данные из списка из файла /src/const/const.ts 

Откройте [http://localhost:3000](http://localhost:3000) в барузере.

## Создание базы данных:

## Запуск серверного приложения:
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
- Создание миграций => `pip manage.py makemigrations`
`pip manage.py migrate`
- Запуск приложения => `python manage.py runserver `

Доступное API:

 [http://127.0.0.1:8000/patient/new/] - Запись пациентов в БД
 [http://127.0.0.1:8000/patient/all/] - Вывод всех пациентов из БД
 
