import {Layout} from '@components/common'
import {useRouter} from "next/router";


export default function Home() {
    const router = useRouter()
    return (
        <>
            Home
        </>
    )
}

Home.Layout = Layout
