<template>
    <div class="title">
        <div>
                    {{isWorking ? `Work - ${currentTask}` : "Rest"}}
        </div>
    </div>
</template>

<script>

    import { mapGetters } from "vuex"

    const dados = {}

    export default {
        data: function data() {
            return dados
        },
        computed: mapGetters(["isWorking", "currentTask"]),
    }
</script>

<style>
    .title {
        font-weight: bold;
        background: #FFDDDD;
        border-radius: 10px;
        font-size: 24px;
    }
</style>