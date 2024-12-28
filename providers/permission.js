const Permission = require('../models/permission');
const httperror = require('http-errors');

class PermissionProvider {

	async list(filter = {}) {
		try {
			const result = await Permission.find(filter).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async getById(flightId) {
		try {
			const result = await Permission.findById({ _id: flightId }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async count(flightId) {
		try {
			const result = await Permission.countDocuments({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}

	async create(createBody) {
		try {
			const result = await Permission.create(createBody);
			return result;
		} catch (error) {
			throw error;
		}
	}

	async update(flightId, updateObj) {
		try {
			const result = await Permission.findOneAndUpdate({ _id: flightId }, updateObj, { new: true }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async delete(flightId) {
		try {
			const result = await Permission.findOneAndDelete({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}
}


exports.PermissionProvider = PermissionProvider;