
import heroimage from "../../../assets/images/hero-image.png";

const Hero = () => {
    return (
        <div className="bg-pink-200/50 ">
            <div className="flex lg:flex-row flex-col-reverse lg:max-w-screen-xl items-center  mx-auto">
                {/* Text Section */}
                <div className="flex-1  px-6 lg:px-16">
                    <h1 className=" text-3xl md:text-left text-center md:text-5xl font-bold lg:leading-16 ">BEAUTY SALON FOR EVERY WOMEN</h1>
                    <p className="md:text-justify text-center my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn md:btn-wide w-full   bg-pink-600 rounded-lg text-white my-4 md:my-12">Get an Appointment</button>
                </div>
                {/* Image-video Section */}
                <div className="p-6 md:p-12 flex-1 ">
                    <img className=" rounded-2xl" src={heroimage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;