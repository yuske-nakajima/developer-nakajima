import Image from 'next/image'
import logoPath from '@/assets/images/logo-white.png'

export const Logo = () => {
  return <Image className='logo' src={logoPath} alt="デベロッパーナカジマのメインロゴです"/>
}


