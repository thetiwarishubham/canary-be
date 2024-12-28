const { PermissionProvider } = require('../../providers/permission');
const httperror = require('http-errors');

class GetPermission {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const permissionProvider = new PermissionProvider();
            const result = await permissionProvider.getById(this.flightId);
            if (!result) {
                throw new httperror(404, `Flight not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetPermission = GetPermission;