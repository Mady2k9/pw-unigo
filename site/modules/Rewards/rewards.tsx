import React, { useState } from 'react'
import cn from 'clsx'
import s from './rewards.module.css'
import Container from '@components/ui/Container/Container'
import { Typography } from '@components/ui'
import { Tabs } from '@components/ui'
export interface RewardsProps {}

const Rewards: React.FC<RewardsProps> = (props) => {
  const rootClassName = cn(s.root, {})

  return (
    <>
      <Container className="mx-auto max-w-6xl py-10 flex flex-col">
        <Typography weight={500}>
          <ul className={s.list_disc}>
            <li>
              After Stage 2 of the Interactive activity session with our experts
              10 students from each class will be selected for rewards based on
              their Ranks that is determined by Profile evaluation and interview
              round. These performances are based on exposure of students in
              different areas Excellence in Academics, Aptitude, Skills,
              Exposure and Language Capabilities.
            </li>
            <li>Each Student who cleared Stage 1 will be awarded.</li>
            <li>
              10 Best students from each class will be invited to PW marvels
              Grand felicitation function along with their parents and Mentors.
              Here Students will be awarded as well as have a chance to meet our
              esteem mentors who’ll guide them for there future endeavors.
              Rewards based on student rank are described below
            </li>
          </ul>
        </Typography>
      </Container>
      <Container
        className="mx-auto md:max-w-6xl md:px-6 py-3 flex flex-col"
        clean
      >
        <div className={[s.reward_section, s.bkg1].join(' ')}>
          <img className={s.img1m} src="/table_img_01.svg" alt="img-1" />

          <div className={s.reward_section_heading}>Rewards for Students</div>
          <div className={s.reward_section_seperator}></div>
          <div className="flex">
            <div className={s.reward_section_left}>
              <div className="relative overflow-x-auto  rounded-lg mb-[16px] border border-[#E4E7EA]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                  <thead className={s.table_heading}>
                    <tr>
                      <td>PW Marvel Rank</td>
                      <td>
                        Cash Prize
                        <br />
                        (Class 8)
                      </td>
                      <td>
                        Cash Prize
                        <br />
                        (Class 9-11)
                      </td>
                      <td>Medals</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={s.table_text}>1</td>
                      <td className={s.table_text}>Rs 1,00,000/-</td>
                      <td className={s.table_text}>Rs 2,00,000/-</td>
                      <td className={s.table_text}>
                        Gold Medal
                        <br />
                        (10 gms)
                      </td>
                    </tr>
                    <tr>
                      <td className={s.table_text}>2</td>
                      <td className={s.table_text}>Rs 80,000/-</td>
                      <td className={s.table_text}>Rs 1,60,000/-</td>
                      <td className={s.table_text}>
                        Gold Medal
                        <br />
                        (8 gms)
                      </td>
                    </tr>
                    <tr>
                      <td className={s.table_text}>3</td>
                      <td className={s.table_text}>Rs 60,000/-</td>
                      <td className={s.table_text}>Rs 1,20,000/-</td>
                      <td className={s.table_text}>
                        Gold Medal
                        <br />
                        (5 gms)
                      </td>
                    </tr>
                    <tr>
                      <td className={s.table_text}>4 - 6</td>
                      <td className={s.table_text}>Rs 48,000/-</td>
                      <td className={s.table_text}>Rs 1,00,000/-</td>
                      <td className={s.table_text}>
                        Silver Medal
                        <br />
                        (15 gms)
                      </td>
                    </tr>
                    <tr>
                      <td className={s.table_text}>7 - 10</td>
                      <td className={s.table_text}>Rs 40,000/-</td>
                      <td className={s.table_text}>Rs 60,000/-</td>
                      <td className={s.table_text}>
                        Silver Medal
                        <br />
                        (10 gms)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative w-4/12 overflow-hidden">
              <img className={s.img1} src="/table_img_01.svg" alt="img-1" />
            </div>
          </div>
        </div>
      </Container>
      <Container
        className="mx-auto md:max-w-6xl md:px-6 py-3 flex flex-col"
        clean
      >
        <div className={[s.reward_section, s.bkg2].join(' ')}>
          <img className={s.img2m} src="/table_img_02.svg" alt="img-2" />
          <div className={s.reward_section_heading}>Rewards for Parents</div>
          <div className={s.reward_section_seperator}></div>
          <div className="flex">
            <div className={s.reward_section_left}>
              <div className="relative overflow-x-auto  sm:rounded-lg mb-[16px] border border-[#E4E7EA]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                  <thead className={s.table_heading}>
                    <tr>
                      <td className="sm:w-1/4 w-1/2">PW Marvel Rank</td>
                      <td className="sm:w-3/4 w-1/2">Certificate</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={s.table_text}>1 - 10</td>
                      <td className={s.table_text}>
                        Silver Medal
                        <br />
                        (10 gms)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative w-4/12 overflow-hidden">
              <img className={s.img2} src="/table_img_02.svg" alt="img-2" />
            </div>
          </div>
        </div>
      </Container>
      <Container
        className="mx-auto md:max-w-6xl md:px-6 py-3 flex flex-col"
        clean
      >
        <div className={[s.reward_section, s.bkg3].join(' ')}>
          <img className={s.img3m} src="/table_img_03.svg" alt="img-3" />
          <div className={s.reward_section_heading}>Rewards for School</div>
          <div className={s.reward_section_seperator}></div>
          <div className="flex">
            <div className={s.reward_section_left}>
              <div className="relative overflow-x-auto  sm:rounded-lg mb-[16px] border border-[#E4E7EA]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                  <thead className={s.table_heading}>
                    <tr>
                      <td className="sm:w-1/4 w-1/2">PW Marvel Rank</td>
                      <td className="sm:w-3/4 w-1/2">Certificate</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={s.table_text}>1 - 10</td>
                      <td className={s.table_text}>
                        Vidya Alankar Certificate
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative w-4/12 overflow-hidden">
              <img className={s.img3} src="/table_img_03.svg" alt="img-1" />
            </div>
          </div>
        </div>
      </Container>
      <Container
        className="mx-auto md:max-w-6xl md:px-6 py-3 flex flex-col mb-10"
        clean
      >
        <div className="bg-[#F8F8F8] px-[16px] py-[24px]  sm:rounded-xl">
          <div className={s.reward_bottom_heading}>
            A memento and coated ‘Silver Coin’ for all who crosses PW Marvel
            Evaluation
          </div>
        </div>
      </Container>
    </>
  )
}

export default Rewards
