/**
 * Created by tong on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class SelectZone extends Component {
  constructor(props) {//eslint-disable-line no-unused-vars
    super(props);
  }

  handleChange() {
    let {select} = this.props;
    let cityOfSelect = this.refs.citySelect.value;
    let sortRule = 'id';

    select(cityOfSelect, sortRule);
  }

  handleClick() {
    let {select} = this.props;
    let cityOfSelect = this.refs.citySelect.value;
    let sortRule = this.refs.myButton.value;

    select(cityOfSelect, sortRule);
  }


  render() {
    return (
      <div>
        <div className="row">
          <form>
            <label className="col-sm-1">城市</label>
            <select className="col-sm-1" onChange={this.handleChange.bind(this)}
                    ref="citySelect">
              <option value="">all</option>
              <option value="北京">北京</option>
              <option value="上海">上海</option>
              <option value="成都">成都</option>
            </select>
          </form>
        </div>
        <div>
          <br/>
          <div className="row">
            <form>
              <label className="col-sm-1">排序</label>
              <button type="button" className="col-sm-1" value="price"
                      onClick={this.handleClick.bind(this)} ref="myButton">
                Price
              </button>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default SelectZone;
