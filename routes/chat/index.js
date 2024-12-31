const express = require('express');
const router = express.Router();

const { ControllerManager } = require('../../controllers/controller-manager');

const { GetAllChats } = require('../../controllers/chat/list');
const { GetChat } = require('../../controllers/chat/get');
const { CreateChat } = require('../../controllers/chat/create');
const { WelcomeMessage } = require('../../controllers/chat/welcome-msg');
const { DeleteChat } = require('../../controllers/chat/delete');

// router.route('/:id').get(function (req, res, next) {
// 	const flightId = req.params.id;
// 	const controller = new GetChat(flightId);
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

router.route('/welcome-msg').post(function (req, res, next) {
	const createObj = req.body;
	const controller = new WelcomeMessage(createObj);
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

router.route('/').post(function (req, res, next) {
	const createObj = req.body;
	const controller = new CreateChat(createObj);
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
// 	const controller = new UpdateChat(flightId, updateObj);
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
// 	const controller = new DeleteChat(flightId);
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