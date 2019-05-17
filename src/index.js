
import DateTransform  from './DateTransform';
import StringTransform from './StringTransform'
import ArrayTransform from './ArrayTransform'
import NumberTransform from './NumberTransform'
import ExpressionTransfrom from './ExpressionTransform'

console.log(ExpressionTransfrom.evalRPN(["2", "1", "+", "3", "*"]))
console.log(ExpressionTransfrom.evalRPN(["4", "13", "5", "/", "+"]))
console.log(ExpressionTransfrom.evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

export default {
  DateTransform,
  StringTransform,
  ArrayTransform,
  NumberTransform,
  ExpressionTransfrom
}