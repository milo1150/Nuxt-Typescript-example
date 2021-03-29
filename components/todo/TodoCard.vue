<template>
  <div class="todolist">
    <div v-for="(topic, index) in topicList" :key="index">
      {{ topic.topicName }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useStore,
  computed,
  watch,
} from '@nuxtjs/composition-api';
import { key, TopicList, GettersPath } from '../../store/todo/index';
export default defineComponent({
  setup() {
    const store = useStore(key);
    const topicList = computed<TopicList[]>(
      () => store.getters[GettersPath.GET_TODO_STATE],
    );
    console.log('TodoCard LOAD:', store);

    watch([topicList], () => {
      // console.log('todostate:', topicList.value);
    });

    return { topicList };
  },
});
</script>

<style lang=""></style>
