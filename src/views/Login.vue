<style scoped>
    /* .footer {
        position: absolute;
        bottom: 10px;
        left: 0;
    } */
    .ivu-card-body img {
        display: block;
        margin: 0 auto;
    }
    .login {
        display: flex;
        justify-content:center;
    }
    .login .card-body {
        flex-direction:column;
        margin: 10px 10px;
        width: 27%;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <v-header type="login"></v-header>
            <Layout :style="{padding: '24px 24px'}">
                <Content :style="{background: '#fff'}">
                    <div class="login">
                        <Card class="card-body">
                            <router-link to="/index"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></router-link>
                        </Card>
                        <Card class="card-body">
                            <router-link to="/index"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></router-link>
                        </Card>
                        <Card class="card-body">
                            <router-link to="/index"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></router-link>
                        </Card>
                    </div>
                    <div class="login">
                        <Card class="card-body">
                            <router-link to="/index"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></router-link>
                        </Card>
                        <Card class="card-body">
                            <router-link to="/index"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></router-link>
                        </Card>
                        <Card class="card-body">
                            <router-link to="/index"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></router-link>
                        </Card>
                    </div>
                </Content>
                <v-footer></v-footer>
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
