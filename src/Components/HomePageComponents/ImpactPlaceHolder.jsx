export default function ImpactPlaceholder({ imgSrc, textValue1, numberValue, textValue2 , textValue}) {
    return (
        <div className="bg-white rounded-lg shadow-2xl border bg-blur-sm h-94">
            <img className="h-32 w-auto mx-auto mt-8 my-4" src={imgSrc} alt={textValue2} />
            
            <div className="text-xl text-center space-y-4 mx-auto items-center w-3/4 py-4 ">
                <p>{textValue1}</p>
                <p className="font-bold text-center text-green-900 text-4xl">{numberValue}</p>
                <p>{textValue2} </p>
                <p>{textValue}</p>
            </div>
            {/* <h1 ></h1>
            <p className="text-xl text-center items-center max-w-32 py-4 pb-6 mx-auto"></p>
            <p className="text-xl text-center items-center max-w-32 py-4 mx-auto"></p> */}
        </div>
    );
}