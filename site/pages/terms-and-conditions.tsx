import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'

const termsCon = () => {
  return (
    <>
      <Header />
      <div className=" bg-[#F8F8F8]">
        <div className="md-[768px]:w-[70%] m-auto p-4 min-[320px]:p-1 min-[320px]:w-[90%]">
          <p className="text-slate-500 min-[320px]:text-xs">Home &gt; Terms & Conditions</p>
          <h1 className="text-2xl  min-[320px]:text-[18px] min-[320px]:font-bold md-[768px]:text-[28px]">Terms & Conditions</h1>
        </div>
      </div>
      <div className="w-[65%] m-auto">
        <ol className="list-decimal my-12 leading-6 text-sm min-[320px]:text-[14px] min-[320px]:leading-[22px]">
          <li className="min-[320px]:mb-1">
            Rewards given to students will be decided based on their combined
            performance of Stage 1 and 2. Interactive round marks given by our
            esteemed judges will be the final decision and that cannot be
            challenged.
          </li>
          <li className="min-[320px]:mb-1">
            The students who can qualify the criteria mentioned here will be
            eligible for PW Marvel Awards.
          </li>
          <li className="min-[320px]:mb-1">
            The final judgment of awards i.e. Cash Prizes & Medals in PW Marvel
            for every class, shall remain with Jury and Team of PW Marvels and
            the decision taken by them will be final and irrevocable.
          </li>
          <li className="min-[320px]:mb-1">
            Only the students of Class 5th to 10th are eligible for
            self-nomination of PW Marvels.
          </li>
          <li className="min-[320px]:mb-1">
            It is compulsory for the selected students to attend the PW Marvels
            felicitation function conducted by Physics Wallah based on the
            institute's notification
          </li>
          <li className="min-[320px]:mb-1">
            No reward/award/prize money shall be handed over to any of the
            student's relative/guardian or his/her representative in any case.
          </li>
          <li className="min-[320px]:mb-1">
            It is compulsory for the parents of the selected students to
            accompany the shortlisted students for PW Marvels felicitation
            function to become eligible for the respective rewards. No rewards
            shall be handed over to any representative under any circumstances.
          </li>
          <li className="min-[320px]:mb-1" >
            All the taxes & norms specified by the Government of India on the
            Cash Prizes shall be applied.
          </li>
          <li className="min-[320px]:mb-1">The prizes & rewards are non-transferable.</li>
          <li className="min-[320px]:mb-1">
            Overall Cash rewards will be paid to the students through a crossed
            cheque and shall be in favor of the student only.
          </li>
          <li className="min-[320px]:mb-1"> 
            All legal matters shall be subject to Kota (Rajasthan) Jurisdiction
            only.
          </li >
          <li className="min-[320px]:mb-1">
            To be shortlisted for the Final Round of Activity on Champion's Day,
            a candidate must have at least one achievement in the current
            session (2022-23).
          </li>
        </ol>
      </div>
      <Footer variant="SIP" />
    </>
  )
}

export default termsCon
