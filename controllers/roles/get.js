const { RolesProvider } = require('../../providers/roles');
const httperror = require('http-errors');

class GetRoles {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const rolesProvider = new RolesProvider();
            const result = await rolesProvider.getById(this.flightId);
            if (!result) {
                throw new httperror(404, `Role not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetRoles = GetRoles;