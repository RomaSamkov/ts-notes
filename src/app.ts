type Admin = {
  name: string;
  age: 36;
  previligious: string[];
};

type User = {
  name: string;
  startDate: Date;
};

type AdminUser = Admin & User;
