/**
 * Created by tong on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class SelectZone extends Component {
  constructor(props, selectValue) {//eslint-disable-line no-unused-vars
    super(props);
  }

  handleChange() {
    let {select} = this.props;
    let cityOfSelect = this.refs.citySelect.value;

    select(cityOfSelect);
  }

  render() {
    return (
      <div className="col-sm-12">
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
    );
  }
}

export default SelectZone;
