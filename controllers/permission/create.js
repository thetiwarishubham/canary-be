const { PermissionProvider } = require('../../providers/permission');
const httperror = require('http-errors');

class CreatePermission {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const permissionProvider = new PermissionProvider();
            await permissionProvider.create(this.createObj);
            return 'Permission Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreatePermission = CreatePermission;