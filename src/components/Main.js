import React, { Component } from 'react'
import dai from '../dai.png'

class Main extends Component {

  render() {
    return (
      <div id="content" className="mt-3">
		<table className="table table-borderless text-muted text-center">
		<thread>
		<tr>
		<th scope="col">Deposit Amount</th>
		<th scope="col">Interest </th>
		</tr>
		</thread>
		<tbody>
		<tr>
		<td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} Crypto's</td>
              <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} Vcoin</td>
     </tr>
          </tbody>
        </table>

		<div className="card mb-4">

			<div className="card-body">
			<form className="mb-3" onSubmit={(event)=>{
				event.preventDefault()
				let amount
				amount=this.input.value.toString()
				amount=window.web3.utils.toWei(amount,'Ether')
				this.props.stakeTokens(amount)
			}}>
			<div>
			<label className="float-left"><b>Deposit Crypto</b></label>
			<span className="float-right text-muted">
			Balance:{window.web3.utils.fromWei(this.props.daiTokenBalance,'Ether')}
			</span>
			</div>
			<div className="input-group mb-4">
			<input
				type="text"
				ref={(input)=>{this.input=input}}
				className="form-control form-control-lg"
				placeholder="0"
				required/>
				<div className="input-group-append">
				<div className="input-group-text">
				<img src={dai} height='32' alt=""/>
				&nbsp;&nbsp;&nbsp;Ether
			</div>
			</div>
			</div>
			<button type="submit" className="button btn-primary btn-block btn-lg">DEPOSIT!</button>
			</form>
		</div>
      </div>

	  </div>
     );
  }
}

export default Main;
