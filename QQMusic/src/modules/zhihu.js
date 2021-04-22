import axios from 'axios';

axios.get('/zhihu/api/v4/search/preset_words')
.then(res=>{
    console.log('res...', res.data.preset_words.words);
})