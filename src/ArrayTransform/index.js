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
}
export default new ArrayTransform()