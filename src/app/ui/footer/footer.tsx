import { Typography } from "@material-tailwind/react"

const CKFooter = () => {
    return(
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between px-3">
            <Typography color="blue-gray"  className="font-normal">
                <strong>@2024    RicseDev</strong>
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://github.com/Anthonyricse"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Github
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Blog
          </Typography>
        </li>
      </ul>
        </div>
    )
}

export default CKFooter