const Context = require('../models/context');
const httperror = require('http-errors');

class ContextProvider {

	async list(filter = {}) {
		try {
			const result = await Context.find(filter).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async getById(flightId) {
		try {
			const result = await Context.findById({ _id: flightId }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async count(flightId) {
		try {
			const result = await Context.countDocuments({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}

	async create(createBody) {
		try {
			const result = await Context.create(createBody);
			return result;
		} catch (error) {
			throw error;
		}
	}

	async update(flightId, updateObj) {
		try {
			const result = await Context.findOneAndUpdate({ _id: flightId }, updateObj, { new: true }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async delete(flightId) {
		try {
			const result = await Context.findOneAndDelete({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}
}


exports.ContextProvider = ContextProvider;