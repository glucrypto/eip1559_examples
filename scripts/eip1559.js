const {ethers } = require("hardhat");

(async () =>  {
	// Good explainer: https://hackmd.io/@q8X_WM2nTfu6nuvAzqXiTQ/1559-wallets

  const { deploy } = deployments;

	let blockNumberRes = await ethers.provider.getBlockNumber();
	let gasRes = await ethers.provider.getFeeData();
	let blockRes = await ethers.provider.getBlock();

	// Base Fee Per Gas - sent by miner
	let readableBaseFeePerGas = ethers.utils.formatUnits(blockRes.baseFeePerGas.toString(),'gwei')

	// User sets this
	let readableMaxFeePerGas = ethers.utils.formatUnits(gasRes.maxFeePerGas.toString(),'gwei')
	
	// User set this -Priority Fee
	let readableMaxPriorityFeePerGas = ethers.utils.formatUnits(gasRes.maxPriorityFeePerGas.toString(),'gwei')


	console.log('')
	console.log(`Block Number: ${blockNumberRes}`)
	console.log(`baseFeePerGas: ${readableBaseFeePerGas} gwei`)
	console.log(`maxFeePerGas: ${readableMaxFeePerGas} gwei`) 
	console.log(`maxPriorityFeePerGas: ${readableMaxPriorityFeePerGas} gwei
		`) 



})();