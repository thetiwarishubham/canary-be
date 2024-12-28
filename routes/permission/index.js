const express = require('express');
const router = express.Router();

const { ControllerManager } = require('../../controllers/controller-manager');

const { GetAllPermissions } = require('../../controllers/permission/list');
const { GetPermission } = require('../../controllers/permission/get');
const { CreatePermission } = require('../../controllers/permission/create');
const { UpdatePermission } = require('../../controllers/permission/update');
const { DeletePermission } = require('../../controllers/permission/delete');

router.route('/:id').get(function (req, res, next) {
	const flightId = req.params.id;
	const controller = new GetPermission(flightId);
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
	const controller = new GetAllPermissions();
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
	const controller = new CreatePermission(createObj);
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
	const controller = new UpdatePermission(flightId, updateObj);
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
	const controller = new DeletePermission(flightId);
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