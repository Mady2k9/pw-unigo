import React, { useState } from 'react'
import cn from 'clsx'
import s from './eligibility.module.css'
import Container from '@components/ui/Container/Container'
import { Typography } from '@components/ui'
import { Tabs } from '@components/ui'
export interface EligibilityProps {}

const items = [
  {
    name: 'Class 8th',
    key: 'TabKey1',
  },
  {
    name: 'Class 9th',
    key: 'TabKey2',
  },
  {
    name: 'Class 10th',
    key: 'TabKey3',
  },
]

const Eligibility: React.FC<EligibilityProps> = (props) => {
  const rootClassName = cn(s.root, {})
  const [activeTab, setActiveTab] = useState(0)

  const getComponent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse border border: 1px solid #D9DCE1; table-fixed">
              <caption className={s.table_heading}>Class 8th</caption>

              <thead className={s.table_sub_heading_grey}>
                <tr>
                  <td>Competition Title</td>
                  <td>Criteria</td>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Profile Based scholarship Award
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>

                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>

                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Maths
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Profile Based scholarship Award
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Information Technology (IT)
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
              </tbody>
            </table>
          </div>
        )

      case 1:
        return (
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse border border: 1px solid #D9DCE1; table-fixed">
              <caption className={s.table_heading}>Class 9th</caption>

              <thead className={s.table_sub_heading_grey}>
                <tr>
                  <td>Competition Title</td>
                  <td>Criteria</td>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Profile Based scholarship Award
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>

                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Maths
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Profile Based scholarship Award
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Information Technology (IT)
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      case 2:
        return (
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse border border: 1px solid #D9DCE1; table-fixed">
              <caption className={s.table_heading}>Class 10th</caption>

              <thead className={s.table_sub_heading_grey}>
                <tr>
                  <td>Competition Title</td>
                  <td>Criteria</td>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Profile Based scholarship Award
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>

                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>

                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Maths
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Profile Based scholarship Award
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Language Proficiency
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International English Olympiad Language (IEOL) , Level 1 by
                    Education Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-300</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Information Technology (IT)
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Bal Shakti Purasakar (National Child Award in Academics/
                    Research/ Innovation)
                  </td>
                  <td className={s.table_text}>B2 Level</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by Council Of
                    Language
                  </td>
                  <td className={s.table_text}>Full Band</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
  }

  return (
    <>
      <Container className="mx-auto max-w-6xl py-10 flex flex-col">
        <Typography weight={500}>
          Below Eligibility criteria :-
          <ul className="list-disc mt-4 ms-4">
            <li>
              Students from Class 8th to 11th are eligible for this awards.
            </li>
            <li>
              Any students who has qualified below mentioned exam or win any
              below mentioned scholarship or Awards is eligible to apply for
              marvels.
            </li>
            <li>
              You can mention your awards upto last 2 years. Any awards that is
              before 2 years that is academic year for Example today is 10 may
              2023 so you can fill all awards you got from Jan 2021 to the date
              of registration.
            </li>
          </ul>
        </Typography>
        <Typography weight={900}>
          <div className="mt-6">
            Note: In case your exam or award are not listed here, you can send
            your achievements through mail at support@pwmarvel.live to us and
            our experts will review them.
          </div>
        </Typography>
      </Container>

      <div className={s.tab_section}>
        <Container className="mx-auto max-w-6xl py-10 flex flex-col">
          <div className={s.tab_heading}>
            Acheivement in following National and International Examination will
            be the Eligibility criteria for PW Mentors
          </div>
          <div className="py-4">
            <Tabs
              currentIndex={activeTab}
              items={items}
              onChange={(index) => {
                setActiveTab(index)
              }}
            />
          </div>
          {getComponent(activeTab)}
        </Container>
      </div>
    </>
  )
}

export default Eligibility
