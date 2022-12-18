import {Login} from "@modules/auth/components";
import {useEffect} from "react";
import {useUI} from "@components/ui";
import {useRouter} from "next/router";


export default function LoginPage() {

    const {user} = useUI();
    const router = useRouter();
    useEffect(() => {
        if (user) {
            router.replace('/');
        }
    }, [user])
    return (
        <Login/>
    )
}

