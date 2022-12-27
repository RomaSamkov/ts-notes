/*
function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value as Function;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    },
  };
}
*/

function AddTax(tax: number) {
  return function (_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value as Function;

    return {
      configurable: true,
      enumerable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);
          return result + (result / 100) * tax;
        };
      },
    };
  };
}

class Payment {
  @AddTax(20)
  pay(money: number) {
    return money;
  }
}

const payment = new Payment();

console.log(payment.pay(100));
