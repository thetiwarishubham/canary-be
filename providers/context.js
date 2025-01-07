const Context = require('../models/context');
const httperror = require('http-errors');

class ContextProvider {

	async list(filter = {}) {
		try {
			const result = await Context.find({}).sort({ createdAt: -1 }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async listByName(filter = {}) {
		try {
			
			 // Ensure filter is an object
			 if (typeof filter !== 'object' || Array.isArray(filter)) {
				throw new Error('The filter parameter must be an object.');
			}
	
			// Apply regex search for the name field if provided
			if (filter.name) {
				filter.name = { $regex: filter.name, $options: 'i' }; // 'i' for case-insensitive search
			}
			const result = await Context.find(filter).select('name _id').lean();
			const modifiedResult = result.map((doc) => ({
				id: doc._id,
				name: doc.name,
			}));
	
			return modifiedResult;
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