import React, { Component } from 'react'


export default function Scope(props) {

	return(
		<div>
			<h3>作用域</h3>
			<p>
				作用域其实就是一个能存储变量的值，并能在之后对这个值进行访问或更改的一块儿区域或范围。
				<br/>作用域可以大体分为全局作用域，函数作用域和块儿作用域。
				<br/>全局变量可在任何地方以window.xxx的方式访问，但是函数作用域内变量无法在函数作用域外访问
				<img src={ require('../assets/scope_1.jpg') } className={'img-container'}/>
			</p>

			<p>
				<img src={ require('../assets/scope_2.jpg') } className={'img-container'}/>
				在上面的代码中bar函数里输出的值会是'inner', bar中打印了a, js引擎首先在当前作用域bar函数中查找a变量，如果没有找到就会往它的上一级作用域foo去查找，发现有变量a，并已经被赋值为'inner'后js引擎就通过console函数把'inner'打印了出来，如果到了全局作用域还没有找到变量a，引擎就会抛出Uncaught ReferenceError: a is not defined。 <i>作用域查找会在找到第一个匹配的标示符后就会停止</i><br/>

				作用域嵌套关系是由函数声明时所处的位置决定的，例如在上面的栗子当中的作用域嵌套关系就是 window > foo > bar。
				但是有一种代码可以在运行时修改作用域，这就是eval（不太建议使用，会导致性能降低）。
				<img src={ require('../assets/scope_3.png') } className={'img-container'}/>

	</p>

		</div>

	)
}