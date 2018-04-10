<style scoped>
    
</style>
<template>
    <div class="layout">
        <Layout>
            <v-header></v-header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu theme="light" width="auto" :style="{height: '100%'}" :open-names="['1']" class="sub-menu">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                数据概览
                            </template>
                            <MenuItem name="1-1"><router-link to="/index/demo1">demo1</router-link></MenuItem>
                            <MenuItem name="1-2"><router-link to="/index/demo2">demo2</router-link></MenuItem>
                            <MenuItem name="1-3"><router-link to="/index/demo3">demo3</router-link></MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                用户探索
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                用户行为分析
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '24px 24px'}">
                    <Content :style="{background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                    <v-footer></v-footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    // 应用分析
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    export default {
        components: {
            'v-header': Header,
            'v-footer': Footer
        }
    }
</script>
