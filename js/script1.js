// ЗАДАЧА
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

const people1 = [{
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Ivan',
    know: ["Jhon", "Alex"],
  },
  {
    name: 'Eva',
    know: ["Alex", "Jhon"],
  },
  {
    name: 'Jhon',
    know: [],
  }]
  
  const people2 = [{
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Jhon',
    know: ["Eva"],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ["Jhon", "Alex"],
  }]
  
  const people3 = [{
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ["Alex", "Jhon"],
  },
  {
    name: 'Ivan',
    know: ["Jhon", "Alex"],
  }]
  
  // --------------- FUNCTION -------------
  
  function findNarziss(arr) {
  
  const foundPerson = [];
  const falsePerson = [];
  
    arr.forEach(({name, know}) => {
      if (know.length === 0){
        foundPerson.push(name);
      } else {
        falsePerson.push(know);
      }
    }); 
  
  // console.log(foundPerson);
  // console.log(falsePerson);
  
    if (foundPerson.length !== 1){
      console.log("not found")
      return "not found";
    }

  const controle = falsePerson.every(pers => pers.includes(foundPerson[0]))

  if (controle){
    console.log("found")
    return "found";
  }
  console.log("not found")
  return "not found";
    }
  
  


  findNarziss(people1);
  findNarziss(people2);
  findNarziss(people3);