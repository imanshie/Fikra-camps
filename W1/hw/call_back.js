let getSalary = (cb) => {
  setTimeout(() => {
    cb(1000);
  }, 1000);
};

let afterTax = (salary, cb) => {
  setTimeout(() => {
      cb(salary - salary * 0.01);
    }, 1000);
};

let afterRent = (salary, cb) => {
  setTimeout(() => {
      cb(salary - 200);
    }, 1000);
};

let myMoney = () => {
  getSalary((salary) => {
        afterTax(salary, (afterTaxSalary) => {
            afterRent(afterTaxSalary, (afterRentSalary) => {
              console.log(afterRentSalary)
            })
        });     
    });
};

myMoney();
