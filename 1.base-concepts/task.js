"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0)
    return "Ошибка, а не равно 0";
  let D = b ** 2 - 4 * a * c;
  let x1, x2;

  if (D < 0) {
      return arr;

    } else if (D === 0) {
      x1 = -b/(2 * a);
      arr[0] = x1 
     
    } else if (D > 0) {
      x1 = (-b + Math.sqrt(D))/(2 * a);
      x2 = (-b - Math.sqrt(D))/(2 * a);
      arr[0] = x1;
      arr[1] = x2
      }
    
       return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {

  if (percent==='') {
    alert('Введите процентную ставку')
    return
  } if (contribution==='') {
    alert('Введите сумму первоначального взноса')
    return
  } if (amount==='') {
    alert('Введите сумму кредита')
    return
  }

  let p = percent / 12/100;
  let currentDate = new Date();

  let currentYear= currentDate.getFullYear() //получаем текущий год
  let currentmounth =currentDate.getMonth() //получаем текущий месяц

  let nextDateYear = date.getFullYear() //получаем год окончания кредита
  let nextDateMounth = date.getMonth() //получаем месяц окончания кредита
    if (isNaN(nextDateYear) == true || isNaN(nextDateMounth) ==true ) {
    alert('Введите дату окончания кредита')
    return
  }
  
  let credit_month = (nextDateYear-currentYear)*12+nextDateMounth-currentmounth //срок кредита в месяцах

  if (credit_month < 0) {
   alert('введеная дата меньше текущей!')
    return }

  let creditBody;
  creditBody  = amount - contribution;

  let payment = creditBody * (p + (p / (Math.pow((1+p), credit_month) - 1))); //ежемесячный платеж
  let totalAmount= payment*credit_month //сумма общая кредита
  
  return totalAmount.toFixed(2);

  console.log(totalAmount.toFixed(2));
      
  return totalAmount;
}
