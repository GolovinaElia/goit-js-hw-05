// Напиши класс StringBuilder.На вход он получает один параметр - строку,
//     которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str(строку) и добавляет ее в начало и в конец
// _value
class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
    append(str) {
    this._value.push(value);
}
    prepend(str) {
    this._value.unshift(value);
    }
    pad(str) {
        this._value.slice(3, 0, value); 
        this._value.slice(0, 0, value);
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='