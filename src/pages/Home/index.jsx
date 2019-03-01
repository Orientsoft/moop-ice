import React, { Component } from 'react';

// antd component
import { DatePicker, Input } from 'antd';

// mobx observer
import { observer } from 'mobx-react';

// mobx store
import appStore from '../../stores/AppStore';

// CourseCard
import CourseCard from '../../components/CourseCard';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import IntroBanner from './components/IntroBanner';
import AblityItems from './components/AblityItems';
import IntroTab from './components/IntroTab';
import CardItems from './components/CardItems';
import SlideBanner from './components/SlideBanner';

@observer
export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  onDateChange(date, dateString) {
    appStore.selectDate(date);
  }

  render() {
    return (
      <div style={styles.container}>
        <DatePicker onChange={this.onDateChange} />
        <Input placeholder="Date from Mobx" value={appStore.today} />
        <Input placeholder="Next day" value={appStore.tomorrow} />
        <div style={styles.cardContainer}><CourseCard /></div>
        <Header />
        <IntroBanner />
        <AblityItems />
        <IntroTab />
        <CardItems />
        <SlideBanner />
        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    minWidth: '1280px',
  },
  cardContainer: {
    width: '350px',
  },
};
