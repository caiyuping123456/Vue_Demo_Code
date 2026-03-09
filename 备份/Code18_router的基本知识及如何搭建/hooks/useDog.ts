
/**
 *  hooks就是数据和函数放到一起
 */
import {reactive} from "vue";
import axios from "axios";

export function useDogs() {
// url = https://dog.ceo/api/breed/pembroke/images/random
    let dogList = reactive([
        "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_660.jpg"
    ])


    const getDog = async ()=> {
        try {
            //发送请求
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            console.log(result.data.message)
            //放数组
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    return {dogList,getDog}
}