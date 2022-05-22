const pageCountries = (data, pageNumber, pageSize) => {
    const from = pageNumber * pageSize;
    const to = (pageNumber - 1) * pageSize;
    return data.filter((_, h) => h < from && h >= to);
}

export default pageCountries;
