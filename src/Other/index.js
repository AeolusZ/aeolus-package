import { strict } from "assert";

class Other {
    /**
     * 找出一个报数序列中的第n项(n从1开始)
     * @param n 需找出的项数索引
     * @author 郑如秀
     * @returns String
     */
    countAndSay(n) {
        if (n === 0) return 1;
        const list = ['1']
        let num = 1;  //计数
        for (let i = 1; i <= list.length; i++) {
            const temp = []
            if (list.length === n+1) {
                return list[n-1]
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
    ListNode(val) {
        this.val = val;
        this.next = null;
     }
    /**
     * 合并两个有序链表
     * @param l1 有序链表1
     * @param l2 有序链表2
     * @author 郑如秀
     * @returns ListNode 
     */
    mergeTwoList(l1, l2) {
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        let cur1 = l1, cur2 = l2, l3 = new ListNode()
        while(!(cur1===null && cur2===null)) {
            if (cur1.val >= cur2.val) {
                l3 = this.pushNode(l3, new ListNode(cur2.val))
                cur2 = cur2.next
            } else { 
                l3 = this.pushNode(l3, new ListNode(cur1.val))
                cur1 = cur1.next
            }
        }
        return l3.next
    }
    pushNode(list, item) {
        let cur = list
        while(cur.next !== null) {
            cur = cur.next
        }
        cur.next = item
        
        return list
    }
}
export default new Other()