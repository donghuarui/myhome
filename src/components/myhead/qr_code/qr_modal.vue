<template>
    <Modal v-model="qr_show" width="1000">
        <div class="hello">
            // 用于输入内容的input
            <input v-model="message">
            // 将获取到的信息画到画布上
            <canvas id="msg"></canvas>
        </div>
    </Modal>
</template>

<script>
    // 引入qrcode
    import QRCode from 'qrcode'

    export default {
        name: "Qr_modal",
        data() {
            return {
                message: '',
                qr_show: false
            }
        },
        watch: {
            // 通过监听获取数据
            message(val) {
                // 打印获取到的数据
                console.log(val)
                // 获取页面的canvas
                var msg = document.getElementById('msg')
                // 将获取到的数据（val）画到msg（canvas）上
                QRCode.toCanvas(msg, val, function (error) {
                    console.log(error)
                })
            },
        },
        methods: {
            open_qr() {
                this.qr_show = true
            }
        }
    }
</script>

<style scoped>
    #msg {
        width: 200px;
        height: 200px;
    }
</style>
