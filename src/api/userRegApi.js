import axios from 'axios';

export const nickNameCheckApi = (nickName) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/nickNameCheck',
        data: {
            "nickName": nickName
        }
    });
    return res;
}

export const emailCheckApi = (email) => {
    const res = axios({
        method: 'post',
        url: 'http://3.34.200.65/emailCheck',
        data: {
            "email": email
        }
    });
    return res;
}