import React from "react"
export const EmptyDeep=(element)=> {
    if (element === null) {
        return true;
    }
    if (Array.isArray(element)) {
        if (element.length === 0) {
            return true;
        }

        let result;
        for (let i = 0; i < element.length; i += 1) {
            if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
                || (typeof element[i] === 'string' && element[i] !== '')) {
                result = false;
                break;
            }
            if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
                result = EmptyDeep(element[i]);
                break;
            }

            result = true;
        }

        return result;
    }
    if (typeof element === 'object') {
        const objectKeys = Object.keys(element);
        if (objectKeys.length === 0) {
            return true;
        }

        let result;
        for (let i = 0; i < objectKeys.length; i += 1) {
            const value = element[objectKeys[i]];

            if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
                || (typeof value === 'string' && value !== '')) {
                result = false;
                break;
            }
            if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
                result = EmptyDeep(value);
                break;
            }

            result = true;
        }

        return result;
    }

};

console.log(EmptyDeep([]))