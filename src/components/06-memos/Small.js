import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('Me volvi a llamar')
    return (
        <small>{value}</small>
    )
});

//Generalmente MEMO se encuentra implementado de esta forma
// export const Small = React.memo(({value}) => {
//     console.log('Me volvi a llamar')
//     return (
//         <small>{value}</small>
//     )
// })