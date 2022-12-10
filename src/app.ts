class House {
  street: string;
  constructor(n: string) {
    this.street = n;
  }
  showAdress(): void {
    console.log('Adress:' + this.street);
  }
}

const house = new House('Street');
house.showAdress();
