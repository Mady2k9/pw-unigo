import { FAQ, Typography } from '@components/ui'

const ITEMS = [
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'Can PW Money Transfer to Bank?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'Can PW Money Transfer to Bank?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
]

const Faq = () => {
  return (
    <div>
      <FAQ items={ITEMS} multipleOpen={false} />
    </div>
  )
}

export default Faq
