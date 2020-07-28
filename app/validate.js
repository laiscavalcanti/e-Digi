export const mailFormat = /^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$/g;

export const isbnFormat = /(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)/;

export const notEmpty = (value) => (value === " " ? false : true);

export const isEmpty = (value) => !notEmpty(value);

export const isNull = (value) => value === null;

export const maxLength = (length) => (value) => value.length < length;

export const isBiggerThan = (filter) => (value) => value >= filter;
