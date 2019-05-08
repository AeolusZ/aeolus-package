class NumberTransform {
    /**
     * 判断整数是否溢出，溢出返回0，否则返回整数
     * @param num 需判断的整数
     * @author 郑如秀
     * @returns Number
     */
    isOverflow(num) {
        const boundary = Math.pow(2, 31)
        if (num >= boundary - 1 || num <= -boundary)
            return 0
        else 
            return num
    }
    /**
     * 返回反转后的整数
     * @param num 需进行反转变换的整数
     * @author 郑如秀
     * @returns Number
     */
    reverseNumber(num) {
        const boundary = Math.pow(2, 31)
        const arr = num.toString().split('')
        switch(arr[0]) {
            case '-':
                arr.shift()
                arr.reverse()
                return this.isOverflow(-arr.join(''))
            default:
                if (arr[arr.length - 1] === '0') {
                    arr.pop()
                    arr.reverse()
                } else {
                    arr.reverse()
                }
                return this.isOverflow(arr.join(''))
        }
    }
}
export default new NumberTransform()