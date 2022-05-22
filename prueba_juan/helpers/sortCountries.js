const sortCountries = (data, sort = 'asc') => {
    const sort2 = data.sort((a, b) => {
        if (a.name === b.name) return 0;
        if (a.name < b.name) return -1;
        return 1;
    });
    if (sort === 'desc') return sort2.reverse();
    return sort2;
}

export default sortCountries;
