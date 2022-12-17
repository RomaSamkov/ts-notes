interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IProgrammer {
  codeMessage(): void;
}

class Programmer implements IPerson, IProgrammer {
  constructor(public name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age < 28) {
      throw new Error('Young!!!');
    }
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }

  codeMessage(): void {
    console.log('Hello CodeWriter!!!');
  }
}

abstract class Programm {
  protected coder?: IProgrammer;

  public sitInCode(coder: IProgrammer) {
    this.coder = coder;
  }

  public abstract startCoding(): boolean;
}

class VSCode extends Programm {
  public startCoding() {
    if (!coder) {
      throw new Error('No coder!');
    }
    console.log('Coding...');

    coder.codeMessage();

    return true;
  }
}

const coder = new Programmer('JS', 36);
const vscode = new VSCode();
coder.greet('Hello I am');
vscode.sitInCode(coder);
vscode.startCoding();
