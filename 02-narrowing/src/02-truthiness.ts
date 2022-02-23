function getUserOnlineMessage(numUserOnline: number) { 
    if (numUserOnline) { 
        return `现在有${numUserOnline}个人在线`
    }
    return '没有人在线'
}
