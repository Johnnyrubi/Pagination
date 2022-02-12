const { validationPages }  = require("../utils/validation");
const pagination = require("../logic");

const servicePagination = ({page, pageSize}) => {
    validationPages(page, pageSize);
    return pagination(Number(page), Number(pageSize));
};

module.exports = servicePagination;
