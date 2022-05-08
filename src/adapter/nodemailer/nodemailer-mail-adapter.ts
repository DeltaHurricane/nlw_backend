import { MailAdapter, SandMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "836e6d753a35bf",
    pass: "5096beeedd26b3",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SandMailData) {
    await transport.sendMail({
      from: "Equipe Fidget <qqcoisa@gmail.com>",
      to: "Lucas <Expes1953@gustr.com>",
      subject: data.subject,
      html: data.body,
    });
  }
}
