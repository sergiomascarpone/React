import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import * as S from './styled.js';


class App extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    }
  };

  validate = (event) => {
    const valueKey = event.target.id;
    const value = event.target.value;
    const errors = {};

    if (valueKey === 'password') {
      if (value.length < 5) {
        errors.password = 'password too short';
      } else {
        errors.password = ''
      }
    }

    if (valueKey === 'email') {
      if (value.includes('@')) {
        errors.email = '';
      } else {
        errors.email = 'wrong email';
      }
    }
    return errors;
  }

  handleInptChange = (e) => {
    const event = e;
    const update = {};
    update[event.target.id] = event.target.value;

    update.errors = this.validate(event);
    this.setState(update);
  }
  render() {
    const {
      email,
      password,
      errors,
    } = this.state;
    return (
      <S.Container>
        <div className='App'>
          <div className="Body">
            <S.Title>Login</S.Title>

            <div className='inptEmail'>

              <S.Label error={false}>
                Email
                </S.Label>

              <input
                className={errors.email ? 'errors' : ''}
                id='email'
                value={email}
                placeholder='Email'
                type='text'
                onChange={this.handleInptChange}
              />

              {errors.email && <span>{errors.email}</span>}

            </div>
            <div className='inptPassword'>

              <S.Label>Password</S.Label>

              <input
                className={errors.password ? 'errors' : ''}
                id='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleInptChange}
              />
              {errors.password && <span>{errors.password}</span>}

            </div>
            <div>
              <Link to='/dashboard'>
                <button onClick={() => this.props.history.push('/about')}>LogIn</button>
              </Link>
            </div>
          </div>
        </div >
        <Link to='/dashboard'></Link>
      </S.Container>
    )
  }
}


export default withRouter(App);