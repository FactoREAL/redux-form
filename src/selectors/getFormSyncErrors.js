// @flow
import type { Structure, GetFormState } from '../types'
import type { GetFormSyncErrorsInterface } from './getFormSyncErrors.types'

const empty = {}

export default function createGetFormSyncErrors({ getIn }: Structure<any, any>) {
  return (form: string, getFormState: ?GetFormState): GetFormSyncErrorsInterface => {
    return (state: any) => {
      const nonNullGetFormState: GetFormState = getFormState || (state => getIn(state, 'form'))
      return getIn(nonNullGetFormState(state), `${form}.syncErrors`) || empty
    }
  }
}
