const classNames = (...classnames) => {
    const result = []

    classnames.forEach(className => {
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
                result.push(`${className}`)
        }
    })

    return result.join(' ')
}

export default classNames