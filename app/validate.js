export const emailFormat = /^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$/g;

export const isbnFormat = /978(?:-?\d){10}/g;

export const editionFormat = /^1[0-9].*$/g;

export const notEmpty = (value) => (value === " " ? false : true);

export const isEmpty = (value) => !notEmpty(value);

export const isNull = (value) => value === null;

export const maxLength = (length) => (value) => value.length < length;



