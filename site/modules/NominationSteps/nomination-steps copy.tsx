import React from 'react'
import cn from 'clsx'
import s from './nomination-steps.module.css'
export interface NominationStepsProps {
    data: any;
}

const NominationSteps: React.FC<NominationStepsProps> = (props) => {

    const rootClassName = cn(s.root, {})

    return <section>
        <div className={s.step_bkg}>
            <div className='container'>
                <div className='flex justify-center'>
                        <span className={s.heading_top}>How to Register?</span>
                </div>
                <div className='flex justify-center'>
                        <span className={s.heading}>Fill Nomination in 3 simple steps</span>
                </div>
                
                <div className='md:flex justify-between'>
                    <div className='grid grid-cols-12 relative'>
                        <div>
                            <img className={s.left_img} src="/3dots.svg" alt="dots image" />
                        </div>
                      <div className='flex flex-col col-span-12 py-10'>
                            <div className={s.card}>
                                <div className={s.card_image_box}>
                                    <img className={s.card_img} src="/step_1.svg" alt="step 1" />
                                </div>
                                <div className={s.card_text_box}>
                                    <span className={s.card_heading_top}>Step 1</span>
                                    <span className={s.card_heading}>Register for PW Marvels</span>
                                    <span className={s.card_text}>Fill your basic details to make an account on PW so that you can Nominate yourself for PW Marvels</span>
                                </div>
                            </div>
                            <div className={s.card}>
                                <div className={s.card_image_box}>
                                    <img className={s.card_img} src="/step_2.svg" alt="step 1" />
                                </div>
                                <div className={s.card_text_box}>
                                    <span className={s.card_heading_top}>Step 2</span>
                                    <span className={s.card_heading}>Fill Nomination form</span>
                                    <span className={s.card_text}>you’ll get a dashboard where you can fill the nomination form that is defined, based on your class. Select your Qualified Exams/Awards/Scholarships in form.</span>
                                </div>
                            </div>
                            <div className={s.card}>
                                <div className={s.card_image_box}>
                                    <img className={s.card_img} src="/step_3.svg" alt="step 1" />
                                </div>
                                <div className={s.card_text_box}>
                                    <span className={s.card_heading_top}>Step 3</span>
                                    <span className={s.card_heading}>Get Awarded</span>
                                    <span className={s.card_text}>Get recognised for your efforts and rewarded according to merit! The more you accomplish, the better your chances to win big!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-11 hidden lg:flex">
                        <img className={s.right_img} src="/person.svg" alt="person image" />
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='container text-center'>
            <div className={s.bottom_text}>
            Apply now to be a <span className='text-[#5F43CC]'>PW Marvel</span> and stand a chance to win amazing rewards
            </div>
                <a href="/" className={s.color_btn}><span className='inline-flex text-white'>Register Now<img className='ms-4' src="/right-arrow.svg" alt="right-arrow" /></span></a>
        </div>
        
    </section>




}

export default NominationSteps