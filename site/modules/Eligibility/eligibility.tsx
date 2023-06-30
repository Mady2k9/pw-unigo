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

              <tbody className="marvel-table">
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Scholarship Award (Only profile based)
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>Oxbridge Summer Program</td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    BAL SHAKTI PURASKAR (National Child Award In
                    Academics/Research/Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    EPGY Summer Workshop Stanford, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program, John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Smith Summer Science And Engineering Program (SSEP)
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>PROMYS India</td>
                  <td className={s.table_text}>Selected for Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>RAM TP Residential Camp</td>
                  <td className={s.table_text}>Selected for Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Atlas Fellowship India</td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    International
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE
                    NSEJS/IOQJS Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for NSEJS/IOQJS Part 1
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE
                    NJSO/IOQJS Part 2
                  </td>
                  <td className={s.table_text}>
                    Selected for INJSO/IOQJS Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE-IJSO
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Astronomy Olympiad - Junior, Nehru Science
                    Centre Mumbai
                  </td>
                  <td className={s.table_text}>SELECTED FOR OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-NSEB/IOQB Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INBO/IOQB Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-NBO/IOQB Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IBO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA- NSEA/IOQA Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INAO/IOQA Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA-INAO/IOQA Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory Topper/ Practical Topper/ Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOAA</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IESO-National Entrance Test
                  </td>
                  <td className={s.table_text}>Selected for Training Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IESO- TRAINING CAMP
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IESO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IOQM Part 1/IOQM
                  </td>
                  <td className={s.table_text}>
                    Selected for IOQM Part 2/Selected for INMO
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IOQM Part 2/INMO
                  </td>
                  <td className={s.table_text}>Selected for IMOTC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IMOTC
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IMO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- ZIO/ZCO
                  </td>
                  <td className={s.table_text}>Selected for INOI</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- INOI
                  </td>
                  <td className={s.table_text}>Selected for IOITC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- IOITC
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOI</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -NSEP/IOQP Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INPhO/IOQP Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -INPhO/IOQP Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IPhO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IChO-(I) NSEC/IOQC Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INChO/IOQC Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IChO-(I) INChO/IOQC Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>OCSC</td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IChO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOL (International
                    Linguistics Olympiad)- Panini Linguistics Olympiad Round 1
                  </td>
                  <td className={s.table_text}>
                    Selected for Invitational Round/Round 2 Camp
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOL (International
                    Linguistics Olympiad)- Panini Linguistics Olympiad Round 2
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOL</td>
                  <td className={s.table_text}>
                    Gold Medal/Silver Medal/Bronze medal/Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Physics Olympiad (APhO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Physics Olympiad (APhO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girl’s Mathematical Olympiad (EGMO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girl’s Mathematical Olympiad (EGMO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girls Olympiad in Informatics (EGOI)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girls Olympiad in Informatics (EGOI)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asia-Pacific Informatics Olympiad (APIO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asia-Pacific Informatics Olympiad (APIO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Pacific Mathematics Olympiad (APMO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Pacific Mathematics Olympiad (APMO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Science
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Astronomy Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad (NSO) First Level, By SOF New
                    Delhi
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad (NSO) Second Level, By SOF New
                    Delhi
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) by,Silverzone
                    Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) First level
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) second level
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Talent Search Examination (NSTSE), By
                    Unified Council
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maharashtra State Scholarship Exam
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maharashtra Olympiad Movement
                  </td>
                  <td className={s.table_text}>
                    Maharashtra Olympiad State Scholar certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Maths Science Talent Examination (AIMS TALENT
                    EXAM)
                  </td>
                  <td className={s.table_text}>All India Rank 1-3</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Science Olympiad by International Society For Olympiad
                    (ISFO)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2/1st Percentile at Level 2/2nd
                    percentile at Level 2/3rd Percentile at Level 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Genius Search Foundation
                  </td>
                  <td className={s.table_text}>
                    100 Percentile in NGSE Mains/100 Percentile in NGSE
                    Advanced/Less than 100 but 90 or above 90 Percentile in NGSE
                    Mains/Less than 100 but 90 or above 90 Percentile in NGSE
                    Advanced
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    ASSET - Science by Educational Initiatives
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Chemistry Quiz (ICQ)
                  </td>
                  <td className={s.table_text}>
                    HD Excellence/High Distinction
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Young Physicists Tournament
                  </td>
                  <td className={s.table_text}>Selection in National team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Level Science Olympiad(NLSO) conducted by National
                    Teachers Council,Bangalore
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Dr. Homi Bhabha Balvaidnyanik Competition by The Mumbai
                    Science Teachers Association
                  </td>
                  <td className={s.table_text}>
                    Selected for Round 2 (Practical Round)/Selected for Round 3
                    (Interview Round)/Gold medalist
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 1 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 2 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 3 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 1 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 2 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 3 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 1 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 2 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 3 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Science Olympiad by National Olympiad
                    Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Science Olympiad (CSO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Science Olympiad (USO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3 / Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Astronomy and Astrophysics Competition (IAAC)
                  </td>
                  <td className={s.table_text}>
                    1st Prize. 2nd Prize, 3rd Prize / Special national award
                    certificate / Selected for Final Round
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    NASTA National Assessment for Scientific Temperament &
                    Aptitude (KAMP NASTA)
                  </td>
                  <td className={s.table_text}>
                    District Topper / State Topper / National topper
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Indian School Talent Search Exam
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Science Promotion Orient Test (SPOT) by Vikram Sarabhai
                    Science foundation
                  </td>
                  <td className={s.table_text}>
                    National Spot 100 Qualifiers (Final)
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Aglasem Talent Search Exam by Aglasem
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Hindustan Olympiad</td>
                  <td className={s.table_text}>District Topper/State Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Hong Kong International Science Olympiad
                  </td>
                  <td className={s.table_text}>
                    Gold Award / Silver Award / Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Foundation Science Olympiad Olympiad (IFSO) by
                    International Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    GC International Science Olympiad (GISO) by Genius Cerebrum
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by National
                    Teachers Council
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Vidhyarti Vigyan Manthan(VVM)
                  </td>
                  <td className={s.table_text}>
                    Selected for State Level Camp / Selected for National Level
                    Camp/ Winner at National Level
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    VANDA Science International Competition
                  </td>
                  <td className={s.table_text}>
                    Gold Award / Silver Award / Bronze Award
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Maths
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) First Level, by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) Second Level by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) First Level,
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) Second Level,
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) by Silverzone
                    Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Maths Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Southeast Asian Mathematical Olympiad (SEAMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score/Gold Medal/ Silver Medal/ Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Singapore And Asian School Math Olympiads (SASMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score/Gold Medal/Silver Medal/Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Math Olympiad by International Society For Olympiad (ISFO)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2/1st Percentile at Level 2/2nd
                    percentile at Level 2/3rd Percentile at Level 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Open Mathematics Scholarship Examination
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Math Olympiad(IJMO)
                  </td>
                  <td className={s.table_text}>Awardees</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    ASSET-Mathematics by Educational Initiatives
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 1 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 2 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 3 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Maths Olympiad by National Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Maths Olympiad (UMO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3/Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Hong Kong International Mathematical Olympiad (HKIMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Singapore International Math Olympiad Challenge (SIMOC)
                  </td>
                  <td className={s.table_text}>
                    Overall Champion/Gold Medal/ Silver Medal/ Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>Mathematical Kangaroo</td>
                  <td className={s.table_text}>
                    Gold medal/Silver medal/Bronze medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Limit (Online mathematics Competition)
                  </td>
                  <td className={s.table_text}>
                    Top 10%/Selected for Mathematics Camp
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>American Math Olympiad (AMO)</td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maths Talent Search Examination (MTSE) by Indian Institute
                    for studies in Mathematics
                  </td>
                  <td className={s.table_text}>Rank 1 to 50</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Foundation Mathematics Olympiad (IFMO) by
                    International Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    GC International Mathematics Olympiad (GIMO) by Genius
                    Cerebrum
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Thailand International Maths Olympiad (TIMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    WORLD INTERNATIONAL MATHEMATICAL OLYMPIAD (WIMO) FINAL
                  </td>
                  <td className={s.table_text}>
                    Gold Award/Silver Award/Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Aryabhatt National Maths Competition by AICTSD
                  </td>
                  <td className={s.table_text}>
                    1st Prize, 2nd Prize & 3rd Prize
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unified International Mathematics Olympiad (UIMO) by Unified
                    Council
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    INSTITUTE FOR PROMOTION OF MATHEMATICS (IPM)
                  </td>
                  <td className={s.table_text}>Selected for Mega Final</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Mathematics Olympiad (CMO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Mathematics Olympiad by IIT Bombay
                  </td>
                  <td className={s.table_text}>Winners</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    DOKA (Depth of Knowledge Assessment) International
                    Mathematical Problem-Solving Competition
                  </td>
                  <td className={s.table_text}>
                    High Distinction/Distinction/High Credit/Credit
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Youth Math Challenge(IYMC)
                  </td>
                  <td className={s.table_text}>
                    Selected for Final / Gold Honour / Silver Honour / Bronze
                    Honour in final
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    JMMC SRINIVASA RAMANUJAN MEMORIAL MATH TALENT SEARCH EXAM
                    (ALL INDIA)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2 Exam/Merit Rank 1 to 15 of each class
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Level Mathematics Olympiad(NLMO) conducted by
                    National Teachers Council,Bangalore
                  </td>
                  <td className={s.table_text}>Olympaid Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Australian Mathematics Competition by Australian Mathematics
                    Trust
                  </td>
                  <td className={s.table_text}>
                    Peter O’Halloran Certificate of Excellence/Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    American Math Contest (AMC) by Mathematical Association of
                    America
                  </td>
                  <td className={s.table_text}>Selected for AIME</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Intelligence Quotient (IQ) Test
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Reasoning Olympiad (CRO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Critical Thinking Olympiad (UCTO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3 / Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>TECHNOTHLON by IIT Guwahati</td>
                  <td className={s.table_text}>
                    selected for mains / winner in mains
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>TECHKRITI BY IIT KANPUR</td>
                  <td className={s.table_text}>Selected for Phase 2/Winners</td>
                </tr>
                <tr>
                  <td className={s.table_text}>NATIONAL CREATIVITY OLYMPIAD</td>
                  <td className={s.table_text}>
                    SELECTED FOR NATIONAL LEVEL EXAM / WINNER AT NATIONAL LEVEL
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>Conquest IQ olympiad</td>
                  <td className={s.table_text}>All india Rank 1-100</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Reasoning & Aptitude Olympiad (IRAO)by
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    BREAKTHROUGH JUNIOR CHALLENGE
                  </td>
                  <td className={s.table_text}>Finalist</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Mathematics Talent Reward Programme (MTRP)
                  </td>
                  <td className={s.table_text}>
                    1st position in level 2/ 2nd position in level 2/ 3rd
                    position in level 2
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Scientific Aptitude
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IRIS Science Fair</td>
                  <td className={s.table_text}>
                    Selected for National Fair/Grand Award Winner/Special Award
                    Winner/Selected for INTEL ISEF/ISEF Winners
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    NASA Space Settlement Contest, By NASA AMES & NSS
                  </td>
                  <td className={s.table_text}>
                    Grand Prize/First Prize/Second Prize/Third Prize/Honorable
                    Mention
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Childrens Science Congress, By NCSTC Networks
                  </td>
                  <td className={s.table_text}>National Participant/Winner</td>
                </tr>
                <tr>
                  <td className={s.table_text}>INSPIRE AWARD</td>
                  <td className={s.table_text}>
                    Selected for State level/Selected for National level/Winner
                    at National Level
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Dr. APJ Abdul Kalam IGNITE Competition by National
                    Innovation Foundation
                  </td>
                  <td className={s.table_text}>Awardees</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CSIR Innovation Award for School Children
                  </td>
                  <td className={s.table_text}>
                    First Prize/Second Prize/Third Prize/Fourth Prize/Fifth
                    Prize
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Raman Young Science Innovators
                  </td>
                  <td className={s.table_text}>Finalists</td>
                </tr>
                <tr>
                  <td className={s.table_text}>CBSE SCIENCE EXHIBITION</td>
                  <td className={s.table_text}>
                    Selected for National Level Exhibition
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Foreign Admission
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>SAT by College Board, USA</td>
                  <td className={s.table_text}>Score 1401-1600</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    AP (Calculus AB, Calculus BC, Biology, Chemistry, Physics 1,
                    Physics 2, Physics C (Mechanics), Physics (Electricity and
                    Magnetism)
                  </td>
                  <td className={s.table_text}>
                    Score 5 in One or More Subjects
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Non Routine Mathematics
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Mathematics Talent Contest (NMTC) Prelims Conducted
                    by AMTI
                  </td>
                  <td className={s.table_text}>Selected for NMTC Stage 2</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Mathematics Talent Contest (NMTC) Finals Conducted
                    by AMTI
                  </td>
                  <td className={s.table_text}>Rank in Finals</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Junior Mathematical Olympiad (JMO) Odisha
                  </td>
                  <td className={s.table_text}>Gold Medal/Silver Medal</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Iranian Geometry Olympiad</td>
                  <td className={s.table_text}>
                    Gold medal/Silver medal/Bronze medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Non-Routine Mathematics Olympiad (UNRMO) by Unicus
                    Olympiad
                  </td>
                  <td className={s.table_text}>
                    Merit Certificate / Selected for Level 2 exam
                  </td>
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

              <tbody className="marvel-table">
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Scholarship Award (Only profile based)
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>Oxbridge Summer Program</td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    BAL SHAKTI PURASKAR (National Child Award In
                    Academics/Research/Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    EPGY Summer Workshop Stanford, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program, John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Smith Summer Science And Engineering Program (SSEP)
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>PROMYS India</td>
                  <td className={s.table_text}>Selected for Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>RAM TP Residential Camp</td>
                  <td className={s.table_text}>Selected for Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Atlas Fellowship India</td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    International
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE
                    NSEJS/IOQJS Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for NSEJS/IOQJS Part 1
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE
                    NJSO/IOQJS Part 2
                  </td>
                  <td className={s.table_text}>
                    Selected for INJSO/IOQJS Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE-IJSO
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Astronomy Olympiad - Junior, Nehru Science
                    Centre Mumbai
                  </td>
                  <td className={s.table_text}>SELECTED FOR OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-NSEB/IOQB Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INBO/IOQB Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-NBO/IOQB Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IBO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA- NSEA/IOQA Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INAO/IOQA Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA-INAO/IOQA Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory Topper/ Practical Topper/ Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOAA</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IESO-National Entrance Test
                  </td>
                  <td className={s.table_text}>Selected for Training Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IESO- TRAINING CAMP
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IESO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IOQM Part 1/IOQM
                  </td>
                  <td className={s.table_text}>
                    Selected for IOQM Part 2/Selected for INMO
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IOQM Part 2/INMO
                  </td>
                  <td className={s.table_text}>Selected for IMOTC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IMOTC
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IMO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- ZIO/ZCO
                  </td>
                  <td className={s.table_text}>Selected for INOI</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- INOI
                  </td>
                  <td className={s.table_text}>Selected for IOITC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- IOITC
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOI</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -NSEP/IOQP Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INPhO/IOQP Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -INPhO/IOQP Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IPhO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IChO-(I) NSEC/IOQC Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INChO/IOQC Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IChO-(I) INChO/IOQC Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>OCSC</td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IChO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOL (International
                    Linguistics Olympiad)- Panini Linguistics Olympiad Round 1
                  </td>
                  <td className={s.table_text}>
                    Selected for Invitational Round/Round 2 Camp
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOL (International
                    Linguistics Olympiad)- Panini Linguistics Olympiad Round 2
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOL</td>
                  <td className={s.table_text}>
                    Gold Medal/Silver Medal/Bronze medal/Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Physics Olympiad (APhO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Physics Olympiad (APhO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girl’s Mathematical Olympiad (EGMO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girl’s Mathematical Olympiad (EGMO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girls Olympiad in Informatics (EGOI)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girls Olympiad in Informatics (EGOI)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asia-Pacific Informatics Olympiad (APIO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asia-Pacific Informatics Olympiad (APIO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Pacific Mathematics Olympiad (APMO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Pacific Mathematics Olympiad (APMO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Science
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Astronomy Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad (NSO) First Level, By SOF New
                    Delhi
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad (NSO) Second Level, By SOF New
                    Delhi
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) by,Silverzone
                    Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) First level
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) second level
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Talent Search Examination (NSTSE), By
                    Unified Council
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maharashtra State Scholarship Exam
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maharashtra Olympiad Movement
                  </td>
                  <td className={s.table_text}>
                    Maharashtra Olympiad State Scholar certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Maths Science Talent Examination (AIMS TALENT
                    EXAM)
                  </td>
                  <td className={s.table_text}>All India Rank 1-3</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Science Olympiad by International Society For Olympiad
                    (ISFO)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2/1st Percentile at Level 2/2nd
                    percentile at Level 2/3rd Percentile at Level 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Genius Search Foundation
                  </td>
                  <td className={s.table_text}>
                    100 Percentile in NGSE Mains/100 Percentile in NGSE
                    Advanced/Less than 100 but 90 or above 90 Percentile in NGSE
                    Mains/Less than 100 but 90 or above 90 Percentile in NGSE
                    Advanced
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    ASSET - Science by Educational Initiatives
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Chemistry Quiz (ICQ)
                  </td>
                  <td className={s.table_text}>
                    HD Excellence/High Distinction
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Young Physicists Tournament
                  </td>
                  <td className={s.table_text}>Selection in National team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Level Science Olympiad(NLSO) conducted by National
                    Teachers Council,Bangalore
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Dr. Homi Bhabha Balvaidnyanik Competition by The Mumbai
                    Science Teachers Association
                  </td>
                  <td className={s.table_text}>
                    Selected for Round 2 (Practical Round)/Selected for Round 3
                    (Interview Round)/Gold medalist
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 1 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 2 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 3 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 1 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 2 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 3 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 1 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 2 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 3 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Science Olympiad by National Olympiad
                    Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Science Olympiad (CSO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Science Olympiad (USO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3 / Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Astronomy and Astrophysics Competition (IAAC)
                  </td>
                  <td className={s.table_text}>
                    1st Prize. 2nd Prize, 3rd Prize / Special national award
                    certificate / Selected for Final Round
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    NASTA National Assessment for Scientific Temperament &
                    Aptitude (KAMP NASTA)
                  </td>
                  <td className={s.table_text}>
                    District Topper / State Topper / National topper
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Indian School Talent Search Exam
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Science Promotion Orient Test (SPOT) by Vikram Sarabhai
                    Science foundation
                  </td>
                  <td className={s.table_text}>
                    National Spot 100 Qualifiers (Final)
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Aglasem Talent Search Exam by Aglasem
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Hindustan Olympiad</td>
                  <td className={s.table_text}>District Topper/State Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Hong Kong International Science Olympiad
                  </td>
                  <td className={s.table_text}>
                    Gold Award / Silver Award / Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Foundation Science Olympiad Olympiad (IFSO) by
                    International Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    GC International Science Olympiad (GISO) by Genius Cerebrum
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by National
                    Teachers Council
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Vidhyarti Vigyan Manthan(VVM)
                  </td>
                  <td className={s.table_text}>
                    Selected for State Level Camp / Selected for National Level
                    Camp/ Winner at National Level
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    VANDA Science International Competition
                  </td>
                  <td className={s.table_text}>
                    Gold Award / Silver Award / Bronze Award
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Maths
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) First Level, by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) Second Level by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) First Level,
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) Second Level,
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) by Silverzone
                    Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Maths Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Southeast Asian Mathematical Olympiad (SEAMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score/Gold Medal/ Silver Medal/ Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Singapore And Asian School Math Olympiads (SASMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score/Gold Medal/Silver Medal/Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Math Olympiad by International Society For Olympiad (ISFO)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2/1st Percentile at Level 2/2nd
                    percentile at Level 2/3rd Percentile at Level 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Open Mathematics Scholarship Examination
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Math Olympiad(IJMO)
                  </td>
                  <td className={s.table_text}>Awardees</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    ASSET-Mathematics by Educational Initiatives
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 1 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 2 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 3 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Maths Olympiad by National Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Maths Olympiad (UMO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3/Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Hong Kong International Mathematical Olympiad (HKIMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Singapore International Math Olympiad Challenge (SIMOC)
                  </td>
                  <td className={s.table_text}>
                    Overall Champion/Gold Medal/ Silver Medal/ Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>Mathematical Kangaroo</td>
                  <td className={s.table_text}>
                    Gold medal/Silver medal/Bronze medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Limit (Online mathematics Competition)
                  </td>
                  <td className={s.table_text}>
                    Top 10%/Selected for Mathematics Camp
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>American Math Olympiad (AMO)</td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maths Talent Search Examination (MTSE) by Indian Institute
                    for studies in Mathematics
                  </td>
                  <td className={s.table_text}>Rank 1 to 50</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Foundation Mathematics Olympiad (IFMO) by
                    International Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    GC International Mathematics Olympiad (GIMO) by Genius
                    Cerebrum
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Thailand International Maths Olympiad (TIMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    WORLD INTERNATIONAL MATHEMATICAL OLYMPIAD (WIMO) FINAL
                  </td>
                  <td className={s.table_text}>
                    Gold Award/Silver Award/Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Aryabhatt National Maths Competition by AICTSD
                  </td>
                  <td className={s.table_text}>
                    1st Prize, 2nd Prize & 3rd Prize
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unified International Mathematics Olympiad (UIMO) by Unified
                    Council
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    INSTITUTE FOR PROMOTION OF MATHEMATICS (IPM)
                  </td>
                  <td className={s.table_text}>Selected for Mega Final</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Mathematics Olympiad (CMO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Mathematics Olympiad by IIT Bombay
                  </td>
                  <td className={s.table_text}>Winners</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    DOKA (Depth of Knowledge Assessment) International
                    Mathematical Problem-Solving Competition
                  </td>
                  <td className={s.table_text}>
                    High Distinction/Distinction/High Credit/Credit
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Youth Math Challenge(IYMC)
                  </td>
                  <td className={s.table_text}>
                    Selected for Final / Gold Honour / Silver Honour / Bronze
                    Honour in final
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    JMMC SRINIVASA RAMANUJAN MEMORIAL MATH TALENT SEARCH EXAM
                    (ALL INDIA)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2 Exam/Merit Rank 1 to 15 of each class
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Level Mathematics Olympiad(NLMO) conducted by
                    National Teachers Council,Bangalore
                  </td>
                  <td className={s.table_text}>Olympaid Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Australian Mathematics Competition by Australian Mathematics
                    Trust
                  </td>
                  <td className={s.table_text}>
                    Peter O’Halloran Certificate of Excellence/Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    American Math Contest (AMC) by Mathematical Association of
                    America
                  </td>
                  <td className={s.table_text}>Selected for AIME</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Intelligence Quotient (IQ) Test
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Reasoning Olympiad (CRO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Critical Thinking Olympiad (UCTO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3 / Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>TECHNOTHLON by IIT Guwahati</td>
                  <td className={s.table_text}>
                    selected for mains / winner in mains
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>TECHKRITI BY IIT KANPUR</td>
                  <td className={s.table_text}>Selected for Phase 2/Winners</td>
                </tr>
                <tr>
                  <td className={s.table_text}>NATIONAL CREATIVITY OLYMPIAD</td>
                  <td className={s.table_text}>
                    SELECTED FOR NATIONAL LEVEL EXAM / WINNER AT NATIONAL LEVEL
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>Conquest IQ olympiad</td>
                  <td className={s.table_text}>All india Rank 1-100</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Reasoning & Aptitude Olympiad (IRAO)by
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    BREAKTHROUGH JUNIOR CHALLENGE
                  </td>
                  <td className={s.table_text}>Finalist</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Mathematics Talent Reward Programme (MTRP)
                  </td>
                  <td className={s.table_text}>
                    1st position in level 2/ 2nd position in level 2/ 3rd
                    position in level 2
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Scientific Aptitude
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IRIS Science Fair</td>
                  <td className={s.table_text}>
                    Selected for National Fair/Grand Award Winner/Special Award
                    Winner/Selected for INTEL ISEF/ISEF Winners
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    NASA Space Settlement Contest, By NASA AMES & NSS
                  </td>
                  <td className={s.table_text}>
                    Grand Prize/First Prize/Second Prize/Third Prize/Honorable
                    Mention
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Childrens Science Congress, By NCSTC Networks
                  </td>
                  <td className={s.table_text}>National Participant/Winner</td>
                </tr>
                <tr>
                  <td className={s.table_text}>INSPIRE AWARD</td>
                  <td className={s.table_text}>
                    Selected for State level/Selected for National level/Winner
                    at National Level
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Dr. APJ Abdul Kalam IGNITE Competition by National
                    Innovation Foundation
                  </td>
                  <td className={s.table_text}>Awardees</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CSIR Innovation Award for School Children
                  </td>
                  <td className={s.table_text}>
                    First Prize/Second Prize/Third Prize/Fourth Prize/Fifth
                    Prize
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Raman Young Science Innovators
                  </td>
                  <td className={s.table_text}>Finalists</td>
                </tr>
                <tr>
                  <td className={s.table_text}>CBSE SCIENCE EXHIBITION</td>
                  <td className={s.table_text}>
                    Selected for National Level Exhibition
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Foreign Admission
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>SAT by College Board, USA</td>
                  <td className={s.table_text}>Score 1401-1600</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    AP (Calculus AB, Calculus BC, Biology, Chemistry, Physics 1,
                    Physics 2, Physics C (Mechanics), Physics (Electricity and
                    Magnetism)
                  </td>
                  <td className={s.table_text}>
                    Score 5 in One or More Subjects
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Non Routine Mathematics
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Mathematics Talent Contest (NMTC) Prelims Conducted
                    by AMTI
                  </td>
                  <td className={s.table_text}>Selected for NMTC Stage 2</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Mathematics Talent Contest (NMTC) Finals Conducted
                    by AMTI
                  </td>
                  <td className={s.table_text}>Rank in Finals</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Junior Mathematical Olympiad (JMO) Odisha
                  </td>
                  <td className={s.table_text}>Gold Medal/Silver Medal</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Iranian Geometry Olympiad</td>
                  <td className={s.table_text}>
                    Gold medal/Silver medal/Bronze medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Non-Routine Mathematics Olympiad (UNRMO) by Unicus
                    Olympiad
                  </td>
                  <td className={s.table_text}>
                    Merit Certificate / Selected for Level 2 exam
                  </td>
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

              <tbody className="marvel-table">
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Scholarship Award (Only profile based)
                  </td>
                </tr>

                <tr>
                  <td className={s.table_text}>Oxbridge Summer Program</td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    BAL SHAKTI PURASKAR (National Child Award In
                    Academics/Research/Innovation)
                  </td>
                  <td className={s.table_text}>Awardee</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    EPGY Summer Workshop Stanford, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CTY Summer Program, John Hopkins University, USA
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Smith Summer Science And Engineering Program (SSEP)
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>PROMYS India</td>
                  <td className={s.table_text}>Selected for Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>RAM TP Residential Camp</td>
                  <td className={s.table_text}>Selected for Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Atlas Fellowship India</td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    International
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE
                    NSEJS/IOQJS Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for NSEJS/IOQJS Part 1
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE
                    NJSO/IOQJS Part 2
                  </td>
                  <td className={s.table_text}>
                    Selected for INJSO/IOQJS Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Science Olympiad (IJSO), HBCSE-IJSO
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Astronomy Olympiad - Junior, Nehru Science
                    Centre Mumbai
                  </td>
                  <td className={s.table_text}>SELECTED FOR OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-NSEB/IOQB Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INBO/IOQB Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-NBO/IOQB Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IBO-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IBO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA- NSEA/IOQA Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INAO/IOQA Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA-INAO/IOQA Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOAA-OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory Topper/ Practical Topper/ Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOAA</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IESO-National Entrance Test
                  </td>
                  <td className={s.table_text}>Selected for Training Camp</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IESO- TRAINING CAMP
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IESO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IOQM Part 1/IOQM
                  </td>
                  <td className={s.table_text}>
                    Selected for IOQM Part 2/Selected for INMO
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IOQM Part 2/INMO
                  </td>
                  <td className={s.table_text}>Selected for IMOTC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IMO-IMOTC
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IMO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- ZIO/ZCO
                  </td>
                  <td className={s.table_text}>Selected for INOI</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- INOI
                  </td>
                  <td className={s.table_text}>Selected for IOITC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOI- IOITC
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOI</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -NSEP/IOQP Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INPhO/IOQP Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -INPhO/IOQP Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IPHO -OCSC
                  </td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IPhO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IChO-(I) NSEC/IOQC Part 1
                  </td>
                  <td className={s.table_text}>
                    Selected for INChO/IOQC Part 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IChO-(I) INChO/IOQC Part 2
                  </td>
                  <td className={s.table_text}>Selected for OCSC</td>
                </tr>
                <tr>
                  <td className={s.table_text}>OCSC</td>
                  <td className={s.table_text}>
                    Theory & Practical Topper/ Theory Topper/ Practical Topper/
                    Selected in Team
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IChO</td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOL (International
                    Linguistics Olympiad)- Panini Linguistics Olympiad Round 1
                  </td>
                  <td className={s.table_text}>
                    Selected for Invitational Round/Round 2 Camp
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Official International Olympiads-IOL (International
                    Linguistics Olympiad)- Panini Linguistics Olympiad Round 2
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>IOL</td>
                  <td className={s.table_text}>
                    Gold Medal/Silver Medal/Bronze medal/Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Physics Olympiad (APhO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Physics Olympiad (APhO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girl’s Mathematical Olympiad (EGMO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girl’s Mathematical Olympiad (EGMO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girls Olympiad in Informatics (EGOI)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    European Girls Olympiad in Informatics (EGOI)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asia-Pacific Informatics Olympiad (APIO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asia-Pacific Informatics Olympiad (APIO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Pacific Mathematics Olympiad (APMO)
                  </td>
                  <td className={s.table_text}>Selected in Team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Asian Pacific Mathematics Olympiad (APMO)
                  </td>
                  <td className={s.table_text}>
                    Gold Medal/ Silver Medal/ Bronze Medal/ Certificate
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Science
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Astronomy Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad (NSO) First Level, By SOF New
                    Delhi
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Olympiad (NSO) Second Level, By SOF New
                    Delhi
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) by,Silverzone
                    Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) First level
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Science (IOS) second level
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Science Talent Search Examination (NSTSE), By
                    Unified Council
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maharashtra State Scholarship Exam
                  </td>
                  <td className={s.table_text}>Scholarship</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maharashtra Olympiad Movement
                  </td>
                  <td className={s.table_text}>
                    Maharashtra Olympiad State Scholar certificate
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Maths Science Talent Examination (AIMS TALENT
                    EXAM)
                  </td>
                  <td className={s.table_text}>All India Rank 1-3</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Science Olympiad by International Society For Olympiad
                    (ISFO)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2/1st Percentile at Level 2/2nd
                    percentile at Level 2/3rd Percentile at Level 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Genius Search Foundation
                  </td>
                  <td className={s.table_text}>
                    100 Percentile in NGSE Mains/100 Percentile in NGSE
                    Advanced/Less than 100 but 90 or above 90 Percentile in NGSE
                    Mains/Less than 100 but 90 or above 90 Percentile in NGSE
                    Advanced
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    ASSET - Science by Educational Initiatives
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Chemistry Quiz (ICQ)
                  </td>
                  <td className={s.table_text}>
                    HD Excellence/High Distinction
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Young Physicists Tournament
                  </td>
                  <td className={s.table_text}>Selection in National team</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Level Science Olympiad(NLSO) conducted by National
                    Teachers Council,Bangalore
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Dr. Homi Bhabha Balvaidnyanik Competition by The Mumbai
                    Science Teachers Association
                  </td>
                  <td className={s.table_text}>
                    Selected for Round 2 (Practical Round)/Selected for Round 3
                    (Interview Round)/Gold medalist
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 1 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 2 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Science Olympiad level 3 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 1 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 2 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Space Science Olympiad Level 3 by Eduheal
                    foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 1 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 2 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Biotechnology Olympiad Level 3 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Science Olympiad by National Olympiad
                    Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Science Olympiad (CSO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Science Olympiad (USO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3 / Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Astronomy and Astrophysics Competition (IAAC)
                  </td>
                  <td className={s.table_text}>
                    1st Prize. 2nd Prize, 3rd Prize / Special national award
                    certificate / Selected for Final Round
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    NASTA National Assessment for Scientific Temperament &
                    Aptitude (KAMP NASTA)
                  </td>
                  <td className={s.table_text}>
                    District Topper / State Topper / National topper
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Indian School Talent Search Exam
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Science Promotion Orient Test (SPOT) by Vikram Sarabhai
                    Science foundation
                  </td>
                  <td className={s.table_text}>
                    National Spot 100 Qualifiers (Final)
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Aglasem Talent Search Exam by Aglasem
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Hindustan Olympiad</td>
                  <td className={s.table_text}>District Topper/State Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Hong Kong International Science Olympiad
                  </td>
                  <td className={s.table_text}>
                    Gold Award / Silver Award / Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Foundation Science Olympiad Olympiad (IFSO) by
                    International Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    GC International Science Olympiad (GISO) by Genius Cerebrum
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Talent Search Examination (AITSE) by National
                    Teachers Council
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Vidhyarti Vigyan Manthan(VVM)
                  </td>
                  <td className={s.table_text}>
                    Selected for State Level Camp / Selected for National Level
                    Camp/ Winner at National Level
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    VANDA Science International Competition
                  </td>
                  <td className={s.table_text}>
                    Gold Award / Silver Award / Bronze Award
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Maths
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) First Level, by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) Second Level by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Mathematics Olympiad (IMO) by SOF
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) First Level,
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) Second Level,
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Olympiad of Mathematics (IOM) by Silverzone
                    Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Maths Olympiad by Orange Education
                  </td>
                  <td className={s.table_text}>National Rank 1-10</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Southeast Asian Mathematical Olympiad (SEAMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score/Gold Medal/ Silver Medal/ Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Singapore And Asian School Math Olympiads (SASMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score/Gold Medal/Silver Medal/Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Math Olympiad by International Society For Olympiad (ISFO)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2/1st Percentile at Level 2/2nd
                    percentile at Level 2/3rd Percentile at Level 2
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    All India Open Mathematics Scholarship Examination
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Junior Math Olympiad(IJMO)
                  </td>
                  <td className={s.table_text}>Awardees</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    ASSET-Mathematics by Educational Initiatives
                  </td>
                  <td className={s.table_text}>Subject Topper</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 1 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 2 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Interactive Maths Olympiad Level 3 by Eduheal
                    Foundation
                  </td>
                  <td className={s.table_text}>National Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Maths Olympiad by National Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Maths Olympiad (UMO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3/Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Hong Kong International Mathematical Olympiad (HKIMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Singapore International Math Olympiad Challenge (SIMOC)
                  </td>
                  <td className={s.table_text}>
                    Overall Champion/Gold Medal/ Silver Medal/ Bronze Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>Mathematical Kangaroo</td>
                  <td className={s.table_text}>
                    Gold medal/Silver medal/Bronze medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Limit (Online mathematics Competition)
                  </td>
                  <td className={s.table_text}>
                    Top 10%/Selected for Mathematics Camp
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>American Math Olympiad (AMO)</td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Maths Talent Search Examination (MTSE) by Indian Institute
                    for studies in Mathematics
                  </td>
                  <td className={s.table_text}>Rank 1 to 50</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Foundation Mathematics Olympiad (IFMO) by
                    International Olympiad Foundation
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    GC International Mathematics Olympiad (GIMO) by Genius
                    Cerebrum
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Thailand International Maths Olympiad (TIMO)
                  </td>
                  <td className={s.table_text}>
                    Perfect Score Award/Gold Award/ Silver Award/ Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    WORLD INTERNATIONAL MATHEMATICAL OLYMPIAD (WIMO) FINAL
                  </td>
                  <td className={s.table_text}>
                    Gold Award/Silver Award/Bronze Award
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Aryabhatt National Maths Competition by AICTSD
                  </td>
                  <td className={s.table_text}>
                    1st Prize, 2nd Prize & 3rd Prize
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unified International Mathematics Olympiad (UIMO) by Unified
                    Council
                  </td>
                  <td className={s.table_text}>All India Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    INSTITUTE FOR PROMOTION OF MATHEMATICS (IPM)
                  </td>
                  <td className={s.table_text}>Selected for Mega Final</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Mathematics Olympiad (CMO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Mathematics Olympiad by IIT Bombay
                  </td>
                  <td className={s.table_text}>Winners</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    DOKA (Depth of Knowledge Assessment) International
                    Mathematical Problem-Solving Competition
                  </td>
                  <td className={s.table_text}>
                    High Distinction/Distinction/High Credit/Credit
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Youth Math Challenge(IYMC)
                  </td>
                  <td className={s.table_text}>
                    Selected for Final / Gold Honour / Silver Honour / Bronze
                    Honour in final
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    JMMC SRINIVASA RAMANUJAN MEMORIAL MATH TALENT SEARCH EXAM
                    (ALL INDIA)
                  </td>
                  <td className={s.table_text}>
                    Selected for Level 2 Exam/Merit Rank 1 to 15 of each class
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Level Mathematics Olympiad(NLMO) conducted by
                    National Teachers Council,Bangalore
                  </td>
                  <td className={s.table_text}>Olympaid Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Australian Mathematics Competition by Australian Mathematics
                    Trust
                  </td>
                  <td className={s.table_text}>
                    Peter O’Halloran Certificate of Excellence/Medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    American Math Contest (AMC) by Mathematical Association of
                    America
                  </td>
                  <td className={s.table_text}>Selected for AIME</td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Intelligence Quotient (IQ) Test
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CREST Reasoning Olympiad (CRO) Level 2 by Crest Olympiads
                  </td>
                  <td className={s.table_text}>International Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Critical Thinking Olympiad (UCTO) by Unicus Olympiad
                  </td>
                  <td className={s.table_text}>
                    International Rank 1-3 / Zonal Rank 1-10
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>TECHNOTHLON by IIT Guwahati</td>
                  <td className={s.table_text}>
                    selected for mains / winner in mains
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>TECHKRITI BY IIT KANPUR</td>
                  <td className={s.table_text}>Selected for Phase 2/Winners</td>
                </tr>
                <tr>
                  <td className={s.table_text}>NATIONAL CREATIVITY OLYMPIAD</td>
                  <td className={s.table_text}>
                    SELECTED FOR NATIONAL LEVEL EXAM / WINNER AT NATIONAL LEVEL
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>Conquest IQ olympiad</td>
                  <td className={s.table_text}>All india Rank 1-100</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    International Reasoning & Aptitude Olympiad (IRAO)by
                    Silverzone Foundation
                  </td>
                  <td className={s.table_text}>Olympiad Rank 1-500</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    BREAKTHROUGH JUNIOR CHALLENGE
                  </td>
                  <td className={s.table_text}>Finalist</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Mathematics Talent Reward Programme (MTRP)
                  </td>
                  <td className={s.table_text}>
                    1st position in level 2/ 2nd position in level 2/ 3rd
                    position in level 2
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Scientific Aptitude
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>IRIS Science Fair</td>
                  <td className={s.table_text}>
                    Selected for National Fair/Grand Award Winner/Special Award
                    Winner/Selected for INTEL ISEF/ISEF Winners
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    NASA Space Settlement Contest, By NASA AMES & NSS
                  </td>
                  <td className={s.table_text}>
                    Grand Prize/First Prize/Second Prize/Third Prize/Honorable
                    Mention
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Childrens Science Congress, By NCSTC Networks
                  </td>
                  <td className={s.table_text}>National Participant/Winner</td>
                </tr>
                <tr>
                  <td className={s.table_text}>INSPIRE AWARD</td>
                  <td className={s.table_text}>
                    Selected for State level/Selected for National level/Winner
                    at National Level
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Dr. APJ Abdul Kalam IGNITE Competition by National
                    Innovation Foundation
                  </td>
                  <td className={s.table_text}>Awardees</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    CSIR Innovation Award for School Children
                  </td>
                  <td className={s.table_text}>
                    First Prize/Second Prize/Third Prize/Fourth Prize/Fifth
                    Prize
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Raman Young Science Innovators
                  </td>
                  <td className={s.table_text}>Finalists</td>
                </tr>
                <tr>
                  <td className={s.table_text}>CBSE SCIENCE EXHIBITION</td>
                  <td className={s.table_text}>
                    Selected for National Level Exhibition
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Foreign Admission
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>SAT by College Board, USA</td>
                  <td className={s.table_text}>Score 1401-1600</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    AP (Calculus AB, Calculus BC, Biology, Chemistry, Physics 1,
                    Physics 2, Physics C (Mechanics), Physics (Electricity and
                    Magnetism)
                  </td>
                  <td className={s.table_text}>
                    Score 5 in One or More Subjects
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td colSpan={2} className={s.table_sub_heading}>
                    Aptitude in Non Routine Mathematics
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Mathematics Talent Contest (NMTC) Prelims Conducted
                    by AMTI
                  </td>
                  <td className={s.table_text}>Selected for NMTC Stage 2</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    National Mathematics Talent Contest (NMTC) Finals Conducted
                    by AMTI
                  </td>
                  <td className={s.table_text}>Rank in Finals</td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Junior Mathematical Olympiad (JMO) Odisha
                  </td>
                  <td className={s.table_text}>Gold Medal/Silver Medal</td>
                </tr>
                <tr>
                  <td className={s.table_text}>Iranian Geometry Olympiad</td>
                  <td className={s.table_text}>
                    Gold medal/Silver medal/Bronze medal
                  </td>
                </tr>
                <tr>
                  <td className={s.table_text}>
                    Unicus Non-Routine Mathematics Olympiad (UNRMO) by Unicus
                    Olympiad
                  </td>
                  <td className={s.table_text}>
                    Merit Certificate / Selected for Level 2 exam
                  </td>
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
          Below is the eligibility criteria-
          <ul className={s.list_disc}>
            <li>
              Students from Class 8th to 11th are eligible for this award.
            </li>
            <li>
              Any Student who has qualified the below mentioned exam or won any
              scholarship or awards is eligible to apply for PW Marvels.
            </li>
            <li>
              You can mention your awards up to the last 2 years. Any awards
              that are before 2 years i.e. academic year for example today is
              10th may 2023, so you can fill all awards from jan 2021 to the
              date of registration.
            </li>
          </ul>
        </Typography>
        <Typography weight={900}>
          <div className="mt-6">
            Note: In case your exam or award are not listed here, you can send
            your achievements through mail at “email address of pw marvels” to
            us and our experts will review them.
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
