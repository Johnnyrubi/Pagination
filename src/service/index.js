const { validationPages }  = require("../utils/validation");
const pagination = require("../logic");

const serviceController = ({page, pageSize}) => {
    validationPages(page, pageSize);
    return pagination(Number(page), Number(pageSize));
};

module.exports = serviceController;
