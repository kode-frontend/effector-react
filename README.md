# План лайвкодинга

1. Переписать на использование сторов
2. Добавление таски
3. Редактирование таски
4. Удаление таски + закрытие модалки
5. Персистинг тасок
6. Получение тасок с бека

Опционально:
1. Прикрепить пользака к таске
2. Выбора пользака
3. Логаут

## Основные понятия

**Effector** - декларативный способ управлять состоянием приложения. Нужен, чтобы не пропихивать данные через пропсы или контексты. Чаще всего используется для хранения токенов, работы с фильтрами, передачи информации между компонентами.

В эффекторе есть 3 ключевых понятия:
- **Store** - само хранилище данных. По конвенции названия сторок начинаются с $
- **Event** - триггер изменения стора. Сторы подписываются на изменения эвентов и обновляют свое состояние в зависимости от payload (аргумента в эвенте). Желательно, чтобы название начиналось с глагола.
- **Effect** - обработчик сайд эффектов. Применяется довольно редко, т.к. в приоритете будем пользоваться react-query

Подписка стора на эвент
```ts
store.on(event, (state,payload) => payload)
```

Всемогучий sample:
```ts
sample({
  clock: //триггер события, может быть стором/эвентом/эффектом
  source: //дополнительные сторы, откуда берутся данные. Может быть просто стором, массивом или объектом
  filter: //функция, возвращающая boolean. При false, эвент не триггерится
  fn: //функция - маппер данных. аргументами принимают (source, clock)
  target: //если указать как стор, будет принимать в себя результат fn. Иначе sample будет возвращать эвент, который можно присвоить переменной
})
```