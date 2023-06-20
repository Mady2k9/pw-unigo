import React from 'react'
import cn from 'clsx'
import s from './faq.module.css'
import { FAQ, Loader, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface FaqProps {
    data: any;
}
const description = "Any student studying in class 5th to 10th can apply for the PW marvels. In order to nominate he/she must have proved himself/herself on National and International level examination/scholarships/ Awards  mentioned in our eligibility Criteria."

const items = [
    { title: "Who all can Apply for PW marvels ?", description:description },
    { title: "How will PW decide who all should be rewarded?", description:description },
    { title: "How will the student Profile be created?", description:description },
    { title: "How the Overall Rank of a student will be decided by PW?", description:description },
    { title: "How many students will be rewarded in each class ?", description:description },
    { title: "Is the presence of student essential for getting reward during the PW Marvel function?", description:description },
  ];
  

const Faq: React.FC<FaqProps> = (props) => {

    const rootClassName = cn(s.root, {})
    

    return <>
        <section className='mt-[80px]'>
        <Container className="mx-auto max-w-6xl">
                <div className='flex justify-center'>
                    <span className={s.heading_top}>Ask us</span>
                </div>
                <div className='flex justify-center'>
                    <span className={s.heading}>Frequently asked questions</span>
                </div> 
                <div className='my-14 w-3/4	 mx-auto '>
                    <FAQ items={items} hideFAQTitle />
                </div>    
            </Container>
        </section>
    </>
}

export default Faq