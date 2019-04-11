class DateTransform {
    constructor() {
        // this.date = new Date()
    }
    /**
     * 返回YYYY-MM-DD HH:MM:SS格式日期
     * @param date 需转换的日期
     * @author 郑如秀
     * @returns Date
     */
    toDate(date){
        let newDate = ''
        const num = date.toString().length
        switch(true) {
            // 将日期格式由YYYYMMDDHHMMSS转为YYYY-MM-DD HH:MM:SS
            case (num > 0 && num < 15):
                newDate = date.split('')
                const arr = []
                newDate.forEach((val, index) => {
                    switch(index){
                        case 3:
                        case 5:
                            String(newDate[index + 1]) !== 'undefined' ? arr.push(val, '-') : arr.push(val)
                            break;
                        case 7:
                            String(newDate[index + 1]) !== 'undefined' ? arr.push(val, ' ') : arr.push(val)
                            break;
                        case 9:
                        case 11:
                            String(newDate[index + 1]) !== 'undefined' ? arr.push(val, ':') : arr.push(val)
                            break;
                        default:
                            arr.push(val)
                            break;
                    }
                })
                return arr.join('')
            // 将时间戳转为YYYY-MM-DD HH:MM:SS格式
            case (num === 42):
                newDate = date.getFullYear() + '-' + 
                    ((date.getMonth() + 1) < 10 ? ('0'+ (date.getMonth() + 1)) : (date.getMonth()+1)) + '-' + 
                    (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()) + ' ' +
                    (date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + ':' +
                    (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) + ':' +
                    (date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds())
                return newDate
            default:
                return date
        }
    }
    /**
     * 返回YYYYMMDDHHMMSS格式日期
     * @param date 需转换的日期
     * @author 郑如秀
     * @returns Date
     */
    toNoSpaceDate(date){
        const newDate = this.toDate(date)
        const noSpaceDate = newDate.replace(/[\s|\:|\-]/g,'')
        return noSpaceDate
    }
}
export default new DateTransform()