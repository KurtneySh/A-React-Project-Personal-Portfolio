import React, { useState, useEffect } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import { getNFT } from "./FetchNFT.js"
import NFTcards from './NFTcards.js'
import Footer from './Footer.js'
import "../style/explorer.css"

const Explorer = () => {
  const [ownerAddress, setOwnerAddress] = useState("")
  const [number, setNumber] = useState("")
  const [NFTs, setNFTs] = useState("")

  useEffect(() => {
    getNFT(ownerAddress, setNumber, setNFTs)
  }, [ownerAddress])

  //Grab data through API, set number and NFTs after submitting the input value
  const inputHelper = () => {
    let input = document.querySelector("input")
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      setOwnerAddress(input.value)
    })
  }

//Grab data through API after clicking on the button
  const buttonHelper = () => {
    let input = document.querySelector("input")
    setOwnerAddress(input.value)
    getNFT(ownerAddress, setNumber, setNFTs)
  }

  //Create a div to present the searching result
  const nftHelper = () => {
    return (
      React.createElement("div", {className: "searchingResult"}, (
        <div>
          <div className='searchingText'>The address of <a href={`https://etherscan.io/address/${ownerAddress}`} target="_blank">{ownerAddress}</a> contains {number} NFTs</div>
          <div className='nftContainer'>
            {
              NFTs.map((NFT) => {
                console.log(NFT)
                return (
                  <div className='nftCardContainer'>
                    <NFTcards imageURL={NFT.imageURL} title={NFT.title} contractAddress={NFT.contractAddress} attributes={NFT.attributes} collectionName={NFT.collectionName}></NFTcards>
                  </div>
                )
              })
            }
          </div>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      ))
    )
  }

  return (
    <div className='container'>
      <div className="header">
        <div className='title'>NFT Searching Engine</div>
        <div className='subtitle'>A searching engine to discover NFTs through owner address</div>

        <div style={{marginTop: "50px"}} className='inputContent'>
          <form>
            <input 
              type="text"
              onChange={inputHelper}
              placeholder="Please input an address/ENS name to search for NFT"
            />
          </form>

          <button onClick={buttonHelper}>Go!</button>
        </div>
        <div style={{marginTop: "50px", fontSize: "15px"}}>
          eg. 0xb5ddebe5adc68c9fa23e35ba110e585488888888 / discusfish.eth
        </div>
      </div>
      <div className='content'>
        {
          ownerAddress ? 
          ((NFTs == [] || NFTs == "") && (number == "")) ? (
            <div className='searchingResult'>No NFT Found</div>
          ) : (
            nftHelper()
          ) : (
            <div className='searchingResult'>No NFT Found</div>
          )
        }
      </div>
      <Footer />
    </div>
  )
}

export default Explorer