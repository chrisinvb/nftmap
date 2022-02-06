# nftmap
Easy way to upload any picture and mint an NFT that is shown on a map.

Last update:  February 6, 2022

What does NFT Map do?
-------------------------------------------------------------
Step #1: Open a web browser with Metamask installed, visit https://nftmint.traxa.io and click the 'Connect' button at the top right-hand corner.  
Step #2: Sign into your metamask and make sure you are connected to either
 (a) Polygon (Mainnet) 
 or
 (b) Polygon Mumbai (Testnet) using Metamask
Step #2: Click the 'Mint' button at the bottom right-hand corner
Step #3: When prompted, click 'Browse' to browse for an image that you would like to mint as an NFT from your computer.  Select that image and click 'Mint'.
Step #4:  Authorize the transaction on Metamask (we are covering the first 1000 images of storage hosting costs on Arweave automatically for you) and pay the gas fees in MATIC.
Step #5:  Give the Polygon and Arweave chains some time (1 minute to 20 minutes) to settle the transactions and your NFT should be visible on the map at https://nftmint.traxa.io and viewable on NFT browser of your wallet address. 

Why?  What is the Problem being Solved?
-------------------------------------------------------------
The Problem - We asked ourselves the question:

"How can anyone quickly mint an NFT of their favorite picture on their own wallet?"

We started out not knowing how to quickly and easily enable anyone to create an NFT.   So we started with the goals of:

1) Storing an NFT onto a genuinely decentralized network that is immutable.
2) Keep costs and gas fees to a minimum so anyone can do it.
3) Enable any user to easily mint an NFT in a fun way and social way.

We achieved each of these goals by writing the code and:

1) Deploying the uploaded images to Arweave
2) Writing the smart contracts with Polygon (low mint and gas fees - less than $0.01USD in MATIC).
3) Creating the https://nftmint.traxa.io site with a map of each picture based on where the user is currently located.

We wanted a way to allow people from all over the world to not only mint their own NFTs that can be viewed in their own wallet quickly and easily, but also allow others to interfact with those NFTs in a basic map experience.

Background:  
-------------------------------------------------------------
In this 3 day hackathon, we were able to demonstrate that we can take any picture, create a cost effective NFT (Polygon), store it immutably (Arweave) and geotag that picture on a map.  Our main project called Traxa is working on tracking the world's mobile assets included shipping containers.  This ETH Global hackathon project lays out a key proof of concept in the capabilities to be able to continue investigating, designing and implementing the larger goal of creating a platform and framework to track the world's mobile assets with Traxa.

More information about Traxa is available at https://www.traxa.io.

FAQ:
------------------
FAQ #1) Why is it called NFT Map and the URL is https://nftmint.traxa.io?  Answer:  We created the domain first and the name second.  There is too little time in the hackathon to change it, so we also set up a https://nftmap.traxa.io that redirects to https://nftmint.traxa.io.

FAQ #2)  What chain can I mint NFTs on with this? Answer:  You can use either:
 (a) Polygon Mainnet
 -OR-
 (b) Polygon Mumbai Testnet

Mint NFTs of Pictures on a Map showcase

How it's made
This project uses Polygon Mainnet for the NFT and Arweave for the storage of the image loaded.  The map is rendered by Leaflet.  First the image is uploaded to Arweave by our backend PHP script.  We donated 1 AR token to help fund some of the initial upload costs to store onto Arweave.  

NFT Smart Contract:
-----------------------------------
The contract is deployed on Polygon using MATIC Mainnet and minted by the client in the web browser enabled by connecting the site to the user's Metamask.  The transactions to generate the NFT are signed by the user.  It was determined that it takes on average of 0.05 MATIC as of February 6, 2022 to mint a single NFT on Polygon MainNet.  This is approximately $0.10USD at the time this documentation was written.

Javascript:
-----------------------------------
To begin with, we did not use any framework to build this project - it is all from scratch Javascript.  We recognize that could be a good thing or a bad thing.  With the three days we had for this project, there wasn't enough time to research, test and find a framework that would have allowed us to implement it faster.

Map Data:
-----------------------------------
We cheated on showing all of the smart contracts on a map to improve performance of rendering the images on the map by storing the data on a file on the server directly.  It would take to long to "scrape" the blockchain and show the images on the map otherwise. Otherwise, we would have to call the smart contract for every marker on the map and get the markers one at a time - which would take forever and longer than most people are patient for waiting to load.  There are ways

The map is rendered using the Leaflet Javascript library and OpenStreet Map.

Location Information:
-----------------------------------
Originally, we wanted to take the GPS coordinates typically encoded in the images and use that as the coordinates of where the NFT would be located.  But due to time constraints and it seemed a little more personalized, we prompt the user for their GPS location within their web browser.  If the user does not allow the coordinates to be pulled from their web browser, we do not allow them to mint an NFT of any picture that they upload.  Getting the GPS location and picture is kind of the point of the whole project.

Storage of the Images for the NFTs:
-----------------------------------
The storage of each JPG is archived permanently on the the Arweave project.  We donated 1 AR token worth of storage until it is used up since each NFT upload requires AR tokens to be spent in order to "rent" storage on the Arweave chain.  We use the transaction hash of the uploaded JPG or image to show that on the map.

Donations to the Arweave wallet that fund the storage of the JPGs uploaded is:  BEQhdEMtCYf8aYlQpAO44vXgNoAlVIWmZ-u6AKOdnpI
