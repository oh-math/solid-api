export interface IAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}


// creating a interface for a e-mail sender service use the D (Dependency Inversion Principle), because the class
// that gonna use this service (the `useCase`), do not know the implementation
export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
