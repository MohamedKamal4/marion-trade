import Link from 'next/link';
import CircularText from './CircularText';
export default function Logo() {
    return (
        <div className=' relative z-25'>
            <Link
                href="/"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <CircularText
                    text="MARION*TRADE*"
                    onHover="speedUp"
                    spinDuration={20}
                    className=""
                />
            </Link>
        </div>
    )
}