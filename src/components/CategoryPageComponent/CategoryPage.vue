<template>
    <CategoryHeader />
    <CategoryBody/>
</template>

<script setup lang="ts">
    import CategoryHeader from '@/components/CategoryPageComponent/CategoryHeader.vue'
    import CategoryBody from '@/components/CategoryPageComponent/CategoryBody.vue'

    import {
        onMounted
    } from 'vue';

    onMounted(() => {
        window.scrollTo(0, 0);
    });
</script>