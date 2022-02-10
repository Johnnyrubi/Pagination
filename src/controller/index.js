const servicePagination = require('');
const Pagination = require('');

const controllerPagination = (req, res) => {
    servicePagination(req);

    const data = Pagination(req);

    return res.status(200).json(data);
}

module.exports = controllerPagination;
