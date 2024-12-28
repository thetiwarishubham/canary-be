const { PermissionProvider } = require('../../providers/permission');

class GetAllPermissions {
    constructor() {
    }
    async execute() {
        try {
            const permissionProvider = new PermissionProvider();
            const result = await permissionProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllPermissions = GetAllPermissions;