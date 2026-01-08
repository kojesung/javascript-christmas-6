export const hasDuplicateElement = (list) => {
    return list.length !== new Set(list).size;
};
