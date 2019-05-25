
import DateTransform  from './DateTransform';
import StringTransform from './StringTransform'
import ArrayTransform from './ArrayTransform'
import NumberTransform from './NumberTransform'
import ExpressionTransfrom from './ExpressionTransform'
import Other from './Other'

// console.log(ArrayTransform.searchInsert([1,3,5,6], 5))
console.log(ArrayTransform.searchInsert([1,3,5,6], 2))
console.log(ArrayTransform.searchInsert([1,3,5,6], 7))
console.log(ArrayTransform.searchInsert([1,3,5,6], 0))
console.log(ArrayTransform.searchInsert([1,2,4,6,7], 3))
console.log(ArrayTransform.searchInsert([3,5,7,9,10], 9))
export default {
  DateTransform,
  StringTransform,
  ArrayTransform,
  NumberTransform,
  ExpressionTransfrom,
  Other
}