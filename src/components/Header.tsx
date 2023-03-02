import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import wallpaper from '../assets/images/rick-and-morty-rick-morty-rik-morti-rik-i-morti-ten-teni-pol 1.png'

interface HeaderProps {
	page: string
}

export function Header(props: HeaderProps) {
	return (
		<div className='header'>
			<div className='image'>
				<img className='wallpaper' src={wallpaper} alt='rick & morty' />
			</div>
			<div className='title'>
				<span>Rick & Morty Show - {props.page}</span>
				<div className='buttons'>
					<Link to='/characters'>
						<Button variant='success'>Characters</Button>
					</Link>

					<Link to='/episodes'>
						<Button variant='outline-success'>Episodes</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
