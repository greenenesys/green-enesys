import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import RouterLink from '../RouterLink'
import { Link } from 'react-router-dom'


const RouterLinkWrapper = styled('div')`
	display: flex;
	align-items: center;

 	@media (max-width: 767px) { 
		position: absolute;
		flex-direction: column;
		justify-content: space-between;
		padding: 80px 0 100px;
		top: 100%;
		height: calc(100vh - 64px);
		max-height: 525px;
    	left: 0;
    	right: 0;
		background: #fff;
		opacity: 0;
		transform: translateX(100%);
		transition: .3s;

		
		
	
		.open &{
			opacity: 1;
			transform: translateX(0);
		}
		
	}
	
	a{
		font-family:'MaisonNeue';
	}


	&:before{
		content:'';
		position: absolute;
		top: 100%;
		left:0 ;
		right: 0;
		background: #fff;
		height: 100vh;

		${media.tablet(css`
			display:none;
		`)};
	}
	
  
`

const MenuWrap = styled('div')`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`

const OpenClose = styled('div')`
  	position: relative;
    float: right;
    display: inline-block;
    height: 19px;
    width: 25px;
	cursor: pointer; 	


	${media.tablet(css`
		display:none;
	`)};

`
let line = 
`	position: absolute;
	top: 8px;
	left:0;
    height: 3px;
    width: 100%;
	background: #000;
	border-radius: 2px;
	transition: .3s;` ;

const Line1 = styled('span')`
	${line}
	top: 0;

	.open &{
		transform: scale(.5) translateY(-3px);
		opacity: 0;
	}
`
const Line2 = styled('span')`
	${line}
	.open &{
		transform: rotate(45deg);
	}
`
const Line3 = styled('span')`
	${line}
	.open &{
		transform: rotate(-45deg);
	}
`
const Line4 = styled('span')`
	${line}
	bottom: 0;
	top: auto;

	.open &{
		transform: scale(.5) translateY(3px);
		opacity: 0;
	}
`
function handleClick (e){
	let item = e.currentTarget.parentNode;
	let wrapper = document.getElementById('root');
	let ac = 'open';

	if(hasClass(item , ac)){
		item.classList.remove(ac);
		wrapper.classList.remove('open-menu')
	}else {
		wrapper.classList.add('open-menu')
		item.classList.add(ac);
	}

	function hasClass(target, className) {
		return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
	}
} 

const renderRouterLinks = routes => {
    return [
        routes.map(route => {
			const active = route.path == '/';
            return (
				
                <RouterLink
                    key={route.path}
                    path={route.path} 
					name={route.name}
					active={active}
                />
            )
        }),
    ]
}

const MENU = ({ routes }) => {
	return (
		<MenuWrap>
			<OpenClose onClick={handleClick}>
				<Line1></Line1>
				<Line2></Line2>
				<Line3></Line3>
				<Line4></Line4>
			</OpenClose>
		 	<RouterLinkWrapper id='link-wrap'> 
				{renderRouterLinks(routes)} 
		 	</RouterLinkWrapper> 
		 </MenuWrap>
	)
}

export default  MENU; 