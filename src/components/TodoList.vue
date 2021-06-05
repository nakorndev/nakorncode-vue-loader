<template>
  <div class="box">
    <h1 class="subtitle">{{ title }}</h1>
    <div class="level is-mobile">
      <div class="level-left">
        <input v-model="todoText" type="text" class="input">
      </div>
      <div class="level-right">
        <a @click="onAddList" class="button" :class="color">เพิ่มรายการ</a>
      </div>
    </div>
    <div class="content">
      <ul v-if="value.length">
        <li v-for="(li, i) of value" :key="i">
          <label>
            <input v-model="li.checked" @input="onListUpdated" type="checkbox">
            <span :style="{ textDecoration: li.checked ? 'line-through' : 'none' }">{{ li.text }}</span>
          </label>
        </li>
      </ul>
      <div v-else class="message is-danger">
        <div class="message-body">ยังไม่มีรายการ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'is-link'
    },
    initTitle: String,
    value: Array,
    index: Number
  },
  data () {
    return {
      title: '',
      todoText: ''
    }
  },
  methods: {
    onAddList () {
      this.value.push({
        text: this.todoText,
        checked: false
      })
      this.todoText = ''
      this.$emit('add-list')
      this.$emit('input', this.index, this.value)
    },
    onListUpdated () {
      this.$emit('input', this.index, this.value)
    }
  },
  mounted () {
    this.title = this.initTitle || 'รายการที่ต้องทำ'
  },
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 50px !important;
}
</style>
