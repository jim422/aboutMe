module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['airbnb', 'jest-enzyme'],
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'linebreak-style': 'off', // Don't play nicely with Windows.
		'arrow-parens': 'off', // Incompatible with prettier
		'object-curly-newline': 'off', // Incompatible with prettier
		'no-mixed-operators': 'off', // Incompatible with prettier
		'arrow-body-style': 'off', // Not our taste?
		'function-paren-newline': 'off', // Incompatible with prettier
		'no-plusplus': 'off',
		'space-before-function-paren': 0, // Incompatible with prettier
		'no-console': 'warn', // airbnb is using warn
		'no-alert': 'error', // airbnb is using warn
		'no-param-reassign': 'off', // Not our taste?
		"radix": "off", // parseInt, parseFloat radix turned off. Not my taste.
		'react/require-default-props': 'off', // airbnb use error
		'react/forbid-prop-types': 'off', // airbnb use error
		'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
		'prefer-destructuring': 'off',
		'react/no-find-dom-node': 'off', // I don't know
		'react/no-did-mount-set-state': 'off',
		'react/no-unused-prop-types': 'off', // Is still buggy
		'react/jsx-one-expression-per-line': 'off',
		"no-useless-rename": "off",
		"jsx-a11y/anchor-is-valid": ["off"],
		"jsx-a11y/label-has-for": [2, {
			"required": {
				"every": ["id"]
			}
		}], // for nested label htmlFor error
		"allowIndentationTabs": true,
		"default-case": ["off", { "commentPattern": "^skip\\sdefault" }],
		"no-tabs": "off",
		"indent": "off",
		"spaced-comment": "off",
		"consistent-return": "off",
		"react/jsx-indent-props": ["off", "tab"],
		"react/jsx-indent": "off",
		"react/prop-types": "off",
		"react/destructuring-assignment": "off",
		"jsx-quotes": "off", //单引号，双引号
		"react/prefer-stateless-function": "off", //一个组件中只有render方法时是否建议使用纯函数
		"class-methods-use-this": "off",
		"max-len": "off", //关闭单行最多多少个字符
		"no-unused-expressions": "off",
		"jsx-a11y/no-static-element-interactions": "off", //使用没有语义的标签
		"import/prefer-default-export": "off", // export 单个时不提示 export default
		"jsx-a11y/alt-text": "off",
		"react/no-unescaped-entities": "off",
		"react/no-access-state-in-setstate": "off",
		"no-trailing-spaces": "off",
		"no-useless-constructor": "off",
		"no-use-before-define": "off",
		"func-names": "off",
		"max-lines": ["warn", 250],
		"max-statements": ["warn", 50]
	}
};