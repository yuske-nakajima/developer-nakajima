import {ChildrenComponentProps} from '@/types'

type Props = {
  href: string
} & ChildrenComponentProps

export const LinkImage = ({children, href}: Props) => {
  return <a href={href} className='linkImage' target='_blank' rel="noreferrer">
    {children}
  </a>
}
