export const validateNotEmpty = (input) => {
    const trimmed = input.trim();
    if (!trimmed) return false;
    return trimmed;
};

export const validateNumber = (input) => {
    const num = Number(input);
    if (isNaN(num)) return false;
    return num;
};

export const validateNumberInRange = (input, min, max) => {
    const num = validateNumber(input);
    if (num < min || num > max) return false;
    return num;
};
