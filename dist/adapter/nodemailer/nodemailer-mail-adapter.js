"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "836e6d753a35bf",
        pass: "5096beeedd26b3",
    },
});
class NodemailerMailAdapter {
    async sendMail(data) {
        await transport.sendMail({
            from: "Equipe Fidget <qqcoisa@gmail.com>",
            to: "Lucas <Expes1953@gustr.com>",
            subject: data.subject,
            html: data.body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
