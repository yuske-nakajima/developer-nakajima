import {Icon} from '@/components/atoms/Icon'
import {LinkImage} from '@/components/atoms/LinkImage'

export const MainNavigation = () => {
  return <div className="mainNavigationContainer">
    {/*<div className='contents-area'>*/}
    {/*  <div>ABOUT</div>*/}
    {/*  <div>BLOG</div>*/}
    {/*</div>*/}
    <div className='icon-area'>
      <div>
        <LinkImage href="mailto:info@developer-nakajima.xyz">
          <Icon iconType="email"/>
        </LinkImage>
      </div>
      <div>
        <LinkImage href="https://twitter.com/yuske__nakajima">
          <Icon iconType="twitter"/>
        </LinkImage>
      </div>
      <div>
        <LinkImage href="https://github.com/yuske-nakajima">
          <Icon iconType="github"/>
        </LinkImage>
      </div>
    </div>
  </div>
}
