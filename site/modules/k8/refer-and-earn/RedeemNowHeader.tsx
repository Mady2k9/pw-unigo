import { ChevronRight } from '@components/icons'
import styles from './ReferAndEarn.module.css'
import { Button, Container, TextInput, Typography } from '@components/ui'

import coin from '@assets/images/coin1.svg'
import money from '@assets/images/money.svg'
import Image from 'next/image'
import CointLottie from '@components/lotties/CoinLottie'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import BankModal from './BankModal'
import { XCircleIcon } from '@heroicons/react/20/solid'
import useVerifyUpi from '@lib/hooks/refer-and-earn/useVerifyUpi'
import Verified from '@assets/images/verify.svg'
import TransactionHistoryModal from './TransactionHistoryModal'
import { useRouter } from 'next/router'

const RedeemNowHeader = () => {
  const router = useRouter()
  const [openBankModal, setOpenBankModal] = useState(false)
  const [openTransactionDetailModal, setOpenTransactionDetailModal] =
    useState(false)

  return (
    <>
      <section className={styles.redeemNowHeader}>
        <Container className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div
              className={styles.transferButton}
              onClick={() => setOpenBankModal(true)}
            >
              <div className="flex items-center gap-2">
                <Image src={money} alt="money_logo" />
                <Typography variant="regular" weight={700}>
                  Transfer To Bank Account
                </Typography>
              </div>
              <ChevronRight />
            </div>

            <div className={styles.transferButton}>
              <div
                className="flex items-center gap-2"
                onClick={() => router.push(`redeem-now/pw-wallet`)}
              >
                <Image src={coin} alt="" />
                <Typography variant="regular" weight={700}>
                  Transfer To PW Wallet
                </Typography>
              </div>
              <ChevronRight />
            </div>
          </div>

          <div className="bg-white w-[395px] rounded-xl flex flex-col">
            <div className="flex items-center gap-2">
              <CointLottie />
              <div className="flex flex-col">
                <Typography variant="regular" weight={600}>
                  Available Rewards
                </Typography>
                <Typography variant="heading3" weight={700}>
                  ₹700
                </Typography>
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="bg-[#F0EFFF] rounded-xl p-2 flex items-center justify-between">
                <Typography>
                  Redeemed: <strong>300</strong>
                </Typography>
                <button
                  className="bg-indigo-600 text-white rounded-lg py-1 px-1.5 text-sm font-bold"
                  onClick={() => setOpenTransactionDetailModal(true)}
                >
                  View History
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {openBankModal && (
        <BankModal
          open={openBankModal}
          onClose={() => setOpenBankModal(false)}
        />
      )}

      {openTransactionDetailModal && (
        <TransactionHistoryModal
          open={openTransactionDetailModal}
          onClose={() => setOpenTransactionDetailModal(false)}
        />
      )}
    </>
  )
}

export default RedeemNowHeader
