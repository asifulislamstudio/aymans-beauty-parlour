
import SecImage from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const HomeAbout = () => {
    return (
        <div className="bg-[#fff8f5] py-16 ">
            <div className="flex lg:flex-row-reverse flex-col-reverse lg:max-w-screen-xl items-center  mx-auto">
                {/* Text Section */}
                <div className="flex-1  px-6 lg:px-16">
                    <h1 className=" text-lg md:text-left text-center md:text-3xl font-semibold lg:leading-8 mb-4 ">Let us handle your screen <span className='text-pink-600'>Professionally.</span></h1>
                    <p className="md:text-justify text-center my-12">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum</p>
                    <div className='flex my-8'>
                        <div className='flex-1'>

                            <h2 className='font-extrabold text-pink-600 text-4xl'>500+</h2>
                            <p className='text-black'>Happe Customers</p>
                        </div>
                        <div className='flex-1'>

                            <h2 className='font-extrabold text-pink-600 text-4xl'>16+</h2>
                            <p className='text-black'>Total Services</p>
                        </div>
                    </div>
                </div>
                {/* Image-video Section */}
                <div className="p-6 md:p-12 flex-1 ">
                    <img className=" rounded-2xl" src={SecImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default HomeAbout;