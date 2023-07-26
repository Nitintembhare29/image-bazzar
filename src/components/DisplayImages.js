

const DisplayImages = ({images})=>{


    return (
        <div className="images">
            {
                images.map((img,index)=>{
                    return(
                        <img key={index} src={img.urls.small} alt="img.alt_description"/>
                    )
                })
            }
        </div>
    )
}
export default DisplayImages;