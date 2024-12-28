const { RolesProvider } = require('../../providers/roles');
const httperror = require('http-errors');

class DeleteRoles {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const rolesProvider = new RolesProvider();
            const result = await rolesProvider.delete(this.rsultId);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeleteRoles = DeleteRoles;