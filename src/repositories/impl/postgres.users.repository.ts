import { User } from "../../entities/user";
import { IUsersRepository } from "../users.repository.interface";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  public async save(user: User): Promise<void> {
   this.users.push(user) 
  }
}
