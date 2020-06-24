export const mailFormat = /^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$/g;

export const isbnFormat = /^978\\-\\d{2}\\-\\d{5}\\-\\d{2}\\-\\d$/;

export const notEmpty = (value) => (value === " " ? false : true);

export const isEmpty = (value) => !notEmpty(value);

export const isNull = (value) => value === null;
