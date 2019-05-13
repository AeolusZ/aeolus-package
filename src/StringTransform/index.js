import ArrayTransform from '../ArrayTransform'
class StringTransform {
    /**
     * 返回首字母大写，其余字母小写的字符串
     * @param str 需转换的字符串
     * @author 郑如秀
     * @returns String
     */
    initialsCapital(str) {
        const newStr = str.toLowerCase()
        const arr = newStr.split('')
        const newArr = []
        arr.map((val, index) => {
            switch(index){
                case 0:
                    newArr.push(val.toUpperCase())
                    break;
                default:
                    newArr.push(val)
                    break;
            }
        })
        return newArr.join('')
    }
     /**
     * 返回不含有重复字符的 最长子串 的长度(考虑输入为' '的情况)
     * @param str 需转换的字符串
     * @author 郑如秀
     * @returns Number
     */
    lengthOfLongestSubstring(str) {
        if(str === '')  return 0;
        const arr = str.split('')
        const numArr = []
        for(let i = 0; i < arr.length; i++) {
            const strArr = []
            for (let j = i; j < arr.length; j++) {
                if (strArr.indexOf(arr[j]) === -1) {
                    strArr.push(arr[j])
                } else {
                    break;
                }
            }
            numArr.push(strArr.length)
        }
        return ArrayTransform.maxNum(numArr)
    }
    /**
     * 返回一个字符串所有的子串
     * @param str 需处理的字符串
     * @author 郑如秀
     * @returns Array
     */
    subString(str) {
        if (str === '') return []
        let arr = []
        for (let i = 0; i < str.length; i++) {
            for (let j = i; j < str.length; j++){
                let sub = str.substring(i, j+1)
                arr.push(sub)
            }
        }
        return ArrayTransform.sortStringArray(arr)
    }
    /**
     * 返回一个字符串所有的前缀
     * @param str 需处理的字符串
     * @author 郑如秀
     * @returns Array
     */
    allPrefix(str) {
        if (str === '') return []
        let arr = []
        for (let i = 0; i < str.length; i++) {
            let sub = str.substring(0, i+1)
            arr.push(sub)
        }
        return ArrayTransform.sortStringArray(arr)
    }
    /**
     * 判断字符串中是否包含有效的括号，包含返回true，否则返回false
     * @param str 需处理的字符串
     * @author 郑如秀
     * @returns Boolean
     */
    isValid(str) {
        console.log(str)
        if (str === "") return true;
        let arr = str.split('')
        for (let i = 0 ; i < arr.length; i++) {
            if ((arr[i] === '(' && arr[i+1] === ')') || (arr[i] === '[' && arr[i+1] === ']') || (arr[i] === '{' && arr[i+1] === '}')) {
                arr.splice(i, 2)
                console.log(arr)
                return this.isValid(arr.join(''))
            }
        }
        return false
    }
}
export default new StringTransform()