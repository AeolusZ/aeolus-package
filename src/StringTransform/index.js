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
    /**
     * 罗马数字转整数
     * @param str 需进行变换的罗马数字
     * @author 郑如秀
     * @returns Number
     */
    romanToInt(str) {
        const obj = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000}
        if (str === '') return 0;
        let arr = [];
        for(let i = 0; i < str.length ; i++) {
            switch(str[i]) {
                case 'I':
                    if (str[i+1] === 'V' || str[i+1] === 'X') {
                        let sub = str[i].concat(str[i+1])
                        arr.push(sub)
                        i++;
                    } else {
                        arr.push(str[i])
                    }  
                    break;
                case 'X':
                    if (str[i+1] === 'L' || str[i+1] === 'C') {
                        let sub = str[i].concat(str[i+1])
                        arr.push(sub)
                        i++;
                    } else {
                        arr.push(str[i])
                    }
                    break;
                case 'C':
                    if (str[i+1] === 'D' || str[i+1] === 'M') {
                        let sub = str[i].concat(str[i+1])
                        arr.push(sub)
                        i++;
                    } else {
                        arr.push(str[i])
                    }
                    break;
                default:
                    arr.push(str[i])
                    break;
            }
        }
        let num = 0
        arr.forEach((val) => {
            num += obj[val]
        })
        return num
    }
    /**
     * 实现一个strStr函数，给定一个 haystack 字符串和一个 needle 字符串
     * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)
     * 如果不存在，则返回  -1
     * @param haystack，needle 输入的字符串
     * @author 郑如秀
     * @returns Number
     */
    strStr(haystack, needle) {
        if (needle === '') return 0;
        let needleIndex = 0, index = 0, subLen=0; 
        for (let i = 0; i < haystack.length; i++) {
            console.log(i)
                // 开始匹配
            if (haystack[i] === needle[needleIndex]) {
                index = i; //haystack中needle出现的索引
                needleIndex++;
                subLen++;
                // neddle已匹配完
                if (needleIndex === needle.length) {
                    index = index - needleIndex + 1;
                    return index;
                }
            // 失败
            } else {
                index = 0;
                needleIndex = 0;
                // 如果前面匹配了一部分    
                if (subLen !== 0) {
                    console.log(i, subLen)
                    i = i - subLen , 
                    subLen = 0
                }
            }
        }
        return -1;
    }
}
export default new StringTransform()