<template>
    <Modal v-model="bar_show" width="1000">
        <div class="hello">
            // 用于输入内容的input
            <input v-model="message">
            // 将获取到的信息画到画布上
            <svg id="barcode"></svg>
        </div>
    </Modal>
</template>

<script>
    import JsBarcode from 'JsBarcode'

    export default {
        name: "bar_modal",
        data() {
            return {
                bar_show: false,
                message: ''
            }
        },
        watch: {
            // 通过监听获取数据
            message(val) {
                // 打印获取到的数据
                console.log(val)
                // 获取页面的canvas
                //  var msg = document.getElementById('msg')
                // 将获取到的数据（val）画到msg（canvas）上
                // JsBarcode("#barcode", val, {
                //     format: "pharmacode",
                //     lineColor: "#0aa",
                //     width: 4,
                //     height: 40,
                //     displayValue: false
                // });
                JsBarcode("#barcode", val);
            },
        },
        methods: {
            open_bar() {
                this.bar_show = true
            }
        }

    }
</script>

<style scoped>

</style>
