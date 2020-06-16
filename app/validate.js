export const mailFormat = /^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$/g;

export const notEmpty = (value) => (value === " " ? false : true);

export const isEmpty = (value) => !notEmpty(value);
