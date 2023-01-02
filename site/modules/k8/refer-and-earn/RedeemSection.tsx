import rupee from '@assets/images/rupee.svg'
import { ChevronRight } from '@components/icons'
import Image from 'next/image'
import styles from './ReferAndEarn.module.css'
import clipboard from '@assets/images/clipboard.svg'
import facebook from '@assets/images/facebook.svg'
import whatsapp from '@assets/images/whatsapp.svg'
import mail from '@assets/images/mail.svg'
import tick from '@assets/images/tick.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

enum SOCIAL {
  WHATSAPP = 'whatsapp',
  FACEBOOK = 'facebook',
  MAIL = 'mail',
}
const INVITE_LINK = 'https://links.physicswallah.live/ref'

const INVITE_VIA = [
  {
    name: SOCIAL.WHATSAPP,
    src: whatsapp,
  },
  {
    name: SOCIAL.FACEBOOK,
    src: facebook,
  },
  {
    name: SOCIAL.MAIL,
    src: mail,
  },
]

const FIELD = 'uniqueCode'

const RedeemSection = ({ orgData }: { orgData: any }) => {
  const [uniqueCode, setUniqueCode] = useState('')
  const [redeemedCoins, setRedeemedCoins] = useState(0)
  const [referMsg, setReferMsg] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setReferMsg(orgData?.value?.BATCH?.batchCoinReferAndEarnMessage)
    let user: any = {}
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('user') || '{}')
      if (user) {
        setUniqueCode(user?.uniqueCode)
        setRedeemedCoins(user?.profileId?.coins?.totalCoins)
      }
    }
  }, [])

  const inviteVia = (option: string) => {
    const url = INVITE_LINK
    const inviteText = `${referMsg}. Use my referral code ${uniqueCode}`
    const urlEncodedText = encodeURI(inviteText)

    const social = [
      {
        title: 'Facebook',
        href: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${urlEncodedText}`,
      },
      {
        title: 'WhatsApp',
        href: `https://web.whatsapp.com/send?text=${urlEncodedText}. ${url}`,
      },
    ]

    switch (option) {
      case SOCIAL.FACEBOOK:
        self
        window!.open(social[0].href, '_blank')
        break
      case SOCIAL.WHATSAPP:
        window!.open(social[1].href, '_blank')
        break

      case SOCIAL.MAIL:
        window!.open(
          `mailto:?subject=Refer-Earn&body=${inviteText} ${url}`,
          '_system'
        )
        break
    }
  }

  const navigateToRedeemNow = () => {
    router.push('refer-and-earn/redeem-now')
  }

  const handleCopyCLick = (text: string) => {
    if (!text) return
    copyToClipboard(text)
      .then(() => {
        setIsCopied(true)
        // setTimeout(() => {
        //   setIsCopied(false)
        // }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const copyToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  return (
    <section className="w-fit mx-auto flex items-center justify-center my-10">
      <div
        className={`rounded-2xl pt-6 px-6 pb-4 flex flex-col gap-2 ${styles.shadow}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl text-[#333]">
            Total Rewards Earn
          </span>
          <Image src={rupee} alt="coin_icon" />
        </div>
        <span className="font-bold text-3xl text-[#F7931E]">
          ₹{redeemedCoins}
        </span>
        <div
          className={`flex items-center justify-between w-full px-4 py-3 mt-6 cursor-pointer ${styles.redeemLink}`}
          onClick={() => navigateToRedeemNow()}
        >
          <span className="font-semibold text-sm ">Redeem Now</span>
          <ChevronRight />
        </div>
      </div>
      <div
        className={`rounded-2xl p-6 flex items-center gap-6 ${styles.shadow}`}
      >
        <div className={`flex flex-col gap-3 items-center `}>
          <span className="font-bold text-xl">Share Your Referral Code</span>
          <div
            className={`bg-[#F8F8F8] py-1 px-2 flex items-center gap-20 rounded-lg ${styles.dashedBorder}`}
          >
            <span className="font-bold text-lg">{uniqueCode}</span>
            <Image
              src={isCopied ? tick : clipboard}
              alt="clipboard_icon"
              className=" cursor-pointer"
              onClick={() => handleCopyCLick(uniqueCode)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="font-medium text-xl">Invite Via</span>
          <div className="flex items-center gap-4">
            {INVITE_VIA.map((ele) => (
              <div
                key={ele.name}
                className={`w-[36px] h-[36px] rounded-md flex items-center justify-center cursor-pointer ${
                  ele.name === 'whatsapp'
                    ? 'bg-[#55B35B]'
                    : ele.name === 'facebook'
                    ? 'bg-[#4267B2]'
                    : 'bg-[#373358]'
                }`}
                onClick={() => inviteVia(ele.name)}
              >
                <Image src={ele.src} alt="whatsapp_icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RedeemSection
