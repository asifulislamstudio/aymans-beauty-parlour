import { useForm } from "react-hook-form"

const HomeContact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex flex-col  py-16 items-center bg-[#fff8f5]'>
            <h1 className='font-bold text-4xl my-16'>Let us handle your project, professionally.</h1>
            <div className='max-w-screen-xl mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-4 '>
                        <input {...register("firstname", { required: true })} className=' focus:outline-2 focus:outline-offset-2 focus:outline-pink-600 py-4 bg-white px-2 rounded-md w-[400px] shadow-md text-black focus:border-pink-600 ' placeholder='First Name' type="text" name="firstname" />
                        <input {...register("lastname", { required: true })} className=' focus:outline-2 focus:outline-offset-2 focus:outline-pink-600 py-4 bg-white px-2 rounded-md w-[400px] shadow-md text-black focus:border-pink-600  ' placeholder='Last Name' type="text" name="lastname" />

                        <input {...register("email", { required: true })} className=' focus:outline-2 focus:outline-offset-2 focus:outline-pink-600 py-4 bg-white px-2 rounded-md w-[400px] shadow-md text-black ' placeholder='Email Address' type="email" name="email" />
                        {errors.email && <span>This field is required</span>}
                        <input {...register("phonenumber", { required: true })} className=' focus:outline-2 focus:outline-offset-2 focus:outline-pink-600 py-4 bg-white px-2 rounded-md w-[400px] shadow-md text-black ' placeholder='Phone Number' type="tel" name="phonenumber" />
                        {errors.phonenumber && <span>This field is required</span>}
                    </div>
                    <textarea {...register("yourmessage", { required: true })} className='bg-white w-full my-8 p-4 focus:outline-2 focus:outline-offset-2 focus:outline-pink-600 ' name="yourmessage" placeholder='Your Massage' cols="30" rows="8"></textarea>
                    <div className='flex justify-center'>
                        <button className=' btn btn-wide bg-pink-600 text-white ' type='submit'>Send Massage</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomeContact;