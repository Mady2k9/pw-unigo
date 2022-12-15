import React from 'react'
import {useRouter} from "next/router";
import {PracticeComponent} from "@modules/k8/test-engine";
import {LoadingSection} from "@components/ui";

const Practice = () => {
    const router = useRouter();
    return (
        <PracticeComponent id={router.query.id as string}/>
    )
}

export default Practice
