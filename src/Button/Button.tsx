import React, { FC } from 'react'
import { compose, composeU } from '@bem-react/core'
 
import { IButtonProps, cnButton } from './index'

import { withButtonTypeLink } from './_type/Button_type_link'
import { withButtonTypeSubmit } from './_type/Button_type_submit'
import { withButtonViewAction } from './_view/Button_view_action'
import { withButtonThemeLight } from './_theme/Button_theme_light'
import { withButtonThemeDark } from './_theme/Button_theme_dark'
 
const ButtonPresenter: FC<IButtonProps> = ({
  children,
  className,
  as: Component = 'button',
  type = 'button',
  ...props
}) => (
  <Component {...props} type={type} className={cnButton({}, [className])}>
    <span className={cnButton('Text')}>{children}</span>
  </Component>
)

export const Button = compose(
  withButtonViewAction,
  composeU(withButtonTypeSubmit, withButtonTypeLink),
  composeU(withButtonThemeLight, withButtonThemeDark),
)(ButtonPresenter);