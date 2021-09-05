/*Задача 1
Создать класс счетчика, который будет иметь поле count - значение счетчика.
Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика,
метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
*/

class Counter {
    constructor(count) {
        this.count = count
    }
    increment(){
        this.count++ 
    }
    dicrement(){
        this.count-- 
    }
    returnCount(){
        return this.count
    }
}

let a = new Counter(5)
a.increment()
a.dicrement()
a.returnCount()

//========================================================================================================