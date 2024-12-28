const express = require('express');
const router = express.Router();

const { ControllerManager } = require('../../controllers/controller-manager');

const { GetAllRoles } = require('../../controllers/roles/list');
const { GetRoles } = require('../../controllers/roles/get');
const { CreateRoles } = require('../../controllers/roles/create');
const { UpdateRoles } = require('../../controllers/roles/update');
const { DeleteRoles } = require('../../controllers/roles/delete');

router.route('/:id').get(function (req, res, next) {
	const flightId = req.params.id;
	const controller = new GetRoles(flightId);
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
	const controller = new GetAllRoles();
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
	const controller = new CreateRoles(createObj);
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
	const controller = new UpdateRoles(flightId, updateObj);
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
	const controller = new DeleteRoles(flightId);
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