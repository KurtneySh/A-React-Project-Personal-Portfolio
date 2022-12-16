import React from 'react'

const NFTcards = ({title, contractAddress, imageURL, attributes, collectionName}) => {
  return (
    <div className='nftCard'>
        <div className='summary'>
            <img src={imageURL} alt={"Loading"} />
            <div style={{fontWeight: "bold"}}>{title}</div>
        </div>
        <div className='detail'>
            <div>Collection Name: {collectionName}</div>
            <div>Contract Address: <a href={`https://etherscan.io/address/${contractAddress}`} target="_blank" >0x......→</a></div>
            <div>
                {
                    attributes !== "N/A" ? attributes.map((attribute) => {
                        return (
                            <div className='attributes'>
                                <span style={{fontWeight: "bolder"}}>{attribute.trait_type}: </span>
                                <span>{attribute.value}</span>
                            </div>
                        )
                    }) : "attributes: N/A"
                }
            </div>
        </div>
    </div>
  )
}

export default NFTcards