import { withBemMod } from '@bem-react/core'
 
import { cnButton } from '..'
 
export interface IButtonThemeDarkProps {
  theme?: 'dark'
}
 
export const withButtonThemeDark = withBemMod<IButtonThemeDarkProps>(cnButton(), {
  theme: 'dark',
})