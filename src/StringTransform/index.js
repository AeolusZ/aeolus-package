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
}
export default new StringTransform()