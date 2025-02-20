import React from 'react'
import Image from "next/image";

const Card = ({ title, height, desc,image='' }) => {
    return (
        <article className={`p-4 rounded-lg shadow-md md:h-${height}`}>
             {/* <Image className="block md:hidden mt-4" src={image} width={354} height={282} alt="car post 1" /> */}
             <Image src={image} width={370} height={190} className="w-8/12 md:w-10/12 mt-4 " alt="" />

            <h2 className="text-xl font-semibold">{title}</h2>
            {desc}
        </article>
    )
}

export default Card
