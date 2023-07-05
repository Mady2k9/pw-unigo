import React from 'react'
import cn from 'clsx'
import s from './rewards-card.module.css'
import Container from '@components/ui/Container/Container'

export interface RewardsCardsProps {
  data: any
}

const RewardsCards: React.FC<RewardsCardsProps> = (props) => {
  const rootClassName = cn(s.root, {})

  return (
    <section className="py-10">
      <Container className="mx-auto max-w-6xl relative">
        <img
          className={s.star_left_w}
          src="/win_stars_left.svg"
          alt="banner web"
        />
        <img
          className={s.star_right_w}
          src="/win_stars_right.svg"
          alt="banner web"
        />
        <img
          className={s.star_left_m}
          src="/win_stars_left_m.svg"
          alt="banner web"
        />
        <img
          className={s.star_right_m}
          src="/win_stars_right_m.svg"
          alt="banner web"
        />
        <div className="flex justify-center">
          <div className="flex">
            <span>
              <img className={s.win_left} src="/win_left.svg" alt="win left" />
            </span>
            <span className={s.heading}>Win Exciting Rewards</span>
            <span>
              <img
                className={s.win_right}
                src="/win_right.svg"
                alt="win right"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 sm:py-10 py-6">
          <div className={s.card}>
            <div className={s.card_bkg}>
              <div className="flex justify-center">
                <img
                  className={s.card_icon}
                  src="/card_trophy_1.svg"
                  alt="card icon"
                />
              </div>
            </div>
            <div className={s.card_heading}>Cash Prize</div>
            <div className={s.card_subheading}>
              Students will be awarded with a cash
              <br className="sm:hidden lg:block" /> prize up to 2 lakhs
            </div>
          </div>
          <div className={s.card}>
            <div className={s.card_bkg}>
              <div className="flex justify-center">
                <img
                  className={s.card_icon}
                  src="/card_trophy_2.svg"
                  alt="card icon"
                />
              </div>
            </div>
            <div className={s.card_heading}>Medals</div>
            <div className={s.card_subheading}>
              Students will be awarded with 24K
              <br className="sm:hidden lg:block" /> original Gold medal Up to 10
              Gms
            </div>
          </div>
          <div className={s.card}>
            <div className={s.card_bkg}>
              <div className="flex justify-center">
                <img
                  className={s.card_icon}
                  src="/card_trophy_3.svg"
                  alt="card icon"
                />
              </div>
            </div>
            <div className={s.card_heading}>Mentorship Program</div>
            <div className={s.card_subheading}>
              As per student requirement, PW will provide best mentorship
              through its experts
            </div>
          </div>
        </div>
      </Container>

      <div className="flex justify-center text-center mx-10 sm:m-0">
        *Note- Go to ‘Rewards page’ to know more about prizes and rewards
      </div>
    </section>
  )
}

export default RewardsCards
