import Head from 'next/head'
import {XYCenterContainer} from '@/components/container/XYCenterContainer'
import {Logo} from '@/components/atoms/Logo'
import {MainNavigation} from '@/components/molecules/MainNavigation'

export const IndexTemplate = () => {
  return (
    <div>
      <Head>
        <title>デベロッパーナカジマ</title>
        <meta
          name="description"
          content="デベロッパーナカジマのwebサイトです"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <XYCenterContainer>
        <div>
          <Logo/>
          <MainNavigation/>
        </div>
      </XYCenterContainer>
    </div>
  )
}
