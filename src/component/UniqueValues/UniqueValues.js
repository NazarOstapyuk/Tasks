import React from 'react'

export const UniqueValues = ()=>{
const intersection =(arr1, arr2)=> {
    const result = [];
    arr1.forEach(element => {
        if (arr2.indexOf(element) !== -1 ) {
            result.push(element)
        }
    });
    return result;
}
console.log(intersection([12,23],[23,4]))
    return(
        <>
            <h2>Result:{intersection([1,2,3,6],[2,3,4,6]).join(' ,')}</h2>

            </>
    )
}