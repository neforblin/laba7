
let groupmates = [
  {
    name: "Александр",
    surname: "Иванов",
    group: "БВТ1702",
    marks: [4, 3, 5],
  },
  {
    name: "Иван",
    surname: "Петров",
    group: "БСТ1702",
    marks: [4, 4, 4],
  },
  {
    name: "Кирилл",
    surname: "Смирнов",
    group: "БАП1801",
    marks: [5, 5, 5],
  },
];

function rpad(str, length) {
  // js не поддерживает добавление нужного количества символов
  // справа от строки, т.е. аналога ljust из Python здесь нет
  str = String(str); // преобразование в строку
  while (str.length < length)
    str = str + " "; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку
  return str;
}

function printStudents(groupmates) {
  if (groupmates.length != 0){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
      );
      // был выведен заголовок таблицы
      for (let i = 0; i <= groupmates.length - 1; i++) {
        // в цикле выводится каждый экземпляр студента
        console.log(
          rpad(groupmates[i]["name"], 15),
          rpad(groupmates[i]["surname"], 15),
          rpad(groupmates[i]["group"], 8),
          rpad(groupmates[i]["marks"], 20)
        );
      }
  }
      
  console.log('\n'); // добавляется пустая строка в конце вывода
};

function filter_group() {
  let filter = [];
  let group = prompt("Группа");
  for (let i = 0; i < groupmates.length; i++)
    if (groupmates[i]["group"] == group) filter.push(groupmates[i]);
  return filter;
}

function summ(marks) {
  let summ = 0;
  for (let i = 0; i < marks.length; i++) summ = summ + marks[i];
  return summ;
}

function filter_grade() {
  let filter = [];
  let grade = +prompt("Средний балл");
  for (let i = 0; i < groupmates.length; i++)
    if (summ(groupmates[i]["marks"]) / groupmates[i]["marks"].length >= grade)
      filter.push(groupmates[i]);
  return filter;
}

printStudents(groupmates); 

printStudents(filter_group());
printStudents(filter_grade());