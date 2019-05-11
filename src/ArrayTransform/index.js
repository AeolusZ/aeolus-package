import StringTransform from '../StringTransform'
class ArrayTransform {
    /**
     * 返回去重后的数组
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns Array
     */
     arrayDeduplication(arr) {
        if (arr === []) return arr;
        const newArr = []
        arr.forEach(val => {
            console.log(val)
            if (newArr.indexOf(val) === -1) newArr.push(val)
        })
        return newArr
     }
     /**
     * 返回数组中和为第二个参数的数组下标
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns Array
     */
    twoSum(arr, target){
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === target) return [i, j]
            }  
        }
        return []
    }
    /**
     * 返回整数数组中最大的数
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns Number
     */
    maxNum(arr) {
        if (arr === []) return 0;
        let max = 0
        arr.forEach(val => {
            if(val > max) max = val
        })
        return max
    }
    /**
     * 返回排列后的字符串数组
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns Array
     */
    sortStringArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length ; j++) {
                if (arr[i].length < arr[j].length) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                } else if (arr[i].length === arr[j].length) {
                    if (arr[i] < arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp; 
                    }
                }
            }
        }
        return arr;
    }
    /**
     * 返回字符串数组中最长公共子串
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns String
     */
    longestCommonSubString(arr) {
        if (arr.length === 0) return "";
        const newArr = this.sortStringArray(arr);
        const cmpArr = StringTransform.subString(newArr[newArr.length - 1]);
        for (let i = 0; i < cmpArr.length; i++){
            let n = 0;
            for (let j = 0; j < newArr.length; j++){
                if (newArr[j].indexOf(cmpArr[i]) !== -1) 
                    n++;
            }
            if (n === arr.length)
                return cmpArr[i]
        }
        return ""
    }
    /**
     * 返回字符串数组中最长公共前缀
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns String
     */
    longestCommonPrefix(arr) {
        if (arr.length === 0) return "";
        const newArr = this.sortStringArray(arr);
        const cmpArr = StringTransform.allPrefix(newArr[newArr.length - 1]);
        for (let i = 0; i < cmpArr.length; i++){
            let n = 0;
            for (let j = 0; j < newArr.length; j++){
                if (newArr[j].indexOf(cmpArr[i]) === 0) 
                    n++;
            }
            if (n === arr.length)
                return cmpArr[i]
        }
        return ""
    }
}
export default new ArrayTransform()