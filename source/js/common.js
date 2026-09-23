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

/**오늘을 기준으로 며칠 전
 * @param {*} day
   @returns
 */

const getIntervalDate = (day) => {
  let today = new Date();
  let dayMillisec = 24 * 60 * 60 * 1000;
  let IntervalDay = today.getTime() + day * dayMillisec;
  return new Date(IntervalDay);
};

/**
 * 정수 랜덤하게 출력
 * @param {*포함하는 가장 작은 수} min
 * @param {*포함하는 가장 큰수} max
 * @returns
 */

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(getRandomInteger(1, 3));

/**
 *
 * @param {*} day
 * @param {*} format
 * @returns
 */
const getIntervalDateFormat = (day, format = "YYYY-MM-DD") => {
  const intervalDate = getIntervalDate(day);
  const year = intervalDate.getFullYear().toString();
  const month = (intervalDate.getMonth() + 1).toString().padStart(2, "0");
  const date = intervalDate.getDate().toString().padStart(2, "0");

  return format
    .replace("YYYY", year)
    .replace("YY", year.slice(-2))
    .replace("MM", month)
    .replace("DD", date);
};
