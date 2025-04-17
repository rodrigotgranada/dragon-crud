import { Field as FieldBase } from './adapter/Field'
import { Password } from './group/Password'

const Field = Object.assign(FieldBase, {
  Password
})

export { Field } 