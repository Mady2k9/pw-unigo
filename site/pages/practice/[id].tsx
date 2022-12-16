import React from 'react'
import {useRouter} from "next/router";
import {PracticeComponent} from "@modules/k8/test-engine";

const Practice = () => {
    const router = useRouter();
    return (
        <PracticeComponent id={router.query.id as string}/>
    )
}

export default Practice
