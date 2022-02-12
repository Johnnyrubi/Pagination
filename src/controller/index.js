const servicePagination = require('../service');

const controllerPagination = (req, res) => {
    const data = servicePagination(req.query);
    return res.status(200).json(data);
}

module.exports = controllerPagination;

