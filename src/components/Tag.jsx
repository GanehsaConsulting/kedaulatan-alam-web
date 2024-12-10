import { PiLeafFill } from "react-icons/pi"

export const Tag = ({ text, className }) => {
    return (
        <>
            <p className={`${className} text-sm mb-3 uppercase font-thin border-[0.1px] rounded-full w-fit pr-2 pl-1 py-[2px] border-emerald-700 text-emerald-700 flex items-center gap-1`}>
                <PiLeafFill className="bg-secondaryColor text-emerald-700 p-[1px] text-sm rounded-full" />
                {text}
            </p>
        </>
    )
}