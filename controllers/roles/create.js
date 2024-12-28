const { RolesProvider } = require('../../providers/roles');
const httperror = require('http-errors');

class CreateRoles {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const rolesProvider = new RolesProvider();
            await rolesProvider.create(this.createObj);
            return 'Role Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateRoles = CreateRoles;