export const mailFormat = /^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$/g;

export const valueNotEmpty = (value) => (value === " " ? false : true);

export const valueEmpty = (value) => !valueNotNull(value);
