import Image, {StaticImageData} from 'next/image'
import {IconType} from '@/types'
import React from 'react'

// icon
import Github from '@/assets/icons/github.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Email from '@/assets/icons/email.svg'

type Props = {
  iconType: IconType
}

const getIcon = (iconType: IconType): StaticImageData => {
  switch (iconType) {
    case 'github': return Github
    case 'twitter': return Twitter
    case 'email': return Email
  }
}

export const Icon = ({iconType}: Props) => {
  return <Image className='icon' src={getIcon(iconType)} alt={`${iconType}アイコン`}/>
}
