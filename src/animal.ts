console.log('animal.ts');
export class Animal {
  constructor() {
    console.log('animal');
  }
}

export class Dog extends Animal {
  constructor() {
    super();
  }
}
