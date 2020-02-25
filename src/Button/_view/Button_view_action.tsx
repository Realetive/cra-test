import { withBemMod } from '@bem-react/core'
 
import { cnButton } from '..'
 
export interface IButtonViewActionProps {
  view?: 'action'
}
 
export const withButtonViewAction = withBemMod<IButtonViewActionProps>(cnButton(), {
  view: 'action',
})