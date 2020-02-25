import { withBemMod } from '@bem-react/core'
 
import { cnButton } from '..'
 
export interface IButtonThemeLightProps {
  theme?: 'light'
}
 
export const withButtonThemeLight = withBemMod<IButtonThemeLightProps>(cnButton(), {
  theme: 'light',
})