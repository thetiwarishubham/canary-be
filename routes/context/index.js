const express = require('express');
const router = express.Router();

const { ControllerManager } = require('../../controllers/controller-manager');

const { GetAllContexts } = require('../../controllers/context/list');
const { GetContext } = require('../../controllers/context/get');
const { CreateContext } = require('../../controllers/context/create');
const { UpdateContext } = require('../../controllers/context/update');
const { DeleteContext } = require('../../controllers/context/delete');

router.route('/:id').get(function (req, res, next) {
	const flightId = req.params.id;
	const controller = new GetContext(flightId);
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

router.route('/').get(function (req, res, next) {
	const controller = new GetAllContexts();
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
	const controller = new CreateContext(createObj);
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

router.route('/:id').patch(function (req, res, next) {
	const flightId = req.params.id;
	const updateObj = req.body;
	const controller = new UpdateContext(flightId, updateObj);
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

router.route('/:id').delete(function (req, res, next) {
	const flightId = req.params.id;
	const controller = new DeleteContext(flightId);
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				error: error.message
			};
			res.status(error.status || 400).send(response);
		});
});


module.exports = router