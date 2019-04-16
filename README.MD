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
### 数组转换：
#### Aeolus.ArrayTransform.arrayDeduplication(arr) 返回去重后的数组
#### Aeolus.ArrayTransform.twoSum(arr, target) 返回arr中合为target的两个数的数组下标
#### Aeolus.ArrayTransform.maxNum(arr) 返回一个整数数组中的最大值
