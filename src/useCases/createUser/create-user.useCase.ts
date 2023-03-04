import { User } from "../../entities/user";
import { IMailProvider } from "../../providers/mail-provider.interface";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import { ICreateUserRequesDTO } from "./create-user.dto";

// L: Liskov Substitution Principle
// D: Dependency Inversion Principle

export class CreateUserUseCase {
  // using an interface in the repository, you can already code your useCases (service)
  // without implementing the interface
  constructor(
    private usersRepository: IUsersRepository,
    private mailtrapProvide: IMailProvider
  ) {}

  public async execute(data: ICreateUserRequesDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailtrapProvide.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do Meu App",
        email: "equipe@meuapp.com",
      },
      subject: "Seja bem-vindo(a)",
      body: "<p>Agora voce pode logar em Meu App</p>",
    });
  }
}
