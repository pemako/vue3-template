import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
export default [
  // add more generic rulesets here, such as:
  js.configs.recommended,
  ...pluginVue.configs['flat/base'],
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // Vue specific rules
      'vue/no-unused-vars': 'error',
      'vue/no-multiple-template-root': 'off',
      'vue/require-default-prop': 'warn',

      // JavaScript specific rules
      indent: 0, // 解决 eslint 和 prettier 冲突
      'space-before-function-paren': 0, // 解决 eslint 和 prettier 冲突
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always']
    }
  }
]
