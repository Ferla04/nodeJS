import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import getCountries from './helpers/getCountries.js';
import filterRegion from './helpers/filterRegion.js';
import filterFromTo from './helpers/filterFromTo.js';
import { validatorSearch } from './validators/search.js';
import sortCountries from './helpers/sortCountries.js';
import pageCountries from './helpers/pageCountries.js';

const app = express();
const port = process.env.PORT;

app.get('/:region?', validatorSearch, (req, res) => {
    const { region = '' } = req.params;
    const { from = 0, to, sort, pageNumber, pageSize } = req.query;

    getCountries().then(countries => {
        let filter = countries;

        if (region) filter = filterRegion(filter, region);
        if (from || to) filter = filterFromTo(filter, { from, to });
        if (sort) filter = sortCountries(filter, sort);
        if (pageNumber && pageSize) filter = pageCountries(filter, pageNumber, pageSize);

        res.json({
            counts: filter.length,
            filter
        });
    });
})

app.use((req, res) => {
    res.status(404).end();
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
