export function extractNumbersFromString(str) {
    // 正则表达式匹配非数字字符后紧跟数字，然后是更多非数字字符
    const regex = /[^0-9]+(\d+)[^0-9]+/g
    let matches = ""
    let match = null

    // 使用正则表达式的全局搜索来查找所有匹配项
    while ((match = regex.exec(str)) !== null) {
        // 提取数字部分并添加到结果数组
        matches += match[1].toString()
    }
    return matches
}


const stringTool = {
    extractNumbersFromString
}
export default stringTool