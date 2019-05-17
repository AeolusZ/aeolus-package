class ExpressionTransfrom {
    /**
     * 返回表达式的逆波兰式
     * @param str 需处理的表达式
     * @author 郑如秀
     * @returns Array
     */
    toReversePolish(str) {
        const operatorPriority = { '#': 0, '(': 1, '+': 2, '-': 2, '*': 3, '/': 3, ')': 4}
        if (str === '') return [];
        let arr1 =[], arr2=[]
        const arr = str.split(' ')
        for (let i = 0; i < arr.length; i++) {
            switch(arr[i]) {
                case '(': 
                    arr2.push(arr[i]);
                    break;
                case ')':
                    while (arr2[arr2.length - 1] !== '(') {
                        arr1.push(arr2.pop())
                    }
                    arr2.pop()
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    if (operatorPriority[arr[i]] > operatorPriority[arr2[arr2.length - 1]]) {
                        arr2.push(arr[i])
                    } else {
                        while (operatorPriority[arr2[arr2.length - 1]] >= operatorPriority[arr[i]]) {
                            arr1.push(arr2.pop())
                        }
                        arr2.push(arr[i])
                    }
                    break;
                default:
                    arr1.push(arr[i]);
                    break;             
            }
        }
        if (arr2.length !== 0) {
            for (let i = arr2.length - 1; i >= 0 ; i--) {
                arr1.push(arr2[i])
            }
        }
        return arr1;
    }
    /**
     * 返回逆波兰式的值
     * @param arr 需处理的逆波兰表达式
     * @author 郑如秀
     * @returns Number
     */
    evalRPN(arr) {
        if (arr.length === 0) return 0;
        let arr1 = []
        for (let i = 0; i < arr.length; i++) {
            switch(arr[i]) {
                case '+':
                    let num1 = Number(arr1.pop()) + Number(arr1.pop())
                    arr1.push(num1)
                    break;
                case '-':
                    let sub1 = Number(arr1.pop())
                    let sub2 = Number(arr1.pop())
                    let num2 = sub2 - sub1
                    arr1.push(num2)
                    break;
                case '*':
                    let num3 = Number(arr1.pop()) * Number(arr1.pop())
                    arr1.push(num3)
                    break;
                case '/':
                    let divide1 = Number(arr1.pop())
                    let divide2 = Number(arr1.pop())
                    let num4 = parseInt( divide2 / divide1 ) 
                    arr1.push(num4)
                    break;
                default:
                    arr1.push(arr[i])
                    break;
            }
        }
        return arr1[0]

    }
}
export default new ExpressionTransfrom()