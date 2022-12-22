type Admin = {
  name: string;
  previligious: string[];
};

type User = {
  name: string;
  startDate: Date;
};

type AdminUser = Admin & User;
