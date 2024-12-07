export default function SuaCongVan({cv}){
    console.log(cv)
    return (
        <AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý</h2>}
		>
			<Head title='Sửa công văn' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>You're logged in!</div>
          </div> */}
					<div>Loại Công Văn</div>
					{/*  */}
					<form onSubmit={submit}>
						<input type='text' value={data.name} onChange={(e) => setData('name', e.target.value)} />
						<input type='file' value={data.avatar} onChange={(e) => setData('avatar', e.target.files[0])} />
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}