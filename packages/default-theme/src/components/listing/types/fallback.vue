<!--
Fallback component for properties that arent implemented and have known display type like "text, color, ".
-->
<template>
  <div v-if="getComponent">
    <component
      :is="getComponent"
      :filter="filter"
      :current-filters="currentFilters"
      :selected-values="selectedValues"
      @toggle-filter-value="toggleFilterValue"
      :selected="selected"
      :key="filter.code"
    />
  </div>
</template>

<script>
import { SfFilter } from "@storefront-ui/vue"
import NoFilterFound from "@/components/listing/NoFilterFound.vue"
import FallbackFilter from "@/components/listing/types/fallback.vue"
import { simplifyString } from "@/helpers"

export default {
  name: "SwFallbackPropertyFilter",
  components: {
    SfFilter,
  },
  props: {
    filter: {
      type: Object,
      default: () => ({}),
    },
    selectedEntityFilters: {
      type: Array | Object,
      default: () => [],
    },
    selectedFilters: {
      type: Array | Object,
      default: () => [],
    },
    currentFilters: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    getComponent() {
      try {
        return () => ({
          component: import(
            `@/components/listing/types/${this.filter.displayType}.vue`
          ),
          error: NoFilterFound,
        })
      } catch (e) {
        console.error("SwProductListingFilter:getComponent", e)
      }
    },
    filterCode() {
      return simplifyString(this.filter.label.toLowerCase())
    },
    selectedValues() {
      return this.currentFilters.properties || []
    },
    selected() {
      return this.selectedFilters[this.filter.code]
    },
  },
  methods: {
    toggleFilterValue(value) {
      this.$emit("toggle-filter-value", value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.filters {
  &__title {
    text-align: left;
    &:first-child {
      margin: 0 0 var(--spacer-base) 0;
    }
  }
  &__item {
    padding: var(--spacer-2xs) 0;
    &--color {
      width: auto;
      margin: var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0;
    }
  }
  &__buttons {
    margin: var(--spacer-base) 0 calc(var(--spacer-base) * 3) 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 0 0;
    }
  }
  &__button-clear {
    color: #a3a5ad;
    margin-top: 10px;
    background-color: var(--c-light);
  }
}
</style>
