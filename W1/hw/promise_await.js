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
  
  let myMoney = async () => {
    try {
      let salary = await getSalary();
      let salaryAfterTax = await afterTax(salary);
      let salaryAfterRent = await afterRent(salaryAfterTax);
      console.log({salary, salaryAfterTax, salaryAfterRent});

      /// [salary, salaryAfterTax, salaryAfterRent] = await Promise.all([salary, salaryAfterTax, salaryAfterRent])
    } catch (error) {
      console.log(error)
    }
  };
  
  myMoney();
  