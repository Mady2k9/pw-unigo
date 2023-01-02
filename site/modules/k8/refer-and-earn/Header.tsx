import { CoinSpreadLottie } from '@components/lotties'
import { Typography } from '@components/ui'
import styles from './ReferAndEarn.module.css'

const Header = () => {
  return (
    <section className={styles.header}>
      <div className="max-w-[484px]">
        <Typography variant="heading3" weight={500}>
          <strong>Earn Cash</strong> upto{' '}
          <strong className="text-[#F7931E]">₹1000 </strong> in your bank
          account for <strong>Every Friend</strong> you refer
        </Typography>
      </div>
      <div>
        <CoinSpreadLottie />
      </div>
    </section>
  )
}

export default Header
