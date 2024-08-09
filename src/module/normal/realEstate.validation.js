import Joi from "joi";
export const signUpSchema = {
  body: Joi.object({
    ownerID: Joi.number().pattern(new RegExp("/^1d*$/")),
    IBAN: Joi.string().pattern(),
  }),
};
