import React, { useState } from 'react'


const apiKey = "toqWujNj1wU9SD6d5iFavW7D6T3GVkqu"
const endpoint = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`

export const getNFT = async (ownerAddress, setNumber, setNFTs) => {

    if (ownerAddress) {
        try{
            const response = await fetch(`${endpoint}/getNFTs/?owner=${ownerAddress}`)
            const result = await response.json()
            const nftNumber = await result.totalCount
    
            const nftList = await result.ownedNfts.filter((NFT) => !NFT.error && !NFT.spamInfo).map((NFT) => ({
                title: NFT.title || "N/A",
                contractAddress: NFT.contract.address || "N/A",
                imageURL: NFT.media[0].gateway || "N/A",
                attributes: NFT.metadata.attributes || "N/A",
                collectionName: NFT.contractMetadata.name || "N/A"
            }))
            // console.log(result)
            setNumber(nftNumber)
            setNFTs(nftList)
        } catch (e) {
            setNumber("")
            setNFTs("")
        }
    } 

}





