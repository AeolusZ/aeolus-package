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
### 数组转换：
#### Aeolus.ArrayTransform.arrayDeduplication(arr) 返回去重后的数组
#### Aeolus.ArrayTransform.twoSum(arr, target) 返回arr中合为target的两个数的数组下标
#### Aeolus.ArrayTransform.maxNum(arr) 返回一个整数数组中的最大值
#### Aeolus.ArrayTransform.sortStringArray(arr) 返回一个按字符串长度从长到短排序后的字符串数组
#### Aeolus.ArrayTransform.longestCommonSubString(arr) 返回字符串数组中最长公共子串
#### Aeolus.ArrayTransform.longestCommonPrefix(arr) 返回字符串数组中最长公共前缀
### 整数转换：
#### Aeolus.NumberTransfrom.reverseNumber(num) 返回反转后的整数
