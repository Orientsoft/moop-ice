import React, { Component } from 'react';
import './index.css';

export default class CourseCard extends Component {
  static displayName = 'CourseCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card p-b-10">
        <img className="card-img-top" src={require("./images/index2.jpg")} alt="Card image cap" />
        <div className="card-body text-left">
          <h5 className="card-title">神经网络与深度学习</h5>
          <p className="card-text">本专题介绍构建，训练和应用深度神经网络的方法。通过医疗保健，自动驾驶，音乐生成和自然语言处理等案例研究，学习者不仅可以掌握深度学习理论，还可以了解它如何应用于工业。</p>
          <p className="text-success fs14">学时安排： 3~5小时每周</p>
          <a href="#" className="btn btn-primary">专题详情 <span className="link-add">➪</span></a>
        </div>
      </div>
    );
  }
}
