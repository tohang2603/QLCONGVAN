import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInputPw from '@/Components/TextInputPw';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	});

	const submit = (e) => {
		e.preventDefault();

		post(route('login'), {
			onFinish: () => reset('password'),
		});
	};

	return (
		<GuestLayout>
			<Head title='Đăng Nhập' />

			{status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor='email' value='Tài khoản' />

					<TextInput
						id='email'
						type='email'
						name='email'
						value={data.email}
						className='mt-1 block w-full'
						autoComplete='username'
						isFocused={true}
						onChange={(e) => setData('email', e.target.value)}
					/>

					<InputError message={errors.email} className='mt-2' />
				</div>

				<div className='mt-4'>
					<InputLabel htmlFor='password' value='Mật khẩu' />

					<TextInputPw
						id='password'
						name='password'
						value={data.password}
						className='mt-1 block w-full'
						autoComplete='current-password'
						onChange={(e) => setData('password', e.target.value)}
					/>

					<InputError message={errors.password} className='mt-2' />
				</div>

				<div className='mt-4 block'>
					<label className='flex items-center'>
						<Checkbox
							name='remember'
							checked={data.remember}
							onChange={(e) => setData('remember', e.target.checked)}
						/>
						<span className='ms-2 text-sm text-gray-600'>Ghi nhớ</span>
					</label>
				</div>

				<div className='mt-4 flex items-center justify-end'>
					{canResetPassword && (
						<Link
							href={route('password.request')}
							className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
						>
							Quên mật khẩu?
						</Link>
					)}

					<PrimaryButton className='ms-4' disabled={processing}>
						Đăng nhập
					</PrimaryButton>
				</div>
			</form>
			<div className='justify-center mt-2 items-center flex gap-2'> 
				{/* muốn dùng class gap-2 phải khai báo flex(xếp khối) */}
				Nếu bạn chưa có tài khoản?
				<Link
                        href={route('register')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Đăng ký
                    </Link>
			</div>
		</GuestLayout>
	);
}
