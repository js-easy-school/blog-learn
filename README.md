Области хранения данных: - база данных на json-server - BFF - REDUX Store

Сущности приложения:

-   пользовательЖ БД (список пользователей), BFF (сессия текущего), Store (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), Store (использование на клиенте)
-   статьяЖ БД (список статей), Store (отображение в браузере)
-   комментарийЖ БД (список комментариев), Store (отображение в браузере)

Таблица БД:

-   пользователи - users: id / login / password / registered_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / post_id / content / published_at

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для REDUX STORE (на клиенте):

-   user: id / login / roleId / session
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / published / comments: массив comment: id / author / content / publishedAt
-   users: массив user: id / login / registeredAt / role
