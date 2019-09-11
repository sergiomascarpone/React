import React, { Component } from 'react';
import './App.css';


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
      <div className='App'>
        <div className="Body">
          <h1>Login</h1>
          <div className='inptEmail'>
            <label for='email'>Email</label>

            <input
              className={errors.email ? 'errors' : ''}
              id='email'
              value={email}
              placeholder='Email'
              type='text'
              onChange={this.handleInptChange} />

            {errors.email && <span>{errors.email}</span>}

          </div>
          <div className='inptPassword'>
            <label for='password'>Password</label>
            <input
              className={errors.password ? 'errors' : ''}
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleInptChange} />
            {errors.password && <span>{errors.password}</span>}

          </div>
          <div>
            <button>LogIn</button>
          </div>
        </div>
      </div >
    )
  }
}


export default App;