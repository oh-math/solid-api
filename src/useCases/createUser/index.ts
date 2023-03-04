import { MailtrapMailProvider } from "../../providers/impl/mailtrap-mail-provider";
import { PostgresUsersRepository } from "../../repositories/impl/postgres.users.repository";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "./create-user.useCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserController, createUserUseCase }
