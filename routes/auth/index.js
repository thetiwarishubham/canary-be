const express = require('express');
const router = express.Router();

const { ControllerManager } = require('../../controllers/controller-manager');

const { GetAllAuths } = require('../../controllers/auth/list');
const { GetAuth } = require('../../controllers/auth/get');
const { LoginUser } = require('../../controllers/auth/login');
const { UpdateAuth } = require('../../controllers/auth/update');
const { DeleteAuth } = require('../../controllers/auth/delete');

// router.route('/:id').get(function (req, res, next) {
// 	const flightId = req.params.id;
// 	const controller = new GetFlight(flightId);
// 	ControllerManager.execute(controller)
// 		.then(data => {
// 			const response = {
// 				data: data
// 			};
// 			res.status(200).send(response);
// 		})
// 		.catch(error => {
// 			const response = {
// 				data: error.message
// 			};
// 			res.status(error.status || 400).send(response);
// 		});
// });

// router.route('/').get(function (req, res, next) {
// 	const controller = new GetAllFlights();
// 	ControllerManager.execute(controller)
// 		.then(data => {
// 			const response = {
// 				data: data
// 			};
// 			res.status(200).send(response);
// 		})
// 		.catch(error => {
// 			const response = {
// 				data: error.message
// 			};
// 			res.status(error.status || 400).send(response);
// 		});
// });

router.route('/').post(function (req, res, next) {
	const createObj = req.body;
	console.log('createObj', createObj);
	const controller = new LoginUser(createObj);
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				data: error.message
			};
			res.status(error.status || 400).send(response);
		});
});

// router.route('/:id').patch(function (req, res, next) {
// 	const flightId = req.params.id;
// 	const updateObj = req.body;
// 	const controller = new UpdateFlight(flightId, updateObj);
// 	ControllerManager.execute(controller)
// 		.then(data => {
// 			const response = {
// 				data: data
// 			};
// 			res.status(200).send(response);
// 		})
// 		.catch(error => {
// 			const response = {
// 				data: error.message
// 			};
// 			res.status(error.status || 400).send(response);
// 		});
// });

// router.route('/:id').delete(function (req, res, next) {
// 	const flightId = req.params.id;
// 	const controller = new DeleteFlight(flightId);
// 	ControllerManager.execute(controller)
// 		.then(data => {
// 			const response = {
// 				data: data
// 			};
// 			res.status(200).send(response);
// 		})
// 		.catch(error => {
// 			const response = {
// 				error: error.message
// 			};
// 			res.status(error.status || 400).send(response);
// 		});
// });


module.exports = router