/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "rules":{
            // 禁止对象字面量中出现重复的 key
            "no-dupe-keys": "error",
            // 禁止出现重复的 case 标签
            "no-duplicate-case": "error",
            // 禁止出现空语句块,允许catch出现空语句
            "no-empty": ["error", {"allowEmptyCatch": true}],
            // 禁止对 catch 子句的参数重新赋值
            "no-ex-assign":"error",
            // 禁止不必要的布尔转换
            "no-extra-boolean-cast": "error",
            // 禁止不必要的分号
            "no-extra-semi": "error",
            // 强制所有控制语句使用一致的括号风格
            "curly": "error"

        }
    }
}
