if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);   
}
else {
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}
var account;
window.web3.eth.getAccounts((error, accounts) => {
    account = accounts[0];
});
var tokenSaleAddress = '0x306f88d770bd22ed370e6a6d9f807d2dbdbf6184';
var tokenAddress = '0x35fc96236e097b78650b2953b428e1f444e0e76b';
var tokenSaleABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "deadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "goal",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "valueOfToken",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"name": "etherValueOfToken",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountRaised",
				"type": "uint256"
			}
		],
		"name": "GoalReached",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "isContrib",
				"type": "bool"
			}
		],
		"name": "Transferred",
		"type": "event"
	}
];

var tokenABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]

var tokenSale = new web3.eth.Contract(tokenSaleABI, tokenSaleAddress);
var token = new web3.eth.Contract(tokenABI, tokenAddress);
// var transferred = tokenSale.Transferred();
// var received = token.Transfer();

// tokenSale.events.Transferred({fromBlock: 0},  function(error, event){ console.log(error) })
//       .on('data', (log) => {
//           console.log("Data: ");
//           console.log(log);
//       })
//       .on('changed', (log) => {
//         console.log(`Changed: ${log}`)
//       })
//       .on('error', (log) => {
//         console.log(`error:  ${log}`)
//       })

// received.watch(function(err, result) {
//     if(!err) {
//         document.getElementById("myBalance").innerText = "Ether Balance: "+result.args._value.toString();
//     } else {
//         console.log(err);
//     }
// });


function getBalance() {
    //Gets the Ether balance. Will later be changed to STM balance.
    if(account != null) {
        console.log(token.methods)
        token.methods.balanceOf(account.toString()).call(function(err, balance) {
            document.getElementById("myBalance").innerText = "STM Balance: "+balance;
            console.log(balance);
        });
    }
    else {
        notice("Not logged into MetaMask. Login and Reload")
    }
}

function getSTM() {
    //Call the tokenSale contract to get STM
    var amount = document.getElementById("amount").value;
    console.log(amount);
    web3.eth.sendTransaction({from: account, to: tokenSaleAddress, value: web3.utils.toWei(amount, 'ether')}, function(err, transactionHash) {
        if (!err)
          console.log(transactionHash); 
      });
}

function sendSTM() {
    //Call the tokenSale contract to get STM
	var address = document.getElementById("address").value;
	var stm = document.getElementById("stm").value;
    console.log(stm);
    // web3.eth.sendTransaction({from: account, to: tokenSaleAddress, value: web3.utils.toWei(amount, 'ether')}, function(err, transactionHash) {
    //     if (!err)
    //       console.log(transactionHash); 
	//   });
	token.methods.transfer(address, stm).send({from: account});
}


function notice(message) {
    document.getElementById("notice").innerText = message;
}