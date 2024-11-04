import { Typography } from "@material-tailwind/react"
import React from "react"
const CKHeader = () => {
    return (
        <section className="
            flex w-full flex-row flex-wrap items-center justify-center bg-black
            gap-y-6 gap-x-12  py-3 text-center md:justify-between px-3">

            <Typography variant="h3" color="white">
                CkMoney
            </Typography>
        </section>
    )
}

export default CKHeader