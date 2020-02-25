import React from 'react'
import { withBemMod } from '@bem-react/core'
 
import { IButtonProps, cnButton } from '..'
 
export interface IButtonTypeSubmitProps {
  type?: 'submit'
}
 
export const withButtonTypeSubmit = withBemMod<IButtonTypeSubmitProps, IButtonProps>(
  cnButton({ type: 'submit' }),
  {},
  (Button) => (props) => <Button {...props} />,
)