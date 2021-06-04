let getSalary = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(1000);
        }, 1000);
  }) 
};

let afterTax = (salary) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(salary - salary * 0.01);
        }, 1000);
  }) 
};

let afterRent = (salary) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(salary - 200);
        }, 1000);
  }) 
};

let myMoney = () => {
  getSalary().then((salary) => {
      afterTax(salary).then((salary) => {
          afterRent(salary).then((salary) => {
              console.log(salary);
          })
      })
  });

  getSalary().then(afterTax).then(afterRent).then(console.log)
  //console.log(getSalary().then())
  //getSalary().then((salary) => console.log(salary))
};

myMoney();
