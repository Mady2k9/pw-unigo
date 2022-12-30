import {NotFound as NotFoundIcon} from "@components/icons";
import {Button, Typography} from "@components/ui";
import {useRouter} from "next/router";


export default function NotFound() {
    const router = useRouter()
    return (
        <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
            <NotFoundIcon/>
            <Typography >
                OOPS! PAGE NOT FOUND
            </Typography>
            <Typography>
                We're sorry, the page you requested could not be found.
            </Typography>
            <div className={'w-[200px] pt-5'}>
                <Button stretch={true} onClick={() => router.push('/')}>
                    Home
                </Button>
            </div>
        </div>
    )
}

