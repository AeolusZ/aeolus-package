import { strict } from "assert";

class Other {
    /**
     * 找出一个报数序列中的第n项
     * @param n 需找出的项数索引
     * @author 郑如秀
     * @returns String
     */
    countAndSay(n) {
        if (n === 0) return 1;
        // const numObj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
        const list = ['1']
        let num = 1;  //计数
        for (let i = 1; i <= list.length; i++) {
            const temp = []
            console.log(list[i-1])
            if (list.length === n+1) {
                return list[n]
            }
            // 前一个数只包含一个字符的情况
            if (list[i-1].length === 1) {
                temp.push(num, Number(list[i-1][0]))
                num = 1
            } else {
                for (let j = 0; j < list[i-1].length; j++) {
                   if (list[i-1][j] === list[i-1][j+1]) {
                       num++
                   } else if (list[i-1][j] !== list[i-1][j+1]) {
                       temp.push(num, Number(list[i-1][j]))
                       num = 1
                   }
                }      
            }    
            list.push(temp.join(''))
        }
        
    }
}
export default new Other()