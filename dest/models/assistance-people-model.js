"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../utils/db-connection");
class AssistancePeopleModel extends sequelize_1.Model {
}
AssistancePeopleModel.init({
    user_name: sequelize_1.DataTypes.STRING,
    mobile: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        validate: { isEmail: true }
    },
    superior: sequelize_1.DataTypes.INTEGER,
    features: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "负责的功能，字符串：逗号分割"
    },
}, {
    sequelize: db_connection_1.default,
    underscored: true,
    tableName: 'assistance_people',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
AssistancePeopleModel.sync();
exports.default = AssistancePeopleModel;
//# sourceMappingURL=assistance-people-model.js.map