import React from 'react'


export const Dublicate = ()=>{
    const names = ['nazar', 'victor','nazar','victor','sergey'];
    const numbers = [2,3,4,2,3];


    const unique = (arr) => {
    return arr.filter((element, index) => arr.indexOf(element) === index)
}
    return(
        <>
            <div>
                <div>Names: {names.join(' ,')}</div>
                <div>Names filter: {unique(names).join(' ,')}</div>

            </div>

            <div>
                <div>numbers: {numbers.join(' ')}</div>
                <div>numbers filter: {unique(numbers).join(' ')}</div>
            </div>


        </>
    )
}

