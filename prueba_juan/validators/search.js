import { check } from 'express-validator';
import validateChecks from '../helpers/validateChecks.js';

export const validatorSearch = [
    check('from', 'Only Numbers').optional().isNumeric(),
    check('to', 'Only Numbers').optional().isNumeric(),
    check('sort', 'Only options desc or asc').optional().isIn(['desc', 'asc']),
    check('pageNumber', 'Only Numbers').optional().isNumeric(),
    check('pageNumber', 'Only Numbers').optional().isNumeric(),
    check('pageSize', 'Only Numbers').optional().isNumeric(),
    validateChecks
]
