import React, { Component } from 'react'

export default function Closure(props) {
	return (
		<div>
			<h3>闭包</h3>
			<p>我觉得对于前端来说这个话题是逃避不了的，而且这种东西很难用离两句话讲清楚，总感觉闭包是js的一个隐蔽的一面，所以我们从下面的一段js代码开始</p>
			<img src={ require('../assets/closure_1.png') } className='img-container'/>
			<p>
				函数rem的作用域能够访问foo的内部作用域，然后把rem函数本身当作了foo函数的返回值，在foo函数执行后预期将rem返回，并将其引用地址赋值给了bar，然后执行。

			</p>
			<p>
				执行完成后，我们通常会下意识的认为foo函数的整个内部会被引擎的垃圾回收机制收回，而闭包的神奇之处在于它可以阻止这个事情。原因在于rem所在位置是在函数foo的作用域内，而foo把rem当作返回值传递到了外部的作用域<b>且外部有变量接受了此返回值的引用。</b>这样rem是肯定不会被销毁的，而rem又持有对原始作用域的引用（foo函数），因此js引擎不会对foo函数内部的作用域进行垃圾回收机制。
			</p>

		</div>
	)
}
