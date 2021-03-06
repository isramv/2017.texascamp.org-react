import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';

class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Loading...',
      sessionSubmitted: false,
    };

    this.onLoad = this.onLoad.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onLoad() {
    this.setState({ message: '' });
  }

  onSuccess() {
    this.setState({
      sessionSubmitted: true,
      message: 'Thanks for your submission, we\'ll holler at ya soon!',
    });
  }

  render() {
    const classes = ['one-col', 'light-bg', 'fixed-bg'];

    return (
      <Page name="submit-session" background={background} classes={classes}>
        <Title level="h2" title="Submit A Session" />
        <Content classes={['content--body']}>
          <p>
            <a href="https://docs.google.com/spreadsheets/d/1qb1K8GaPbmaXYMn7mA_M0Cvy9-CqV1MYzf14gL-ZIEs/edit#gid=0">
              Submitted Sessions
            </a>
          </p>
          <p>
            Texas Camp is soliciting sessions geared toward beginner through advanced Drupal users.
            If you're passionate about the topic, we want to hear it! Subject matter can be Drupal,
            PHP in general, related technologies, soft skills, testing, tools, workflow, etc.
          </p>
          <p>
            We're looking for sessions that are 45 minutes long to allow 10 minutes for audience
            Q+A. You may promote a project or organization you are working on if it is relevant, but
            please no sales pitches. Speakers are expected to follow our&nbsp;
            <Link to="/code-of-conduct">code of conduct</Link>.
          </p>
          <p>
            Speakers will receive a free ticket to the event. We are not yet able to pay speakers
            for their time.
          </p>
          <p>
            Email <a href="mailto:hello@texascamp.org">hello@texascamp.org</a> or tweet
            &nbsp;<a href="https://twitter.com/drupaltexascamp">@drupaltexascamp</a> with questions.
          </p>
          <p>
            <strong>Session submissions are closed, thanks y'all!</strong>
          </p>
        </Content>
      </Page>
    );
  }

}

export default Sessions;
