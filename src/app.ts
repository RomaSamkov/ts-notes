function CheckEmail(target: any, name: string, position: number) {
  console.log('target:', target);
  console.log('name:', name);
  console.log('position:', position);
}

class Person {
  setEmail(_: number, @CheckEmail email: string) {
    console.log(email);
    console.log();
  }
}
