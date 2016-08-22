/**
 * Created by tong on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class SelectZone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form>
          <label className="col-sm-1">城市</label>
          <select className="col-sm-1">
            <option value=""></option>
            <option value="北京">北京</option>
            <option value="上海">上海</option>
            <option value="成都">成都</option>
          </select>
        </form>
      </div>
    )
  }
}

export default SelectZone;