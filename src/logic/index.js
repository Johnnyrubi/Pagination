const pageSizeLessThanFive = (page, pageSize) => {
    const array = [];

    for (let i = 1; i <= pageSize; i++) {
        if (page === i) {
            array.push(`**${page}**`);
        } 
        else {
            array.push(`${i}`);
        }
    };
    return array;
};

const treePointsEnd = (page) => {
    const array = [];

    for (let i = 1; i <= 5; i++) {
        if (page === i) {
            array.push(`**${page}**`);
        }
        else {
            array.push(`${i}`);
        }
    }
    array.push('...');
    return array;
};

const finalPages = (page, pageSize) => {
    const array = ['...'];

    for (let i = pageSize - 4; i <= pageSize; i++) {
        if (page === i) {
            array.push(`**${page}**`);
        } 
        else {
            array.push(`${i}`);
        }
    };
    return array;
};

const treePointsEndandInit = (page) => {
    const array = ['...'];

    for (let i = page - 2; i <= page + 2; i++) {
        if (page === i) {
            array.push(`**${page}**`);
        } 
        else {
            array.push(`${i}`);
        }
    };
    array.push('...');
    return array;
};


const pagination = (page, pageSize) => {
    if (pageSize <= 5) return pageSizeLessThanFive(page, pageSize);

    if (page < 4 && pageSize > 5) return treePointsEnd(page);

    if (page > (pageSize - 3)) return finalPages(page, pageSize);

    return treePointsEndandInit(page);
};

module.exports = pagination;
