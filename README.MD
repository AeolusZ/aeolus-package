#使用说明
##引入
#### import Aeolus from 'aeolus-package'
##使用方法
### 日期转换：
#### Aeolus.DateTransform.toDate(date)         将时间戳或YYYYMMDDHHMMSS格式日期转为YYYY-MM-DD HH:MM:SS
#### Aeolus.DateTransform.toNoSpaceDate(date)  将时间戳或YYYY-MM-DD HH:MM:SS格式日期转为YYYYMMDDHHMMSS
### 字符串转换：
#### Aeolus.StringTransform.initialsCapital(str) 将输入字符串转换为首字母大写的字符串
#### Aeolus.StringTransform.lengthOfLongestSubstring(str) 返回不含有重复字符的最长子串的长度
#### Aeolus.StringTransform.subString(str) 返回包含一个字符串所有子串的数组
#### Aeolus.StringTransform.allPrefix(str) 返回包含一个字符串的所有前缀的数组
#### Aeolus.StringTransform.isValid(str) 判断字符串中是否包含有效的括号，包含返回true，否则返回false
#### Aeolus.StringTransform.romanToInt(str) 将罗马数字转为整数
#### Aeolus.StringTransform.strStr(str1, str2) 模拟java中的strStr函数，返回str2在str1出现的第一个位置
#### Aeolus.StringTransform.longestPalindrome(str) 利用马拉车算法找出字符串中的最长回文子串
### 数组转换：
#### Aeolus.ArrayTransform.arrayDeduplication(arr) 返回去重后的数组
#### Aeolus.ArrayTransform.twoSum(arr, target) 返回arr中合为target的两个数的数组下标
#### Aeolus.ArrayTransform.maxNum(arr) 返回一个整数数组中的最大值
#### Aeolus.ArrayTransform.sortStringArray(arr) 用冒泡排序返回一个按字符串长度从长到短排序后的字符串数组
#### Aeolus.ArrayTransform.longestCommonSubString(arr) 返回字符串数组中最长公共子串
#### Aeolus.ArrayTransform.longestCommonPrefix(arr) 返回字符串数组中最长公共前缀
#### Aeolus.ArrayTransform.quickSort(arr) 用快速排序返回从小到大排序后的整数数组
#### Aeolus.ArrayTransform.selectMinDiff(arr1, arr2) 返回两个数组中数据相差最小的差值
#### Aeolus.ArrayTransform.removeDuplicates(arr) 删除排序数组中重复元素，并返回删除后的数组长度，原数组变成无重复值的新数组
#### Aeolus.ArrayTransform.removeElement(arr, val) 删除数组中值为val的元素，并返回删除后的数组长度
#### Aeolus.ArrayTransform.binaryInsert(arr, low, high, target) 利用二分法向有序数组中插入一个元素，并保证其插入后也有效
#### Aeolus.ArrayTransform.searchInsert(arr, target) 搜索有序数组中目标元素的位置，若找不到则将其按排列顺序插入后再返回其索引
### 整数转换：
#### Aeolus.NumberTransform.reverseNumber(num) 返回反转后的整数
#### Aeolus.NumberTransform.isPalindrome(num) 判断整数是否是回文数，是返回true，否则返回false
### 表达式转换：
#### Aeolus.ExpressionTransform.toReversePolish(str) 返回表达式的逆波兰式（注：表达式输入时为字符串形式且数字和运算符之间要加空格，eg：ExpressionTransfrom.toReversePolish('20 + 3 * ( 5 - 1 )')）
#### Aeolus.ExpressionTransform.evalRPN(arr) 返回逆波兰表达式的值
### 其他：
#### Aeolus.Other.countAndSay(n) 返回一个报数数列的第n项（n从1开始，报数数列leetcode38题有描述）

##### 若您在使用过程中发现问题请发邮件到以下邮箱：18202764523@163.com
