export const required = value => {
    if (value) {
      return undefined;
    }
    return 'Field is required';
}

export const maxLengthCreator = (maxLengt) => (value) => {
    if (value.length > maxLengt) return `Max length is ${maxLengt} symbols`;
    return undefined;
}
