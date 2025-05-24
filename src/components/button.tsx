export function Button({
    label = 'Button',
    type = 'primary',
    active = true,
    onClick = () => null
}: {
    label?: string;
    type?: 'primary' | 'secondary';
    active?: boolean;
    onClick?: () => void;
}) {

    if (!active) {
        return (
            <button
                onClick={onClick}
                type="button"
                className="py-2 px-4 bg-white hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-pink-200 text-teal-900 hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
                {label}
            </button>
        )
    }

    if (type === 'secondary') {
        return (
            <button
                onClick={onClick}
                type="button"
                className="py-2 px-4 bg-stone-600 hover:bg-stone-700 focus:ring-stone-500 focus:ring-offset-stone-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
                {label}
            </button>
        )
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className="py-2 px-4 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        >
            {label}
        </button>
    )
}