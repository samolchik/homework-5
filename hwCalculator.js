// Завдання 3:
// Створіть об'єкт змінну-об’єкт калькулятор із трьома методами:

// let calculator = {
//    ... ваш код ...
// };
// calculator.read();
// alert(calculator.sum() );
// alert(calculator.mul() );
// alert(calculator.div() );

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    div() {
        return this.a % this.b;
    },

    read() {
        this.a = +prompt('a?', 4);
        this.b = +prompt('b?', 2);
    }
}

calculator.read();
alert(calculator.sum() );
alert(calculator.mul() );
alert(calculator.div() );