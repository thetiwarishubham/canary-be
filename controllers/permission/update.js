const { PermissionProvider } = require('../../providers/permission');
const httperror = require('http-errors');

class UpdatePermission {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const permissionProvider = new PermissionProvider();
            const result = await permissionProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Permission Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdatePermission = UpdatePermission;