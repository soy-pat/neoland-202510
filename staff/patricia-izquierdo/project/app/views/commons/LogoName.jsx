export function LogoName({ imageClassName, textClassName }) {
    return <div className="flex items-center flex-col justify-center content-center">
        <img src='../assets/logo.png' className={`m-1 ${imageClassName}`} />
        <h1 className={`font-manrope text-white font-bold ${textClassName}`}>Letterbooksd</h1>
    </div>
}