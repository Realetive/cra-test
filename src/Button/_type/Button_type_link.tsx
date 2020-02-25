import React, {LinkHTMLAttributes} from 'react'
import { withBemMod } from '@bem-react/core'
 
import { IButtonProps, cnButton } from '..'
 
export interface IButtonTypeLinkProps extends LinkHTMLAttributes {
}
 
export const withButtonTypeLink = withBemMod<IButtonTypeLinkProps, IButtonProps>(
  cnButton(),
  { type: 'link' },
  (Button) => (props) => {
    console.log( `props`, props );

    return (<Button {...props} as = "a" />)
  }
)