// Завдання 1:
// створити порожній об'єкт user.
// додати властивість name зі значенням власного імені.
// додайте властивість surname зі значенням власного прізвища.
// змініть значення name на Jerry.
// видаліть властивість name з об'єкта.

let user = {};
user.name = 'Olga';
user.surname = 'Samiilenko';
user.name = 'Jerry';
delete user.name;

