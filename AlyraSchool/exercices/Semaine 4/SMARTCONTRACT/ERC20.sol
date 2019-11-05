pragma solidity ^0.5.11;
//0xC83329EA4E8983e7436D1cA425037e25dbDC72df
import "./SafeMath.sol";


contract  ERC20 {
  using SafeMath for uint256;
  string public name = "ERC20 Token ";
  string public symblol = "ß";
  uint decimals = 18;
  uint private _totalSupply = 10000 ether;
  mapping (address => uint256) private _balances;
  mapping (address => mapping (address => uint256)) private _allowances;

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);

constructor() public {
    _balances[msg.sender] = _totalSupply;

}
  function totalSupply() external view returns (uint256){
    return _totalSupply;
  }

  function balanceOf(address account) external view returns (uint256){
    return _balances[account];
  }

  function transfer(address recipient,uint256 amount) external returns (bool){
    require(msg.sender != address(0), "ERC20: transfer from the zero address");
    require(recipient != address(0), "ERC20: transfer to the zero address");

    _balances[msg.sender] = _balances[msg.sender].sub(amount, "ERC20: transfer amount exceeds balance");
    _balances[recipient] = _balances[recipient].add(amount);

    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function allowances(address owner,address spender) external view returns (uint256){
     return _allowances[owner][spender];

  }

  function approve(address spender,uint256 amount) external returns (bool){

        require(msg.sender != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);

        return true;

  }

  function transferFrom(address sender, address recipient,uint256 amount) external returns (bool){
    require(msg.sender != address(0), "ERC20: transfer from the zero address");
    require(recipient != address(0), "ERC20: transfer to the zero address");

    _balances[msg.sender] = _balances[msg.sender].sub(amount, "ERC20: transfer amount exceeds balance");
    _balances[recipient] = _balances[recipient].add(amount);
    require(msg.sender != address(0), "ERC20: approve from the zero address");
    require(sender != address(0), "ERC20: approve to the zero address");
    _allowances[msg.sender][sender] = amount;
    _allowances[msg.sender][sender].sub(amount, "ERC20: transfer amount exceeds allowance");
    return true;
  }
}
