import auden from '../assets/auden.png'
import shadeShore from '../assets/SHADE.png'
import starsAbove from '../assets/stars.png'
import UpUp from '../assets/up_up.png'
import smart from '../assets/Smartly_Round.png'
import dealworthy from '../assets/Dealworthy.png'




export const OWNED_BRAND_DATA = 
	{
		PORTFOLIO: [
			{
				id: 1,
				key: '01',
				label: 'Auden',
				width: 140,
				marginLeft: 10,
				color:'#239058',
                image: ''
				
			},
		
		],

		ACCESSORIES: [
			{
				id: 1,
				key: '01',
				label: 'Auden',
				width: 140,
				left: 570,
				top: 15,
				color:'#239058',
                image: auden
				
			},
			{
				id: 2,
				key: '02',
				label: 'Shade & Shore',
				width: 140,
				left: 1130,
				top: 15,
				color:'#239058',
				image: shadeShore
				
			},
			{
				id: 3,
				key: '03',
				label: 'Stars & Above',
				width: 140,
				left: 570,
				top: 70,
				color:'#239058',
				image: starsAbove
			},
			
		],
		ESSENTIALS: [
			{
				id: 1,
				key: '01',
				label: 'dealworthy',
				width: 290,
				left: 5,
				top: 15,
				color:'#239058',
                image: dealworthy,
				description:"testing the app",
				date:"July 2024 - july 2025"
				
			},
			{
				id: 2,
				key: '02',
				label: 'Shade & Shore',
				width: 290,
				left: 5,
				top: 70,
				color:'#239058',
				image: UpUp
				
			},
			{
				id: 3,
				key: '03',
				label: 'Stars & Above',
				width: 290,
				left: 5,
				top: 123,
				color:'#239058',
				image: smart
			},
		],
    }