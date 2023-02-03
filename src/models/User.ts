import { Eventing } from "./Eventing";
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}
export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}
  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
