/**
 * 두 수를 다해서 결과를 리턴하는 함수
 * @param {*} n1 : 더하고자 하는 수1
 * @param {*} n2 : 더하고자 하는 수2
 * @returns
 */
const sum = (n1, n2) => n1 + n2;
//   const sum3= (n1,n2) => n1+n2;
//console.log(sum3(4,5));
/**
 * 부가세를 계산하는 함수
 * @param {*} productPrice : 물품가격
 * @returns
 */
const taxAmount = (productPrice) => {
  let tax = 0.1;
  return tax * productPrice;
};
const getIntervalDate = (day) => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let dayName = now.getDay();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let millisec = now.getMilliseconds();

  let dayNameArr = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let dayMillisec = 24 * 60 * 60 * 1000;
  let IntervalDay = now.getTime() + day * dayMillisec;
  return new Date(IntervalDay);
};
