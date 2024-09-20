import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  /* App-footer */
  AppFooter: {
    fontStyle: 'italic',
    borderTop: '4px solid #FF0000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '5vmin',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  // Lifecycle Methods
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  // Handle Log out
  handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn, logOut } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const htmlObj = getLatestNotification();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New course available' },
      { id: 3, type: 'urgent', html: htmlObj },
    ];

    return (
      <>
        <Notifications displayDrawer={false} listNotifications={listNotifications} />
        <div className="App">
          <Header />
          {isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Graduation date is January 28th!</p>
          </BodySection>
          <Footer className={css(styles.AppFooter)} />
        </div>
      </>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

// Remove the hot wrapper
export default App;
