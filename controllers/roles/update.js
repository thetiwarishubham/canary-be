const { RolesProvider } = require('../../providers/roles');
const httperror = require('http-errors');

class UpdateRoles {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const rolesProvider = new RolesProvider();
            const result = await rolesProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Role Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdateRoles = UpdateRoles;