<template>
    <i title="Add to watch list" @click="toggleFavorite()" :class="{ 'active': status }" class="fa fa-bookmark favoriteIcon" aria-hidden="true"></i>
</template>

<script>
    export default {
        data() {
            return {
                status: false,
            }
        },
        mounted() {
            this.checkFavorite();
        },
        watch:{
            $route(){
                this.checkFavorite();
            }
        },   
        methods:{
            toggleFavorite(){
                let item = {url: this.$route.fullPath, name: this.$route.name};
                let items;

                if (localStorage.getItem('favorites')) {
                    items = JSON.parse(localStorage.getItem('favorites'))
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

                localStorage.setItem('favorites', JSON.stringify(items))
            }, 
            checkFavorite(){
                let item = {url: this.$route.fullPath, name: this.$route.name};
                let items;

                if (localStorage.getItem('favorites')) {
                    items = JSON.parse(localStorage.getItem('favorites'))
                    if(items.filter(e => e.url === item.url).length > 0){
                        this.status = true;
                    } else {
                        this.status = false;
                    }
                } else {
                    this.status = false;
                }
            }
        }
    }
</script>
