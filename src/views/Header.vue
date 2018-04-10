<style scoped>
.ivu-menu-primary {
    background-color: #2b83f9;
    background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
}
.layout-nav{
    width: 470px;
    height: 100%;
    margin-left: 100px;
    float: left;
}
.layout-nav .ivu-menu-item {
    padding: 0;
    margin-right: 20px;
}
.layout-nav .ivu-menu-item:hover {
    background: rgba(0, 0, 0, 0)!important;
    color: #fff;
}
.layout-nav .ivu-menu-item a {
    display: inline-block;
    height: 100%;
}
.layout-nav .ivu-menu-item a, .layout-nav a.router-link-active {
    color: #fff;
}

.layout-nav .ivu-menu-item a.router-link-active:after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: #4fe3c1;
    position: absolute;
    bottom: 0;
    left: 0;
}

.layout-logo{
    width: 100px;
    height: 30px;
    background-image: url('http://s.weituibao.com/static/1506326446397/logo-white1x.png');
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-setting {
    width: 300px;
    height: 100%;
    float: right;
}
.layout-setting .icon-box li {
    width: 60px;
    float: left;
}
.layout-setting .icon-box li .ivu-icon {
    font-size: 20px;
    color: #fff;
    cursor: pointer;
}
.ivu-icon-chevron-down {
    font-size: 12px!important;
    vertical-align: 2px;
}
</style>
<template>
    <Menu mode="horizontal" theme="primary" @on-select="onSelect">
        <div class="layout-logo">
        </div>
        <div v-if="type !== 'login' " class="layout-nav">
            <MenuItem name="1">
                <Icon type="stats-bars"></Icon>
                <router-link to="/index">{{ $t('lang.menu1') }}</router-link>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="android-send"></Icon>
                <router-link to="/promotion">{{ $t('lang.menu2') }}</router-link>
            </MenuItem>
            <MenuItem name="3">
                <Icon type="social-windows-outline"></Icon>
                <router-link to="/develop">{{ $t('lang.menu3') }}</router-link>
            </MenuItem>
            <MenuItem name="4">
                <Icon type="settings"></Icon>
                <router-link to="/setting">{{ $t('lang.menu4') }}</router-link>
            </MenuItem>
        </div>
        <div class="layout-setting">
            <ul class="icon-box">
                <li><Icon type="iphone"></Icon></li>
                <li><Icon type="android-notifications"></Icon></Icon></li>
                <li><Icon type="android-person-add"></Icon></Icon></li>
                <li>
                    <Poptip trigger="hover" placement="bottom" title="提示标题">
                        <Icon type="android-person"></Icon>
                        <Icon size="12px!important" type="chevron-down"></Icon>
                        <div class="api" slot="content">
                            <Button type="ghost">账户中心</Button>
                            <Button type="ghost">退出登录</Button>
                        </div>
                    </Poptip>
                </li>
                <li v-on:click="changeLan"><Icon size="12px!important" type="android-globe"></Icon></li>
            </ul>
        </div>
    </Menu>
</template>
<script>
    export default {
        props: ['type'],
        data () {
            return {
                isActive: 1
            }
        },
        mounted () {
            console.log('type', this.type);
        },
        beforeDestroy () {

        },
        methods: {
            onSelect(name){
                this.isActive = name;
                console.log('this.isActive', this.isActive);
            },
            changeLan() {
                let t = window.localStorage.getItem('language')
                if (t == 'cn') {
                    this.$i18n.locale = 'en'
                    window.localStorage.setItem('language', 'en')
                } else if (t == 'en') {
                    this.$i18n.locale = 'cn'
                    window.localStorage.setItem('language', 'cn')
                } else {
                    this.$i18n.locale = 'cn'
                    window.localStorage.setItem('language', 'cn')
                }
            }
        }
    }
</script>
