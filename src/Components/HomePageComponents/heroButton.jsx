export default function HeroButton({buttonText, hyperLink }) {
  return (

    <a href={hyperLink}>
      <button className="bg-yellow-900 mb-4 rounded-sm min-w-28 w-1/2 md:w-1/3 shadow-lg px-4 py-2 text-white font-semibold">
        {buttonText}
      </button>
    </a>
  );
}
