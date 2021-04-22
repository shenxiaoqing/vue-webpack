import axios from 'axios';

axios.get('/api/mv/fcgi-bin/getmv_by_tag?g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq.json&needNewCode=0&cmd=shoubo&lan=all')
.then(res=>{
    console.log('res...', res.data.data);
})