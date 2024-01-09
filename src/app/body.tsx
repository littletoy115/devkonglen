'use client';


import { useRouter } from 'next/navigation'
import { Children, useState } from 'react';

export default function Body({children}:any) {


    const [count, setCount] = useState(false);

    const [statePage, setStatePage] = useState();

    return (
        <>
         <div>
            {children}
         </div>
        </>
    )
}
