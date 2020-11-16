<template>
    <b-row class="author-section my-5">
        <div class="media-body">
            <p>About the author</p>
            <h3>
                <g-link :to="author.path" class="font-weight-bold" :title="`Posts by ${author.name}`">
                    {{ author.name }}
                </g-link>
            </h3>
            <h5></h5>
            <p>
                {{author.description}}
            </p>
            <div class="author-icons">
                <a href="" class="author-twitter" target="_blank">
                    <i class="fab fa-twitter" />
                    Twitter
                </a>
                <a href="" class="author-linkedin" target="_blank">
                    <i class="fab fa-linkedin" />
                    LinkedIn
                </a>
            </div>
        </div>
        <div class="media-figure avatar-clipping-mask">
            <img :src="author.avatars.avatar96" width="200" height="200" alt="Silvia Chitakova" class="avatar avatar-200 wp-user-avatar wp-user-avatar-200 alignnone photo">
        </div>
    </b-row>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.author-section {
    background: #f7f7f7;
    padding: 20px;
    border-radius: 2px;
    display: flex;
    align-items: flex-start;
}
</style>