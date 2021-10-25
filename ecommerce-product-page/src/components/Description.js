import React from 'react'

export const Description = () => {
    return (
        <div className="p-6 font-kumbhsans">
            <h1 className="my-2 uppercase tracking-wider font-bold text-sm text-primaryOrange">
                Sneaker Company
            </h1>
            <h2 className="my-2 text-3xl font-bold">
                Fall Limited Edition Sneakers
            </h2>
            <h3 className="text-neutralDarkGrayishBlue tracking-wide text-sm">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </h3>
            <div className="flex pt-5 items-center">
                <div className="flex gap-2 items-center">
                    <h1 className="text-3xl font-bold">$125.00</h1>
                    <div className="rounded-lg bg-primaryPaleOrange px-3 py-1">
                        <h3 className="font-bold text-primaryOrange">50%</h3>
                    </div>
                </div>
                <div className="flex justify-end flex-1">
                    <h2 className="line-through text-neutralGrayishBlue font-bold text-lg">
                        $250.00
                    </h2>
                </div>
            </div>
            <div className="flex w-auto mt-4 py-3 px-5 rounded-lg bg-neutralLightGrayishBlue justify-between items-center">
                <div className="text-primaryOrange font-bold text-2xl">-</div>
                <div className="font-bold text-lg">0</div>
                <div className="text-primaryOrange font-bold text-2xl">+</div>
            </div>

            <div className="">
                <a>Add to Cart</a>
            </div>
        </div>
    )
}
