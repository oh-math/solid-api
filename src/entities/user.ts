import { randomUUID } from "crypto";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  
  // 'Omit' allows to  construct a object with all props except the prop indicated in 'K' generic
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props); // Does the same single assignment (eg: this.name = props.name) to properties of class, but simplified

    if (!id) {
      this.id = randomUUID();
    }
  }
}
