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
     * 冒泡排序思想排列字符串数组
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
    /**
     * 快速排序思想排列整数数组
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns Array
     */
    quickSort(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var index = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(index, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return this.quickSort(left).concat([pivot], this.quickSort(right));
    };
    /**
     * 找出两个数组中数据最小的差值
     * @param arr1,arr2 需处理的数组
     * @author 郑如秀
     * @returns Number
     */
    selectMinDiff(arr1, arr2) {
        if (arr1.length === 0 || arr2.length === 0) return '输入数组不能为空'
        // 两数组相等则直接返回0
        if (this.quickSort(arr1).toString() === this.quickSort(arr2).toString()) return 0;
        let arr = []
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                arr.push(Math.abs(arr1[i] - arr2[j]))
            }
        }
        return this.quickSort(arr)[0]
    }
    /**
     * 删除排序数组中的重复项
     * @param arr 需处理的数组
     * @author 郑如秀
     * @returns Number
     */
    removeDuplicates(arr) {
        if (arr.length === []) return 0;
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            if (obj[arr[i]] === undefined) {
                obj[arr[i]] = 1
            } else {
                arr.splice(i, 1)
                i--
            }
        }
        return arr.length
    }
     /**
     * 删除数组中指定元素并返回删除后数组长度
     * @param arr 需处理的数组
     * @param val 要被删除的元素
     * @author 郑如秀
     * @returns Number
     */
    removeElement(arr, val) {
        if(arr.length === 0) return 0;
        if(val === '') return arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                arr.splice(i , 1)
                i--;
            }
        }
        return arr.length
    }
    /**
     * 二分插入
     * @param arr 需处理的数组
     * @param low 低位
     * @param high 高位
     * @param target 目标值
     * @author 郑如秀
     * @returns Number
     */
    binaryInsert(arr, low, high, target){
        console.log(arr, low, high, target)
        const midIndex = parseInt((high + low ) / 2);
        const midNum = arr[midIndex]
        if (low < high) {
            if (target > midNum) {
                low = midIndex + 1;
                return this.binaryInsert(arr, low, high, target)
            } else if (target < midNum) {
                high = midIndex - 1
                return this.binaryInsert(arr, low, high, target)
            } else if (target === midNum) {
                arr.splice(midIndex + 1, 0 ,target)
            }
        } 
        if (target > arr[low]) {
            arr.splice(low + 1, 0 ,target)
        } else if (target < arr[low]){
            arr.splice(low, 0 ,target)
        }
        return arr
    }
    /**
     * 搜索插入位置
     * @param arr 需处理的数组
     * @param target 目标值
     * @author 郑如秀
     * @returns Number
     */
    searchInsert(arr, target) {
        if (arr.indexOf(target) !== -1) {
            return arr.indexOf(target)
        } else {
            // 数组中没有目标元素，要插入
            const newArr = this.binaryInsert(arr, 0, arr.length -1,target)
            console.log(newArr)
            return newArr.indexOf(target)
        }
    }
}
export default new ArrayTransform()