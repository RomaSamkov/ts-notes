type Admin = {
  name: string;
  previligious: string[];
};

type User = {
  name: string;
  startDate: Date;
};

type AdminUser = Admin & User;

type Complex = string | number;

function foo(a: Complex, b: Complex) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
