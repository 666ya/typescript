"use strict";
function getUserOnlineMessage(numUserOnline) {
    if (numUserOnline) {
        return `现在有${numUserOnline}个人在线`;
    }
    return '没有人在线';
}
