<template>
<div>
  <van-button type = "primary" @click = "getData">获取数据</van-button>
  <van-button type = "danger">清空数据</van-button>
  <ul>
      <li v-for="(item, index) in list" :key="index" >
          {{ index+1 }}:{{ item.title }}
      </li>
  </ul>
</div>
</template>

<script>
export default {
    data () {
        return{
            list: []
        }
    },
    methods: {
        ajax() {
            //ajax原理
            let movieUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250"
            let xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            //发送请求
            xmlhttp.open("GET", movieUrl, true);
            xmlhttp.send();

            //服务器响应
            xmlhttp.addEventListener("readystatechange", () => {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    let obj = JSON.parse(xmlhttp.responseText);
                    console.log(obj);
                    this.list = obj.subjects;
                }
            })
        },
        getData() {
            this.ajax();
        }
    }
}
</script>

<style>

</style>