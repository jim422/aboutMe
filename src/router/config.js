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
		component: AboutMe
	}, {
		path: '/knockout/platformConfig',
		exact: true,
		component: PlatformConfig
	}, {
		path: '/react/appeal',
		exact: true,
		component: Appeal,
	}, {
		path: '/h5',
		exact: true,
		component: H5
	}, {
		path: '/javascript',
		exact: true,
		component: JavaScript
	}, {
		path: '/javascript/scope',
		exact: true,
		component: Scope
	}, {
		path: '/javascript/closure',
		exact: true,
		component: Closure
	}, {
		path: '/javascript/listener',
		exact: true,
		component: Listener
	}, {
		path: '/javascript/cors',
		exact: true,
		component: Cors
	}]
};

export {
	config
}