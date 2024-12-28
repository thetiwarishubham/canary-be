const { RolesProvider } = require('../../providers/roles');

class GetAllRoles {
    constructor() {
    }
    async execute() {
        try {
            const rolesProvider = new RolesProvider();
            const result = await rolesProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllRoles = GetAllRoles;