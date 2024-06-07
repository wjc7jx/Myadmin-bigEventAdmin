<!-- <template>
  <el-button
    :icon="isDark ? 'el-icon-moon' : 'el-icon-sunny'"
    circle
    plain
    type="primary"
    @click="toggleDarkMode"
    class="dark-toggle-btn"
  ></el-button>
</template>

<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDarkMode1 = useToggle(isDark)

const toggleDarkMode = () => {
  toggleDarkMode1()
  localStorage.setItem('isDarkMode', String(isDark.value))
}
</script>

<style scoped>
.dark-toggle-btn {
  margin-right: 10px;
}
</style> -->
