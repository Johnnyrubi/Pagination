const err = ({ statusCode, message }) => ({
    statusCode,
    message,
});

const ifExists = (pageNumber, pageSizeNumber) => {
    if (!pageNumber || !pageSizeNumber) {
        throw err({ statusCode: 400, message: "You must to write a value"});
    }
};

const ifAreNumber = (pageNumber, pageSizeNumber) => {
    if (typeof(pageNumber) !== 'number' || typeof(pageSizeNumber) !== 'number') {
        throw err ({ statusCode: 400, message: "Parametres must be a Number"});
    }
};

const ifArePositive = (pageNumber, pageSizeNumber) => {
    if (pageNumber <= 0 || pageSizeNumber <= 0) {
        throw err ({ statusCode: 400, message: "Page and Page Size must be a positive number"});
    }
};

const ifPageAreHigher = (pageNumber, pageSizeNumber) => {
    if (pageNumber > pageSizeNumber) {
        throw err ({statusCode: 400, message: "The Page Size must be higher than the Page"});
    }
};

const ifAreHigherThanOne = (pageNumber, pageSizeNumber) => {
    if (pageNumber <= 0 || pageSizeNumber < 1) {
        throw err ({statusCode: 400, message: "The Page and Page Size must be higher than One"});
    }
};

const validationPages = (page, pageSize) => {
    ifExists(page, pageSize);
    const pageNumber = Number(page);
    const pageSizeNumber = Number(pageSize);
    ifAreNumber(pageNumber, pageSizeNumber);
    ifArePositive(pageNumber, pageSizeNumber);
    ifPageAreHigher(pageNumber, pageSizeNumber);
    ifAreHigherThanOne(pageNumber, pageSizeNumber);
};

module.exports = {
    ifExists,
    validationPages,
    ifPageAreHigher,
    ifAreNumber,
    ifArePositive,
    ifPageAreHigher,
    ifAreHigherThanOne
};
