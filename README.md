# Результат тестового задания Hezzl.com
## Задание 1

<a href = "https://docs.google.com/spreadsheets/d/18bz1pcQNX-mBhaSDNOOzKvJc8KzSBqNJhPfveuvk5cM/edit?usp=sharing">Список багов в Google Sheets</a>

## Задание 2

Сформировал коллекцию тестов Postman. Находится в папке [postman](postman/Hezzl.postman_collection.json) репозитория.

## Задание 3

```
SELECT * FROM table 
WHERE campaingId = 145602 AND date >= 1703966400 AND date < 1706644800;
```

## Бонусное задание для продвинутых

Перенёс тесты из Postman на Javascript. Использовал инструмент Playwright и интегрировал в него Allure Framework для формирования отчетов.
Находятся в папке [autotests_api](autotests_api/tests).

### Предварительная настройка

Необходим установленный в системе Node.js

_Playwright уже установлен в репозитории, его дополнительная установка не требуется._

### Запуск

Для запуска автотестов: 
- склонировать репозиторий
- открыть в терминале папку ```autotests_api```
- выполнить команду ```npx playwright test```

Для открытия отчёта в allure запустить команду ```allure serve ./allure-results```