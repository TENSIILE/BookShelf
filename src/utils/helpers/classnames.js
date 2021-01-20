export default classNames = (...classNames) => {
    const result = []

    classNames.forEach(className => {
        if (!className) return
        
        switch (typeof className) {
            case 'string':
                result.push(className)
                break
            case 'object':
                Object.keys(className).forEach(item => {
                    if (className[item]) {
                        result.push(item)
                    }
                })
                break
            default: 
                result.push(`${item}`)
        }
    })

    return result.join(' ')
}