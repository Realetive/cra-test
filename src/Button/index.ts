import { ReactType, ButtonHTMLAttributes } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'

export const cnButton = cn('Button');
 
export interface IButtonProps<T> extends IClassNameProps, ButtonHTMLAttributes<T> {
  as?: ReactType
}