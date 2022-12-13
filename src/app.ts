class House {
  private tenants: string[] = [];

  constructor(public type: string, protected street: string) {}

  public showAdress(this: House): void {
    console.log('Adress:' + this.street);
  }
  public showType(this: House): void {
    console.log('Type:' + this.type);
  }
  public addTenant(name: string) {
    this.tenants.push(name);
  }
  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chatHouse: string;
  constructor(street: string, main: string) {
    super('stone', street);
    this.chatHouse = main;
  }
  public showTenants() {
    console.log('Main:' + this.chatHouse);
    super.showTenants();
  }
  public showAdress(): void {
    console.log('Adress:' + this.street);
  }
}

const house = new StoneHouse('StoneStreet', 'User');
house.addTenant('Sexy');
house.addTenant('Pretty');
house.showTenants();
house.showAdress();
