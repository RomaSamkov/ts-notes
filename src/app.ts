class House {
  public street: string;
  public tenants: string[] = [];
  constructor(n: string) {
    this.street = n;
  }
  public showAdress(this: House, add: string): void {
    console.log('Adress:' + this.street + ' ' + add);
  }
  public addTenant(name: string) {
    this.tenants.push(name);
  }
  public showTenant() {
    console.log(this.tenants);
  }
}

const house = new House('Street');
