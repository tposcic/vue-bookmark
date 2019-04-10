<template>
    <div 
    @click="toggleBookmark()" 
    :class="{ 'active': status }" 
    class="vue-bookmark-wrapper">
        <slot>
            <i title="Add to bookmark" class="fa fa-bookmark vue-bookmark-icon" aria-hidden="true"></i>
        </slot>
    </div>
</template>

<style scoped>
    .vue-bookmark-wrapper{
        display: inline;
        position: relative;
    }
    .vue-bookmark-icon{
        color: #009688;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .vue-bookmark-wrapper.active .vue-bookmark-icon{
        color: #0056b3;
    }
</style>

<script>
    export default {
        props: {
            storageName: {
                default: 'bookmark',
                type: String
            }
        },
        data: function () {
            return {
                status: false,
            }
        },
        mounted() {
            this.checkBookmark();
        },
        watch:{
            $route(){
                this.checkBookmark();
            }
        },   
        methods:{
            toggleBookmark(){
                let items, item = {url: this.$route.fullPath, name: this.$route.name ? this.$route.name : ''};

                if (localStorage.getItem(this.storageName)) {
                    items = JSON.parse(localStorage.getItem(this.storageName))
                } else {
                    items = [];
                }
                if(items.filter(e => e.url === item.url).length > 0){
                    items.splice(items.findIndex((i) => {
                        return i.url == item.url;
                    }), 1);
                    this.status = false;
                } else {
                    items.push(item);
                    this.status = true;
                }

                localStorage.setItem(this.storageName, JSON.stringify(items))
            }, 
            checkBookmark(){
                let items, item = {url: this.$route.fullPath, name: this.$route.name ? this.$route.name : ''};

                if (localStorage.getItem(this.storageName)) {
                    items = JSON.parse(localStorage.getItem(this.storageName))
                    this.status = items.filter(e => e.url === item.url).length > 0 ? true : false;
                } else {
                    this.status = false;
                }
            }
        }
    }
</script>
