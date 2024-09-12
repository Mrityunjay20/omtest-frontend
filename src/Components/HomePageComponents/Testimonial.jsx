export default function Testimonials(){

    return(<>
    <div className="flex flex-col lg:flex-row lg:px-4 pb-8 lg:py-12 justify-center items-center">
        <div className="w-1/4 xl:w-1/4 hidden lg:flex flex-col items-end space-y-2">
            <div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                className="size-28 xl:size-36 rounded-full object-cover"
                alt="image"
                />
            </div>
            <div className="pr-8 xl:pr-16">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                className="size-28 xl:size-36 rounded-full object-cover"
                alt="image"
                />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                className="size-28 xl:size-36 rounded-full object-cover"
                alt="image"
                />
            </div>
        </div>

        <div className="z-0">
            <div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                className="size-56 sm:size-64 md:size-80 xl:size-96 md:min-w-80 rounded-full object-cover"
                alt="image"
                />
            </div>
        </div>

        <div className="lg:-ml-32 -mt-12 z-2 w-4/5 lg:w-2/3 xl:w-1/2 rounded-sm lg:rounded-l-full lg:rounded-r-xl lg:pl-32 p-4 py-6 lg:py-12 bg-gray-300 text-justify">
            <div className="pt-6 lg:p-4 text-3xl text-center lg:text-left md:text-4xl text-yellow-900">★ ★ ★ ★ ★ ★ </div>
            <p className="p-4 md:p-8 lg:p-4 w-full md:text-lg py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo earum natus laboriosam mollitia ratione est soluta nisi, molestias laborum magni vero eos commodi ullam quas cum! Non sit suscipit corporis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque assumenda placeat laborum possimus, illo deserunt quis iusto id. Vero ipsa porro pariatur itaque esse nostrum eaque vitae aut assumenda.
            </p>
            <hr className="pt-2 lg:p-4 border-t-2 ml-4 border-black" />
            <div className="lg:p-4 lg:py-6 text-center lg:text-left">
                <h2 className="text-xl font-bold">Steve Smith</h2>
                <p className="text-lg font-semibold italic">Reviewer</p>
            </div>
        </div>
    </div>
    </>)
}