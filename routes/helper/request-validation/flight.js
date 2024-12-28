const Joi = require("joi");
const error = require("./error-response");

const flightIdValidation = (req, res, next) => {
  const flightId = Joi.string().trim().required();

  const reqBodyValidation = flightId.validate(req.params.id);

  if (reqBodyValidation.error) {
    error(reqBodyValidation.error, res);
  } else {
    next();
  }
};

const createFlightValidation = (req, res, next) => {
  const reqBodySchema = Joi.object({
    flightNumber: Joi.string().required(),
    airline: Joi.string().required(),
    origin: Joi.string().required(),
    destination: Joi.string().required(),
    departureTime: Joi.date().iso().required(),
    status: Joi.string().valid('On Time', 'Delayed', 'Departed', 'Boarding').required()
  });
  const reqBodyValidation = reqBodySchema.validate(req.body);
  if (reqBodyValidation.error) {
    error(reqBodyValidation.error, res);
  } else {
    next();
  }
};

const updateFlightValidation = (req, res, next) => {
  const reqBodySchema = Joi.object({
    flightNumber: Joi.string(),
    airline: Joi.string(),
    origin: Joi.string(),
    destination: Joi.string(),
    departureTime: Joi.date().iso(),
    status: Joi.string().valid('On Time', 'Delayed', 'Departed', 'Boarding')
  });
  const reqBodyValidation = reqBodySchema.validate(req.body);
  if (reqBodyValidation.error) {
    error(reqBodyValidation.error, res);
  } else {
    next();
  }
};
module.exports = {
  flightIdValidation,
  createFlightValidation,
  updateFlightValidation,
};
