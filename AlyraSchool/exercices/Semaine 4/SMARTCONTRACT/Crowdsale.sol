pragma solidity ^0.5.11;
//0x32a35eC9B7D62273E99E47D24Ec65E703FE4391d
import "./SafeMath.sol";
import "./ERC20.sol";

contract Crowdsale {
    mapping(address => uint256) public balances;
    address payable private wallet;
    ERC20 public token;
    uint256 public rate = 1;
    uint256 public weiRaised;

    constructor(address payable _wallet) public {
        wallet = _wallet;
        token = new ERC20();// 0xC83329EA4E8983e7436D1cA425037e25dbDC72df
    }

    function() external payable {
        buyToken();
    }

    function buyToken() public payable {
        uint256 amount = msg.value;
        require(amount != 0, "Vous n'avez rien envoye");
        uint256 tkamount = amount * rate;
        token.transfer(msg.sender,tkamount); // transfer token
        balances[msg.sender] = msg.value;
        weiRaised += amount;
        wallet.transfer(amount); // transfer ether => wallet.send(amount)
    }

}
