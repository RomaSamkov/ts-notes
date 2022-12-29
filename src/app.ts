function CheckEmail(target: any, name: string, position: number) {
  if (!target[name].validation) {
    target[name].validation = {};
  }

  Object.assign(target[name].validation, {
    [position]: (value: string) => {
      if (value.includes('@')) {
        return value;
      }
      throw new Error('Not valid email');
    },
  });
}

function Validation() {}

class Person {
  setEmail(_: number, @CheckEmail email: string) {
    console.log(email);
  }
}
