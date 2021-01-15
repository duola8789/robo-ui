module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/recommended', '@vue/prettier', '@vue/typescript', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        // 要求使用骆驼拼写法 https://cn.eslint.org/docs/rules/camelcase
        camelcase: ['error'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
