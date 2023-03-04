import { IMailProvider, IMessage } from "../mail-provider.interface";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "4ed36e145b1cab",
        pass: " ",
      },
    });
  }

  public async sendMail(message: IMessage): Promise<void> {
    this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.name,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
