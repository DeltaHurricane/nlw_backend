"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const createMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: createMailSpy });
describe("submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "Bug",
            comment: "example",
            screenshot: "data:image/png;base64",
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(createMailSpy).toHaveBeenCalled();
    });
    it("should not be able to submit a feedback without a type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "example",
            screenshot: "data:image/png;base64",
        })).rejects.toThrow();
    });
    it("should not be able to submit a feedback without a comment", async () => {
        await expect(submitFeedback.execute({
            type: "Bug",
            comment: "",
            screenshot: "data:image/png;base64",
        })).rejects.toThrow();
    });
    it("should not be able to submit a feedback with an invalid screenshot", async () => {
        await expect(submitFeedback.execute({
            type: "Bug",
            comment: "example",
            screenshot: "teste.jpg",
        })).rejects.toThrow();
    });
});
