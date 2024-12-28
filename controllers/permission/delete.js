const { PermissionProvider } = require('../../providers/permission');
const httperror = require('http-errors');

class DeletePermission {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const permissionProvider = new PermissionProvider();
            const flight = await permissionProvider.delete(this.flightId);
            if (!flight) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeletePermission = DeletePermission;