
pragma^0.4.18

import "./IERC20.sol";
import "./SafeMath.sol";


contract  ERC20a is IERC20 {
  using SafeMath for uint256;
  string public name = "ERC20 Token ";
  String public symblol = "ß";
  uint decimals = 18
  uint private _totalSupply;
  mapping (address => uint256) private _balances;
  mapping (address => mapping (address => uint256)) private _allowances;


  function totalSupply() external view returns (uint256){
    return _totalSupply
  }

  function balanceOf(address account) external view returns (uint256){
    return _balances[account];
  }

  function transfer(address msg.sender,address recipient,uint256 amount) external returns (bool){
    require(msg.sender != address(0), "ERC20: transfer from the zero address");
    require(recipient != address(0), "ERC20: transfer to the zero address");

    _balances[msg.sender()] = _balances[msg.sender].sub(amount, "ERC20: transfer amount exceeds balance");
    _balances[recipient] = _balances[recipient].add(amount);
    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function allowances(address owner,address spender) external view returns (uint256){
     return _allowances[owner][spender];

  }

  function approve(address msg.sender,address spender,uint256 amount) external returns (bool){

        require(msg.sender != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true

  }
  function transferFrom(address sender, address recipient,uint256 amount) external returns (bool){
    transfer(sender, recipient, amount);
    approve(sender, msg.sender, _allowances[sender][msg.sender].sub(amount, "ERC20: transfer amount exceeds allowance"));
    return true;
  }
}
