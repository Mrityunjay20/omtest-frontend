import HeroButton from "./heroButton";

export default function HeroGallery(){

    return(
    <div className="w-full flex flex-col justify-center items-center lg:flex-row py-12 lg:py-24 px-2 sm:px-3 md:px-12 lg:px-24">
        <div className="lg:w-2/5 text-center lg:text-left mx-auto lg:px-4">
            <h1 className="text-green-900 text-lg lg:text-3xl py-2 md:py-4">Our Digital Media</h1>
            <h2 className="font-bold text-3xl lg:text-5xl py-2 md:py-4 md:pb-8 lg:pb-20 lg:w-2/3">Fans Have to say!</h2>
            <div className="hidden lg:flex">
                <HeroButton buttonText={"Know More!"}/>
            </div>
        </div>
        <div className="lg:w-3/5 grid gap-1 md:grid-cols-3 md:gap-4 md:max-h-96">
            <div className="flex h-full gap-3 md:gap-0 flex-row justify-center items-center md:flex-col">
                <img className="h-48 object-cover py-2" src={"https://images.unsplash.com/photo-1617854307432-13950e24ba07?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <img className="h-48 object-cover py-2" src={"https://images.unsplash.com/photo-1617854307432-13950e24ba07?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            </div>
            <div className="h-96 flex lg:h-full justify-center items-center flex-col">
                <img className="h-96 object-cover py-2" src={"https://images.unsplash.com/photo-1617854307432-13950e24ba07?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            </div>
            <div className="flex h-full gap-4 md:gap-0 flex-row justify-center items-center md:flex-col">
                <img className="h-48 object-cover py-2" src={"https://images.unsplash.com/photo-1617854307432-13950e24ba07?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <img className="h-48 object-cover py-2" src={"https://images.unsplash.com/photo-1617854307432-13950e24ba07?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            </div>
        </div>
        <div className="lg:hidden p-6 w-full text-center">
            <HeroButton buttonText={"Know More!"}/>
        </div>
    </div>)
}