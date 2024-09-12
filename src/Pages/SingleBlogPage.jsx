import { Button } from "@material-tailwind/react";
export default function SingleBlogPage(){
    return(
        <div className="px-4 md:px-12 py-4">
            <div className="text-green-900 text-left py-4 pt-12">
                <h1 className="text-4xl font-bold">Here Is The Perfect Response For Your Great Weaknesses</h1>
                <p className="text-lg mt-4 p-2">August 07, 2024</p>
            </div>
            <img className="w-full h-96 object-cover" src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' alt="image" />
            <p className="py-4 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime neque reprehenderit pariatur, dolorum consectetur iste at, deserunt quas, commodi consequatur deleniti numquam consequuntur iusto aperiam laudantium dolorem delectus expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quibusdam fuga hic dolorem nam animi magnam itaque obcaecati. Voluptas corporis officiis recusandae obcaecati laborum. Reiciendis ad voluptates qui rem id?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto corporis quos distinctio veritatis eligendi officiis dolore quam aperiam quia, delectus dolorem temporibus corrupti! Dolorem vero voluptates fuga quisquam nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ratione quo quis velit, voluptas omnis culpa, unde adipisci provident distinctio consectetur. Impedit fugit harum nemo laboriosam cupiditate natus molestiae rerum?</p>
            <Button> Read More Blogs</Button>
        </div>

    );
}