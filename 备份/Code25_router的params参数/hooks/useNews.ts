import {reactive} from "vue";


export function useNews(){
    let newsList = reactive([
        {id:1,title:'好消息好消息',context:'明天是周一'},
        {id:2,title:'如何月入过万',context:'学IT'},
        {id:3,title:'我要变帅',context:'多运动'},
        {id:4,title:'你真的忘记了她吗',context:'还是喜欢她'},
    ])
    return {newsList}
}