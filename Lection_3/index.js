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
/*Задача 2
Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства:
name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней)
сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(),
который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество
отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate,
getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays,
которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет
увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0
*/

class Worker {
    constructor(name, secondName, rate, days, сountOfDetails){
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
        this.сountOfDetails = сountOfDetails;
    }
    getSalary(){
        return this.rate * this.days
    }
    getName(){
        return this.name
    }
    getSecondName(){
        return this.secondName
    }
    getRate(){
        return this.rate
    }
    getDays(){
        return this.days
    }
    setRate(newRate){
        this.rate = newRate;
    }
    setDays(newDays){
        this.days = newDays;
    }
    incrementDetails(){
        this.сountOfDetails++;
    }
    resetCountOfDetails(){
        this.сountOfDetails = 0
    }
}
let workerFirst = new Worker('Ivan', 'Ivanov', 150, 3, 600)

//========================================================================================================