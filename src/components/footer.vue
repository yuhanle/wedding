<template>
    <footer>
        <div class='address'>
            <div class='data'>
                <img :src='src' />
                <p>联系电话：18916844451</p>
                <p>河南省信阳市新县沙窝镇健康路</p>
            </div>
            <div class='link'>
                <a id='wechat' href='javascript:;' @mouseover='show' @mouseleave='hide'/>
            </div>
        </div>
        <div class='company'>
            <p>联系邮箱  shibo.doit@icloud.com</p>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'header',
    data () {
        return {
            src: '/static/img/logo.png'
        }
    },
    methods: {
        show () {
            this.src = '/static/img/wx-qrcode.jpg';
        },
        hide () {
            this.src = '/static/img/logo.png';
        }
    }
}
</script>

<style lang='scss'>
    footer{
        top: 1000px;
        margin-top: 10px;
        left: 0;
        height: 300px;
        width: 100%;
        background: #191919;
    }
    .address {
        height: 251px;
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
    }
    .company {
        border-top: 1px solid #2b2b2b;
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
    }
    .address img{
        width: 75px;
        height: 72px;
    }
    .data{
        position: relative;
        top: 20%;
    }
    .link{
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
        position: relative;
        top: 25%;
    }
    @mixin img-style{
        display: inline-block;
        width: 24px;
        height: 22px;
    }
    #wechat {
        background: url('/static/img/social_icon.png');
        @include img-style;
        background-position: -24px 0;
    }
</style>
