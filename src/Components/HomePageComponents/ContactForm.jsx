import { Card, Input, Button, Typography } from "@material-tailwind/react";
export default function ContactForm() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="hidden md:flex relative w-1/2 bg-yellow-200 bg-getintouch bg-cover">
          <div className="absolute bottom-12 md:left-8 lg:left-36 bg-white space-y-4 text-green-900  h-56 border-b-4 border-green-900 w-52 p-6 font-semibold text-lg mx-auto flex flex-col justify-center items-center">
            <i className="fa-solid fa-phone-volume text-4xl"></i>
            <p className="text-center">Get this free for contact now</p>
            <p> +91 89289 13992 </p>
          </div>
        </div>

        <div className="md:w-2/3 lg:w-1/2 flex justify-center items-center bg-green-900 py-2 sm:py-8 md:py-16">
          <Card className="bg-gray-300 p-8 rounded-sm" shadow={false}>
            <h2 className="text-lg lg:text-2xl text-green-900 text-center">
              Contact us
            </h2>
            <h1 className="text-2xl lg:text-4xl mx-auto py-2 font-bold text-gray-900">
              Get In Touch
            </h1>
            <form className="mt-2 md:mt-8 px-8 sm:p-0 mb-5 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-5 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-left -mb-5"
                >
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="your name"
                  className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-left -mb-5"
                >
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-left -mb-5"
                >
                  Address
                </Typography>
                <Input
                  size="lg"
                  placeholder="Street, locality, City, State - pincode"
                  className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-left -mb-5"
                >
                  Phone
                </Typography>
                <Input
                  size="lg"
                  placeholder="+9999999999"
                  className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-left -mb-5"
                >
                  Message
                </Typography>
                <Input
                  size="lg"
                  placeholder="your message"
                  className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button className="mt-6" fullWidth>
                Send Request
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:py-2 lg:gap-2 lg:px-8 bg-gray-200 rounded-md">
        <div className="flex w-full lg:w-full sm:w-3/4 justify-start items-center space-x-8 px-4 p-4 border-b-4 lg:border-b-0 lg:border-r-4  border-gray-400">
          <div className="bg-gray-900 size-12 sm:size-16 rounded-full flex items-center justify-center">
            <i className="rounded-full sm:text-3xl text-white fa-solid fa-phone-volume"></i>
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Call Now</h2>
            <p>+91 89289 13992</p>
          </div>
        </div>

        <div className="flex w-full lg:w-full sm:w-3/4 justify-start items-center space-x-8 px-4 p-4 border-b-4 lg:border-b-0 lg:border-r-4  border-gray-400">
          <div className="bg-gray-900 size-12 sm:size-16 rounded-full flex items-center justify-center">
            <i className="rounded-full sm:text-3xl text-white fa-regular fa-envelope"></i>
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Email Us</h2>
            <p> contact@organicmatki.in </p>
          </div>
        </div>

        <div className="flex w-full lg:w-full sm:w-3/4 justify-start items-center space-x-8 px-4 p-4 border-b-4 lg:border-b-0 border-gray-400">
          <div className="bg-gray-900 size-12 sm:size-16 rounded-full flex items-center justify-center">
            <i className="rounded-full sm:text-3xl text-white fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Location</h2>
            <p>Bundelkhand </p>
          </div>
        </div>
      </div>
    </>
  );
}
