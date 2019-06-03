import React, {Component} from 'react';
import './home.scss'
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Home extends Component {
    render() {
        let { timeStore: t, postStore: p } = this.props.stores;
        return (
            <div className="home-container">
                <table>
                    <thead>
                    <tr>
                        <th scope="cols">타이틀</th>
                        <th scope="cols">내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">항목명</th>
                        <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                        <th scope="row">항목명</th>
                        <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                        <th scope="row">항목명</th>
                        <td>내용이 들어갑니다.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;