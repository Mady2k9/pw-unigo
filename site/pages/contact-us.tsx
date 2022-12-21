import { FB, Insta, TG, Yt } from '@assets/images/about-us'
import { Layout } from '@components/common'
import { SupportBot, SupportCenter } from '@components/lotties'
import { Button, Container, Typography } from '@components/ui'
import React from 'react'

const ContactUs = () => {
  return (
    <Layout isProtected={true}>
      <Container>
        <Typography variant={'heading3'} weight={700}>
          Contact Us:
        </Typography>
        <div className="flex flex-col gap-6 md:gap-12 md:flex-row items-center">
          <div className="flex flex-col gap-2">
            <Typography variant={'subHeading'} weight={500}>
              Hi!! I'm your{' '}
              <span className={'text-indigo-500 font-bold'}>MITRA!!</span>
            </Typography>
            <Typography variant={'subHeading'} weight={500}>
              Facing issues with{' '}
              <span className={'font-bold'}> Batch, Book, App</span> etc??
            </Typography>
            <Typography variant={'subHeading'} weight={500}>
              No problem I'm here to help you.
            </Typography>
            <div className="max-w-[200px] mt-2">
              <Button preIcon={<SupportBot />} variant="secondary">
                Let's Chat
              </Button>
            </div>
          </div>
          <SupportCenter />
        </div>
        <div className="mt-8">
          <Typography variant="heading4" weight={700}>
            Follow Us
          </Typography>
          <div className="mt-4 flex items-center gap-8">
            <FB />
            <Insta />
            <Yt />
            <TG />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactUs
