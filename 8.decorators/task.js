function cachingDecoratorNew(func) {
 let cache = [];

 function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) { // если элемент не найден
        console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}

/*const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10
upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
    let add2 = (a, b) => a + b;
    let add3 = (a, b, c) => a + b + c;
    let upgAdd2;
    let upgAdd3;

    upgAdd2 = cachingDecoratorNew(add2);
      upgAdd3 = cachingDecoratorNew(add3);


     // Декоратор кэширует
      upgAdd2(1, 2); //Вычисляем: 3;
      upgAdd2(1, 2); //Из кэша: 3;
      upgAdd2(1, 2); //Из кэша: 3;*/

function debounceDecoratorNew(func) {
  let timerId = null;
  let firstCall = true;

  function wrapper(...args) {
    if(!firstCall) {
      firstCall = false;
      func.apply(this, args);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        firstCall = true;
        return func.apply(this, args);
    })
  }
}
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;
  let timerHistory = true;
  wrapp.count = 0

  function wrapper(...args) {
   wrapper.count.push(args);

   if(!timerHistory) {
      func.apply(this, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timerHistory = true;
        func.apply(this, args);
    })
  }

  wrapper.count = [];
  return wrapper;
  }
}  
