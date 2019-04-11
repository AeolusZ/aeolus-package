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
}
export default new StringTransform()