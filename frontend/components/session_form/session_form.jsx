import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", this.state.email)
    formData.append("password", this.state.password)
    debugger
    const user = this.state;
    if (this.props.formType === 'login') {
      this.props.processForm({email: formData.email, password: formData.password})
    } else {
      this.props.processForm(formData)
    };
  }
  handleDemo(e) {
    e.preventDefault();
      const user = {email: 'demo', password: 'hunter12'};
      this.props.logIn(user)
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this)

    fileReader.readAsDataURL(file);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <section> New to Rickstarter?
          <Link to="/signup" className='hyperlink'> Sign up!</Link>
        </section>
      );
    } else {
      return (<section>Have an account?
        <Link to="/login" className='hyperlink'> Log in</Link>
        </section>
      );
    }
  }

  renderErrors() {
    return(
      <ul className='error-box'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className='error-message'>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === "signup") {
    return (
        <div className="login-form-container">
          <div className ='login-modal'>
          <section className='redirect-box-top redirect-box'>
            {this.navLink()}
          </section>
            <br/>
          <form onSubmit={this.handleSubmit} className="login-form-box">
          <label className='login-form-header'>
            Sign up
          </label>
            <br/>
            {this.renderErrors()}
              <br/>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  placeholder="Name"
                  className="login-input"
              />
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className="login-input"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className="login-input"
                />
              <br/>
              <div className='image-form'>
                <ul>
                  <li className='image-form-header'>
                    Upload a profile picture
                  </li>
                  <li>
                    <input type='file' onChange={this.updateFile} />
                  </li>
                </ul>
              </div>
              <br/>
              <input type="submit" value="Create account" className='submit-button'/>
        </form>
        <br/>
          <div className='or'>
              or
          </div>
        <br/>
        <form onSubmit={this.handleDemo}>
          <input type='submit' value='Demo Account' className='submit-button' />
        </form>
        </div>
      </div>
    );
  } else {
    return (
        <div className="login-form-container">
          <div className ='login-modal'>
            <br/>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <label className='login-form-header'>
              Log in
            </label>
          <br/>
          {this.renderErrors()}
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="login-input"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-input"
              />
            <br/>
            <input type="submit" value="Log me in!" className='submit-button'/>
        </form>
        <br/>
         <div className='or'>
           Or
         </div>
        <br/>
        <form onSubmit={this.handleDemo}>
          <input type='submit' value='Demo Account' className='submit-button' />
        </form>
        <section className='redirect-box-bottom redirect-box'>
          {this.navLink()}
        </section>
      </div>
      </div>
    );
  }
  }
}

export default withRouter(SessionForm);
