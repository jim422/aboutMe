//组件
import AboutMe from '../about_me/index.js'
import PlatformConfig from '../platform_config/PlatformConfig'
import Appeal from '../appeal/index'
import JavaScript from '../javascript/index'
import H5 from '../h5/index'
import React from 'react';
import Scope from '../javascript/component/Scope'
import Closure from '../javascript/component/Closure'
import Listener from '../javascript/component/Listener'
import Cors from '../javascript/component/Cors'

let config = {
	routes: [{
		path: '/aboutMe',
		exact: true,
		component: AboutMe,
		title: 'aboutMe',
	}, {
		title: 'knockout',
		children: [{
			path: '/knockout/platformConfig',
			exact: true,
			component: PlatformConfig,
			title: '平台配置'
		}]
	}, {
		path: '/react/appeal',
		exact: true,
		component: Appeal,
		title: 'rect + antd',
	}, {
		path: '/h5',
		exact: true,
		component: H5,
		title: 'h5',
	}, {
		title: 'javascript',
		children: [{
			path: '/javascript',
			exact: true,
			component: JavaScript,
			title: 'javascript'
		},{
			path: '/javascript/scope',
			exact: true,
			component: Scope,
			title: '作用域',
		}, {
			path: '/javascript/closure',
			exact: true,
			component: Closure,
			title: '闭包',
		}, {
			path: '/javascript/listener',
			exact: true,
			component: Listener,
			title: '事件',
		}, {
			path: '/javascript/cors',
			exact: true,
			component: Cors,
			title: '跨域',
		}],
	},
	],
};

export {
	config,
}