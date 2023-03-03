import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import { ICreateUserRequesDTO } from "./create-user.dto";

export class CreateUserUseCase {
  // using an interface in the repository, you can already code your useCases (service)
  // without implementing the interface
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(data: ICreateUserRequesDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
