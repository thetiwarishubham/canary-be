const { ContextProvider } = require('../../providers/context');
const httperror = require('http-errors');

class CreateContext {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            if (this.createObj.type === 'GraphQL') {
                this.createObj.query = await this.optimizeGraphQLQuery(this.createObj.query);
                this.createObj.schema = await this.optimizeAndCompressData(this.createObj.schema);
                this.createObj.mockApis = await this.optimizeAndCompressData(this.createObj.mockApis);
            }
            const contextProvider = new ContextProvider();
            await contextProvider.create(this.createObj);
            return 'Context Created Successfully';
        } catch (error) {
            throw error;
        }
    }

    async optimizeGraphQLQuery(query) {
        // Remove newlines and extra spaces within the query
        return query
            .replace(/\s+/g, ' ')  // Replace multiple spaces/newlines with a single space
            .replace(/\n/g, '')  // Remove newline characters
            .replace(/\s?{\s?/g, '{')  // Remove spaces around opening brace
            .replace(/\s?}\s?/g, '}')  // Remove spaces around closing brace
            .trim();// Trim any leading/trailing spaces
    }

    async optimizeAndCompressData(data) {
        // Remove newline characters, extra spaces, and trim the data
        return JSON.stringify(JSON.parse(data))
            .replace(/\s+/g, ' ') // Replace multiple spaces/newlines with a single space
            .replace(/\s?{\s?/g, '{') // Remove spaces around opening brace
            .replace(/\s?}\s?/g, '}') // Remove spaces around closing brace
            .replace(/\s?\[\s?/g, '[') // Remove spaces around opening square bracket
            .replace(/\s?\]\s?/g, ']') // Remove spaces around closing square bracket
            .trim(); // Trim any leading/trailing spaces
    }

}

exports.CreateContext = CreateContext;