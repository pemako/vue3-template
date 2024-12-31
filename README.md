# project01

项目配置说明

- 代码格式化

```
// .prettierrc
{
  "singleQuote": true, // 强制单引号
  "semi": false, // 取消分号
  "trailingComma": "none" // 最后一个逗号结尾
}

// eslint 新增 下面两行解决和 prettier 冲突
indent: 0
'space-before-function-paren': 0
```

- commit 规范

```
// .cz-config.js
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature,也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}


```

- Husky 在 Git hooks 中执行脚本（如检查提交信息、运行 Lint 检查

```
pnpm add -D husky husky-init

// 初始化
npx husky-init && pnpm install

// 添加 pre-commit 钩子
npx husky add .husky/pre-commit "pnpm run lint"

// 确保 commitlint 已安装并配置
pnpm add -D @commitlint/{config-conventional,cli}

// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional']
}

// 在 package.json 中配置
{
  "scripts": {
    "prepare": "husky install"
  },
  "husky": {
    "hooks": {
      "commit-msg": "npx --no-install commitlint --edit $1"
    }
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
}
```

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
