// @flow
import type { Structure, GetFormState } from '../types'
import type { GetFormSyncWarningsInterface } from './getFormSyncWarnings.types'

const empty = {}

export default function createGetFormSyncWarnings({ getIn }: Structure<any, any>) {
  return (form: string, getFormState: ?GetFormState): GetFormSyncWarningsInterface => {
    return (state: any) => {
      const nonNullGetFormState: GetFormState = getFormState || (state => getIn(state, 'form'))
      return getIn(nonNullGetFormState(state), `${form}.syncWarnings`) || empty
    }
  }
}
