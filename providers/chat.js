const Chat = require('../models/chat');
const httperror = require('http-errors');
const { Configuration, OpenAI } = require("openai");
const config = require('../config/config');

class ChatProvider {

	async welcomeMessage(filter = {}) {
		try {
			const openai = new OpenAI({ apiKey: config.OPENAI_API_KEY });
			const completion = await openai.chat.completions.create({
				model: "gpt-4o-mini",
				store: true,
				messages: [
					{ "role": "system", "content": filter.systemContext },
					{ "role": "user", "content": `greet user` }
				],
			});
			return completion?.choices[0]?.message?.content;
		} catch (error) {
			throw error;
		}
	}

	async getReply(filter = {}) {
		try {
			const openai = new OpenAI({ apiKey: config.OPENAI_API_KEY });
			const completion = await openai.chat.completions.create({
				model: "gpt-4o-mini",
				store: true,
				messages: [
					{ "role": "system", "content": filter.systemContext },
					{ "role": "user", "content": `Customer Question: ${filter.message}` }
				],
			});
			return completion?.choices[0]?.message?.content;
		} catch (error) {
			throw error;
		}
	}

	async list(filter = {}) {
		try {
			const result = await Chat.find(filter).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async getById(flightId) {
		try {
			const result = await Chat.findById({ _id: flightId }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async count(flightId) {
		try {
			const result = await Chat.countDocuments({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}

	async create(createBody) {
		try {
			const result = await Chat.create(createBody);
			return result;
		} catch (error) {
			throw error;
		}
	}

	async update(flightId, updateObj) {
		try {
			const result = await Chat.findOneAndUpdate({ _id: flightId }, updateObj, { new: true }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async delete(flightId) {
		try {
			const result = await Chat.findOneAndDelete({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}
}


exports.ChatProvider = ChatProvider;