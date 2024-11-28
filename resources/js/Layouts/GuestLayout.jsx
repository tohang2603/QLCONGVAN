import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
	return (
		<div className='flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0'>
			<div className='flex flex-col items-center justify-center'>
				<Link href='/'>
					<img
						className='h-20 w-20 fill-current'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/250px-Emblem_of_Vietnam.svg.png'
						alt=''
					/>
				</Link>
				<div className='mt-3'>
					<h3 className='font-bold text-gray-700'>QUẢN LÝ CÔNG VĂN</h3>
				</div>
			</div>

			<div className='mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg'>
				{children}
			</div>
		</div>
	);
}
