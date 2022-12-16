<template>
  <button
    class="h-[28px] md:h-[32px] flex font-medium items-center gap-2 px-3 text-xs sm:text-base bg-gray-200 shadow rounded outline-none border border-transparent focus:ring-2 active:scale-95 transition-all"
    :class="cls"
    :disabled="loading || disabled"
  >
    <span><slot /></span>
    <i
      v-if="loading"
      class="uil uil-spinner sm:text-lg leading-none animate-spin"
    ></i>
    <i v-if="!loading && iconCls" :class="iconCls"></i>
  </button>
</template>
<script lang="ts">
import type { PropType } from 'vue';
type Variant = 'primary' | 'text' | 'danger';

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<Variant>,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconCls: String,
  },
  methods: {},
  computed: {
    cls() {
      return {
        'cursor-not-allowed active:scale-100': this.loading || this.disabled,
        'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-200':
          this.variant === 'primary',
        'bg-red-500 text-white hover:bg-red-600 focus:ring-red-200':
          this.variant === 'danger',
        'bg-white text-black shadow-none hover:bg-gray-200 focus:ring-0':
          this.variant === 'text',
      };
    },
  },
};
</script>
